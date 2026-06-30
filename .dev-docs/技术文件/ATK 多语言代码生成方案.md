# ATK 多语言代码生成方案

## 问题背景

ATK 文档中存在大量代码示例（接口说明、二次开发案例），这些示例在不同的目标语言（Python、C++、Java、MATLAB）中逻辑完全相同，仅在**语法细节**上有差异：

| 差异项 | Python | C++ | Java | MATLAB |
|--------|--------|-----|------|--------|
| 字符串引号 | `'text'` | `"text"` | `"text"` | `'text'` |
| 注释符 | `#` | `//` | `//` | `%` |
| 语句分号 | 无 | `;` | `;` | `;` |
| 内部 `"` 转义 | 无需 | `\"` | `\"` | 无需 |
| 内部 `'` 转义 | `\'` | 无需 | 无需 | `''`（双写） |

如果为每种语言各维护一份代码，4 种语言 × N 个案例 = 维护成本翻 4 倍，且容易出现不同步。

## 解决方案

**单一模板 + 标记语法 → 自动展开为多语言版本。**

作者只写一份带标记的代码，系统根据目标语言自动替换引号、注释、分号。

---

## 架构总览

```
                         atkCommand.mixcode.md（接口说明模板）
                                 │
                          npm run gen-lang
                                 │
                 ┌───────────────┼───────────────┐
                 ▼               ▼               ▼
         atkCommand-cpp.md  atkCommand-python.md  ...（生成文件，提交 git）
                 │               │
            @include         @include
            到各语言页面      到各语言页面


    案例文件中的 ```mixcode 代码块（源码格式，提交 git）
                   │
          npm run dev:mixcode
       （expand-mixcode-blocks.js）
                   │
            ::: code-tabs 展开文件（临时）
                   │
            vuepress dev/build
      （vuepress-plugin-md-enhance
        的 CodeTabs 容器插件处理）
                   │
            多语言 Tab 页面
                   │
            Ctrl+C → 自动还原为 ```mixcode 格式
```

**两条路径**：
- **接口说明**（场景一）：模板 → 预生成单语言文件 → `@include` 到各语言页面，不需要 Tab
- **案例教程**（场景二）：源码写 ` ```mixcode ` → 构建时展开为 `::: code-tabs` → 浏览器四语言 Tab

---

## 标记语法

### 模板标记

| 标记 | 含义 | Python 输出 | MATLAB 输出 | C++/Java 输出 |
|------|------|------------|-------------|---------------|
| `{S:内容}` | 字符串字面量 | `'内容'` | `'内容'` | `"内容"` |
| `{C:文本}` | 独立行注释 | `# 文本` | `% 文本` | `// 文本` |

`{S:...}` 内部会按语言规则自动转义：
- Python：内部单引号转义为 `\'`
- MATLAB：内部单引号双写为 `''`
- C++/Java：内部双引号转义为 `\"`，反斜杠转义为 `\\`（先 `\` 后 `"`，避免 `\"` 塌缩）

### 编写示例

**模板（作者维护的唯一源文件）**：

````markdown
```mixcode
{C:创建任务场景}
atkConnect(conID, {S:New}, {S:/ Scenario SimpleExample})
atkConnect(conID, {S:SetState}, {S:*/Satellite/Satellite1 HPOP "2026-03-06 00:00:00.000"})
```
````

**浏览器中看到的效果（自动展开）**：

````markdown
::: code-tabs
@tab Python
```python
# 创建任务场景
atkConnect(conID, 'New', '/ Scenario SimpleExample')
atkConnect(conID, 'SetState', '*/Satellite/Satellite1 HPOP "2026-03-06 00:00:00.000"')
```

@tab C++
```cpp
// 创建任务场景
atkConnect(conID, "New", "/ Scenario SimpleExample");
atkConnect(conID, "SetState", "*/Satellite/Satellite1 HPOP \"2026-03-06 00:00:00.000\"");
```

@tab Java
```java
// 创建任务场景
atkConnect(conID, "New", "/ Scenario SimpleExample");
...

@tab MATLAB
```matlab
% 创建任务场景
atkConnect(conID, 'New', '/ Scenario SimpleExample');
...
```
:::
````

### 注意事项

1. `{S:...}` 中的内容**不能包含 `}` 字符**（极少出现在 ATK 命令参数中）
2. `{C:...}` 用于**独立行的注释**，不支持行内注释——把注释放到代码行的前一行即可
3. 模板中**不要写分号**——C++/Java/MATLAB 自动在行尾添加，Python 自动去除
4. 模板中**不要写注释符**（`#`、`//`、`%`）——用 `{C:...}` 代替
5. 模板中**不要写语言特定的引号**——用 `{S:...}` 代替

---

## 核心模块详解

### mixcode-lang.js（语言定义与标记处理）

**文件位置**：`.vuepress/markdown/mixcode-lang.js`

这是整个系统的基础。包含四个语言的规则定义和所有标记处理逻辑。

#### LANGS 语言定义

每种语言是一个对象，包含五个属性：

```js
{
  name: 'C++',         // 显示名称，用于 Tab 标题
  tag: 'cpp',          // markdown 代码块语言标识
  quote: (s) => ...,   // 字符串包裹函数：输入原始内容，返回带引号的字符串
  comment: (s) => ..., // 注释生成函数：输入注释文本，返回注释行
  semicolon: ';' | '', // 是否需要分号：Python 为空串，其余为 ';'
}
```

**四个语言的 `quote()` 实现及设计考量**：

| 语言 | 实现 | 说明 |
|------|------|------|
| Python | `` s.replace(/'/g, "\\'") `` | 单引号包裹，内部单引号用 `\'` 转义 |
| MATLAB | `s.replace(/'/g, "''")` | 单引号包裹，MATLAB 用双写 `''` 转义内部单引号 |
| C++ | 见下 | 双引号包裹，先 `\`→`\\` 再 `"`→`\"` |
| Java | 同 C++ | 规则与 C++ 完全相同 |

C++/Java 的 `quote()` 是**最复杂的**，因为涉及转义顺序问题：

```js
// 必须用回调函数，不能用替换字符串！
quote: (s) => `"${s.replace(/\\/g, () => '\\\\').replace(/"/g, () => '\\"')}"`
```

**为什么必须用回调**：JavaScript 的 `String.replace()` 对替换字符串有特殊的转义处理——`\\` 会被解释为一个字面反斜杠、`\$` 会被解释为字面 `$`。如果用替换字符串写法 `s.replace(/\\/g, '\\\\')`，四个反斜杠经过两次解析后实际上只插入了一个反斜杠，等于没转义。**回调函数的返回值不会被二次解析**，因此是安全的。

**为什么先转义 `\` 再转义 `"`**：考虑内容 `\"`（一个反斜杠后跟一个双引号）。如果先转义 `"` → `\"`，得到 `\\"`（两个反斜杠后跟双引号）。然后再转义 `\` → `\\`，反斜杠从 `\\` 变成 `\\\\`。最终结果错误。正确顺序是先 `\`→`\\`：`\"` → `\\"`（一个 `\\` + 一个 `"`），再 `"`→`\"`：`\\"` → `\\\"`（`\\` + `\"`），这是正确的。

#### processLine(line, lang)

对**一行**文本执行标记替换。核心是用两个正则：

```js
line.replace(/\{S:([^}]*)\}/g, (_, content) => rules.quote(content));
line.replace(/\{C:([^}]*)\}/g, (_, content) => rules.comment(content));
```

- `{S:内容}` → `quote(内容)` — 内容匹配 `[^}]*`（任意非 `}` 字符）
- `{C:内容}` → `comment(内容)` — 同上

**已知限制**：`{S:...}` 内容中不能包含 `}`，因为正则用 `[^}]*` 匹配。

#### processContent(content, lang)

对**整段代码**执行逐行处理，在 `processLine` 基础上增加了分号逻辑：

```
1. 按 \n 分割为行
2. 每行调用 processLine 替换标记
3. Python（semicolon 为空）：去掉行尾分号
4. C++/Java/MATLAB（semicolon 为 ';'）：注释行和已有分号的行不处理，
   其余行在末尾补分号
5. 合并为字符串，去掉首尾多余空行
```

**为什么分号逻辑在 processLine 之后**：必须先完成 `{C:...}` → 注释符的替换，才能正确判断"这一行是不是注释行"，避免给注释行也加分号。

#### expandToCodeTabs(content, langs)

将处理后的四种语言代码组装为 `::: code-tabs` markdown 块：

```
::: code-tabs
@tab Python
```python
<processed code>
```

@tab C++
```cpp
<processed code>
```
:::
```

Tab 之间用**双换行**（`\n\n`）分隔，每个 Tab 内部格式为 `@tab 标题\n```lang\n代码\n````。

#### 导出接口

```js
module.exports = {
  LANGS,            // 语言定义对象
  ALL_LANGS,        // ['python', 'cpp', 'java', 'matlab']
  processContent,   // (content, lang) → 处理后的代码
  expandToCodeTabs, // (content, langs?) → ::: code-tabs 块
};
```

`processLine` 不在导出中——它是 `processContent` 内部使用的辅助函数。

---

### gen-lang-files.js（接口说明模板 → 单语言文件）

**文件位置**：`scripts/gen-lang-files.js`
**npm 命令**：`npm run gen-lang`

#### 处理流程

```
atkCommand.mixcode.md（模板，包含 ```mixcode 块）
        │
        ├── 匹配正则 /```\s*mixcode\s*\r?\n([\s\S]*?)```/g
        │        │
        │        └── 对每个匹配到的代码块：
        │              1. 去末尾换行
        │              2. processContent(content, lang) → 按目标语言处理
        │              3. 替换为 ```{lang}\n{processed}\n```
        │
        ├──→ atkCommand-python.md
        ├──→ atkCommand-cpp.md
        ├──→ atkCommand-java.md
        └──→ atkCommand-matlab.md
```

#### 文件名生成

```js
const baseName = path.basename(templatePath, '.mixcode.md');
// atkCommand.mixcode.md → baseName = 'atkCommand'
// 输出：atkCommand-python.md、atkCommand-cpp.md 等
```

`path.basename(templatePath, '.mixcode.md')` 去掉双重扩展名 `.mixcode.md`，得到基础名 `atkCommand`。

#### 正则设计

```
/```\s*mixcode\s*\r?\n([\s\S]*?)```/g
```

- `\s*` —— 允许反引号和 mixcode 之间有空格（兼容 `` ``` mixcode `` 写法）
- `\r?\n` —— 兼容 Windows `\r\n` 和 Unix `\n`
- `([\s\S]*?)` —— 非贪婪匹配代码块内容
- 与 `expand-mixcode-blocks.js` 的正则**完全一致**（review 后统一）

#### 模板路径

硬编码在脚本中：
```
二次开发教程/2-二次开发CONNECT模式/操作流程/.include/atkCommand.mixcode.md
```

如需处理其他模板，修改 `atkCommandTemplate` 变量或在 `generateLangFiles()` 中传入参数。

---

### expand-mixcode-blocks.js（案例文件展开与还原）

**文件位置**：`scripts/expand-mixcode-blocks.js`

这是场景二的核心。支持两种使用方式：
- **直接运行**：`node scripts/expand-mixcode-blocks.js [--restore]`
- **作为模块**：`const { expand, restore } = require('./expand-mixcode-blocks')`

#### SCAN_DIRS

```js
const SCAN_DIRS = ['02-案例教程/8-二次开发案例'];
```

只扫描配置的目录。添加新案例目录时需手动更新此数组。

#### expand() 展开流程

```
1. 删除旧的 .mixcode-backups/ 目录（清理上次备份）
2. 遍历 SCAN_DIRS 下所有 .md 文件
3. 对每个文件：
   a. 快速检查 content.includes('mixcode')，跳过无关注文件
   b. 正则匹配所有 ```mixcode 代码块
   c. 对每个匹配：调用 expandToCodeTabs(content) 展开为 ::: code-tabs
   d. 如果有展开（count > 0）：
      - 备份原始内容到 .mixcode-backups/ 目录（保持子目录结构）
      - 写入展开后的内容覆盖原文件
4. 返回 { files: N, blocks: M }
```

#### restore() 还原流程

```
1. 检查 .mixcode-backups/ 是否存在
2. 遍历备份目录下所有 .md 文件
3. 按相对路径写回原始位置
4. 删除备份目录
5. 返回 { files: N }
```

#### 备份目录

```
.mixcode-backups/
└── 02-案例教程/
    └── 8-二次开发案例/
        ├── 1-入门案例.md
        ├── 2-可见性工具案例.md
        └── ...
```

备份保持原始目录结构，确保 `restore()` 时能正确还原到原位置。

#### 已知限制

1. **非并发安全**：`expand()` 直接删除旧备份目录。两个进程同时运行 `expand()` → 都展开成功，但 `restore()` 时只有一个进程的备份存在
2. **信号丢失**：`SIGKILL`（`kill -9` 或 `taskkill /F`）无法被捕获，备份目录会残留，原文件保持展开状态
3. **SCAN_DIRS 硬编码**：新增案例目录需手动更新

---

### run-with-mixcode.js（自动包装器）

**文件位置**：`scripts/run-with-mixcode.js`
**npm 命令**：`npm run dev:mixcode`、`npm run build:online`、`npm run build:standalone`、`npm run build:standalone-kylin`

#### 处理流程

```
1. expand()          → 展开 ```mixcode → ::: code-tabs
2. spawn vuepress    → 传递所有 CLI 参数
3. 等待 vuepress 退出
   ├── 正常退出 → doRestore() → process.exit(子进程退出码)
   ├── Ctrl+C    → SIGINT → 杀掉子进程 → 子进程 exit 事件 → doRestore()
   └── SIGTERM   → 杀掉子进程 → 子进程 exit 事件 → doRestore()
```

#### 退出码传播

```js
child.on('exit', (code) => {
  doRestore();
  process.exit(code);  // 传播 vuepress 的退出码
});
```

这样 npm script 中的 `&&` 链能正确工作：build 失败 → 退出码非零 → `&& npm run script:standalone` 不执行。

#### SIGINT 处理

只杀子进程，不在 SIGINT handler 中直接 `doRestore()`。原因是：
- 杀掉子进程后，子进程的 `exit` 事件会触发
- 在 `exit` handler 中统一调用 `doRestore()`
- 避免了 `doRestore()` 被调用两次（一次 SIGINT handler，一次 exit handler）

#### doRestore() 幂等保护

```js
let restored = false;
function doRestore() {
  if (restored) return;  // 防止多次调用
  restored = true;
  restore();
}
```

---

### convert-cases.js（一次性迁移脚本）

**文件位置**：`scripts/convert-cases.js`

这是**一次性脚本**，用于将项目中已有的 ` ```python ` 代码块批量转换为 ` ```mixcode ` 模板格式。已于初次转换后不再需要，保留在 `scripts/` 中作为参考。

转换逻辑：
1. 逐行扫描 Python 代码
2. 用状态机检测字符串边界（处理 `'...'` 和 `"..."` 中的 `#` 不被误判为注释）
3. `# 注释` → `{C:注释}`
4. `'字符串'` → `{S:字符串}`
5. ` ```python ` → ` ```mixcode `
6. 行尾分号去掉（模板规范）

**限制**：不能处理含有转义单引号 `\'` 的 Python 字符串（极少出现在 ATK 命令中），行尾注释检测的循环有 off-by-one 问题（不检查最后一个字符）。

---

## 使用场景

### 场景一：接口说明（单语言展示）

**工作流**：

1. 编辑模板文件：`.include/atkCommand.mixcode.md`
2. 运行：`npm run gen-lang`
3. 提交模板 + 四个生成文件

**文件关系**：

```
.include/
├── atkCommand.mixcode.md     ← 编辑这个
├── atkCommand-cpp.md         ← npm run gen-lang 生成
├── atkCommand-python.md      ← npm run gen-lang 生成
├── atkCommand-java.md        ← npm run gen-lang 生成
└── atkCommand-matlab.md      ← npm run gen-lang 生成
```

各 `0-接口说明.md` 中通过 `<!--@include:...-->` 引用：

```markdown
<!--@include:../.include/atkCommand-cpp.md-->
```

### 场景二：案例教程（多语言 Tab 展示）

**日常开发**：

```bash
npm run dev:mixcode     # 展开 → dev → Ctrl+C 自动还原
```

**手动控制**：

```bash
node scripts/expand-mixcode-blocks.js             # 展开
npm run dev                                       # 启动
node scripts/expand-mixcode-blocks.js --restore   # 还原
```

**打包**：

```bash
npm run build:online           # 自动展开 → 构建 → 自动还原
npm run build:standalone       # 同上 + script:standalone
npm run build:standalone-kylin # 同上 + script:standalone-kylin
```

---

## npm scripts 速查

| 命令 | 用途 |
|------|------|
| `npm run gen-lang` | 从模板生成接口说明的各语言版本 |
| `npm run dev:mixcode` | 启动 dev server（自动展开 + 自动还原） |
| `npm run dev` | 普通 dev server（不处理 mixcode，用于测试已展开文件） |
| `npm run build:online` | 在线版构建（自动展开 + 还原） |
| `npm run build:standalone` | 离线版构建（自动展开 + 还原） |
| `npm run build:standalone-kylin` | 麒麟版构建（自动展开 + 还原） |
| `node scripts/expand-mixcode-blocks.js` | 手动展开 |
| `node scripts/expand-mixcode-blocks.js --restore` | 手动还原 |

---

## 为什么不用 markdown-it 插件

最初尝试在 markdown-it 管线中实时替换 ` ```mixcode ` → `::: code-tabs`，尝试了三种方式：

1. `md.core.ruler.before('normalize', ...)` — 在源文本规范化之前替换
2. `md.core.ruler.after('normalize', ...)` — 在规范化之后、块解析之前替换
3. 包装 `md.render()` / `md.parse()` — 在入口处替换

三种方式在独立的 markdown-it 测试中都正常工作，但在 VuePress 环境中均无法稳定生效。根本原因是 `vuepress-plugin-md-enhance` 对 markdown-it 实例进行了多层包装和插件注入，自定义 hook 的执行时机和上下文不可靠。

最终采用的**文件级预处理**方案：在 VuePress 读取 `.md` 文件**之前**物理替换文件内容。展开后的 `::: code-tabs` 由 md-enhance 的原生 CodeTabs 容器直接处理，完全不依赖自定义 markdown-it 插件，零风险。

代价是需要在构建前后做文件展开/还原，由 `run-with-mixcode.js` 透明处理。

---

## 扩展

### 新增语言

编辑 `.vuepress/markdown/mixcode-lang.js`，在 `LANGS` 中添加新语言：

```js
javascript: {
  name: 'JavaScript',
  tag: 'javascript',
  quote: (s) => `'${s.replace(/'/g, "\\'")}'`,  // 按语言规范调整
  comment: (s) => `// ${s}`,
  semicolon: ';',
},
```

然后将 `'javascript'` 加入 `ALL_LANGS` 数组。

### 新增案例目录

在 `scripts/expand-mixcode-blocks.js` 的 `SCAN_DIRS` 中添加目录路径。

### 新增接口说明模板

在 `scripts/gen-lang-files.js` 中调用 `generateLangFiles(templatePath)`。

---

## 相关文件索引

| 文件 | 用途 |
|------|------|
| `.vuepress/markdown/mixcode-lang.js` | 核心：语言定义、标记替换、code-tabs 展开 |
| `scripts/gen-lang-files.js` | 场景一：模板 → 单语言文件 |
| `scripts/expand-mixcode-blocks.js` | 场景二：案例文件展开/还原 |
| `scripts/run-with-mixcode.js` | 包装器：自动展开 → vuepress → 自动还原 |
| `scripts/convert-cases.js` | 一次性：Python 代码块 → mixcode 格式（已执行） |
| `.claude/skills/mixcode-checker/SKILL.md` | 技能：交互式检查和改写 mixcode 代码块 |
| `二次开发教程/.../操作流程/.include/atkCommand.mixcode.md` | 接口说明模板 |
| `二次开发教程/.../操作流程/.include/atkCommand-{lang}.md` | 接口说明生成文件（4 个） |
| `02-案例教程/8-二次开发案例/*.md` | 案例文件（内含 ` ```mixcode ` 代码块） |
