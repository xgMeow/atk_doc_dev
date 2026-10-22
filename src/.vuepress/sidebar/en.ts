import { sidebar } from "vuepress-theme-hope";

export const enSidebarConfig = sidebar({
  "/en/综合案例/": "structure",
  "/en/二次开发教程/": "structure",
  "/en/二次开发教程/2-二次开发CONNECT模式/": [
    {
      text: "CONNECT Mode",
      link: "README.md",
    },
    {
      text: "ATK Startup and Port Configuration",
      prefix: "0-ATK启动与端口配置/",
      children: "structure",
    },
    {
      text: "Development Approaches",
      prefix: "1-开发方式/",
      children: "structure",
      collapsible: false,
    },
    {
      text: "Command Reference",
      prefix: "2-命令参考/",
      // Mirrors the Chinese sidebar: syntax conventions and parameter value formats first,
      // then the three ways to look a command up (by name, by object, by function), and
      // finally the two module libraries, whose deep trees are kept last.
      children: [
        {
          text: "Command Syntax Conventions",
          link: "1-命令语法约定.md",
          collapsible: true,
        },
        {
          text: "Parameter Value Formats",
          prefix: "2-参数值格式/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Command Index",
          link: "3-命令总索引.md",
        },
        {
          text: "Commands by Object",
          // The group title links to the library README; the path is relative to the
          // parent prefix (2-命令参考/), so it carries the 4-Connect对象命令库/ segment.
          link: "4-Connect对象命令库/README.md",
          prefix: "4-Connect对象命令库/",
          collapsible: true,
          children: [
            { text: "Scenario", link: "场景.md" },
            { text: "GroundVehicle", link: "车辆.md" },
            { text: "Sensor", link: "传感器.md" },
            { text: "Ship", link: "船.md" },
            { text: "Missile", link: "导弹.md" },
            { text: "Facility", link: "地面站.md" },
            { text: "Aircraft", link: "飞机.md" },
            { text: "CoverageDefinition", link: "覆盖定义.md" },
            { text: "AdvCat", link: "高级接近分析.md" },
            { text: "Star", link: "恒星.md" },
            { text: "LaunchVehicle", link: "火箭.md" },
            { text: "Receiver", link: "链路接收器.md" },
            { text: "Antenna", link: "天线.md" },
            { text: "Satellite", link: "卫星.md" },
            { text: "SatelliteCollection", link: "卫星集群.md" },
            { text: "Transmitter", link: "信号发射器.md" },
            { text: "Planet", link: "行星.md" },
          ],
        },
        {
          text: "Commands by Function",
          link: "5-Connect功能索引/README.md",
          prefix: "5-Connect功能索引/",
          collapsible: true,
          children: [
            { text: "Coverage", link: "覆盖分析.md" },
            { text: "Access", link: "可见性分析.md" },
            { text: "Attitude and Pointing", link: "姿态与指向.md" },
            { text: "Collision Avoidance", link: "碰撞规避.md" },
            { text: "Vector Geometry", link: "矢量几何.md" },
            { text: "3D Graphics", link: "三维视图.md" },
            { text: "2D Graphics", link: "二维视图.md" },
          ],
        },
        {
          text: "Maneuver Planning Commands",
          prefix: "6-Connect机动规划命令库/",
          children: "structure",
          collapsible: true,
        },
        {
          text: "Deviation Analysis Commands",
          prefix: "7-Connect偏差分析命令库/",
          children: "structure",
          collapsible: true,
        },
      ],
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
      text: "Getting Started",
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
