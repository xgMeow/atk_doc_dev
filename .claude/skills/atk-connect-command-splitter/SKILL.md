---
name: atk-connect-command-splitter
description: 将 ATK 二次开发 CONNECT 命令库中的单个 Markdown 文件按二级/三级标题拆分为 VuePress 目录结构，保留源文件并生成 README 目录页。
---

# ATK CONNECT 命令库拆分工具

## 何时使用

当用户提出以下任一请求时，应激活此 skill：

- “把这个 CONNECT 命令文件拆分成独立文件”
- “按照同样规则处理这个命令库文件”
- “把这个平铺的命令文档拆成小文件”
- “用文件夹表示层级关系”
- 用户指定 `二次开发教程/2-二次开发CONNECT模式/2-Connect命令库/` 下的 Markdown 文件，并要求按前面规则拆分

## 核心原则

1. **保留源文件**：不要删除原始 `.md` 文件，除非用户明确要求删除。
2. **按标题层级拆分**：以 Markdown `##` 作为一级命令/分组边界，以 `###` 作为子命令边界。
3. **用目录表达层级**：含有 `###` 子命令的 `##` 分组生成目录；不含 `###` 的 `##` 分组生成根级文件。
4. **生成目录页**：每个输出目录必须有 `README.md`，用于 VuePress title 和 `<Catalog />` 配置。
5. **最小改动**：只生成/重建目标输出目录，不修改命令正文内容，不做额外格式化。
6. **可重复执行**：如果目标输出目录已存在，可以删除后重新生成，确保目录结构与源文件标题一致。

## 输出位置规则

给定源文件：

```text
二次开发教程/2-二次开发CONNECT模式/2-Connect命令库/N-名称.md
```

输出目录为同级目录：

```text
二次开发教程/2-二次开发CONNECT模式/2-Connect命令库/N-名称/
```

示例：

```text
2-Connect命令库/3-敏感器.md
→ 2-Connect命令库/3-敏感器/
```

## README 规则

根输出目录的 `README.md`：

```markdown
---
title: 名称
index: false
---

<Catalog />
```

子目录的 `README.md`：

```markdown
---
title: 二级标题文本
index: false
---

<Catalog />
```

标题取值规则：

- 根目录 title：去掉文件名前缀编号后的名称，例如 `3-敏感器.md` → `敏感器`。
- 子目录 title：使用对应 `##` 标题原文，例如 `Graphics`、`VO`、`Attitude`。

## 拆分规则

### 1. 解析源文件

- 忽略源文件最顶部的 `#` 总标题，不生成文件。
- 从第一个 `##` 标题开始拆分。
- 每个 `##` 到下一个 `##` 之前的内容属于一个二级分组。
- 每个分组中如果出现 `###`，则每个 `###` 到下一个 `###` 之前的内容属于一个子命令。

### 2. 不含三级标题的二级分组

如果 `## Define` 下没有任何 `###`，生成根级文件：

```text
Define.md
```

文件内容格式：

```markdown
# Define

原二级标题下的正文
```

### 3. 含三级标题的二级分组

如果 `## Graphics` 下包含多个 `###`，生成目录：

```text
Graphics/
  README.md
  Graphics SetColor.md
  Graphics Show.md
```

每个子命令文件将原 `###` 标题提升为 `#`：

```markdown
# Graphics SetColor

原三级标题下的正文
```

### 4. 二级分组目录中的引言内容

如果某个含 `###` 的 `##` 分组在第一个 `###` 前有正文内容，应额外生成：

```text
二级标题.md
```

内容格式：

```markdown
# 二级标题

原二级标题在第一个三级标题前的正文
```

如果没有引言内容，不生成 `二级标题.md`。

## 文件命名规则

1. 文件名使用标题文本，不含编号前缀。
2. 替换 Windows/路径非法字符：`\\ / : * ? " < > |` 替换为空格。
3. 合并连续空白并去掉首尾空白。
4. 保留中文、英文、空格和下划线等合法字符。

## 推荐实现脚本模式

可使用一次性 Python 脚本完成拆分。脚本应满足：

- 使用 UTF-8 读写。
- 使用 `pathlib.Path` 处理路径。
- 只删除并重建目标输出目录，不删除源文件。
- 对 `###` 子命令标题提升为 `#`。
- 使用 `'\n'.join(lines)` 拼接内容行，禁止使用 `''.join(lines)`，否则所有行会连成一整行。
- 输出完成后打印拆分统计和源文件是否仍存在。

核心逻辑示例：

```python
from pathlib import Path
import re
import shutil

base = Path('二次开发教程/2-二次开发CONNECT模式/2-Connect命令库')
src = base / '3-敏感器.md'
out_dir = base / src.with_suffix('').name
text = src.read_text(encoding='utf-8')

if out_dir.exists():
    shutil.rmtree(out_dir)
out_dir.mkdir()

def safe_name(title: str) -> str:
    title = re.sub(r'[\\\\/:*?"<>|]+', ' ', title).strip()
    return re.sub(r'\\s+', ' ', title)

def write_readme(path: Path, title: str) -> None:
    path.mkdir(exist_ok=True)
    (path / 'README.md').write_text(f'''---
title: {title}
index: false
---

<Catalog />
''', encoding='utf-8')
```

## 验证清单

拆分完成后必须核对：

- [ ] 源 `.md` 文件仍然存在。
- [ ] 同名输出目录已生成。
- [ ] 根目录有 `README.md`。
- [ ] 每个含子命令的二级分组目录有 `README.md`。
- [ ] 不含 `###` 的 `##` 分组是根级 `.md` 文件。
- [ ] 含 `###` 的 `##` 分组是目录，子命令为该目录下的 `.md` 文件。
- [ ] 所有拆分后的 `.md` 文件标题从一级标题 `#` 开始，无 `##` 或 `###` 顶级标题。

## 已应用示例

### 场景命令

源文件：

```text
2-Connect命令库/1-场景.md
```

特点：只有 `##` 命令，没有 `###` 子命令。

结果：生成 `1-场景/README.md` 和 49 个根级命令文件，不生成子目录。

### 卫星命令

源文件：

```text
2-Connect命令库/2-卫星.md
```

特点：部分 `##` 分组含有 `###` 子命令。

结果：`Attitude`、`Graphics`、`HPOP`、`SetAttitude`、`SetState`、`VO`、`星座创建` 等生成子目录，其余生成根级文件。

### 敏感器命令

源文件：

```text
2-Connect命令库/3-敏感器.md
```

特点：`Graphics` 和 `VO` 含有 `###` 子命令。

结果：`Graphics` 和 `VO` 生成子目录，其余二级标题生成根级文件。

## 禁止事项

- 禁止默认删除源 `.md` 文件。
- 禁止忽略 `###` 层级并把所有 `##` 平铺为文件。
- 禁止把源文件顶部 `#` 总标题生成单独文件。
- 禁止修改命令正文、示例代码、表格或链接内容。
- 禁止在未核对生成结果时声称完成。
- 禁止主动运行构建或提交代码，除非用户明确要求。
