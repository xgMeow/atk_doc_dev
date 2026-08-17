import { sidebar } from "vuepress-theme-hope";

export const zhSidebarConfig = sidebar({
  "/zh/综合案例/": "structure",
  "/zh/二次开发教程/": "structure",
  "/zh/二次开发教程/2-二次开发CONNECT模式/": [
    {
      text: "CONNECT模式说明",
      link: "README.md",
    },
    {
      text: "ATK启动与端口配置",
      prefix: "0-ATK启动与端口配置/",
      children: "structure",
    },
    {
      text: "开发方式",
      prefix: "1-开发方式/",
      children: "structure",
      collapsible: false,
    },
    {
      text: "命令参考",
      prefix: "2-命令参考/",
      children: "structure",
      collapsible: false,
    },
  ],
  "/zh/二次开发教程/3-MBSE接口/": "structure",
  "/zh/二次开发教程/4-二次开发COMPONENT模式/": "structure",
  "/zh/06-AI助手/": [
    {
      text: "场景生成智能体",
      prefix: "场景生成智能体/",
      children: "structure",
      collapsible: false,
    },
    {
      text: "知识问答助手",
      prefix: "知识问答助手/",
      children: "structure",
      collapsible: false,
    },
  ],
  "/zh/": [
    // "",
    {
      text: "安装",
      prefix: "01-安装/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "案例教程",
      prefix: "02-案例教程/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "基础使用指南",
      prefix: "03-基础使用指南/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "理论基础",
      prefix: "04-理论基础/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "专业使用指南",
      prefix: "5.专业使用指南/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "变更与支持",
      prefix: "发布说明/",
      children: "structure",
      collapsible: true,
    },
  ],
});
