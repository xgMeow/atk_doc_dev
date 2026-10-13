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
      collapsible: false,
      children: [
        {
          text: "命令语法约定",
          link: "1-命令语法约定.md",
        },
        {
          text: "参数值格式",
          prefix: "2-参数值格式/",
          children: "structure",
          collapsible: false,
        },
        {
          // 对象命令库只列各类别的 README（命令速查表），
          // 具体命令从速查表里跳转，侧边栏不会展开成上百条。
          // VO / Graphics / 通用命令 是供对象页引用的公共命令池，不在此列出。
          text: "Connect对象命令库",
          // 分组标题可点击跳转（命令库首页速查表）。
          // 注意：link 相对的是父级前缀 2-命令参考/，不是本项的 prefix，
          // 所以这里要带上「3-Connect对象命令库/」而非直接写 README.md。
          link: "3-Connect对象命令库/README.md",
          prefix: "3-Connect对象命令库/",
          children: [
            { text: "场景", link: "场景/README.md" },
            { text: "车辆", link: "车辆/README.md" },
            { text: "传感器", link: "传感器/README.md" },
            { text: "船", link: "船/README.md" },
            { text: "导弹", link: "导弹/README.md" },
            { text: "地面站", link: "地面站/README.md" },
            { text: "飞机", link: "飞机/README.md" },
            { text: "覆盖定义", link: "覆盖定义/README.md" },
            { text: "高级接近分析", link: "高级接近分析/README.md" },
            { text: "工具", link: "工具/README.md" },
            { text: "恒星", link: "恒星/README.md" },
            { text: "火箭", link: "火箭/README.md" },
            { text: "链路接收器", link: "链路接收器/README.md" },
            { text: "天线", link: "天线/README.md" },
            { text: "卫星", link: "卫星/README.md" },
            { text: "卫星集群", link: "卫星集群/README.md" },
            { text: "信号发射器", link: "信号发射器/README.md" },
            { text: "行星", link: "行星/README.md" },
          ],
        },
        {
          text: "Connect机动规划命令库",
          prefix: "4-Connect机动规划命令库/",
          children: "structure",
          collapsible: false,
        },
        {
          text: "Connect偏差分析命令库",
          prefix: "5-Connect偏差分析命令库/",
          children: "structure",
          collapsible: false,
        },
      ],
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
