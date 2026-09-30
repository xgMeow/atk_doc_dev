// 单个 HTML 离线化 worker：处理分给自己的那批文件，把统计结果回传主线程。
// 每个文件只被一个 worker 处理，互不重叠，产物与串行执行完全一致。
const { parentPort, workerData } = require("worker_threads");
const { offlineHtmlFile } = require("./standalone-html.cjs");

const result = { html: 0, rewritten: 0, failed: [] };

for (const file of workerData.files) {
  try {
    result.rewritten += offlineHtmlFile(file, workerData.distPath);
    result.html++;
  } catch (error) {
    result.failed.push(file);
    console.error(`离线化失败：${file}\n  ${error && error.stack ? error.stack : error}`);
  }
}

parentPort.postMessage(result);
