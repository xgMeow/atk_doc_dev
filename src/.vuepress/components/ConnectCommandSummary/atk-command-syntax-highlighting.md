# ATK Connect 命令语法高亮实现文档

## 概述

为 ATK Connect 命令库的**命令语法字符串**设计了一套语法高亮方案，覆盖两个场景：

| 场景 | 实现方式 | 生效位置 |
|------|----------|----------|
| Markdown 代码块 | PrismJS 语言定义 | `` ```atk-command `` 围栏代码块 |
| 命令汇总表用法列 | 客户端 Tokenizer | ConnectCommandSummary 组件 |

两套实现产出**完全相同的 CSS class 结构**，共用一套样式文件，视觉效果一致。

---

## 语法规范

ATK 命令语法由以下 8 种 token 类型组成，覆盖了命令库中 226 条唯一命令语法的所有模式：

```
NewMulti <SystemName> <SensorType> [Nth] [{NoProp | {TimeInterval}}] ["ConstellationName"] ...
 ─────── ──────────── ────────────  ───  ──────────────────────── ──────────────────── ───
 command  required     required    opt   option (嵌套)             string              repeat
```

### Token 类型一览

| Token 类名 | 语法含义 | 写法 | 匹配正则 |
|-----------|---------|------|----------|
| `command` | 命令名（首词） | `NewMulti` | `/^\S+/` |
| `string` | 字符串字面量 | `"ConstellationName"` | `/" [^"]*"/y` |
| `required` | 必填参数 | `<SystemName>` | `/<[^<>]+>/y` |
| `optional` | 可选整体 | `[Nth]` | `/\[[^\]]+\]/y` |
| `option` | 枚举选项（支持一层嵌套） | `{NoProp \| {TimeInterval}}` | `/\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}/y` |
| `group` | 参数组合 | `(group)` | `/\([^)]+\)/y` |
| `separator` | 选项分隔符 | `\|` | `/\|/y` |
| `repeat` | 可重复标记 | `...` 或 `…` | `/\.{3}\|…/y` |

### 匹配优先级

正则按以下顺序匹配（从高到低），每个位置命中即停止：

1. **string** — 字符串内容可能包含 `<` `>` `{` `}` 等字符，必须最先匹配
2. **group** — 括号组合 `(...)`
3. **optional** — 方括号 `[...]`
4. **option** — 花括号 `{...}`，支持一层嵌套（如 `{NoProp | {TimeInterval}}`）
5. **required** — 尖括号 `<...>`
6. **repeat** — 三点省略（`...` 或 Unicode `…`）
7. **separator** — 竖线 `|`（优先级最低，作为默认匹配）

---

## 文件清单

### 新增文件

| 文件 | 作用 | 修改类型 |
|------|------|----------|
| `node_modules/prismjs/components/prism-atk-command.js` | PrismJS 语言定义 | 新增 |
| `.vuepress/components/ConnectCommandSummary/highlightCommand.mjs` | 客户端 Tokenizer | 新增 |
| `.vuepress/styles/atk-command-tokens.scss` | 共用的 CSS Token 样式 | 新增 |

### 修改文件

| 文件 | 修改内容 |
|------|----------|
| `node_modules/prismjs/components.js` | 注册 `atk-command` 语言到 `languages` 中 |
| `.vuepress/client.js` | 添加 `import './styles/atk-command-tokens.scss'` |
| `.vuepress/components/ConnectCommandSummary/ConnectCommandSummary.vue` | 引入 `highlightUsage` 函数，用法列用 `v-html` 渲染高亮 HTML |
| `patches/prismjs+1.29.0.patch` | 重新生成，包含 `node_modules` 变更 |

---

## 实现细节

### 1. PrismJS 语言定义

`node_modules/prismjs/components/prism-atk-command.js`

```js
Prism.languages['atk-command'] = {
  'command': {
    pattern: /^\S+/,
  },
  'string': /"[^"]*"/,
  'group': /\([^)]+\)/,
  'optional': /\[[^\]]+\]/,
  'option': /\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}/,
  'required': /<[^<>]+>/,
  'repeat': /\.{3}|…/,
  'separator': /\|/,
};
```

PrismJS 的 `Prism.highlight()` 按注册顺序依次匹配，内层不再递归拆 token。这决定了匹配顺序即优先级。

生效方式：在 markdown 中使用 ` ```atk-command ` 代码块，VuePress 的 PrismJS 插件自动加载该语言定义并高亮。

### 2. 客户端 Tokenizer

`.vuepress/components/ConnectCommandSummary/highlightCommand.mjs`

用于 ConnectCommandSummary 组件的"用法"列，将命令语法字符串逐 token 解析为带 CSS class 的 HTML：

```js
const TOKEN_RULES = [
  // 1. 字符串 — 内容中可能含 < > { } 等，必须最先匹配
  { type: 'string',    re: /"[^"]*"/y },
  // 2. 参数组合 (...)
  { type: 'group',     re: /\([^)]+\)/y },
  // 3. 可选整体 [...]（内部不再拆 token，语义优先）
  { type: 'optional',  re: /\[[^\]]+\]/y },
  // 4. 枚举选项 {...}（支持一层嵌套）
  { type: 'option',    re: /\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}/y },
  // 5. 必填参数 <...>
  { type: 'required',  re: /<[^<>]+>/y },
  // 6. 可重复标记（... 或 Unicode 省略号 …）
  { type: 'repeat',    re: /\.{3}|…/y },
  // 7. 选项分隔符
  { type: 'separator', re: /\|/y },
];
```

使用 `sticky` 标志（`y`）从 `lastIndex` 处精确匹配，按 TOKEN_RULES 顺序依次尝试。未命中任何规则时，普通字符直接输出（经 HTML 转义）。

### 3. 组件集成

`ConnectCommandSummary.vue` 中：

```typescript
import { highlightUsage } from './highlightCommand.mjs';
```

模板中用法列改为 `v-html`：

```html
<td v-html="highlightUsage(entry.usage)"></td>
```

两套实现输出相同结构：`<span class="token command">...</span>`，共用 CSS。

---

## 配色方案

所有颜色定义在 `.vuepress/styles/atk-command-tokens.scss`，按语义分三个色系：

### 暖色系 — 需要关注的内容

| Token | 颜色 | 色值 | 备注 |
|-------|------|------|------|
| `command` | 深琥珀 | `#78350f` | `font-weight: 600` 加粗 |
| `string` | 琥珀 | `#b45309` | |
| `required` | 橙红 | `#c2410c` | |

### 冷色系 — 语法结构标记

| Token | 颜色 | 色值 |
|-------|------|------|
| `optional` | 青 | `#0e7490` |
| `option` | 绿 | `#0f7b4e` |
| `group` | 靛蓝 | `#6366f1` |
| `repeat` | 紫罗兰 | `#7c3aed` |

### 中性色 — 分隔符

| Token | 颜色 | 色值 |
|-------|------|------|
| `separator` | 灰 | `#9ca3af` |

### 设计原则

- **暖色** = 你必须关注的（命令名、字符串字面量、必填参数）— 视觉更突出
- **冷色** = 语法结构（可选参数、枚举选项、组合、重复）— 用于区分不同的括号类型
- **中性** = 分隔符 `|` — 不抢眼，安静地分割选项

### 加载方式

在 `.vuepress/client.js` 中全局引入，确保两种场景都能加载到此样式：

```js
import './styles/atk-command-tokens.scss';
```

---

## 维护指南

### 如何修改配色

编辑 `.vuepress/styles/atk-command-tokens.scss`，修改对应 token 的 `color` 属性即可。代码块和组件自动同步。

### 如何添加新 token 类型

需要**三个文件同步修改**：

1. **PrismJS 定义** — `node_modules/prismjs/components/prism-atk-command.js`：添加新正则到语言对象
2. **客户端 Tokenizer** — `.vuepress/components/ConnectCommandSummary/highlightCommand.mjs`：按优先级插入 `TOKEN_RULES` 数组
3. **CSS 样式** — `.vuepress/styles/atk-command-tokens.scss`：添加 `.token.<新类型>` 样式规则
4. **重新生成 patch** — 运行 `npx patch-package prismjs`

### 注意

- `node_modules/` 下的修改通过 `patch-package` 持久化。`npm install` 后自动 apply
- 两套实现必须保持 token 类型名和正则完全一致，否则视觉效果不同步
- 客户端 tokenizer 的 `TOKEN_RULES` 顺序即优先级，新增规则时注意插入位置

---

## group：按声明聚合命令

命令库里的**归属写在命令页自己身上**，视图页只声明要看哪个分组。命令页 frontmatter：

```md
---
description: 设置约束。
groups: [对象通用命令, 卫星, 地面站]
---

# SetConstraint
```

视图页用 `group` 属性声明分组名，一行即可：

```md
<ConnectCommandSummary
  syntax-guide="/二次开发教程/2-二次开发CONNECT模式/2-命令参考/1-命令语法约定.md"
  group="覆盖分析"
/>
```

- `groups` 列表的含义就是**这条命令要出现在哪些视图页**，顺序无关，也没有「第一位特殊」的约定；调整归属只改这一行。
- 分组名是**逻辑名而非路径**，但必须与某个视图页声明的 `group` 值完全一致才生效。当前可用的分组名就是对象页（卫星、地面站……）与功能模块页（覆盖分析、可见性与接近分析、姿态与指向）的名字，另有四张共用命令集视图页（三维视图显示、二维视图显示、对象通用命令、对象工具）也各自定义了一个分组名。
- **一份定义、多处出现**：同一条命令被多少个视图页列出，只由它自己的 `groups` 决定。加一条命令改一个文件，不会漏、也不会因目录改名而失效。
- 视图页里**不再分节**：一页就是一张表，收录的命令统一按命令名 A–Z 排列。因此「卫星」页会把卫星专属命令与通用命令（如 `SetConstraint`）混在同一张表里 —— 这是有意为之，用户要找的是「卫星能用哪些命令」，而不是「这条命令是不是卫星专属」。
- 声明了却没有命令认领的分组名，以及声明了 `groups` 却没有一级标题的文件，都会 `console.warn`，不静默少一行。
- 视图页本身（内容含 `<ConnectCommandSummary` 的文档）会被自动排除在速查表之外，不会被当成命令收进来 —— 这条件取代了原先「跳过 README.md」的规则。
- 命令库布局：入口页（`README.md` + 各对象页）在 `3-Connect对象命令库/` 顶层，164 条命令平铺在 `3-Connect对象命令库/命令/` 下，文件名即命令名（重名时补对象限定，如 `Define 传感器.md`）。
- 视图页与命令页**不必同目录**：共用命令集视图页放在 `2-命令参考/` 顶层（`7-`~`10-`），功能模块视图页仍在 `6-Connect功能索引/` 下；视图页放哪儿只影响侧边栏，不影响它能收到哪些命令。
- 不声明 `group` 的页面（命令库首页、英文版对象页）回落到**按当前目录聚合**（`buildCommandGroups`）。
- 相关实现：`extractCommandInfo.mjs` 的 `buildGroupEntries` / `buildCommandGroups`、`shared.mjs` 的 `getFrontmatterList` / `parseGroupList` / `isViewPage`、组件内 `commandGroups` 的聚合与去重。

---

## 展示模式

组件的两种模式各自只有一种展示形态：

- **命令模式**（`mode="connect"`，默认）：只有 **A–Z 平铺**，索引栏是 A–Z 字母表，工具栏不显示切换按钮。一条命令就是一条，分类维度由页面本身承担（对象页按对象、功能索引页按功能），页内再分节只会把页面标题重复一遍。
- **脚本模式**（`mode="script"`，内置函数）：按目录分组，索引栏是分类；工具栏保留「分类 / A–Z」切换按钮。

组件不再接受 `default-mode` 属性。
