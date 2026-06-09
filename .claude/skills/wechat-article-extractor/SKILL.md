---
name: wechat-article-extractor
description: 从微信公众号文章 URL 提取内容，自动下载图片，并按照 ATK 文档规范写入综合案例目录。
---

# 微信公众号文章提取器

将微信公众号文章（mp.weixin.qq.com）提取为 ATK VuePress 综合案例 Markdown 文档。采用**两阶段**工作流：阶段一抓取并提取原始数据，阶段二人工审核图片上下文后生成格式化文档。

## 适用场景

- 用户提供了一个微信公众号文章链接，要求写入综合案例
- 用户说"把这个公众号文章提取出来写到综合案例"
- 用户需要从微信文章批量迁移内容到文档站

## 核心流程

### 阶段一：抓取、提取、下载（自动化）

#### 第 1 步：抓取文章 HTML

用 `curl` 模拟浏览器请求，将页面保存到临时文件：

```bash
curl -sL -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" \
  "https://mp.weixin.qq.com/s/<ARTICLE_ID>" \
  -o "F:/moneyProject/ATK/smsat/atk-doc/.temp_wechat.html"
```

关键点：
- 必须设置 User-Agent 头，否则微信会返回验证页面
- 文件保存到项目根目录的 `.temp_wechat.html`
- **Windows 注意**：使用 `python` 而非 `python3`（Windows 的 `python3` 通常是 Store 存根，无法正常工作）

#### 第 2 步：提取元数据

用 Python 从 HTML 中提取元数据：

```python
title = re.search(r"var\s+msg_title\s*=\s*'([^']+)'", html)  # 文章标题
nickname = re.search(r'var\s+nickname\s*=\s*htmlDecode\("([^"]*)"\)', html)  # 公众号名称
ct = re.search(r'var\s+ct\s*=\s*"([^"]*)"', html)  # 发布时间戳（Unix 秒）
```

- `msg_title` 格式如 `'ATK特定问题建模——地月自由返回轨道设计'.html(false)`
- 文件名从标题中提取（去掉 "ATK特定问题建模——" 等系列前缀 — 用 `re.sub(r'^ATK[^——]*——', '', title)`）
- `ct` 是 Unix 时间戳，可用来验证文章日期

#### 第 3 步：提取文章正文

文章正文存储在 JavaScript 变量 `content_noencode` 中，内容为 hex-escaped HTML：

```python
start = html.find("content_noencode: '")
start = html.find("'", start) + 1
# 遍历找到闭合的单引号（跳过 \\ 转义）
pos = start
while pos < len(html):
    if html[pos] == '\\': pos += 2
    elif html[pos] == "'": break
    else: pos += 1
content_str = html[start:pos]

# 解码 hex escapes: \x3c → < 等
decoded = re.sub(r'\\x([0-9a-fA-F]{2})', lambda m: chr(int(m.group(1), 16)), content_str)
```

解码后得到文章正文的 HTML，其中包含 `<section>`, `<p>`, `<img>` 等标签。

**重要**：将解码后的内容保存到文件再读取，避免终端编码问题：

```python
with open(f'{BASE}/.article_decoded.html', 'w', encoding='utf-8') as f:
    f.write(decoded)
```

#### 第 4 步：转换为纯文本

将 HTML 转换为纯文本，同时保留图片占位符用于后续上下文分析：

```python
# 移除 script/style 标签
clean = re.sub(r'<script[^>]*>.*?</script>', '', decoded, flags=re.DOTALL)
clean = re.sub(r'<style[^>]*>.*?</style>', '', clean, flags=re.DOTALL)

# 替换图片为带序号的占位符 [IMG_XX]
img_counter = [0]
def replace_img(m):
    img_counter[0] += 1
    url = m.group(0)
    data_src = re.search(r'data-src="([^"]+)"', url)
    if data_src:
        src = data_src.group(1).replace('&amp;', '&')
        base = src.split('?')[0]
        for j, u in enumerate(unique_imgs):
            if u.split('?')[0] == base:
                return f'\n\n[IMG_{j+1:02d}]\n\n'
    return '\n\n[IMG_??]\n\n'

clean = re.sub(r'<img[^>]*>', replace_img, clean)

# 转换 HTML 实体
text = re.sub(r'<br\s*/?>', '\n', clean)
text = re.sub(r'<[^>]+>', '', text)
text = re.sub(r'&nbsp;', ' ', text)
text = re.sub(r'&amp;', '&', text)
text = re.sub(r'&lt;', '<', text)
text = re.sub(r'&gt;', '>', text)
text = re.sub(r'&quot;', '"', text)
text = re.sub(r'&apos;', "'", text)
text = re.sub(r'\n{3,}', '\n\n', text)

# 保存文本到文件（避免终端 GBK 编码问题）
with open(f'{BASE}/.article_text.txt', 'w', encoding='utf-8') as f:
    f.write(text)
```

#### 第 5 步：提取并下载图片

图片 URL 在 `<img data-src="...">` 中，来自 `mmbiz.qpic.cn` CDN：

```python
img_urls = re.findall(r'data-src="(https://mmbiz\.qpic\.cn/[^"]+)"', decoded)
# 去重（保留首次出现顺序，基于 URL base 部分去重）
seen = set()
unique_imgs = []
for url in img_urls:
    url_clean = url.replace('&amp;', '&')
    base = url_clean.split('?')[0]
    if base not in seen:
        seen.add(base)
        unique_imgs.append(url_clean)
```

**图片存放规则**：下载到 `综合案例/media/${article_filename}/` 目录下，先用临时名称 `imageXX-temp.ext` 保存。

```bash
mkdir -p "综合案例/media/${article_filename}"
```

下载图片（必须带 Referer 头，否则微信 CDN 拒绝访问）：

```python
for i, url in enumerate(unique_imgs):
    ext = "gif" if "wx_fmt=gif" in url else "png"
    fname = f"image{i+1:02d}-temp.{ext}"
    fpath = f"综合案例/media/{article_filename}/{fname}"

    # 跳过已下载的文件
    if os.path.exists(fpath):
        continue

    req = urllib.request.Request(url, headers={
        'User-Agent': 'Mozilla/5.0',
        'Referer': 'https://mp.weixin.qq.com/'
    })
    with urllib.request.urlopen(req) as r:
        with open(fpath, 'wb') as f:
            f.write(r.read())
```

**文件扩展名判断**：URL 中包含 `wx_fmt=gif` → `.gif`，否则默认 `.png`。

#### 第 6 步：提取图片上下文及图例

对每张图片，提取其在 HTML 中的前后文本作为上下文，用于后续人工命名和识别图例：

```python
# 对每张图片在 decoded HTML 中的位置，提取前后各 300 字符
for i, m in enumerate(img_tags):
    url = m.group(1).replace('&amp;', '&')
    base = url.split('?')[0]

    # 找到在 unique_imgs 中的序号
    idx = -1
    for j, u in enumerate(unique_imgs):
        if u.split('?')[0] == base:
            idx = j
            break

    ctx_before = decoded[max(0, m.start()-300):m.start()]
    ctx_after = decoded[m.end():min(len(decoded), m.end()+300)]

    # 去除 HTML 标签
    ctx_before_text = re.sub(r'<[^>]+>', ' ', ctx_before)
    ctx_after_text = re.sub(r'<[^>]+>', ' ', ctx_after)
    ctx_before_text = re.sub(r'\s+', ' ', ctx_before_text).strip()
    ctx_after_text = re.sub(r'\s+', ' ', ctx_after_text).strip()

    ext = 'gif' if 'wx_fmt=gif' in url else 'png'
    print(f'Imag {idx+1} [{ext}]: ...{ctx_before_text[-150:]} | {ctx_after_text[:150]}...')

    # 识别图例（常见模式：▲ 图1、图1：、Figure 1 等前缀）
    caption_kw = ['▲', '▼', '图', '▲图', '▼图', 'Figure', 'Fig.']
    for kw in caption_kw:
        if ctx_after_text.strip().startswith(kw) or kw in ctx_before_text[-80:]:
            print(f'  *** [CAPTION] detected near this image')
            break
```

---

### 阶段二：审核上下文并生成 Markdown（半自动）

#### 第 7 步：分析图片内容，确定命名（含图例处理）

**不要**在拿到上下文之前预先给图片命名。正确的流程是：

1. 运行阶段一脚本，获取所有图片的上下文文本
2. 阅读 `.article_text.txt` 了解全文结构（**通过 Read 工具读取，而非终端打印**）
3. 阅读已有的综合案例 Markdown 文件了解格式规范
4. 根据每张图片的上下文+文件大小，分类并命名：

**图片三分类**（结合文件大小判定）：
1. **内容图片**（大图，通常 >10KB）：UI 截图、轨迹图、数据表格——**必须在正文引用**
2. **装饰图片**（小图，通常 <5KB 或 GIF）：分隔线、小节图标——保留文件但**不在正文引用**
3. **公众号信息图**（END 图、二维码、团队 Logo）——在文末 `---` 分隔线后引用

**图例处理（重要）**：

微信公众号文章中图片常带有独立图例文字，如 `▲ 图1 轨道示意图`、`图2：参数设置`、`（图片来源：NASA）` 等。**必须将这些图例转为 VuePress 图片格式，不保留原始图例文字**：

| 原文图例格式 | 处理方式 | 最终 Markdown |
|------------|---------|--------------|
| `▲ 图1 轨道示意图` | 提取描述文字作 alt text，删除 "▲ 图1" 前缀 | `![轨道示意图](path)` |
| `图2：参数设置界面` | 提取描述文字作 alt text，删除 "图2：" 前缀 | `![参数设置界面](path)` |
| `▲ 图3 轨道三维示意图` | 提取核心描述，去编号去箭头 | `![轨道三维示意图](path)` |
| `如下图所示：` + 图 | "如下" 是正文引导语，保留；图本身用上下文描述 | 正文保留"如下图所示："，`![描述](path)` |
| 图后紧跟 `（图：XXX示意图）` | 描述合并进 alt text，删除括号图例文字 | `![XXX示意图](path)` |
| 无图例 | 从上下文推断描述 | `![上下文描述](path)` |

**核心原则**：
- **不保留原始图例**：`▲ 图1`、`图2：`、`Figure 3` 等编号前缀全部丢弃
- **不保留三角箭头**：`▲`、`▼` 等装饰符号不进入 alt text
- **描述性文字进 alt text**：图例中的核心描述（如"轨道示意图"）用作 `![描述](path)` 的 alt text
- **正文引导语保留**：`如下图所示`、`如下表所示` 等引导性文字保留为正文段落
- **图片编号以文件名为准**：文件名 `imageXX-描述.png` 的编号与图片出现顺序一致，不依赖原文图例编号

**命名规则**：
- 格式：`imageXX-中文描述.png`（XX 为两位数字序号，保持原始顺序）
- 中文描述从**图例文字或上下文关键词**推断，如"轨道示意图"、"覆盖弧段详情表"、"右键选择覆盖性分析"
- 封面图（image01）通常作为 frontmatter thumbnail
- 分隔线 GIF 命名为 `imageXX-分隔线.gif` 或 `imageXX-小节图标.gif`

**注意**：某些图像类型可能与 URL 中的 `wx_fmt` 不一致。以实际下载的文件扩展名为准。如果 `os.rename` 时源文件不存在，检查是否扩展名猜测错误（`.png` vs `.gif`）。

#### 第 8 步：编写 Markdown 文件

按照 ATK 文档规范格式化，参考 `综合案例/地月自由返回轨道设计.md` 的写法。

**关键：f-string 中的 LaTeX 转义问题**

由于 LaTeX 公式大量使用 `\` 和 `{}`，在 Python f-string 中会产生冲突：
- `\Omega` 中的 `\O` 被 Python 3.12+ 警告为非法转义
- `\{` 在 f-string 中是非法转义序列
- `{mn}` 会被解析为变量插值

**正确的做法**：在 f-string 中：
- 每个 `\` → `\\`（双反斜杠）
- 每个 `{` → `{{`（双花括号）
- 每个 `}` → `}}`（双花括号）

示例：
```python
# 错误写法（会报 SyntaxError 或 SyntaxWarning）：
f'$\Omega_{mn}$'

# 正确写法：
f'$\\Omega_{{mn}}$'
```

对于长篇 Markdown，推荐使用短变量名减少插值噪音：
```python
T = core_title  # 短别名
md = f'...![{desc}](./media/{T}/image04-{name}.png)...'
```

**Frontmatter**：
```yaml
---
description: 基于 ATK 星座设计模块，使用 Walker 星座实现 XX 设计与分析。
thumbnail: /综合案例/media/${filename}/image01-XX示意图.png
---
```

**标题**：`# 文章核心标题`（去掉 "ATK特定问题建模——" 等系列前缀）

**内容格式化规则**：
- `## ` 用于大节标题（如：内容简介、场景创建与星座生成、星座覆盖性能分析、参考文献）
- `### ` 用于小节标题（如：Walker 星座模型、点目标覆盖分析）
- 编号列表 `1. **小节标题**` 用于操作步骤
- `<kbd>按钮名</kbd>` 标记 UI 按钮/菜单项
- `![描述](./media/${filename}/imageXX-描述.png)` 引用图片（**alt 文字即 VuePress 图例**，不保留原文独立的 "▲ 图1" 等图例格式）
- LaTeX 公式用 `$...$` 包裹（如 `$(-100, 0, 0)$`）
- 数字和单位间加空格：`100 km`、`86400 s`、`0.01 km`、`24 h`、`60 s`
- 参数名/属性值用双引号包裹：`"NumCircles"`、`"CAsStopPeriapsis"`
- 坐标系/对象名用双引号：`"Earth CAsJ2000Axes"`、`"ReferenceSpacecraft"`
- 引用标注用 `<sup>[1]</sup>` 上标格式

**文章开头处理**：
- 标题下紧接一行元信息：`完成人：XX | 完成日期：YYYY 年 M 月 D 日 | ATK 版本号：ATK X.X`

**文章末尾处理**：
- 参考文献用 `## 参考文献` 章节
- 公众号自带的团队介绍/下载信息放在 `---` 分隔线后
- 团队介绍段落前加 `*ATK 软件与研发团队介绍*：` 斜体标题
- 保留 `END` 分隔图引用
- 保留公众号二维码/关注信息图引用

**文件名**：`综合案例/${核心标题}.md`

#### 第 9 步：清理临时文件

```bash
rm -f .temp_wechat.html .article_decoded.html .article_text.txt .extract_wechat.py .finalize_article.py
```

---

## 关键注意事项

### 终端编码陷阱

Windows 终端（GBK 编码）打印 UTF-8 中文时会显示乱码，**但这不影响文件内容**。解决方式：
- 所有内容先写入文件（UTF-8），再用 **Read 工具** 读取查看 — Read 工具正确渲染 UTF-8
- 不要依赖终端 `echo`/`print` 输出来判断中文内容是否正确
- 验证方法：Read 文件后检查中文是否正常显示

### 图片分类阈值

实际阈值需要灵活调整：

| 类型 | 典型大小 | 处理方式 |
|------|----------|----------|
| 内容大图（截图、图表） | 50KB ~ 700KB | 正文引用 |
| 公式图、小表格 | 2KB ~ 30KB | 正文引用 |
| 分隔线/装饰图标 | <5KB | 保留，不引用 |
| 小节图标 GIF | 30KB ~ 40KB | 保留，不引用 |
| END 图 / 二维码 | 2KB ~ 15KB | 文末引用 |

**关键判断依据是图片上下文，而非仅靠文件大小**。例如 3KB 的公式 PNG 图虽然很小，但在正文中需要引用。

### 内容清洗

去掉以下微信排版特有的冗余内容：
- "基本信息" 装饰框（作者/日期/版本号信息提取为正文第一行元信息）
- 重复多次的分隔线（image02 在正文中出现多次是同一张图，只保留文件，不在正文引用）
- 公众号头部/尾部装饰元素
- `<v:shape>` 等 Word 粘贴残留标签
- **图片图例**：`▲ 图1`、`图2：`、`Figure 3`、`（图：XXX）` 等独立图例文字——转为 `![alt](path)` 的 alt 文字后删除原文，不保留原始图例格式
- **三角箭头符号**：`▲`、`▼` 等装饰符号不进入 alt text

### 公式转换
- `l` → `$l$`（作为变量）
- `(-100, 0, 0)` → `$(-100, 0, 0)$`
- `∆Ω＝2π/P` → `$\Delta\Omega = 2\pi/P$`
- 保留单位不进入公式：`$l = 2$ km`
- Greek 字母：`∆` → `\Delta`，`Ω` → `\Omega`，`Φ` → `\Phi`，`λ` → `\lambda`，`ρ` → `\rho`，`ε` → `\varepsilon`

### 图片引用路径
- Markdown 中图片路径使用 **相对路径**：`./media/${filename}/imageXX-描述.png`
- Frontmatter 中 thumbnail 使用 **绝对路径**：`/综合案例/media/${filename}/image01-XX.png`

---

## 完整脚本模板

### 阶段一脚本（`.extract_wechat.py`）

```python
# -*- coding: utf-8 -*-
import re, os, urllib.request

HTML = 'F:/moneyProject/ATK/smsat/atk-doc/.temp_wechat.html'
BASE = 'F:/moneyProject/ATK/smsat/atk-doc'

with open(HTML, 'r', encoding='utf-8') as f:
    html = f.read()

# 1. 元数据
title = re.search(r"var\s+msg_title\s*=\s*'([^']+)'", html).group(1)
title = title.replace(".html(false)", "")
core_title = re.sub(r'^ATK[^——]*——', '', title)
nickname_m = re.search(r'var\s+nickname\s*=\s*htmlDecode\("([^"]*)"\)', html)
nickname = nickname_m.group(1) if nickname_m else ''
ct_ts = int(re.search(r'var\s+ct\s*=\s*"([^"]*)"', html).group(1))
print(f'Title: {title}')
print(f'Core: {core_title}')
print(f'Nickname: {nickname}')

# 2. content_noencode
start = html.find("content_noencode: '")
start = html.find("'", start) + 1
pos = start
while pos < len(html):
    if html[pos] == '\\': pos += 2
    elif html[pos] == "'": break
    else: pos += 1
decoded = re.sub(r'\\x([0-9a-fA-F]{2})',
    lambda m: chr(int(m.group(1), 16)), html[start:pos])

# 保存 decoded HTML
with open(f'{BASE}/.article_decoded.html', 'w', encoding='utf-8') as f:
    f.write(decoded)

# 3. 提取图片 URL（去重保序，基于 URL base）
img_tags = list(re.finditer(r'data-src="(https://mmbiz\.qpic\.cn/[^"]+)"', decoded))
seen = set()
unique_imgs = []
for m in img_tags:
    url = m.group(1).replace('&amp;', '&')
    base = url.split('?')[0]
    if base not in seen:
        seen.add(base)
        unique_imgs.append(url)

print(f'Unique images: {len(unique_imgs)}')

# 4. 下载图片
MEDIA = f'{BASE}/综合案例/media/{core_title}'
os.makedirs(MEDIA, exist_ok=True)
for i, url in enumerate(unique_imgs):
    ext = "gif" if "wx_fmt=gif" in url else "png"
    fname = f'image{i+1:02d}-temp.{ext}'
    fpath = f'{MEDIA}/{fname}'
    if os.path.exists(fpath):
        print(f'  [{i+1}] {fname} exists ({os.path.getsize(fpath)} bytes), skipping')
        continue
    req = urllib.request.Request(url, headers={
        'User-Agent': 'Mozilla/5.0', 'Referer': 'https://mp.weixin.qq.com/'
    })
    with urllib.request.urlopen(req) as r:
        with open(fpath, 'wb') as f:
            f.write(r.read())
    print(f'  [{i+1}] {fname} downloaded ({len(r.read())} bytes)')

# 5. 转换为纯文本（带图片占位符）
# 构建图片 URL → 序号映射
url_to_idx = {}
for j, u in enumerate(unique_imgs):
    url_to_idx[u.split('?')[0]] = j + 1

clean = re.sub(r'<script[^>]*>.*?</script>', '', decoded, flags=re.DOTALL)
clean = re.sub(r'<style[^>]*>.*?</style>', '', clean, flags=re.DOTALL)

def replace_img(m):
    data_src = re.search(r'data-src="([^"]+)"', m.group(0))
    if data_src:
        src = data_src.group(1).replace('&amp;', '&')
        base = src.split('?')[0]
        idx = url_to_idx.get(base, '??')
        return f'\n\n[IMG_{idx:02d}]\n\n' if isinstance(idx, int) else '\n\n[IMG_??]\n\n'
    return '\n\n[IMG_??]\n\n'

clean = re.sub(r'<img[^>]*>', replace_img, clean)
text = re.sub(r'<br\s*/?>', '\n', clean)
text = re.sub(r'<[^>]+>', '', text)
text = re.sub(r'&nbsp;', ' ', text)
text = re.sub(r'&amp;', '&', text)
text = re.sub(r'&lt;', '<', text)
text = re.sub(r'&gt;', '>', text)
text = re.sub(r'&quot;', '"', text)
text = re.sub(r'\n{3,}', '\n\n', text)

with open(f'{BASE}/.article_text.txt', 'w', encoding='utf-8') as f:
    f.write(text)

print(f'Text saved ({len(text)} chars)')

# 6. 打印图片上下文和文件大小（用于人工命名决策）
print('\n=== Image Contexts & Sizes ===')
for i, m in enumerate(img_tags):
    url = m.group(1).replace('&amp;', '&')
    base = url.split('?')[0]
    idx = url_to_idx.get(base, -1)

    ctx_before = decoded[max(0, m.start()-300):m.start()]
    ctx_after = decoded[m.end():min(len(decoded), m.end()+300)]
    ctx_before_text = re.sub(r'<[^>]+>', ' ', ctx_before)
    ctx_after_text = re.sub(r'<[^>]+>', ' ', ctx_after)
    ctx_before_text = re.sub(r'\s+', ' ', ctx_before_text).strip()
    ctx_after_text = re.sub(r'\s+', ' ', ctx_after_text).strip()

    ext = 'gif' if 'wx_fmt=gif' in url else 'png'
    fpath = f'{MEDIA}/image{idx:02d}-temp.{ext}'
    sz = os.path.getsize(fpath) if os.path.exists(fpath) else 0

    print(f'\n  Img {idx} [{ext}] ({sz} bytes):')
    print(f'    Before: ...{ctx_before_text[-120:]}')
    print(f'    After: {ctx_after_text[:120]}...')
```

### 阶段二脚本（`.finalize_article.py`）

阶段二脚本先阅读 `.article_text.txt` 和图片上下文输出，**手动确定**每张图片的中文名称后，在脚本中填充 `renames` 字典，然后运行生成 Markdown。

```python
# -*- coding: utf-8 -*-
import os

BASE = 'F:/moneyProject/ATK/smsat/atk-doc'
core_title = '灾害监测星座对地覆盖性能分析'  # 从阶段一获取

MEDIA = f'{BASE}/综合案例/media/{core_title}'

# === 根据阶段一的上下文输出，人工填写此字典 ===
renames = {
    'image01-temp.png': 'image01-封面示意图.png',
    'image02-temp.png': 'image02-分隔线.png',        # 装饰图，不引用
    'image03-temp.gif': 'image03-小节图标.gif',       # 装饰图，不引用
    'image04-temp.png': 'image04-参数定义图.png',
    # ... 根据上下文逐一命名
    'image26-temp.gif': 'image26-END分隔图.gif',
    'image27-temp.png': 'image27-ATK公众号信息.png',
}

# 执行重命名（处理扩展名可能不匹配的情况）
for old_name, new_name in renames.items():
    old_path = f'{MEDIA}/{old_name}'
    new_path = f'{MEDIA}/{new_name}'
    if os.path.exists(old_path):
        if os.path.exists(new_path):
            os.remove(new_path)
        os.rename(old_path, new_path)
        print(f'Renamed: {old_name} -> {new_name}')
    else:
        # 扩展名猜测错误时自动修正
        alt_ext = 'gif' if old_name.endswith('.png') else 'png'
        alt_name = old_name.rsplit('.', 1)[0] + '.' + alt_ext
        if os.path.exists(f'{MEDIA}/{alt_name}'):
            if os.path.exists(new_path):
                os.remove(new_path)
            os.rename(f'{MEDIA}/{alt_name}', new_path)
            print(f'Renamed (alt ext): {alt_name} -> {new_name}')
        else:
            print(f'WARNING: {old_name} not found')

# === 编写 Markdown（使用短变量名 + f-string 双花括号转义） ===
T = core_title  # 短别名，减少 f-string 噪音

# LaTeX 转义规则（f-string 内）：
#   \  → \\   （反斜杠）
#   {  → {{   （左花括号）
#   }  → }}   （右花括号）
# 示例：$\Omega_{mn}$ → $\\Omega_{{mn}}$

md_content = f'''---
description: 基于 ATK XX 模块，使用 XX 方法实现 XX 设计与分析。
thumbnail: /综合案例/media/{T}/image01-封面示意图.png
---

# {T}

完成人：XX | 完成日期：YYYY 年 M 月 D 日 | ATK 版本号：ATK X.X

## 内容简介

...正文内容...

![图片描述](./media/{T}/imageXX-描述.png)

## 参考文献

[1] ...

---

*ATK 软件与研发团队介绍*：...

![END](./media/{T}/image26-END分隔图.gif)

![ATK公众号信息](./media/{T}/image27-ATK公众号信息.png)
'''

with open(f'{BASE}/综合案例/{core_title}.md', 'w', encoding='utf-8') as f:
    f.write(md_content)

print(f'Markdown written: 综合案例/{core_title}.md')
```

---

## 输出检查清单

- [ ] 文章 `.md` 文件写入 `综合案例/` 目录，文件名不含 ATK 前缀
- [ ] 图片下载到 `综合案例/media/${filename}/` 子目录
- [ ] 图片使用 `imageXX-中文描述.png` 格式命名
- [ ] Frontmatter 包含 `description` 和 `thumbnail`（thumbnail 为绝对路径）
- [ ] 正文使用 `##` / `###` 层级标题，编号步骤使用 `1. **步骤名**`
- [ ] UI 按钮使用 `<kbd>` 标签
- [ ] 图片引用路径为相对路径 `./media/${filename}/imageXX.png`
- [ ] 图片 alt 文字已从图例提取，原始 "▲ 图1" 等图例格式已删除，不保留在正文中
- [ ] 正文中无残留的独立图例文字（如 `▲ 图1`、`图2：`、`（图：XXX）`）
- [ ] 图片 alt 文字中无三角箭头等装饰符号
- [ ] 数字与单位间有空格（`24 h`、`60 s`、`100 km`）
- [ ] LaTeX 公式正确转义（f-string 中 `\\` + `{{}}`）
- [ ] 参考文献为独立 `## 参考文献` 章节，使用 `[1]` 格式
- [ ] 团队介绍在 `---` 分隔线后，以 `*ATK 软件与研发团队介绍*：` 开头
- [ ] 清理所有临时文件（`.temp_wechat.html`, `.article_decoded.html`, `.article_text.txt`, `.extract_wechat.py`, `.finalize_article.py`）
