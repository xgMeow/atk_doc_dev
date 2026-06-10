---
name: deploy
description: 执行完整部署流程：公式检查 → 链接检查 → Windows 构建 → 麒麟构建 → 打包压缩。仅手动调用。
---

# ATK 文档打包部署工具

> **手动触发技能。** 不根据上下文自动激活。仅当用户明确输入 `/deploy`、`打包部署`、`构建部署`、`发布部署` 等指令时执行。

## 核心原则

1. **逐步推进，遇错即停**：每一步完成后才进行下一步；任何一步失败（检查或构建报错）必须修复并通过验证后才能继续。
2. **先修后报**：遇到错误先自行分析错误信息并尝试修复，不要直接把错误丢给用户。修复完成后向用户说明修复了什么问题，经用户允许后再继续下一步。
3. **不跳过检查**：公式检查和链接检查不可跳过。如检查结果存在不确定项，列出给用户确认。
4. **不改业务内容**：修复错误时只改格式、路径、配置等技术问题，不改文档含义、数据、结论。
5. **仅手动触发**：此技能不根据上下文自动激活。

## 前置条件

1. 确认当前处于 `master` 分支且工作区干净（无未提交改动）。
2. 确认 `.deployignore` 文件存在，如其内容需要调整，可在打包前编辑。

## 工作流程

### 第 1 步：公式检查

调用 `atk-formula-checker` 技能检查项目公式：

```
Skill: atk-formula-checker
```

**成功条件**：公式检查完成，无疑问或用户已确认所有不确定项。

**失败处理**：
- 阅读错误信息，定位具体文件和行号
- 如果是明显的公式分隔符问题，直接修复
- 修复后重新检查直到通过
- 将修复内容报告给用户

### 第 2 步：链接检查

调用 `atk-link-checker` 技能检查项目链接：

```
Skill: atk-link-checker
```

**成功条件**：链接检查完成，无疑问或用户已确认所有不确定项。

**失败处理**：
- 阅读错误信息，定位具体文件和链接
- 如果是明显的路径错误、文件名拼写、大小写问题，直接修复
- 修复后重新检查直到通过
- 将修复内容报告给用户

### 第 3 步：构建 Windows 版

```bash
npm run build:standalone
```

**输出目录**：`.dist/standalone/`

**失败处理**：
- 阅读构建输出中的错误信息
- 常见问题及修复策略：

  | 错误类型 | 修复方法 |
  |----------|----------|
  | 公式渲染报错 | 检查报错文件中的 `$`/`$$` 是否成对、`\` 是否被转义 |
  | 链接/路径 404 | 检查 `.vuepress/config-standalone.ts` 的 base 配置和文件路径 |
  | Vue 组件错误 | 检查 `.vuepress/components/` 下组件引用是否正确 |
  | 主题/插件配置错误 | 检查 `.vuepress/config.ts` 和对应 build config |
  | Markdown 语法错误 | 检查报错文件的具体行，修复 YAML frontmatter 或 Markdown 语法 |
  | 内存不足 | 建议用户增加 Node.js 内存限制或关闭其他应用 |

- 修复后重新构建直到通过
- 将修复内容报告给用户

### 第 4 步：构建麒麟版

```bash
npm run build:standalone-kylin
```

**输出目录**：`.dist/standalone-kylin/`

**失败处理**：与第 3 步相同的处理流程。特别关注 `.vuepress/config-standalone-kylin.ts` 的配置问题。

### 第 5 步：打包压缩

#### 5.1 确认构建产物

```bash
ls -la .dist/standalone/
ls -la .dist/standalone-kylin/
```

确保两个构建产物目录都存在且非空。

#### 5.2 确定版本号

从 `package.json` 读取 `version` 字段，或从最近的 git tag 获取版本号。

打包文件命名格式：`ATK-doc-standalone-v{version}.zip` 和 `ATK-doc-standalone-kylin-v{version}.zip`

#### 5.3 收集打包文件清单

**Windows 版打包内容**：

```
.dist/standalone/          → ATK-doc-standalone-v{version}/
```

**麒麟版打包内容**：

```
.dist/standalone-kylin/    → ATK-doc-standalone-kylin-v{version}/
```

**源码打包**（可选，如用户要求）：
使用 `.gitignore` + `.deployignore` 双规则排除，生成 `ATK-doc-source-v{version}.zip`。

确定源文件清单的方法：

```bash
# 方法：用 git ls-files 获取 git 跟踪的文件（自动遵守 .gitignore）
# 再用 .deployignore 的规则二次过滤
git ls-files --cached --others --exclude-standard > /tmp/deploy-files.txt
```

然后逐条用 `.deployignore` 的规则排除。`.deployignore` 的解析方法：
- 忽略空行和 `#` 开头的注释行
- `!` 开头的模式表示取消排除（白名单）
- 目录模式（以 `/` 结尾）匹配目录
- 以 `/` 开头的模式从项目根目录匹配
- 其余模式按 gitignore 语义匹配

**内置排除**（硬编码，不出错）：
- `.git/`
- `node_modules/`
- `.dist/`（源码包不需要）
- 已有的 `.zip`/`.rar`/`.7z` 文件

#### 5.4 执行打包

Windows 版：
```bash
cd .dist/standalone && zip -r "../../ATK-doc-standalone-v{version}.zip" . && cd ../..
```

麒麟版：
```bash
cd .dist/standalone-kylin && zip -r "../../ATK-doc-standalone-kylin-v{version}.zip" . && cd ../..
```

源码包（如需要）：
```bash
# 基于 git ls-files 结果，排除 .deployignore 中的模式
# 然后用 zip 打包
zip -r "ATK-doc-source-v{version}.zip" . -i <(从 git ls-files 过滤后的文件列表)
```

#### 5.5 验证打包结果

```bash
ls -lh ATK-doc-*.zip
unzip -l ATK-doc-standalone-v{version}.zip | head -20
```

确认：
- 文件大小合理（非 0 字节）
- 压缩包内有文件列表
- `index.html` 存在于根目录或子目录

### 第 6 步：输出部署摘要

打包完成后输出以下信息：

```markdown
## 部署打包完成

| 文件 | 大小 |
|------|------|
| ATK-doc-standalone-v{version}.zip | xxx MB |
| ATK-doc-standalone-kylin-v{version}.zip | xxx MB |

- 版本：v{version}
- 分支：develop
- 构建时间：{timestamp}
```

## 修复报告格式

当步骤中途修复了问题，必须使用以下格式向用户报告并请求继续：

```markdown
## {步骤名} 遇到问题，已修复

修复了以下问题：

1. `文件路径:行号` — 问题描述 → 修复方式

修复内容已通过验证。是否继续下一步？
```

用户确认后再继续。

## 禁止事项

- 禁止跳过公式检查或链接检查直接构建。
- 禁止在构建失败后不修复直接跳过该步骤。
- 禁止修改文档的业务内容、数据、公式含义。
- 禁止在用户未确认修复内容的情况下继续下一步。
- 禁止使用 `-f` / `--force` 覆盖已有的部署包。
- 禁止把构建错误直接丢给用户而不尝试修复。
- 禁止修改 `.vuepress/config*.ts` 中的 base、路由等核心配置，除非确认为错误且用户同意。
