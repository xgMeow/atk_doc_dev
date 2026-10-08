const path = require('path')
const fs = require('fs')
const process = require('process')
const os = require("os")
const walk = require("walk");
const { Worker } = require("worker_threads");
const isUrl = require("is-url");
const css = require('css');
// HTML 重写逻辑与并行 worker 共用同一份实现
const { offlineHtmlFile } = require("./standalone-html.cjs");


const docsPath = process.argv[2]

if (!docsPath) {
  throw new Error('未指定要处理的目录路径')
}

let distPath = docsPath
//let distPath = path.resolve(docsPath, '.vuepress', 'dist')


const assetsPath = path.resolve(distPath, 'assets')
const stylesPath = path.resolve(assetsPath, 'css')
const scriptsPath = path.resolve(assetsPath, 'js')

// 返回内容是否真的发生了变化；没变就不回写，省掉一次全量写盘（大文件上是实打实的开销）
const processData = (filePath, process) => {
  const data = fs.readFileSync(filePath, 'utf8')
  const processesdData = process(data)

  if (processesdData === data) {
    return false
  }

  fs.writeFileSync(filePath, processesdData, { encoding: 'utf8' })
  return true
}


const offlinifyStyle = fileName => {
  const changed = processData(path.resolve(stylesPath, fileName), data => {
    // Links to assets
    return data.replace(/url\((\/assets\/[^)]*)\)/g, 'url(../..$1)')
  })

  if (changed) {
    console.log(`样式文件已离线化：${fileName}`)
  }
}

const offlinifyAppScript = fileName => {
  processData(path.resolve(scriptsPath, fileName), data => {
    // Used for scripts path
    data = data.replace(/(Object\.prototype\.hasOwnProperty.call\([^\)]+\)},)([a-z]\.p)="\/"(\W)/g, '$1$2=window.location.href.replace(/\\/[^\\/]*$$/, "/")$3')
    // Initial page path
    data = data.replace(/window\.location\.pathname/g, '(window.location.origin+window.location.pathname).replace(/^.*?(\\/[^\\/]*)$$/,"$$1")')
    // Relative href for links overrided by vue router
    data = data.replace(/([a-z]=[a-z]\.route,)([a-z])=([a-z]\.href)(\W)/g, '$1$2=($3.startsWith("/")?"."+(/^\\/(#.*)?$$/.test($3)?$3.replace(/^\\//,"/index.html"):$3):$3)$4')
    // Absolute path for vue router navigation
    data = data.replace(/(var )([a-z])(=window.history;)/g, '$1$2$3t=window.location.href.replace(/\\/[^\\/]*$$/,"")+(t.match(/^\\/(#.*)?$$/)?t.replace(/^\\/(.*)$$/,"/index.html$$1"):t);')

    return data
  })

  console.log(`脚本文件已离线化：${fileName}`)
}

const offlinifyBarsScript = fileName => {
  processData(path.resolve(scriptsPath, fileName), data => {
    // Search results links for pages
    data = data.replace(/(\.title\)&&)([a-z].push)\((s)\)(\W)/g, '$1$2(Object.assign({},$3,{path:"."+($3.path==="/"?"/index.html":$3.path)}))$4')
    // Search results links for chapters
    data = data.replace(/(\Wpath):([a-z]\.path)(\+"#"\+[a-z]\.slug)(,children:)/g, '$1:"."+($2==="/"?"/index.html":$2)$3$4')

    return data
  })

  console.log(`脚本文件已离线化：${fileName}`)
}

const offlinifySearchPro = fileName => {
  const changed = processData(path.resolve(scriptsPath, fileName), data => {
    // console.log("fileName", fileName)
    // console.log("data", data)
    let match = data.match(/"([^":]*?worker\.js)"/)
    if(match)
    {
      let workerjs = path.resolve(distPath, match[1])
      //console.log("workerjs", workerjs)
      let script = fs.readFileSync(workerjs, {encoding:"utf8"})
      let scriptContent = JSON.stringify(script)
      let replaceScript = `new Worker(URL.createObjectURL(new Blob([${scriptContent}], {type:'application/javascript'})),{})`
      // 只匹配「首个参数以字符串字面量开头、且带 options 对象 `,{}`」的 Worker 调用（即 search-pro 的 worker）。
      // 旧正则 /new Worker\(.*?\{\}\)/ 会误命中 Prism 等库中 `new Worker(_.filename)` 这类无 options 的调用，
      // 惰性匹配一直越过整段代码找到远处的 `{}`，把 7MB+ 的真实代码替换成 worker 源码，导致打包产物语法错误。
      data = data.replace(/new Worker\(\s*["'`][\s\S]*?,\s*\{\}\)/, replaceScript)
      fs.rmSync(workerjs)
    }
    return data
  })
  if (changed) {
    console.log(`搜索插件已离线化：${fileName}`)
  }
}

const styles = fs.readdirSync(stylesPath)
styles.forEach(style => offlinifyStyle(style))

const scripts = fs.readdirSync(scriptsPath)
scripts.forEach(script => {
  if (script.startsWith('app.')) {
    // offlinifyAppScript(script)
  }else if(script.endsWith("app.js")){
    // Hopefully that script keeps to be named this way no matter what
    // offlinifyBarsScript(script)
  }else if(script.endsWith(".txt")){

  }else{
    offlinifySearchPro(script)
  }
})






function offlineCssFile(fileName) {
  const content = fs.readFileSync(fileName, "utf-8");
  const cssAst = css.parse(content);
  cssAst.stylesheet.rules.forEach((rule, index) => {
      if (rule.type !== "import") {
          return;
      }
      const importParsed = /url\((.*?)\)/.exec(rule.import);
      if (importParsed === null) {
          return;
      }
      const urlContent = importParsed[1].replace(/["'()]/g, '');
      if (isUrl(urlContent)) {
          return;
      }
      if (!path.isAbsolute(urlContent)) {
          return;
      }
      const realAttributeValue = path.join(distPath, urlContent);
      const relativeValue = path.relative(path.dirname(fileName), realAttributeValue);
      rule.import = `url(${relativeValue})`;
      fs.writeFileSync(fileName, css.stringify(cssAst), "utf-8");
  });

}

// 并发处理 HTML：每个文件都是「读 -> cheerio 解析/改写 -> 写」的纯本地操作，互不依赖，
// 按文件切分给多个 worker 线程即可，产物与串行处理逐字节一致（各文件只被一个 worker 处理）。
// 串行时 1849 个页面约 130s，是这条脚本里最耗时的一段。
const processHtmlFiles = async files => {
  const result = { html: 0, rewritten: 0, failed: [] };

  if (files.length === 0) {
    return result;
  }

  const handleOne = file => {
    try {
      result.rewritten += offlineHtmlFile(file, distPath);
      result.html++;
    } catch (error) {
      // 单个文件异常不再中断整批处理
      result.failed.push(file);
      console.error(`离线化失败：${file}\n  ${error && error.stack ? error.stack : error}`);
    }
  };

  // 留 1 个核给主线程和系统；上限 8，避免 cheerio 解析大页面时内存峰值过高
  const concurrency = Math.min(8, Math.max(1, os.cpus().length - 1));

  if (concurrency === 1) {
    files.forEach(handleOne);
    return result;
  }

  const slices = Array.from({ length: concurrency }, () => []);
  files.forEach((file, index) => slices[index % concurrency].push(file));

  await Promise.all(
    slices
      .filter(slice => slice.length > 0)
      .map(
        slice =>
          new Promise((resolve, reject) => {
            const worker = new Worker(path.resolve(__dirname, "standalone-html-worker.cjs"), {
              workerData: { files: slice, distPath },
            });

            worker.on("message", message => {
              result.html += message.html;
              result.rewritten += message.rewritten;
              result.failed.push(...message.failed);
            });
            worker.on("error", reject);
            worker.on("exit", code => {
              if (code !== 0) {
                reject(new Error(`HTML 处理 worker 异常退出，退出码 ${code}`));
              } else {
                resolve();
              }
            });
          })
      )
  );

  return result;
};

const walker = walk.walk(distPath, {
  followLinks: false
});

const htmlFiles = [];

walker.on("file", (root, fileStats, next) => {
  if (path.extname(fileStats.name) === ".html") {
    htmlFiles.push(path.join(root, fileStats.name));
  }
  next();
});


walker.on("errors", (root, nodeStatsArray, next) => {
  next();
});

walker.on("end", async () => {
  const stats = await processHtmlFiles(htmlFiles);
  console.log(`全部完成：处理 ${stats.html} 个 html 文件，改写 ${stats.rewritten} 个属性，失败 ${stats.failed.length} 个`);
  // 有文件没被处理到（例如 worker 中途异常退出）也要以非 0 退出，避免打包产物半成品却没人发现
  const missed = htmlFiles.length - stats.html - stats.failed.length;
  if (missed > 0) {
    console.error(`有 ${missed} 个 html 文件未被处理，请检查 worker 是否异常退出`);
    process.exitCode = 1;
  }
  if (stats.failed.length > 0) {
    console.error(`以下文件离线化失败：\n${stats.failed.join("\n")}`);
    process.exitCode = 1;
  }
});