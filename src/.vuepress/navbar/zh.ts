import { navbar } from "vuepress-theme-hope";

export const zhNavbarConfig = navbar([
  { text: "ATK下载", link: "https://gitlink.org.cn/zone/atk/about" },
  { text: "帮助文档", link: "/zh/" },
  {
    text: "二次开发教程",
    children: [
      {
        text: "二次开发说明",
        link: "/zh/二次开发教程/1-二次开发说明.md",
      },
      {
        text: "Connect模式",
        link: "/zh/二次开发教程/2-二次开发CONNECT模式/",
      },
      {
        text: "MBSE接口",
        link: "/zh/二次开发教程/3-MBSE接口/",
      },
      {
        // atk-component: 前缀表示这条链接指向组件文档，由 src/.vuepress/components/AutoLink.js
        // 按当前页面层级解析：组件文档与站点产物同级、在站点目录之外
        text: "Component模式",
        link: "atk-component:index.html",
      },
    ],
  },
  { text: "AI助手", link: "/zh/06-AI助手/" },
  { text: "综合案例", link: "/zh/综合案例/" },
]);
