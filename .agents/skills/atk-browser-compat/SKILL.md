---
name: atk-browser-compat
description: ATK 文档站的浏览器兼容性约束（目标内核 Chromium 86，麒麟 / 信创环境）。修改 src/.vuepress 下的样式或脚本前先读，含禁用特性清单、替代写法、自检命令与验证方法。
---

# ATK 文档站浏览器兼容性

文档站交付到麒麟 / 信创环境运行，浏览器内核老旧且不可控。本技能维护目标内核、禁用特性清单、替代写法和验证方法。**样式里只写一行注释，版本矩阵一律回到本文档。**

本文件位于 `.agents/skills/`，是跨工具通用的唯一正文。`.claude/skills/atk-browser-compat/SKILL.md` 只是入口指针，改动请改本文件。

## 目标内核

- 基线：**Chromium 86**。对应 Chrome 86 stable 同一里程碑，也是 360 安全浏览器信创版 V10.4 一代的内核。
- 低于 86 的内核不在支持范围内（尤其不要为 Chromium 70 一类极低版本做设计取舍）。
- 高于 86 的特性同样不得无条件依赖：写了就必须有兜底。

## 禁用特性与替代写法

| 特性 | 最低内核 | 替代写法 |
| --- | --- | --- |
| `inset` / `inset-inline-*` / `inset-block-*` | 87 | `top` / `right` / `bottom` / `left` 四向长写；逻辑属性另配一条同名物理属性 |
| `aspect-ratio` | 88 | 显式 `width` + `height`；内容自适应高度时用 `padding-top` 百分比占位 |
| `:is()` / `:where()` | 88 | 展开成逗号选择器列表 |
| `:has()` | 105 | 不得承载必需样式，改由 JS 切换 class |
| `color-mix()` | 111 | 前置一条纯色 / `rgba()` 兜底声明 |
| `dvh` / `svh` / `lvh` | 108 | `100vh`，或由 JS 写入 `--vh` 变量 |
| `@container` 容器查询 | 105 | 媒体查询 |
| `text-wrap` | 114 | 视为增强，不承载布局 |
| `scrollbar-gutter` | 94 | 需要留白时用 `padding` |
| `accent-color` | 93 | 接受默认控件配色，或用自定义控件 |
| `flex` 的 `gap` | 84 | 86 已支持，可正常使用 |

## CSS 写法规则

1. **布局偏移一律四向长写**，不用 `inset` 简写。`inset: a b` 等价于 `top: a; right: b; bottom: a; left: b`。
2. **逻辑属性必须配物理兜底**：`left: 0;` 与 `inset-inline-start: 0;` 两条并列。低版本内核丢弃不认识的声明，现代内核以后者为准，两条并存不会冲突。
3. **宽高比用显式宽高**。若确实需要 `aspect-ratio`，先写死 `width` / `height`，再在 `@supports (aspect-ratio: 1)` 内覆盖。
4. **`:has()` / `:is()` / `:where()` 只能锦上添花**。内核不认识时整条规则被丢弃，若该规则承载必需样式（如暗色模式换图），会直接丢功能。
5. **`color-mix()` 前面必须有纯色兜底**，两条声明相邻，靠层叠降级。
6. **`transition` 的属性列表里不要放低版本内核不认识的属性**。只要列表里有一个未知属性名，**整条 `transition` 声明失效**，连 `background` 的过渡一起丢失。需要时用 `@supports` 拆成两条声明。

## JS 写法规则

- **语法层**：`?.` / `??` 需要 Chrome 80，`??=` 需要 85。构建时 `babel-loader` 的匹配规则是 `test: /\.js$/`，**`.mjs` 不经过 babel**，所以 `src/.vuepress/**/*.mjs` 里写了可选链会原样进产物，低版本内核直接 `SyntaxError`，整站失去交互（页面退化成纯静态多页）。**`.mjs` 里一律不用 `?.` / `??` / `??=`**。
- **运行时**：`Object.fromEntries`、`String.matchAll` 需要 Chrome 73；`Array.prototype.at` 需要 92、`Object.hasOwn` 需要 93、`structuredClone` 需要 98。目标 86 下不要用后三个。

## 注释规范

兼容性兜底处的注释**只写一句“为什么不用原写法”**，不超过一行，不复述版本号矩阵，不写验证过程。版本矩阵、验证方法、已修点位统一维护在本文档。

```scss
// 低版本内核不认 inset-inline-start，物理属性兜底
left: 0;
inset-inline-start: 0;
```

## 自检

改完样式后扫一遍项目自有文件（不含 `node_modules`）：

```powershell
$files = Get-ChildItem src\.vuepress -Recurse -Include *.scss,*.css,*.vue,*.styl
Select-String -Path $files.FullName -Pattern '(?<![\w-])inset\s*:|inset-inline|inset-block|aspect-ratio|:is\(|:where\(|:has\(|color-mix\(|\bdvh\b|@container'
```

```bash
rg -n '(?<![\w-])inset\s*:|inset-inline|inset-block|aspect-ratio|:is\(|:where\(|:has\(|color-mix\(|\bdvh\b|@container' src/.vuepress
```

命中不等于要改，先分类：

- 已经配上物理属性 / 纯色兜底的声明 —— 保留。
- 注释里的文字 —— 忽略。
- 只有简写、没有兜底的 —— 必须改。
- `:has()` / `:is()` 承载必需样式 —— 必须改。

## 验证方法

1. **样式问题看 dev 即可**：`npm run dev` 与产物用的是同一份 SCSS，样式表现一致。**语法问题必须看产物**：dev 不做降级编译，`.mjs` 里的语法在任何内核上都不会被转译；判定“能不能跑”要 `npm run build:standalone-kylin` 后打开产物。
2. **取一个 Chromium 86 快照做像素级验证**：
   - 下载 `https://registry.npmmirror.com/-/binary/chromium-browser-snapshots/Win_x64/800071/chrome-win.zip`
   - 解压后确认是 `86.0.4240.0`（文件属性里的产品版本，或 UA 里的 `Chrome/86.0.4240.0`）。构建号与版本号对应关系容易记错，**不要凭构建号推断版本**。
   - 截图：`chrome.exe --headless --disable-gpu --hide-scrollbars --window-size=1440,900 --virtual-time-budget=15000 --user-data-dir=<临时目录> --screenshot=out.png http://localhost:8080/zh/`
   - headless 必须显式给 `--user-data-dir`，否则会和已打开的实例抢用户目录而失败。
3. **量尺寸而不是只看截图**：用 `--dump-dom` 加页面脚本打印 `CSS.supports(...)`、`getComputedStyle(el, '::after')`。元素“看不见”常常是 0×0，截图上分不清是没画出来还是尺寸为零。
4. **真机（麒麟）**：浏览器 UA 里看 `Chrome/86.0.x`，或地址栏进 `chrome://version`。产品版本号（如 10.4.1006.26）不是内核版本号。

## 已知结论

- 主题 `vuepress-theme-hope` 自身带 `inset`、`:has()` 等写法，**不能改 `node_modules`**，只能在项目样式里用同特异性选择器覆盖。低版本内核会丢弃不认识的声明，所以覆盖是安全的。
- 全局覆盖入口：`src/.vuepress/styles/index.scss`。
- 侧边栏模块在 `src/.vuepress/modules/sidebar/`，其中 `styles/sidebar.scss` 与 `styles/components/toggle-sidebar-wrapper.scss` 已做 `inset` 兜底，是同类问题的典型改法。
