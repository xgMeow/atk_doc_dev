#!/usr/bin/env node
// 拉取 atk-component 的接口文档产物（Doxygen 输出），解包到站点产物的同级目录：
// <产物根>/atk-component-doc/html。
//
// 站点里「Component模式」等入口用的是 atk-component: 前缀（解析规则见
// src/.vuepress/shared/component-doc.js）。在线版与离线版的交付布局一致——组件文档放在
// 站点目录之外的 atk-component-doc/html，所以发布流水线要先做站点构建，再由本脚本把文档
// 解到 <产物根>/atk-component-doc/html。产物根既可以是离线打包的 .dist（与 .dist/online、
// .dist/standalone 同级），也可以是 GitHub Pages 的发布根 .dist/pages（与其中的 online/
// 同级），见 .github/workflows/deploy-docs.yml 与 .gitea/workflows/打包.yml。
//
// 下载按「有没有进展」判定超时，而不是卡死单次总时长：产物约 16 MB，慢链路（流水线到
// GitHub 的跨境链路尤其明显）下正常下载可能超过十分钟，只要还有字节进来就让它下完；
// 完全没有新数据时才放弃本次尝试并重试。中途断开时按 Range 从断点续传，已下载的字节不重来。
//
// 解包先落到 <目标>.staging，校验通过后再整体替换正式目录，避免上一次残留的 index.html
// 把本次坏掉的产物当成成功。
//
// 用法：
//   node scripts/fetch-component-doc.mjs            # 默认解到 .dist/atk-component-doc/html
//   node scripts/fetch-component-doc.mjs .dist      # 指定产物根目录
//
// 环境变量：
//   COMPONENT_DOC_URL        产物地址，默认取 atk-component 仓库的 docs-latest 滚动资产；
//                            流水线访问 GitHub 受限时，指向内网镜像的同一份 tar.gz 即可
//   COMPONENT_DOC_STALL_MS   连续多久没有新字节就放弃本次尝试，默认 180000（3 分钟）
//   COMPONENT_DOC_TOTAL_MS   单次下载的总时限，默认 1800000（30 分钟）

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

// atk-component 的 docs.yml 发布的滚动资产，每次运行覆盖同名资产，地址保持不变
const DEFAULT_URL =
  "https://github.com/xgMeow/atk-component/releases/download/docs-latest/atk-component-doc.tar.gz";

// 与 src/.vuepress/shared/component-doc.js 的 COMPONENT_DOC_DIR 保持一致，改布局时两处一起改
const COMPONENT_DOC_DIR = "atk-component-doc/html";

const DOWNLOAD_ATTEMPTS = 3;

// 建连（含等响应头）单独限时：这时还没有字节可以用来判断链路是否还在动
const CONNECT_TIMEOUT_MS = 60_000;

// 连续这么久收不到新字节就认为链路已死；慢链路只要还在传字节就不会触发
const STALL_TIMEOUT_MS = Number(process.env.COMPONENT_DOC_STALL_MS) || 180_000;

// 单次下载的总时限，防止链路以极小速率一直爬
const TOTAL_TIMEOUT_MS = Number(process.env.COMPONENT_DOC_TOTAL_MS) || 30 * 60_000;

const PROGRESS_INTERVAL_MS = 10_000;

const RETRY_DELAY_MS = 3000;

// tar 的条目清单会随文档规模增长，默认 1 MB 的 stdout 上限迟早不够用
const TAR_LIST_MAX_BUFFER = 32 * 1024 * 1024;

// GitHub Actions 与 Gitea Actions 都会把 ::error:: / ::warning:: 渲染成注解
const warn = (message) => console.warn(`::warning::${message}`);

const countFiles = (dir) => {
  let count = 0;
  let bytes = 0;
  const stack = [dir];
  while (stack.length > 0) {
    const current = stack.pop();
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(full);
      } else {
        count += 1;
        bytes += fs.statSync(full).size;
      }
    }
  }
  return { count, bytes };
};

const megabytes = (bytes) => (bytes / 1024 / 1024).toFixed(1);

// base 是续传前已落盘的字节数：速度只算本次真正传输的部分
const progressLine = (received, total, startedAt, base = 0) => {
  const seconds = Math.max((Date.now() - startedAt) / 1000, 1);
  const speed = (received - base) / 1024 / seconds;
  const size = total ? `${megabytes(received)}/${megabytes(total)} MB` : `${megabytes(received)} MB`;
  return `下载中 ${size}（${speed.toFixed(0)} KB/s）`;
};

// 断点续传：慢链路中途断开时接着已下载的字节写，不用从零重来。ETag 只记在本次进程里，
// 资源被滚动覆盖时（If-Range 不匹配）服务端会回 200 全量，这里按重下处理。
let resourceEtag = "";

const downloadOnce = async (url, target) => {
  let existing = 0;
  try {
    existing = fs.statSync(target).size;
  } catch {
    existing = 0; // 首次尝试还没有临时文件
  }

  const headers = {};
  if (existing > 0) {
    headers.Range = `bytes=${existing}-`;
    if (resourceEtag) headers["If-Range"] = resourceEtag;
  }

  const controller = new AbortController();
  const connectTimer = setTimeout(
    () => controller.abort(new Error(`连接 ${CONNECT_TIMEOUT_MS / 1000}s 无响应`)),
    CONNECT_TIMEOUT_MS,
  );

  let response;
  try {
    response = await fetch(url, { headers, redirect: "follow", signal: controller.signal });
  } finally {
    clearTimeout(connectTimer);
  }

  if (response.status === 416) {
    fs.rmSync(target, { force: true });
    throw new Error("服务端拒绝从已下载位置续传（资源可能已变小）");
  }
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} ${response.statusText}`);
  }

  const resumed = response.status === 206;
  if (resumed) {
    // 确认服务端确实从 existing 处接着给，否则数据会错位
    const range = response.headers.get("content-range") || "";
    const start = /^bytes (\d+)-/.exec(range);
    if (!start || Number(start[1]) !== existing) {
      fs.rmSync(target, { force: true });
      throw new Error(`服务端返回的续传区间不匹配：${range || "无 Content-Range"}`);
    }
  } else {
    existing = 0; // 200：服务端发了全量，从零重写
  }
  resourceEtag = response.headers.get("etag") || resourceEtag;

  const remaining = Number(response.headers.get("content-length")) || 0;
  const total = remaining ? existing + remaining : 0;
  const startedAt = Date.now();
  let received = existing;
  let lastProgress = startedAt;
  let lastLog = startedAt;

  // 每秒钟看一眼：没有新字节就中止，总时长超限也中止
  const watchdog = setInterval(() => {
    if (Date.now() - lastProgress >= STALL_TIMEOUT_MS) {
      controller.abort(new Error(`连续 ${Math.round(STALL_TIMEOUT_MS / 1000)}s 没有收到新数据`));
    } else if (Date.now() - startedAt >= TOTAL_TIMEOUT_MS) {
      controller.abort(new Error(`下载超过 ${Math.round(TOTAL_TIMEOUT_MS / 1000)}s，已收到 ${megabytes(received)} MB`));
    }
  }, 1000);

  console.log(
    `产物大小${total ? ` ${megabytes(total)} MB` : "未知"}${resumed ? `，从 ${megabytes(existing)} MB 处续传` : ""}，开始下载`,
  );
  const file = fs.openSync(target, resumed ? "a" : "w");
  try {
    for await (const chunk of response.body) {
      fs.writeSync(file, chunk);
      received += chunk.length;
      lastProgress = Date.now();
      if (Date.now() - lastLog >= PROGRESS_INTERVAL_MS) {
        lastLog = Date.now();
        console.log(progressLine(received, total, startedAt, existing));
      }
    }
  } finally {
    clearInterval(watchdog);
    fs.closeSync(file);
  }

  if (total && received !== total) {
    throw new Error(`下载不完整：收到 ${received} 字节，应为 ${total} 字节`);
  }
  console.log(`下载完成，体积 ${megabytes(received)} MB`);
};

const download = async (url, target) => {
  for (let attempt = 1; attempt <= DOWNLOAD_ATTEMPTS; attempt += 1) {
    try {
      await downloadOnce(url, target);
      return;
    } catch (error) {
      if (attempt === DOWNLOAD_ATTEMPTS) {
        throw new Error(`下载组件文档产物失败（${url}）：${error.message}`);
      }
      console.warn(`第 ${attempt} 次下载失败（${error.message}），${(attempt * RETRY_DELAY_MS) / 1000}s 后重试`);
      await new Promise((resolve) => setTimeout(resolve, attempt * RETRY_DELAY_MS));
    }
  }
};

const main = async () => {
  const distDir = path.resolve(process.argv[2] ?? ".dist");
  if (!fs.existsSync(distDir)) {
    throw new Error(`产物根目录不存在：${distDir}，请先完成站点构建再拉取组件文档`);
  }

  const url = process.env.COMPONENT_DOC_URL || DEFAULT_URL;
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "atk-component-doc-"));

  try {
    const tarball = path.join(tempDir, "atk-component-doc.tar.gz");
    console.log(`组件文档产物：${url}`);

    await download(url, tarball);

    // 资产由对方流水线滚动覆盖，解包前先确认包内没有绝对路径或穿越路径
    const entries = execFileSync("tar", ["-tzf", tarball], {
      encoding: "utf8",
      maxBuffer: TAR_LIST_MAX_BUFFER,
    })
      .split("\n")
      .filter(Boolean);
    const unsafe = entries.find(
      (entry) => entry.startsWith("/") || entry.split("/").includes(".."),
    );
    if (unsafe) {
      throw new Error(`压缩包内含有越界路径，已中止解包：${unsafe}`);
    }

    // 产物本身是平铺结构（index.html / search/ / *.png），直接解进暂存目录即可
    const docDir = path.join(distDir, COMPONENT_DOC_DIR);
    const stagingDir = `${docDir}.staging`;
    fs.rmSync(stagingDir, { recursive: true, force: true });
    fs.mkdirSync(stagingDir, { recursive: true });
    try {
      execFileSync("tar", ["-xzf", tarball, "-C", stagingDir], { stdio: "inherit" });

      const stagedIndex = path.join(stagingDir, "index.html");
      if (!fs.existsSync(stagedIndex) || fs.statSync(stagedIndex).size === 0) {
        throw new Error("解包后没有可用的 index.html，产物异常");
      }
    } catch (error) {
      fs.rmSync(stagingDir, { recursive: true, force: true });
      throw error;
    }

    // 校验通过后才整体替换：上一版残留的 index.html 不能把本次坏产物顶成成功
    fs.rmSync(docDir, { recursive: true, force: true });
    fs.renameSync(stagingDir, docDir);

    if (!fs.existsSync(path.join(docDir, "search"))) {
      warn("组件文档缺少 search 目录，文档站内搜索可能不可用");
    }

    const buildInfo = path.join(docDir, "build-info.txt");
    if (fs.existsSync(buildInfo)) {
      console.log(fs.readFileSync(buildInfo, "utf8").trim());
    } else {
      warn("组件文档缺少 build-info.txt，无法核对构建来源");
    }

    const { count, bytes } = countFiles(docDir);
    console.log(
      `组件文档已解到 ${path.relative(process.cwd(), docDir)}：${count} 个文件，${megabytes(bytes)} MB`,
    );
  } finally {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
};

// 用 throw + 顶层捕获退出，而不是 process.exit：Windows 上带着未关闭的 socket 直接退出
// 会触发 libuv 断言（uv async handle closing），把失败退出码弄乱
try {
  await main();
} catch (error) {
  console.error(`::error::${error && error.message ? error.message : error}`);
  process.exitCode = 1;
}
