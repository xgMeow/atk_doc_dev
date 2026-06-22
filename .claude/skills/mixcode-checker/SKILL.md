---
name: mixcode-checker
description: 改写 ATK 文档中的单语言代码块为 ```mixcode 模板格式。仅手动调用或由其他 skill 调用。默认执行改写。
---

# ATK 代码块改写

> **仅手动触发。** 不根据上下文自动激活。由用户输入 `/mixcode-checker` 或被其他 skill 调用才执行。

## 触发条件

| 触发方式 | 行为 |
|----------|------|
| `/mixcode-checker` 或 "改写 atk 代码" 等 | **默认：改写转换** |
| `/mixcode-checker 检查` 或 "检查 atk 代码" | 扫描检查（只报告，不改写） |
| `/mixcode-checker 校验` 或 "校验 atk 语法" | 逐行校验已有 atk 块（只报告，不改写） |
| 其他 skill 调用 | 由调用方指定模式 |

**不自动激活**——即使用户在讨论 ATK 代码或文档，也不要主动调用。

## 核心原则

1. **内容不变**：转换过程中不改动参数值、命令名、路径、时间戳等实质内容
2. **标记替代语法细节**：仅将语言特定的引号、注释符替换为 `{S:...}` `{C:...}` 标记
3. **先读后改**：完整阅读目标文档后再动手
4. **不重复转换**：已是 ` ```mixcode ` 格式的块不重复处理，除非标记语法有误
5. **不处理接口说明模板**：`.include/atkCommand.atk.md` 和生成的 `atkCommand-{lang}.md` 文件由 `npm run gen-lang` 管理，此技能不碰
6. **仅手动触发或被其他 skill 调用**，不根据上下文自动激活

## 适用与不适用

**适用**：
- 将 ` ```python `、` ```cpp `、` ```java `、` ```matlab ` 代码块转为 ` ```mixcode ` 格式
- 校验 ` ```mixcode ` 块中 `{S:}` / `{C:}` 标记用法是否正确
- 新增案例文件时，辅助将手写的单语言代码转为模板格式
- 检测 `.md` 文件中遗漏的未转换代码块

**不适用**：
- `.include/atkCommand.*.md` 接口说明模板和生成文件
- 非 ATK Connect 命令的代码块（如 bash、html、css 等）
- 纯文档结构/格式问题（交给 `atk-doc-formatter` 技能）
- 运行构建或展开脚本

## 标记语法

| 标记 | 含义 | Python/MATLAB 输出 | C++/Java 输出 |
|------|------|---------------------|---------------|
| `{S:内容}` | 字符串字面量 | `'内容'` | `"内容"`（内部 `"` 自动 `\"`） |
| `{C:文本}` | 注释 | `# 文本` / `% 文本` | `// 文本` |

### 语法约束

1. `{S:...}` 中不出现 `}` 字符
2. `{C:...}` 仅用于**独立行的注释**，不用于行尾注释
3. 模板中不写分号——C++/Java/MATLAB 自动添加，Python 自动去除
4. 模板中不写注释符（`#`、`//`、`%`）——用 `{C:...}` 代替
5. 模板中不写语言特定的引号——用 `{S:...}` 代替

---

## 默认模式：改写转换

1. 阅读目标文件全文
2. 对每个 ` ```python ` / ` ```cpp ` / ` ```java ` / ` ```matlab ` 代码块执行转换：

   **从 Python 转换**：
   - `# 注释文本` → `{C:注释文本}`
   - `'字符串内容'` → `{S:字符串内容}`
   - 去掉末尾分号 `;`

   **从 C++/Java 转换**：
   - `// 注释文本` → `{C:注释文本}`
   - `"字符串内容"` → `{S:字符串内容}`（内部 `\"` 还原为 `"`）
   - 去掉末尾分号 `;`

   **从 MATLAB 转换**：
   - `% 注释文本` → `{C:注释文本}`
   - `'字符串内容'` → `{S:字符串内容}`

3. **行尾注释拆为独立行**。行尾注释放在对应代码行**之前**：
   ```
   # 转换前
   atkConnect(conID, 'New', '/ Scenario'); # 创建场景

   # 转换后
   {C:创建场景}
   atkConnect(conID, {S:New}, {S:/ Scenario})
   ```

4. **C++/Java 内部转义引号还原**：
   ```
   # 转换前
   atkConnect(conID, "SetState", "*/Satellite1 HPOP \"2026-03-06\"");

   # 转换后
   atkConnect(conID, {S:SetState}, {S:*/Satellite1 HPOP "2026-03-06"})
   ```
   外层 `"..."` 变 `{S:...}`，内部 `\"` 还原为 `"`。

5. **代码块标记替换**：` ```python ` / ` ```cpp ` / ` ```java ` / ` ```matlab ` → ` ```mixcode `

6. 完成后对照验证清单自检。

---

## 模式二：扫描检查

仅在用户明确说"检查"时进入。只报告、不改写：

1. 扫描指定的 `.md` 文件
2. 找出所有**非 atk 语言标记的 ATK 代码块**（含 `atkOpen`/`atkConnect`/`atkClose` 调用）
3. 找出已有 ` ```mixcode ` 块中的语法问题：
   - `{S:...}` 内出现 `}` 字符
   - `{S:}` 标记与裸引号字符串混用
   - `{C:}` 标记与 `#`/`//`/`%` 注释符混用
   - 行尾注释放在 `{C:}` 中
4. 汇总报告：列出问题位置和类型

---

## 模式三：校验

仅在用户明确说"校验"时进入。只报告、不改写：

1. 读取已有 ` ```mixcode ` 块的文档
2. 逐行检查：
   - `{S:...}` 中无 `}` 字符、无嵌套标记
   - `{C:...}` 仅出现在独立行（不在代码行尾）
   - 无裸引号字符串（该用 `{S:...}` 的地方用了 `'...'` 或 `"..."`）
   - 无裸注释符（该用 `{C:...}` 的地方用了 `#`、`//`、`%`）
   - 无双分号 `;;`
3. 报告所有问题及行号

---

## 转换示例

### Python → atk

**转换前**：
````markdown
```python
# 连接 ATK
conID = atkOpen();

# 创建场景
atkConnect(conID, 'New', '/ Scenario SimpleExample');
atkConnect(conID, 'SetAnalysisTimePeriod', '* "2026-03-06 00:00:00.000" "2026-03-09 00:00:00.000"');
```
````

**转换后**：
````markdown
```mixcode
{C:连接 ATK}
conID = atkOpen()
{C:创建场景}
atkConnect(conID, {S:New}, {S:/ Scenario SimpleExample})
atkConnect(conID, {S:SetAnalysisTimePeriod}, {S:* "2026-03-06 00:00:00.000" "2026-03-09 00:00:00.000"})
```
````

### C++ → atk

**转换前**：
````markdown
```cpp
// 连接 ATK
conID = atkOpen("192.168.1.100", 6655);

// 设置颜色
atkConnect(conID, "Graphics", "*/Satellite/Satellite1 SetColor 12");
```
````

**转换后**：
````markdown
```mixcode
{C:连接 ATK}
conID = atkOpen({S:192.168.1.100}, 6655)
{C:设置颜色}
atkConnect(conID, {S:Graphics}, {S:*/Satellite/Satellite1 SetColor 12})
```
````

---

## 特殊场景

### 无参数的行

不需要标记，直接保留：
```
conID = atkOpen()
atkClose(conID)
```

### 字符串中包含中文和双引号

`{S:...}` 标记内为原文内容，不做任何修改：
```
{S:*/Satellite/Satellite1 Style "J2000 Position Velocity"  TimePeriod "2026-03-06 00:00:00.000" "2026-03-09 00:00:00.000"}
```

### Python 单引号包裹含双引号字符串

```python
atkConnect(conID, 'Report_RM', '*/Satellite1 Style "J2000 Position Velocity"');
```
→
```
atkConnect(conID, {S:Report_RM}, {S:*/Satellite1 Style "J2000 Position Velocity"})
```

### C++ 双引号包裹含转义双引号字符串

```cpp
atkConnect(conID, "Report_RM", "*/Satellite1 Style \"J2000 Position Velocity\"");
```
→
```
atkConnect(conID, {S:Report_RM}, {S:*/Satellite1 Style "J2000 Position Velocity"})
```
注意 `\"` 还原为 `"`。

---

## 验证清单

**逐块检查**：
- [ ] ` ```mixcode ` 代码块标记正确
- [ ] 所有字符串引号已替换为 `{S:...}`，内容无误
- [ ] 所有注释已替换为 `{C:...}`，放在独立行
- [ ] 行尾注释已拆为前置独立行
- [ ] 无残留的语言特定引号或注释符
- [ ] `{S:...}` 内无 `}` 字符
- [ ] 参数值、命令名、路径、时间戳与原文一致
- [ ] 转义字符已按语言规则还原（C++ `\"`→`"`）

**全文检查**：
- [ ] 无遗漏的 ` ```python ` / ` ```cpp ` / ` ```java ` / ` ```matlab ` ATK 代码块
- [ ] 不相关的代码块（bash、html 等）未被误改

## 相关文件

- `.vuepress/markdown/atk-lang.js` — 语言定义和标记处理
- `scripts/convert-cases.js` — 批量转换脚本（可参考转换逻辑）
- `scripts/expand-atk-blocks.js` — 展开/还原脚本
- `.dev-docs/技术文件/ATK 多语言代码生成方案.md` — 完整技术文档
