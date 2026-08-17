import { sidebar } from "vuepress-theme-hope";

export const enSidebarConfig = sidebar({
  "/en/综合案例/": "structure",
  "/en/二次开发教程/": "structure",
  "/en/二次开发教程/2-二次开发CONNECT模式/": [
    {
      text: "Connect Mode Guide",
      link: "README.md",
    },
    {
      text: "Startup & Port",
      prefix: "0-ATK启动与端口配置/",
      children: "structure",
    },
    {
      text: "Development",
      prefix: "1-开发方式/",
      children: "structure",
      collapsible: false,
    },
    {
      text: "Command Reference",
      prefix: "2-命令参考/",
      children: "structure",
      collapsible: false,
    },
  ],
  "/en/二次开发教程/3-MBSE接口/": "structure",
  "/en/二次开发教程/4-二次开发COMPONENT模式/": "structure",
  "/en/06-AI助手/": [
    {
      text: "Scenario Generation Agent",
      prefix: "场景生成智能体/",
      children: "structure",
      collapsible: false,
    },
    {
      text: "Q&A Assistant",
      prefix: "知识问答助手/",
      children: "structure",
      collapsible: false,
    },
  ],
  "/en/": [
    {
      text: "Installation",
      prefix: "01-安装/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Tutorials",
      prefix: "02-案例教程/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Basic Guide",
      prefix: "03-基础使用指南/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Theory",
      prefix: "04-理论基础/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Professional Guide",
      prefix: "5.专业使用指南/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Changes & Support",
      prefix: "发布说明/",
      children: "structure",
      collapsible: true,
    },
  ],
});
