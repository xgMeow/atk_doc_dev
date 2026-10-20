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
| `inset` / `inset-inline` / `inset-block` / `inset-inline-start` / `inset-block-end` 等整组 | 87 | `top` / `right` / `bottom` / `left` 四向长写，逻辑属性另配一条同名物理属性 |
| `margin-inline` / `margin-block` / `padding-inline` / `padding-block` / `border-inline` / `border-block` **简写** | 87 | 拆成左右、上下物理属性；`margin-inline-start` / `padding-inline-start` / `border-inline-start` 这类**长写** 86 已支持，可保留 |
| `justify-content` / `align-items` / `align-content` / `align-self` 取 `start` / `end` 关键字 | 新版（86 实测无效） | 一律写 `flex-start` / `flex-end`；`start` / `end` 在 86 上被解析但按 `flex-start` 生效，**内容不溢出时看不出问题，一溢出就错边** |
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
6. **`transition` 列表里可以出现低版本内核不认识的属性名**，实测 86 不会因此把整条声明作废（那条只是不动）。真正要留意的是**兜底属性有没有一起写进去**：布局若用 `left` 兜底，列表里也要有 `left`，否则低版本内核上位置是跳变，不是滑动。
7. **盒对齐一律用 `flex-start` / `flex-end`**，不用 `start` / `end`。前者所有版本都认，后者在低版本内核里静默退化成 `flex-start`，容器内容一溢出就挤错边。
8. **`margin-inline: auto` 同属简写**，会连带丢掉居中效果：容器一旦有 `max-width` 收窄，缺了它就直接贴左（无侧边栏页面的 TOC 就是这样整体左移的）。

## JS 写法规则

- **语法层**：`.mjs` 不走 `babel-loader`（规则是 `test: /\.js$/`），写了什么就原样进产物。基线 86 之内可用的 `?.` / `??`（80）与 `??=`（85）不必改写；**不得使用 87 及以上的语法**（顶层 `await` 89、类静态块 94）。
- **运行时**：`Object.fromEntries`、`String.matchAll` 需要 Chrome 73，可用。`Array.prototype.at` 需要 92、`Object.hasOwn` 需要 93、`structuredClone` 需要 98，目标 86 下一律不用：取末项写 `list[list.length - 1]`，判自有属性写 `Object.prototype.hasOwnProperty.call(obj, key)`。这类是运行时能力，转译补不上，`.mjs`、`.vue`、`.js` 一视同仁。

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
Select-String -Path $files.FullName -Pattern '(?<![\w-])inset\s*:|inset-(inline|block)|(margin|padding|border)-(inline|block)\s*:|(justify-content|align-items|align-content|align-self|justify-items)\s*:\s*(start|end)\b|aspect-ratio|:is\(|:where\(|:has\(|color-mix\(|\bdvh\b|@container'
```

```bash
rg -n '(?<![\w-])inset\s*:|inset-(inline|block)|(margin|padding|border)-(inline|block)\s*:|(justify-content|align-items|align-content|align-self|justify-items)\s*:\s*(start|end)\b|aspect-ratio|:is\(|:where\(|:has\(|color-mix\(|\bdvh\b|@container' src/.vuepress
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
4. **与新版内核逐元素对齐**：本机装了新版 Chrome，可用 `playwright-core`（在 `node_modules` 内）以 `executablePath` 分别指向 `cr86\chrome-win\chrome.exe` 与新版 `chrome.exe`，对同一页面同一视口打印 `getBoundingClientRect()` 和 `getComputedStyle()`，两行并排比 `x / width / padding`。**差异即为低版本丢声明的位置**，比肉眼比对截图可靠。
5. **真机（麒麟）**：浏览器 UA 里看 `Chrome/86.0.x`，或地址栏进 `chrome://version`。产品版本号（如 10.4.1006.26）不是内核版本号。

## 已知结论

- **逻辑属性的分界在“简写”上**：86 认识 `margin-inline-start` / `padding-inline-end` / `border-inline-start` 这类长写（69 起即有），但**不认识 `margin-inline` / `padding-inline` / `margin-block` / `padding-block` / `border-inline` 这类简写**（87 才有，与 `inset` 同批落地）。`inset-*` 整组（含 `inset-inline-start`）都是 87，一律要物理兜底。
- **`justify-content: start|end` 在 86 上“能解析但不生效”**，实测等同 `flex-start`：`CSS.supports('justify-content','end')` 返回 true，所以 `@supports` 也挡不住，只能靠量几何发现。主题 `.vp-navbar-end` 用了 `justify-content: end`，在 960–1100px 区间导航栏本身溢出时，搜索框会被挤到屏幕右外侧、被裁掉。
- `float: inline-start` 一类逻辑关键字同样不支持，用 `left` / `right` 值。
- 主题自带的 `margin-inline: auto` + `padding-inline: 2.5rem` 组合用在多个外层容器上（`.vp-toc-placeholder`、面包屑、页脚等），丢弃后容器会少 40px 内边距、宽度随之变化，**位置差异会比视觉感受大**，需按元素逐个补物理属性。
- **有侧边栏的页面看不出、无侧边栏的页面才暴露**：`.vp-toc-placeholder` 在有侧边栏时被容器的 `padding-inline-start` 顶到位，`margin-inline: auto` 丢了也不明显；无侧边栏页面靠它居中，丢了 TOC 会整体左移 160px（1440 宽下）。修兼容时**两类页面都要量**。
- **`Array.prototype.at` 会让整页白屏**：命令速查表（`ConnectCommandSummary`）抛 `...at is not a function`，组件渲染中断、页面空白；新版内核正常，问题只在目标内核上暴露。取末项一律写下标。
- 主题 `vuepress-theme-hope` 自身带 `inset`、`:has()` 等写法，**不能改 `node_modules`**，只能在项目样式里用同特异性选择器覆盖。低版本内核会丢弃不认识的声明，所以覆盖是安全的。
- 全局覆盖入口：`src/.vuepress/styles/index.scss`。
- 侧边栏模块在 `src/.vuepress/modules/sidebar/`，其中 `styles/sidebar.scss` 与 `styles/components/toggle-sidebar-wrapper.scss` 已做 `inset` 兜底，是同类问题的典型改法。
- `src/.vuepress/styles/components/toc.scss`、`styles/page-nav.scss`、`styles/components/breadcrumb.scss` 是与主题争同一批元素的覆盖文件，改这些元素时先看它们，别直接改主题。
