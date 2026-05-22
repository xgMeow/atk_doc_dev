# VuePress 文档转 Word 工具

将 ATK 文档站点的 Markdown 源文件批量转换为 `.docx` 格式。

## 环境准备

### 1. 安装 Pandoc

```bash
winget install JohnMacFarlane.Pandoc
```

或者从 https://pandoc.org/installing.html 下载安装。

### 2. 安装 Python 依赖

```bash
pip install beautifulsoup4 python-docx
```

### 3. 构建文档

```bash
# 在仓库根目录执行
npm install
npm run build:standalone
```

## 使用

```bash
# 在仓库根目录执行

# 转换全部文档
python doc-to-word/convert.py

# 只转换某个目录
python doc-to-word/convert.py 01-安装
python doc-to-word/convert.py 02-案例教程
```

转换后的 `.docx` 文件在 `doc-to-word/word_output/` 中，保持原有目录结构。

## 说明

- 图片自动嵌入 docx，不需要单独复制
- 无文档内容或内容过短的页面会自动跳过
- 如文档有更新，先重新构建：`npm run build:standalone`，再运行转换工具
