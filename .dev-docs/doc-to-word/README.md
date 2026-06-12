# VuePress 文档转 Word 工具

将 ATK 文档站点的 Markdown 源文件转换为 `.docx` 格式。

## 环境准备

### 1. 安装 Pandoc

```bash
winget install JohnMacFarlane.Pandoc
```

或者从 https://pandoc.org/installing.html 下载安装。

### 2. 安装 Python 依赖

```bash
pip install python-docx
```

### 3. 构建文档（首次或文档有更新时）

```bash
npm install
npm run build:standalone
```

> 脚本运行时会自动检测构建产物，如不存在会自动构建。

---

## 快速开始

```bash
# 转换全部文档（每个 .md 生成一个 .docx）
python .dev-docs/doc-to-word/convert.py

# 转换指定目录
python .dev-docs/doc-to-word/convert.py 02-案例教程
```

输出在 `.dev-docs/doc-to-word/word_output/`，保持原有目录结构。

---

## 参数说明

| 参数 | 简写 | 说明 | 默认值 |
|---|---|---|---|
| `target_dir` | (位置参数) | 要转换的目录，相对于仓库根目录 | 空（全部文档） |
| `--dir` | `-d` | 指定转换目录，优先级高于位置参数 | — |
| `--level` | `-l` | 输出标题层级：`-1`=全部，`1`=仅一级标题，`2`=到二级... | `-1` |
| `--merge` | `-m` | 合并为一个 .docx（不加则每个 .md 独立输出） | 关 |

---

## 使用示例

### 基本用法

```bash
# 转换全部文档
python .dev-docs/doc-to-word/convert.py

# 转换"安装"目录下所有文档
python .dev-docs/doc-to-word/convert.py 01-安装

# 转换"案例教程"目录
python .dev-docs/doc-to-word/convert.py 02-案例教程

# 用 -d 指定目录（与上面等效）
python .dev-docs/doc-to-word/convert.py -d 02-案例教程

# 转换多级子目录
python .dev-docs/doc-to-word/convert.py 03-基础使用指南/02-场景管理
```

### 标题层级控制

```bash
# 只输出一级标题（#），二级以下转为粗体文本
python .dev-docs/doc-to-word/convert.py -l 1

# 保留一、二级标题（# 和 ##），三级以下转为粗体
python .dev-docs/doc-to-word/convert.py -l 2

# 指定目录 + 限制标题层级
python .dev-docs/doc-to-word/convert.py 02-案例教程 -l 1
```

### 合并模式

```bash
# 把"场景管理"目录下所有 md 合并为一个 docx
python .dev-docs/doc-to-word/convert.py 03-基础使用指南/02-场景管理 -m

# 合并 + 只要一级标题，生成干净的简化文档
python .dev-docs/doc-to-word/convert.py 03-基础使用指南/02-场景管理 -m -l 1

# 合并"安装"目录为单个 docx，保留两级标题
python .dev-docs/doc-to-word/convert.py 01-安装 -m -l 2
```

### 组合用法

```bash
# 案例教程，合并为一个文件，只保留一级标题 → 生成简洁目录式文档
python .dev-docs/doc-to-word/convert.py 02-案例教程 -m -l 1

# 全部文档合并为一个巨型 docx，保留全部标题
python .dev-docs/doc-to-word/convert.py -m

# 子目录用 -d 指定，合并为 docx，输出两层标题
python .dev-docs/doc-to-word/convert.py -d 03-基础使用指南/03-对象管理 -m -l 2
```

---

## 效果说明

### 标题层级 `-l` 的效果

假设原始 Markdown：
```markdown
# 场景管理
场景是用来...

## 创建新场景
点击菜单栏...

### 步骤一：选择模板
在弹出窗口中选择...
```

`-l 1` 输出到 Word 的效果：
- **场景管理** ← 保留为一级标题
- 场景是用来... ← 正文
- **创建新场景** ← 转为粗体文本
- 点击菜单栏... ← 正文
- **步骤一：选择模板** ← 转为粗体文本
- 在弹出窗口中选择... ← 正文

> 所有正文内容完整保留，仅深层标题变成粗体文本，不再生成 Word 标题样式。

### 合并模式 `-m` 的效果

- 多个 `.md` 文件按文件名排序后，用分隔线 `---` 连接
- 输出文件名 = 目录名（如 `02-场景管理.docx`）
- 图片、表格等内容都会保留在合并后的文档中

---

## 注意事项

- 图片自动嵌入 docx，不需要单独复制
- 内容过短的页面（< 50 字符）会自动跳过
- 如文档有更新，先重新构建：`npm run build:standalone`，再运行转换工具（脚本也会自动检测并构建）
- 脚本可以从任意目录运行，路径基于脚本自身位置自动计算
