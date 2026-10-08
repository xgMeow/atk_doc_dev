import { siteBase } from "./shared/config.js";
import { defineUserConfig } from "vuepress";
import {useHopeTheme} from "./theme.js";
import { standaloneBundler } from './bundler-standalone/index.js'
import path from "path"
import fs from "fs"
import crypto from "crypto"
import viteBundler from "@vuepress/bundler-vite";
import webpackBundler from "@vuepress/bundler-webpack";
import { include } from "@mdit/plugin-include";
import mixCodeBlock from "./markdown/mix-code-block.js";
import tableScrollWrap from "./markdown/table-scroll-wrap.js";
import entryCard from "./markdown/entry-card.js";

// babel-loader 磁盘缓存的键 =「源码 + babel 解析后的 options（含 targets 推出的插件表）+ cacheIdentifier」。
// 实测：改 babel.config.js 里的 targets 本来就不会命中旧缓存（解析后的 options 变了），这类改动不用担心。
// 会静默复用旧产物的只有两种情况：① babel.config.js require 的本地插件被改动；② babel 相关包升级但
// options 形状没变（例如仅预设内部实现变了）。这里把配置文件内容 + 关键依赖版本一并算进 cacheIdentifier，
// 覆盖 ② 的一部分（尤其是 @babel/preset-env 升级——离线包要保 FF52 兼容，这个预设最要紧）。
// 情形 ① 仍无法自动发现：改动本地 babel 插件后，请删掉 node_modules/.cache/babel-loader（约 17MB）再构建。
const babelCacheIdentifier = (() => {
  const root = path.resolve(__dirname, "../..");
  const readText = (file: string) => {
    try { return fs.readFileSync(file, "utf8"); } catch { return ""; }
  };
  const version = (name: string) =>
    (readText(path.resolve(root, "node_modules", name, "package.json")).match(/"version":\s*"([^"]+)"/) || [])[1] || "";
  return crypto
    .createHash("sha256")
    .update([
      readText(path.resolve(root, "babel.config.js")),
      version("babel-loader"),
      version("@babel/core"),
      version("@babel/preset-env"),
      process.env.NODE_ENV || "",
      process.env.BABEL_ENV || "",
    ].join("\n"))
    .digest("hex")
    .slice(0, 16);
})();

export const useConfig = ({type, plat=""}) => {
  let standalone = type == "standalone";
  return defineUserConfig({
    // 用来决定哪些文件会被当作页面处理的过滤规则
    pagePatterns: ["**/*.md", "!**/node_modules", "!**/.vuepress", "!**/CLAUDE.md"],
    // GitHub Pages 部署路径。仓库名是 atk_doc，所以网站在 /atk_doc/ 子目录下
    base: siteBase,
    // 站点默认语言（无 / 首页时，供主题推断根语言）
    lang: "zh-CN",
    // 多语言配置：/zh/ 为中文，/en/ 为英文
    locales: {
      "/zh/": {
        lang: "zh-CN",
        title: standalone ? "Aerospace Tool Kit(离线版)": "Aerospace Tool Kit",
        description: "加快工业软件国产化，服务航天强国建设",
      },
      "/en/": {
        lang: "en-US",
        title: standalone ? "Aerospace Tool Kit (Offline)": "Aerospace Tool Kit",
        description: "Accelerating the localization of industrial software, serving the goal of building a strong aerospace nation",
      },
    },
    // 配置网站图标
    head: [['link', { rel: 'icon', href: '/images/logo.png'}]],
    alias:{
      "@theme-hope/components/PageNav": path.resolve(__dirname,"./components/PageNav.js",),
      //"@theme-hope/components/transitions/index": path.resolve(__dirname,"./components/transitions/index",),
      "@theme-hope/modules/sidebar/components/Sidebar":  path.resolve(__dirname,"./modules/sidebar/components/Sidebar",),
      "@theme-hope/modules/sidebar/components/SidebarChild": path.resolve(__dirname,"./modules/sidebar/components/SidebarChild",),
      "@theme-hope/modules/sidebar/components/SidebarGroup": path.resolve(__dirname,"./modules/sidebar/components/SidebarGroup",),
      "@theme-hope/modules/sidebar/components/SidebarLinks": path.resolve(__dirname,"./modules/sidebar/components/SidebarLinks",),
      "@theme-hope/modules/sidebar/utils/index": path.resolve(__dirname,"./modules/sidebar/utils/index",),
      "@components": path.resolve(__dirname,"./components",),
    },
    markdown:{
      // toc: { includeLevel: [2, 3, 4, 5, 6] },
      headers: { level: [2, 6] },
      code:{
        lineNumbers: 5
      },
    },
    // 顶层 extendsMarkdown：VuePress 通过插件级 hook 注册（注意不能嵌套在 markdown 下，否则不会执行）
    extendsMarkdown: (md) => {
      // 整体捕获 <mix-code> 块，保留代码换行（详见 mix-code-block.js）
      md.use(mixCodeBlock);
      // 给 markdown 表格外包一层可横向滚动的容器（详见 table-scroll-wrap.js）
      md.use(tableScrollWrap);
      // 属性卡片容器 `::: entry name=… unit=… objects=…`（详见 entry-card.js）
      md.use(entryCard);
    },
    extendsPage: (page) => {
      let order = page.frontmatter.order;
      if(!order){
        let name;
        if(page.slug.toUpperCase() == "README"){
          name = path.basename(path.dirname(page.filePathRelative))
        }else{
          name = page.slug;
        }
        let res = name.match(/([0-9\.]*)/);
        if(res && res[1]){
          let chapter = res[1].replace(/\.$/, "");
          let list = chapter.split(".");
          order = parseInt( list[list.length-1] )|| undefined;
        }
      }
      // 在 routeMeta 中设置目录信息
      page.routeMeta = {
        ...page.routeMeta,
        // 目录标题
        title: page.title,
        order: order,
        description: page.frontmatter.description,
        thumbnail: page.frontmatter.thumbnail,
        icon: page.frontmatter.icon,
      }
    },
    shouldPrefetch: false,
    theme: useHopeTheme({type, plat}),

    bundler: standalone?
      standaloneBundler({
        configureWebpack(config, isServer){
          if(!isServer && standalone){
            if(!config.output){
              config.output = {};
            }
            config.output.asyncChunks = false;
            // config.optimization.splitChunks= {chunks:"all"};
          }
        },
        chainWebpack(config, isServer, isBuild) {
          if(!isServer)
          {
            config.module
            .rule('js')
            .test(/\.js$/)
            .use("babel-loader")
            .loader("babel-loader")
            .options({
              // 转译结果落盘缓存到 node_modules/.cache/babel-loader，二次构建直接复用
              cacheDirectory: true,
              cacheIdentifier: babelCacheIdentifier,
            })
            .end()
          }

        },
        // evergreen: true,
      }): 
      viteBundler()
    ,
    // 和 PWA 一起启用
    // shouldPrefetch: false,
  });
};

export default useConfig({type:"online"});