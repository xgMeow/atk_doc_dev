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
    },
    {
      text: "命令参考",
      prefix: "2-命令参考/",
      // 排列顺序：先语法与参数值格式，再是三种查法 —— 按命令名（跨库字母序总索引，
      // 对应 STK 的 Alphabetical Listing）、按对象、按功能（后两者对应 STK 的
      // Listings by Object 与 Listings by Module），然后列不属于任何一方的共用命令，
      // 最后才是机动规划 / 偏差分析两棵深树 —— STK 同样把 Astrogator、
      // Component Browser、Aviator 的深树排在所有清单之后。
      children: [
        {
          text: "命令语法约定",
          link: "1-命令语法约定.md",
          collapsible: true,
        },
        {
          text: "参数值格式",
          prefix: "2-参数值格式/",
          collapsible: true,
          children: "structure",
        },
        {
          // 第三条查法：按命令名。跨库字母序总索引，把对象命令库与两个模块命令库
          // 的命令收进一张表，对应 STK 的 Alphabetical Listing（list_alpha）。
          // STK 同样把它排在各对象/模块清单之前，故插在这里。
          text: "命令总索引",
          link: "11-命令总索引.md",
        },
        {
          // 正交查法之一：按对象（我要操作某类对象，有哪些命令）。
          // 对象命令库平铺：每个对象一个速查表页（<对象>.md），
          // 具体命令从速查表里跳转，侧边栏不会展开成上百条。
          text: "按对象查命令",
          // 分组标题可点击跳转（命令库首页速查表）。
          // 注意：link 相对的是父级前缀 2-命令参考/，不是本项的 prefix，
          // 所以这里要带上「3-Connect对象命令库/」而非直接写 README.md。
          link: "3-Connect对象命令库/README.md",
          prefix: "3-Connect对象命令库/",
          collapsible: true,
          children: [
            { text: "场景", link: "场景.md" },
            { text: "车辆", link: "车辆.md" },
            { text: "传感器", link: "传感器.md" },
            { text: "船", link: "船.md" },
            { text: "导弹", link: "导弹.md" },
            { text: "地面站", link: "地面站.md" },
            { text: "飞机", link: "飞机.md" },
            { text: "覆盖定义", link: "覆盖定义.md" },
            { text: "高级接近分析", link: "高级接近分析.md" },
            { text: "恒星", link: "恒星.md" },
            { text: "火箭", link: "火箭.md" },
            { text: "链路接收器", link: "链路接收器.md" },
            { text: "天线", link: "天线.md" },
            { text: "卫星", link: "卫星.md" },
            { text: "卫星集群", link: "卫星集群.md" },
            { text: "信号发射器", link: "信号发射器.md" },
            { text: "行星", link: "行星.md" },
          ],
        },
        {
          // 正交查法之二：按功能/模块（我要完成某项任务，该用哪条命令）。
          // 与「按对象查命令」互补，每条命令在自身 frontmatter 里声明所属分组，
          // 模块页只列分组名。
          text: "按功能查命令",
          link: "6-Connect功能索引/README.md",
          prefix: "6-Connect功能索引/",
          collapsible: true,
          children: [
            { text: "覆盖分析", link: "覆盖分析.md" },
            { text: "可见性分析", link: "可见性分析.md" },
            { text: "姿态与指向", link: "姿态与指向.md" },
          ],
        },
        // 共用命令集：既不专属某类对象、也不归属某个功能模块，
        // 故与上面两个清单平级（对应 STK 中 2D/3D Graphics、Object Tools、
        // Application Options 等直接挂在命令库下的扁平叶子）。
        { text: "三维视图显示", link: "7-三维视图显示.md" },
        { text: "二维视图显示", link: "8-二维视图显示.md" },
        { text: "对象通用命令", link: "9-对象通用命令.md" },
        { text: "对象工具", link: "10-对象工具.md" },
        {
          text: "机动规划命令库",
          prefix: "4-Connect机动规划命令库/",
          children: "structure",
          collapsible: true,
        },
        {
          text: "偏差分析命令库",
          prefix: "5-Connect偏差分析命令库/",
          children: "structure",
          collapsible: true,
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
    },
    {
      text: "知识问答助手",
      prefix: "知识问答助手/",
      children: "structure",
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
