// 离线版 HTML 重写逻辑：把产物里的「根绝对路径」改写成相对当前页面所在的相对路径。
// 单独抽成模块，是为了让主脚本（standalone.cjs）和并行 worker（standalone-html-worker.cjs）共用同一份实现，
// 避免两处逻辑漂移。函数体与重构前保持一致，仅把 distPath 从闭包变量改成显式参数。
const path = require("path");
const fs = require("fs");
const cheerio = require("cheerio");
const isAbsoluteUrl = require("is-absolute-url");

function url_relative(from, absurl)
{
  let relurl = path.relative(from, absurl)
  if(absurl.endsWith("\\") || absurl.endsWith("/")){
    relurl = path.join(relurl, "index.html");
  }
  relurl = relurl.replace(/\\/g, "/");
  // console.log(from, absurl, relurl)
  return relurl;
}


// 只有「根绝对路径」才需要改写成相对路径：以 / 开头、且不是协议相对地址(//host/x)。
// 其余一律跳过，包括：
//   - 没有 href 的 <a id="x"></a>、没有 src 的 <img>（取值是 undefined）
//   - #锚点、http(s)://、mailto:、data: 等外链
//   - 已经是相对路径的值（保证脚本重复执行时结果不变）
function isRootAbsolutePath(value) {
  if (typeof value !== "string") {
    return false;
  }
  return value.startsWith("/") && !value.startsWith("//");
}

function offlineHtmlFile(fileName, distPath) {
  // 本次改写的属性个数，用于处理结束后的汇总输出
  let rewritten = 0;
  const htmlContent = fs.readFileSync(fileName, "utf-8");
  const $ = cheerio.load(htmlContent);
  // CSS
  $("link").each((index, element) => {
      const attributeValue = $(element).attr("href");
      // <link rel="preconnect"> 之类没有 href 的标签直接跳过
      if (!isRootAbsolutePath(attributeValue)) {
          return;
      }
      const realAttributeValue = path.join(distPath, attributeValue);
      const relativeValue = url_relative(path.dirname(fileName), realAttributeValue);
      $(element).attr("href", relativeValue);
      rewritten++;
      //console.log(fileName, attributeValue, "->", relativeValue)
  });
  // JS
  $("script").each((index, element) => {
      const attributeValue = $(element).attr("src");
      if(!attributeValue){
          return;
      }
      const realAttributeValue = path.join(distPath, attributeValue);
      const relativeValue = url_relative(path.dirname(fileName), realAttributeValue)
      $(element).attr("src", relativeValue);
      //console.log(fileName, attributeValue, "->", relativeValue)

  });
  // a.href
  $("a").each((index, element) => {
      const attributeValue = $(element).attr("href");
      // 没有 href 的锚点(<a id="x"></a>)、#锚点、外链、已相对化的链接都跳过
      if (!isRootAbsolutePath(attributeValue)) {
          return;
      }
      let realAttributeValue = path.join(distPath, attributeValue);
      if (fs.existsSync(path.join(realAttributeValue, "index.html"))) {
          realAttributeValue = path.join(realAttributeValue, "index.html");
      }
      const relativeValue = url_relative(path.dirname(fileName), realAttributeValue);
      $(element).attr("href", relativeValue);
      rewritten++;
      //console.log(fileName, attributeValue, "->", relativeValue)

  });
  // img
  $("img").each((index, element) => {
      const attributeValue = $(element).attr("src");
      // 没有 src 的 <img> 直接跳过（isAbsoluteUrl 传入 undefined 会抛异常）
      if (typeof attributeValue !== "string" || attributeValue === "") {
          return;
      }
      if (isAbsoluteUrl(attributeValue)) {
          return;
      }
      if (attributeValue.startsWith("//")) {
          // replace like //example.com/1.png
          $(element).attr("src", `https:${attributeValue}`);
          rewritten++;
          //console.log(fileName, attributeValue, "->", `https:${attributeValue}`)
      } else if (isRootAbsolutePath(attributeValue)) {
          const realAttributeValue = path.join(distPath, attributeValue);
          const relativeValue = url_relative(path.dirname(fileName), realAttributeValue);
          $(element).attr("src", relativeValue);
          rewritten++;
          //console.log(fileName, attributeValue, "->", relativeValue)
      }
  });

  const transformedHtml = $.html();
  // 没有任何改写时（例如对已离线化的产物重复执行）不写盘：内容一致，产物不变，只是省掉 1849 次整页写盘
  if (transformedHtml !== htmlContent) {
    fs.writeFileSync(fileName, transformedHtml, "utf-8");
  }

  return rewritten;
}

module.exports = { url_relative, isRootAbsolutePath, offlineHtmlFile };
