---
name: atk-deploy
description: 执行完整部署流程：公式检查 → 链接检查 → Windows 构建 → 麒麟构建 → 三包打包压缩。仅手动调用。
---

# ATK 文档打包部署工具

> **手动触发技能**，不随上下文自动激活。仅当用户明确输入 `/deploy`、`打包部署`、`构建部署`、`发布部署` 等指令时执行。

## 核心原则

1. **逐步推进，遇错即停**：每步完成后才进入下一步；任何一步失败必须修复并通过验证后才能继续。
2. **自动推进，遇疑方问**：流程正常或问题已自行修复后，**直接继续，不询问用户**。
3. **先修后报**：遇到错误先分析并尝试修复。修复成功则简要报告后继续；修复失败或不确定方案时停下来询问。
4. **不跳过检查**：公式检查和链接检查不可跳过。
5. **源码包必选**：除 Windows 版和麒麟版外，源码包也是必选项，不可跳过。
6. **不改业务内容**：修复只涉及格式、路径、配置等技术问题，不改文档含义、数据、结论。

> **何时停下**：原因不明确、涉及业务内容、修复失败、或检查结果存在不确定项时，描述现象及怀疑方向，询问用户决策。

## 前置条件

1. 确认当前处于 `master` 分支且工作区干净（无未提交改动）。
2. 确认 `.deployignore` 文件存在，如需调整可在打包前编辑。

## 工作流程

### 第 1 步：公式检查

调用 `atk-formula-checker` 技能。

**自动修复**：公式分隔符不配对、`\` 转义问题、明显格式错误 → 报告后继续。

**需询问**：公式含义不明确、修复后仍失败、涉及业务内容/数据/结论。

### 第 2 步：链接检查

调用 `atk-link-checker` 技能。

**关于 OverView.vue 和 redirect.ts 中的 `.html` 链接**：将其扩展名改为 `.md` 后在项目中查找对应文件即可验证，无需构建后验证。例如：
- `OverView.vue` 中 `link: "/5.专业使用指南/10-矢量几何工具.html"` → 对应 `5.专业使用指南/10-矢量几何工具.md`
- `redirect.ts` 中 `"/5.专业使用指南/01-可见性与覆盖分析/01-可见性工具.html"` → 对应 `5.专业使用指南/01-可见性与覆盖分析/01-可见性工具.md`

**自动修复**：路径错误、文件名拼写/大小写、链接文本与目标标题不匹配 → 报告后继续。

**需询问**：目标文件不存在且无法确定正确路径、修复后仍失败、不确定是否应修改该链接。

### 第 3 步：构建 Windows 版

```bash
npm run build:standalone
```

输出目录：`.dist/standalone/`

**常见错误处理**：

| 错误类型 | 处理方式 |
|----------|----------|
| 公式渲染报错 | 检查对应文件 `$`/`$$` 配对和 `\` 转义 |
| 链接/路径 404 | 检查 `config-standalone.ts` 的 base 配置；若涉及 `.html` 链接，按第 2 步方法定位对应 `.md` 文件 |
| Vue 组件错误 | 检查 `.vuepress/components/` 下的组件引用 |
| 主题/插件配置错误 | 检查 `.vuepress/config.ts` 和对应 build config |
| Markdown 语法错误 | 根据报错行号修复 YAML frontmatter 或 Markdown 语法 |

**需询问**：内存不足、修复后仍失败、涉及 base/路由等核心配置。

### 第 4 步：构建麒麟版

```bash
npm run build:standalone-kylin
```

输出目录：`.dist/standalone-kylin/`

处理方式同第 3 步，特别关注 `config-standalone-kylin.ts` 的配置。

### 第 5 步：打包压缩

#### 5.1 确认构建产物

确保 `.dist/standalone/` 和 `.dist/standalone-kylin/` 目录存在且非空。

#### 5.2 确定版本号

从 `package.json` 的 `version` 字段获取。打包文件命名：
- `ATK-doc-standalone-v{version}.zip`
- `ATK-doc-standalone-kylin-v{version}.zip`
- `ATK-doc-source-v{version}.zip`

#### 5.3 打包 Windows 版和麒麟版

```bash
cd .dist/standalone && zip -r "../../ATK-doc-standalone-v{version}.zip" . && cd ../..
cd .dist/standalone-kylin && zip -r "../../ATK-doc-standalone-kylin-v{version}.zip" . && cd ../..
```

#### 5.4 打包源码（必选）

1. 用 `git ls-files` 获取候选文件列表（自动遵循 `.gitignore`）
2. 读取 `.deployignore`，按其规则过滤（忽略空行和 `#` 注释；`!` 为白名单；`/` 结尾匹配目录；`/` 开头从根目录匹配；其余按 gitignore 语义）
3. 额外排除：`.git/`、`node_modules/`、`.dist/`、已有的 `.zip`/`.rar`/`.7z` 文件
4. 将过滤后的文件列表打包为 `ATK-doc-source-v{version}.zip`

#### 5.5 验证

确认三个压缩包：
- 文件大小合理（非 0 字节）
- Windows 版和麒麟版含 `index.html`
- 源码包含 `.md`、`.vue`、`.ts` 等源文件

### 第 6 步：输出部署摘要

```markdown
## 部署打包完成

| 文件 | 大小 |
|------|------|
| ATK-doc-standalone-v{version}.zip | xxx MB |
| ATK-doc-standalone-kylin-v{version}.zip | xxx MB |
| ATK-doc-source-v{version}.zip | xxx MB |

- 版本：v{version}
- 分支：master
- 构建时间：{timestamp}
```

## 报告格式

**自动修复时**（简要报告后直接继续，不询问用户）：

> ⚙️ 修复了以下问题后继续：
> 1. `文件路径:行号` — 问题描述 → 修复方式

**需用户决策时**：

## ⚠️ {步骤名} 遇到问题，需要您的决策

**现象**：{错误信息或异常行为}

**已尝试的方案**：{已尝试的修复和结果，或"尚未尝试"}

**需要确认的事项**：
1. {具体问题}

请问如何处理？
```

## 禁止事项

- 禁止跳过公式检查或链接检查直接构建
- 禁止跳过源码打包
- 禁止在构建失败后不修复直接跳过
- 禁止修改文档的业务内容、数据、公式含义
- 禁止在流程正常或问题已修复后询问用户是否继续
- 禁止使用 `-f`/`--force` 覆盖已有部署包
- 禁止把构建错误直接丢给用户而不尝试修复
- 禁止修改 `.vuepress/config*.ts` 中的 base、路由等核心配置（除非确认为错误且用户同意）
