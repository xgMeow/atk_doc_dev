# MixCode 多语言代码块（`<mix-code>`）编写指南

> **适用对象**：ATK 文档编写人员（在 `src/zh/`、`src/en/` 下的 `.md` 页面中编写多语言代码示例的人）。
>
> **作用**：一份源码，页面上自动展示 Python / C++ / Java / MATLAB 四种语言的 Tab。
>
> 本文描述的是运行期由 Vue 组件渲染的 `<mix-code>` 多语言代码块，是 ATK 文档“一段代码、多语言 Tab”示例的正式写法。

---

## 1. 它能做什么

ATK 文档里大量代码示例在不同目标语言中逻辑完全相同，只有“语法壳”不同（字符串引号、注释符、行尾分号）。与其为每种语言各维护一份、还得保持同步，不如**只写一份源码**，让组件在浏览器里生成 4 个语言 Tab：

- 每个 Tab 可切换、可单独复制；
- 代码按选中语言做语法高亮；
- **源码语言对应的 Tab 展示的永远是作者写的原文**，不会被转换器“洗”一遍；
- 跨语言只做“语法壳”转换：换引号、换注释符、补/删行尾分号；字符串内部内容与反斜杠**原样保留**。

> 翻译/改写逻辑是“尽力而为”，只适合把**同一段命令语句**在不同语言的引号与注释体系之间搬运，做不到把一段程序逐字翻译成另一种语言（这也正是第 2 节“何时别用”的原因）。

---

## 2. 什么时候用 / 什么时候不用

| 内容特征 | 用哪种写法 |
|---|---|
| ATK CONNECT 命令调用序列，逻辑相同、仅语言语法不同（典型：`atkConnect(...)` 一串） | **用 `<mix-code>`** |
| 完整程序 / 定义结构：出现 `class`/`interface`、`def 函数`、matlab `function … end`、`int main()`、`#include`、独立的 `{` 块体 / `}` 收尾等 | **不用 `<mix-code>`**：组件只会显示源码语言一个 Tab（不会生成其它语言的“假转换”），此时用普通单语言代码围栏即可 |
| 非四语言的片段（`js`、`text`、配置文件等） | **不用 `<mix-code>`**：转换只支持 Python/C++/Java/MATLAB，写普通围栏 |

判断很直观：**如果这段代码改成另一种语言后不能靠“换引号/注释/分号”变合法，就不要用 `<mix-code>`。**

---

## 3. 基本写法

`<mix-code>` 是一个自定义块级标签。写法如下：

````text
<mix-code lang="python">
# 创建任务场景
atkConnect(conID, 'New', '/ Scenario SimpleExample')
atkConnect(conID, 'SetState', '*/Satellite/Satellite1 HPOP "2026-03-06 00:00:00.000"')
</mix-code>
````

渲染出的效果等价于：

- 顶栏一组语言 Tab：**Python / C++ / Java / MATLAB**（源码语言 Python 默认选中，显示的就是你写的原文）；
- 切到 C++ 会看到：注释变 `//`、字符串变双引号、行尾自动补 `;`；
- 切到 MATLAB 会看到：注释变 `%`、字符串保持单引号、行尾补 `;`；
- 右上角「复制」按钮复制**当前选中 Tab** 的代码。

### 硬性规则

1. **起始标签、结束标签都必须各自独占一行，且顶格（行首不能有空格/缩进）**。缩进的 `<mix-code>` 不会被识别为代码块，会退化成普通 HTML 或渲染异常。
2. 两个标签之间的所有行都是代码，**支持空行**，代码内容原样保留。
3. 代码里的 `<` `>` `&` `#` `{{ }}` 等字符**不需要手工转义**，系统会自动处理（防止误当 HTML 标签/模板插值）。
4. `<mix-code>` 内部按“代码原文”处理，**不解析 markdown**，请勿在里面嵌套其它 markdown / HTML。
5. 请作为页面顶层的独立代码块使用，**不要嵌进有序/无序列表项**（缩进会破坏识别）。
6. 代码里**不要出现字面的 `</mix-code>`**（会提前闭合整个块）。

---

## 4. 属性参考

所有属性都可选。省略时组件有合理的默认行为（见第 5 节）。

| 属性 | 说明 | 默认 |
|---|---|---|
| `lang` | 源码语言 key：`python` / `cpp` / `java` / `matlab`。写对了就完全尊重、不做识别 | 自动识别 |
| `langs` | 逗号分隔，限制只展示其中几种，如 `langs="python,cpp"` | 四种全展示 |
| `line-numbers` | 布尔属性，**出现即显示行号**（不加数值） | 不显示 |
| `code` | base64 编码的源码，作为标签内源码的替代（主要用于工具自动拼接/生成场景） | 无（直接写标签内源码） |

写法示例：

````text
<mix-code lang="python" line-numbers>
atkConnect(conID, 'New', '/ Scenario SimpleExample')
atkOpenFile('C:/ATK/data/scen.atk')
</mix-code>
````

---

## 5. 源码语言：指定还是自动识别

`lang` 有四种处理结果，决定页面长什么样：

| 写法 / 内容 | 组件行为 |
|---|---|
| 不写 `lang`，代码是无明显特征的 **ATK 命令序列** | 识别不出且不像 C 系 → **按历史默认判为 Python**，出四语言 Tab |
| 不写 `lang`，代码命中某语言特征（`def`、`#include`、`System.out`、`function … end`、`%` 注释…） | 自动识别该语言 → 出四语言 Tab，源码 Tab = 原文 |
| 不写 `lang`，识别不出、但代码明显像 C 系（`{}`、`//`、行尾 `;`） | 不猜成 Python → **只显示一个「原文」块**（不做转换） |
| `lang` 写的是受支持语言（`python`/`cpp`/`java`/`matlab`） | 完全尊重该语言，不做识别 |
| `lang` 写的是不受支持语言（如 `js`、`text`） | 先尝试识别；识别出四种之一就用它；**识别不出 → 只显示「原文」块**，不硬给假转换 Tab |
| 内容是完整程序 / 定义结构（见第 2 节） | **不生成其它语言 Tab**：能确定源码语言时只显示该语言一个 Tab（内容即原文）；识别不出时退化为「原文」块 |

**给编写人员的落地建议**：ATK 命令类示例直接**写 Python 源码、`lang="python"`**（最干净、无需处理转义）；不确定识别效果时也建议显式写 `lang`，别依赖自动识别兜底。

---

## 6. 编写时要遵守的规则

1. **只维护一份源码**。不要手工再写 C++/Java/MATLAB 三份，也不要自己先转好再贴回来——源码 Tab 会把你“已经转好”的内容当原文再展示一次。
2. **按源语言的真实语法写**：字符串用源语言的引号（Python/MATLAB 建议单引号、C++/Java 双引号），注释用源语言注释符（Python `#`、C++/Java `//`、MATLAB `%`）。系统负责在目标语言里替换引号/注释符/分号，并对目标语言里需要转义的引号自动加 `\`。
3. **字符串里的转义、反斜杠原样保留**（Windows 路径、`\n` 等不用怕被吞）。
4. **别把代码写成“完整程序/定义结构”**（含类、函数、控制块体、`#include`、`function … end`）。这类代码改成其它语言必然非法，组件会退化成只显示源码一个 Tab，等于没发挥多语言价值。
5. **源码 Tab 恒等于作者原文**：不要为了“看起来正常”先去手工整理/转义源码，原样粘贴即可。
6. 中英文页面都要写：`src/zh/**` 与 `src/en/**` 的对应页面里放**同一段** `<mix-code>` 即可（组件是站点级注册的）。

---

## 7. 示例

### 示例一：Python 源码，四种语言全展示（最常用）

````text
<mix-code lang="python">
# 创建任务场景
atkConnect(conID, 'New', '/ Scenario SimpleExample')
# 设置仿真时间段并初始化
atkConnect(conID, 'SetAnalysisTimePeriod', '* "2024-03-18 00:00:00.000" "2024-03-19 00:00:00.000"')
atkConnect(conID, 'Animate', '* Reset')
</mix-code>
````

### 示例二：只展示 Python 与 C++，带行号

````text
<mix-code lang="python" langs="python,cpp" line-numbers>
atkOpenFile('C:/ATK/data/scen.atk')
atkConnect(conID, 'New', '/ Scenario SimpleExample')
</mix-code>
````

### 示例三：源码本来就是 C++（多行命令串）

````text
<mix-code lang="cpp">
// 创建任务场景
atkConnect(conID, "New", "/ Scenario SimpleExample");
atkConnect(conID, "Animate", "* Reset");
</mix-code>
````

### 反例：不要这样写

````text
<!-- 缩进标签 → 不会被识别为代码块 -->
  <mix-code lang="python">
  atkConnect(conID, 'New', '/ Scenario SimpleExample')
  </mix-code>

<!-- 完整程序 → 只会显示 Java 一个 Tab，别用 mix-code 包 -->
<mix-code lang="java">
public class Demo {
    public static void main(String[] args) {
        System.out.println("hello");
    }
}
</mix-code>
````

---

## 8. “语法壳”转换速查（排版预期参考）

| 差异项 | Python | C++ | Java | MATLAB |
|---|---|---|---|---|
| 字符串引号 | `'…'` | `"…"` | `"…"` | `'…'` |
| 注释符 | `#` | `//` | `//` | `%` |
| 行尾分号 | 不加（自动去掉） | 补 | 补 | 补 |
| 源码 == 目标语言 | —— 恒等于作者原文，不转换 —— | | | |

转换只做上面这些；字符串内容、数字、代码结构一律不动。

---

## 9. 实现位置索引

| 文件 | 作用 |
|---|---|
| `src/.vuepress/markdown/mix-code-block.js` | 块级解析插件：把 `<mix-code>…</mix-code>` 整体捕获为代码块（处理空行、自动 HTML 转义） |
| `src/.vuepress/components/MixCode/MixCode.vue` | 展示组件：Tab、语法高亮、行号、复制 |
| `src/.vuepress/components/MixCode/convert.js` | 跨语言“语法壳”转换规则（引号/注释/分号） |
| `src/.vuepress/components/MixCode/detect.js` | 源码语言自动识别 + “完整程序”判定 |
| `src/.vuepress/components/MixCode/prism-manual.js` | 关闭 Prism 全站自动高亮（组件自行高亮） |
| `src/.vuepress/config.ts` / `client.js` | 注册 markdown 插件与全局组件 |
