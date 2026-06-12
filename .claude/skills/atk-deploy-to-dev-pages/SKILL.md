---
name: atk-deploy-to-dev-pages
description: 将本地 develop 分支强制推送到 github-dev 远程的 main 分支，用于部署开发版。
---

# 部署开发版推送

将本地 `develop` 分支强制推送到 `github-dev` 远程的 `main` 分支。

## 何时使用

当用户提出以下任一请求时，应激活此 skill：

- "/deploy-dev"
- "部署开发版"
- "推送开发版"
- "发布开发版"
- "push 到 github-dev"
- "部署到 dev"

## 前置检查

1. 确认 `github-dev` 远程存在且为 SSH 地址（`git@github.com:xgMeow/atk_doc_dev.git`）
2. 如果远程地址是 HTTPS 格式，先执行：
   ```bash
   git remote set-url github-dev git@github.com:xgMeow/atk_doc_dev.git
   ```

## 执行步骤

### 第 1 步：确认当前分支

```bash
git branch --show-current
```

如果不是 `develop` 分支，先切换到 `develop`：
```bash
git checkout develop
```

### 第 2 步：推送到远程

```bash
git push -f github-dev develop:main
```

### 第 3 步：报告结果

- 推送成功时，显示远程 main 的更新摘要（old...new commit hash），并输出以下链接：

  - **Pages 页面**：`https://xgmeow.github.io/atk_doc_dev/`
  - **仓库地址**：`https://github.com/xgMeow/atk_doc_dev`
- 推送失败时，分析错误原因并给出建议：
  - **权限错误 (403)**：凭据问题，需要更新 GitHub Token 或改用 SSH
  - **连接错误 (10054 / Empty reply)**：HTTPS 网络干扰，切换到 SSH 地址
  - **non-fast-forward**：远程有本地没有的提交，确认后使用 `-f` 强制推送

## 禁止事项

- 禁止在非 develop 分支上推送
- 禁止推送到 `github-dev` 以外的远程
- 禁止推送到 `main` 以外的分支
