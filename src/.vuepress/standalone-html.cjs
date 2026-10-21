// 离线版 HTML 重写逻辑：把产物里的「根绝对路径」改写成相对当前页面所在的相对路径。
// 单独抽成模块，是为了让主脚本（standalone.cjs）和并行 worker（standalone-html-worker.cjs）共用同一份实现，
// 避免两处逻辑漂移。函数体与重构前保持一致，仅把 distPath 从闭包变量改成显式参数。
const path = require("path");
const fs = require("fs");
const cheerio = require("cheerio");
const isAbsoluteUrl = require("is-absolute-url");

// 离线版整页重载后，侧边栏的展开状态与滚动位置要等客户端脚本挂载后才恢复。
// 这中间浏览器已经画出了服务端渲染的“未恢复”状态，看起来就是闪一下。
// 下面两段内联脚本因此在首帧之前就把状态补回去：
//   head 段：只要本地有侧边栏记录，先把侧边栏藏起来，保证首帧不出现错误状态；
//   body 段（放在应用脚本之前）：直接按记录展开分组、滚到保存的位置、把激活项滚进可视区，
//   然后解除隐藏。等 Vue 挂载后，组件里同样的恢复逻辑只是把状态再确认一遍，不会再动 DOM。
// 分组键与存储键要和 src/.vuepress/modules/sidebar/ 下的实现保持一致：
//   分组键 = data-atk-group（prefix|标题），滚动键 = data-atk-scroll-key（签名哈希）。
const SIDEBAR_BOOT_HEAD = `(function () {
  try {
    if (location.protocol !== "file:") return;
    var has = false;
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      if (key && key.indexOf("atk:sidebar-") === 0) { has = true; break; }
    }
    if (!has) return;
    var root = document.documentElement;
    root.className += " atk-sidebar-restoring";
    setTimeout(function () {
      root.classList.remove("atk-sidebar-restoring");
    }, 3000);
  } catch (error) {}
})();`;

const SIDEBAR_BOOT_BODY = `(function () {
  var root = document.documentElement;
  try {
    if (location.protocol !== "file:") return;
    var read = function (key) {
      try { return JSON.parse(localStorage.getItem(key) || "null"); } catch (error) { return null; }
    };
    var aside = document.getElementById("sidebar");
    if (!aside) return;
    var groups = read("atk:sidebar-open:v1");
    if (groups && groups.keys && groups.keys.length) {
      var open = {};
      for (var i = 0; i < groups.keys.length; i++) open[groups.keys[i]] = true;
      var sections = document.querySelectorAll("[data-atk-group]");
      for (var s = 0; s < sections.length; s++) {
        var section = sections[s];
        if (!open[section.getAttribute("data-atk-group")]) continue;
        for (var c = 0; c < section.children.length; c++) {
          if (section.children[c].tagName === "UL") {
            section.children[c].style.display = "block";
            break;
          }
        }
      }
    }
    var positions = read("atk:sidebar-scroll:v1");
    var scrollKey = aside.getAttribute("data-atk-scroll-key");
    if (positions && positions.positions && scrollKey && typeof positions.positions[scrollKey] === "number") {
      aside.scrollTop = positions.positions[scrollKey];
    }
    var active = aside.querySelector("a.vp-sidebar-page.active");
    if (active) {
      var box = aside.getBoundingClientRect();
      var item = active.getBoundingClientRect();
      if (item.top < box.top) active.scrollIntoView({ block: "start" });
      else if (item.bottom > box.bottom) active.scrollIntoView({ block: "end" });
    }
  } catch (error) {
    // 出错也要继续，不能把侧边栏一直藏着
  } finally {
    root.classList.remove("atk-sidebar-restoring");
  }
})();`;

// 注入上面两段脚本；用标记属性保证对同一产物重复执行不会重复插入
function injectSidebarBootScripts($) {
  if ($("script[data-atk-sidebar-boot]").length > 0) {
    return;
  }
  const head = $("head");
  if (head.length > 0) {
    head.append(
      $("<script>").attr("data-atk-sidebar-boot", "head").text(SIDEBAR_BOOT_HEAD),
    );
  }
  const bodyScript = $("<script>")
    .attr("data-atk-sidebar-boot", "restore")
    .text(SIDEBAR_BOOT_BODY);
  const assetScripts = $("script[src]").filter((_, element) =>
    /assets\/js\//.test($(element).attr("src") || ""),
  );
  if (assetScripts.length > 0) {
    assetScripts.first().before(bodyScript);
  } else {
    $("body").append(bodyScript);
  }
}

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

  // 侧边栏状态的首帧恢复脚本（见文件顶部的说明）
  injectSidebarBootScripts($);

  const transformedHtml = $.html();
  // 没有任何改写时（例如对已离线化的产物重复执行）不写盘：内容一致，产物不变，只是省掉 1849 次整页写盘
  if (transformedHtml !== htmlContent) {
    fs.writeFileSync(fileName, transformedHtml, "utf-8");
  }

  return rewritten;
}

module.exports = { url_relative, isRootAbsolutePath, offlineHtmlFile };
