# 离线构建性能优化与 babel 缓存失效

本文记录 `npm run build:standalone` 的三处提速改动，以及配套引入的
babel-loader 磁盘缓存会在什么情况下失效、什么情况下会**静默复用旧产物**。

`说明.md`（仓库根）里是同一轮改动的逐字节比对清单；本文只保留维护时
需要知道的部分。

**构建出问题时，直接跳到「本次改动清单与回退办法」**：那里列了本次动过
的每个文件，以及只回退某一处的命令。

## 结论：耗时对比

基线取自改动前同一天的构建日志，对照改动后的两次构建（本机 8 核）：

| 阶段 | 改动前 | 改动后·首次（冷缓存） | 改动后·第二次（热缓存） |
| --- | ---: | ---: | ---: |
| 准备数据 | 40.97s | 42.82s | 35.58s |
| 编译 client+server | 252.91s | 328.61s | 182.84s |
| 渲染 1778 页 | 139.85s | 106.73s | 81.38s |
| 离线二次编译 client | 101.06s | 已删除 | 已删除 |
| **VuePress 小计** | **548.43s** | **482.36s** | **303.98s** |
| 离线化后处理 | ≈132.1s | ≈77.7s | 66.5s |
| **总计** | **680.57s（11m20.6s）** | **560.09s（9m20.1s）** | **≈370.5s（6m10.5s）** |

- 第二次起省下约 **5 分 10 秒（-45.6%）**。
- **代价**：改动后第一次构建会比原来慢约 1 分钟（328.61s vs 252.91s），
  因为这次要往 `node_modules/.cache/babel-loader` 写缓存。只付一次。

## 改了什么（3 处）

### 1. 删除重复的 client 编译

`src/.vuepress/bundler-standalone/index.js` — 删掉「Compiling client
offline with webpack」那次重复编译（实测 **101s**）。

同一份 `clientConfig` 在上一步已经编译过；JS 文件名不带 hash，HTML 引用
又来自前一次的 `client-manifest`，所以这次编译的产物不会改变任何输出，
是纯重复劳动。原地留了中文注释说明它原本是为没启用的「离线版剥离页面
JS」实验服务的。

### 2. babel-loader 磁盘缓存

`src/.vuepress/config.ts` — 给 js 规则加 `cacheDirectory` +
`cacheIdentifier`，转译结果落盘到 `node_modules/.cache/babel-loader`，
二次构建直接复用。失效条件见下一节。

### 3. HTML 后处理多线程化

`src/.vuepress/standalone.cjs` + 新增 `src/.vuepress/standalone-html.cjs`、
`standalone-html-worker.cjs` — 把 HTML 重写逻辑抽成共用模块，用
`worker_threads`（`min(8, CPU-1)`）分片并行处理 1849 个 HTML；无改动的
文件不写盘（`$.html() === 原文` 就跳过）。

1849 个 HTML 的后处理从 132.1s 降到 66.5s；在更大的站点上并行度更充分
（400 页/56.8MB 压测：87.3s → 23.3s）。

## 本次改动清单与回退办法

改动只落在下面 5 个文件，**三处改动互不影响，出问题时可以只回退其中一处**。
下面的回退命令写的是 `git checkout -- <file>`（适用于改动还在工作区、尚未
提交时）；如果这次改动已经提交，改用 `git checkout <改动前的提交> -- <file>`。

| 文件 | 状态 | 改动 |
| --- | --- | --- |
| `src/.vuepress/bundler-standalone/index.js` | 修改 | 删掉重复的离线 client 编译（约 101s） |
| `src/.vuepress/config.ts` | 修改 | 给 babel-loader 加磁盘缓存 |
| `src/.vuepress/standalone.cjs` | 修改 | HTML 后处理改成多线程调度 |
| `src/.vuepress/standalone-html.cjs` | 新增 | HTML 重写逻辑（从 standalone.cjs 抽出） |
| `src/.vuepress/standalone-html-worker.cjs` | 新增 | worker 分片入口（18 行） |

### 只回退某一处

```bash
# ① 恢复「重复的离线 client 编译」：构建会变回慢约 100s，产物不变
git checkout -- src/.vuepress/bundler-standalone/index.js

# ② 恢复 babel 转译缓存：文件回退后必须同时删掉缓存目录，
#    否则下次构建仍会复用缓存里的旧产物
git checkout -- src/.vuepress/config.ts
rm -rf node_modules/.cache/babel-loader

# ③ 恢复 HTML 后处理为单线程：后处理变回约 132s
git checkout -- src/.vuepress/standalone.cjs
rm -f src/.vuepress/standalone-html.cjs src/.vuepress/standalone-html-worker.cjs
```

### 先判断是不是「缓存问题」再动代码

出现「文档改了但产物没变」「产物像是上一版」时，**先清缓存重建，
不要先怀疑代码改动**：

```bash
rm -rf node_modules/.cache/babel-loader   # babel 转译缓存，约 17MB
rm -rf src/.vuepress/.cache               # webpack 持久缓存，约 2.6GB
npm run build:standalone
```

清完仍旧不对，才去查第 ② 项（babel 相关改动）；如果问题只出在离线后
处理（HTML 里相对路径错乱、`assets/img` 路径不对），看第 ③ 项。

## babel-loader 磁盘缓存：什么时候会失效（重点）

### 缓存键是怎么算出来的

`node_modules/babel-loader/lib/index.js` 把三样东西交给缓存模块去算键
（`cache.js` 的 `filename()`：`hash.update(serialize([options, source, identifier]))`）：

1. **源文件内容**（`source`）；
2. **babel 解析后的完整 options**（`options`，来自 `babel.loadPartialConfigAsync`，
   含 `@babel/preset-env` 按 targets 展开出的插件列表）；
3. **`cacheIdentifier`**，默认是 `"core<@babel/core 版本>,loader<babel-loader 版本>"`。

三者任一变化 → 缓存未命中 → 重新转译。缓存条目是 gzip 后的 JSON
（转译结果存在 `result.code` 里），所以文件名是 `<hash>.json.gz`。

### 实测失效矩阵

在临时目录里最小复现、每个场景一个独立进程跑出来的结果：

| 改动 | 是否失效 | 说明 |
| --- | --- | --- |
| 编辑源码文件 | ✅ 会 | 源码内容本身就是缓存键 |
| 改 `babel.config.js` 里的 `targets` | ✅ 会 | 缓存键第 2 项变了：展开出的插件表不一样 |
| 改 `babel.config.js` 里 `require()` 的本地插件 | ❌ **不会** | options 形状没变，**静默命中旧产物** |
| 升级 babel-loader / `@babel/core` / `@babel/preset-env` | ✅ 会（本项目已额外兜底） | 见下节 |
| 改 `NODE_ENV` / `BABEL_ENV` | ✅ 会（本项目已额外兜底） | 见下节 |

> 这里要更正一个流传过的说法：「改 `babel.config.js` 的内容默认不会让缓存
> 失效」。**不对。** 改 targets 这类会改变解析后 options 的修改，用默认
> `cacheIdentifier` 也会照常失效。真正会静默陈旧的只有上表里「改 `require()`
> 的本地插件」那一种——插件被改了，但 options 的形状没变。

### 为什么还要自己算 cacheIdentifier

默认 `cacheIdentifier` 只含两个版本号，覆盖不到「包升级了、但 options
形状恰好没变」和「环境变量变了」这两类。本项目在 `config.ts` 里算了
一个 sha256 覆盖：

```ts
// src/.vuepress/config.ts（节选）
const babelCacheIdentifier = sha256([
  babel.config.js 的全文,
  babel-loader 版本,
  @babel/core 版本,
  @babel/preset-env 版本,   // 离线包要保 FF52，这个预设最要紧
  process.env.NODE_ENV,
  process.env.BABEL_ENV,
]).slice(0, 16);
```

所以 `babel.config.js` 一改，整份缓存的键就变了。**上表里「改 `require()` 的
本地插件」那一种仍覆盖不到**，需要人工清理。

### 遇到「改了没生效」怎么办

按代价从小到大：

```bash
# 1) babel 转译缓存（小，约 17MB / 3846 条）
rm -rf node_modules/.cache/babel-loader

# 2) webpack 持久缓存（大，本仓库目前约 2.6GB）
rm -rf src/.vuepress/.cache
```

改动本地 babel 插件、或把 babel 相关包换成非 registry 来源之后，先执行
第 1 条再构建。

## webpack 持久缓存

`src/.vuepress/.cache` 是 webpack 5 的持久缓存，比 babel 那层大得多
（2.6GB）。它已通过 `src/.vuepress/.gitignore`（内含 `.cache`、`.temp`、
`dist`、`dist-offline`）排除，不会被提交。怀疑产物异常时优先删这个目录
重建一次。

## 验证结果与边界

- 用改动前的 **1855 个文件 md5 基线**逐字节比对：
  - 视 `370.js` 为 `885.js` 的改名后，**1819 个一致**；
  - 2 个「缺失」就是这对改名的 chunk；
  - 其余 **34 个差异** = `app.js`、`runtime~app.js`、`404.html` + 31 个
    含随机 `path-copy-XXXXXXXX` id 的页面；这 32 个 HTML 掩掉随机 id/
    随机数后与已发布的 zip 逐字节一致；
  - **CSS 完全一致**。
- `app.js` 的差异来自 chunk 编号漂移 + 路由表顺序，改动前后都不可复现，
  属既有现象（不是本次改动引入）。
- 曾经怀疑「新 `app.js` 少了 3 个模块」，已查明是**计数假象**：Terser 会
  把 `6000` 这类编号写成 `6e3`，正则漏了科学计数法。两种写法都算上，
  新旧两边都是 **4051 个模块条目**。
- 3 个 svg 的哈希文件名变了，但**不是本次改动造成的**（源码整棵树当天
  被刷新过，改动前的基线构建产出的也是新哈希名）。
- **边界**：`assets/img` 下 1399 个图片不在 md5 基线内，只做了文件名
  对比；整体没有在真实浏览器里跑过，**建议在麒麟目标机上验收一次再入库**。

## 顺带发现的既有问题（未修改）

1. `standalone-html.cjs` 里 `<script src>` 那段没有 `isRootAbsolutePath`
   判断，也不计改写数：对已经离线化的产物再跑一次，相对路径会被反复
   改写（`../../../assets/js/app.js` 越接越长）。`link`/`a`/`img` 都有
   这个判断所以是幂等的，只有 `script` 漏了。为了保字节一致没动，
   **建议后续单独补一行同样的判断**。
2. 由此，离线化脚本对同一产物重复执行不是幂等的；修好第 1 点即可解决。

## 后续可做（未实施，需先评估风险）

- **B 档**：babel 换成 esbuild（`evergreen: false`）。编译还能再快一大截，
  但 FF52 兼容要靠 esbuild 的 target 兜底，**必须在麒麟上回归**。
- **C 档**：去掉 `output.asyncChunks: false` + `publicPath: 'auto'`，
  `app.js` 从 40MB 降到约 3MB。收益最大但是破坏性改动（首屏按需加载、
  离线路径都要重新验证），**风险最高**。

本次只做了 A 档，**targets、babel 规则、evergreen 全都没动**。
