import { navbar } from "vuepress-theme-hope";

export const enNavbarConfig = navbar([
  { text: "Download ATK", link: "https://www.osredm.com/atknudt/atk/about" },
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
        text: "Component Mode",
        link: "/en/二次开发教程/4-二次开发COMPONENT模式/",
      },
    ],
  },
  { text: "AI Assistant", link: "/en/06-AI助手/" },
  { text: "Cases", link: "/en/综合案例/" },
]);
