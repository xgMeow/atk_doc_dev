import { navbar } from "vuepress-theme-hope";

export const enNavbarConfig = navbar([
  { text: "Download ATK", link: "https://gitlink.org.cn/zone/atk/about" },
  { text: "Docs", link: "/en/" },
  {
    text: "Development Tutorials",
    children: [
      {
        text: "Development Guide",
        link: "/en/二次开发教程/1-二次开发说明.md",
      },
      {
        text: "Connect Mode",
        link: "/en/二次开发教程/2-二次开发CONNECT模式/",
      },
      {
        text: "MBSE Interface",
        link: "/en/二次开发教程/3-MBSE接口/",
      },
      {
        // atk-component: 前缀表示这条链接指向组件文档，由 src/.vuepress/components/AutoLink.js
        // 按当前页面层级解析：组件文档与站点产物同级、在站点目录之外
        text: "Component Mode",
        link: "atk-component:index.html",
      },
    ],
  },
  { text: "AI Assistant", link: "/en/06-AI助手/" },
  { text: "Cases", link: "/en/综合案例/" },
]);
