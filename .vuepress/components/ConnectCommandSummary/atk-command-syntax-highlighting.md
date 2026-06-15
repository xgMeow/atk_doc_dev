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
