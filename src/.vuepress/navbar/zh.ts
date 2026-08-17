import { navbar } from "vuepress-theme-hope";

export const zhNavbarConfig = navbar([
  { text: "ATK下载", link: "https://www.osredm.com/atknudt/atk/about" },
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
        text: "Component模式",
        link: "/zh/二次开发教程/4-二次开发COMPONENT模式/",
      },
    ],
  },
  { text: "AI助手", link: "/zh/06-AI助手/" },
  { text: "综合案例", link: "/zh/综合案例/" },
]);
