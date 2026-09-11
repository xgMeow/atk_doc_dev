# ATK 注册码获取指南页面无限重定向问题排查

查清了，不是构建产物的问题——产物完全正常（`.dist/online/zh/01-安装/03-ATK注册码获取指南/index.html` 是存在的）。

## 直接原因：两个坑叠加

### 坑 1：patch 把所有重定向页改成了「相对路径」

`patches/@vuepress+plugin-redirect+2.0.0-rc.26.patch` 给插件注入了一个 `url_relative()`：

```js
to = url_relative(path.dirname(from), to)
```

配合 `src/.vuepress/redirect.ts:5` 的 `"/": "/zh/"`，生成出来的站点根 `.dist/online/index.html` 内容是：

```html
<meta http-equiv="refresh" content="0; url=zh/index.html">
<script>location.href = `zh/index.html${...}`;</script>
```

注意是 `zh/index.html`（相对），不是 `/zh/index.html`。

### 坑 2：服务器把 404 回退到站点根 /index.html

这是 SPA 回退的典型配法（`try_files $uri /index.html;` 之类）。

## 循环是怎么滚起来的

浏览器解析相对路径，是以当前地址最后一层目录为基准的：

1. 请求 `/zh/01-安装/03-ATK注册码获取指南/` → 服务器没命中（目录索引没生效，见下）→ 回退返回根目录的 `/index.html`
2. 根 `index.html` 里那句相对跳转，基准是 `/zh/01-安装/03-ATK注册码获取指南/` → 跳到 `.../03-ATK注册码获取指南/zh/index.html`
3. 这个路径不存在 → 又是 404 → 又回退到根 `index.html` → 基准变成 `.../03-ATK注册码获取指南/zh/` → 再拼一个 `zh/`
4. 如此往复 —— 正好就是你看到的 `/zh/zh/zh/zh/.../index.html`

第 2 步是关键：如果生成的是 `/zh/index.html`（绝对路径），第 1 步 404 之后只会跳一次就结束，不会滚雪球。

而 `.../03-ATK注册码获取指南/index.html` 正常，是因为它直接命中了真实文件，根本不进 404 回退，也就永远碰不到那个相对跳转页。

> 至于为什么第一个请求会 404：大概率是服务器的 `try_files` 没带 `$uri/`，请求以 `/` 结尾的目录 URL 时 `$uri` 匹配到的是目录不是文件，直接被判为未命中。可以在浏览器 DevTools 的 Network 里看第一次请求的状态码确认。

## 为什么当初要改成相对

`build:standalone` 产出的离线版要用 `file://` 直接打开，绝对路径 `/zh/...` 会指到磁盘根目录，所以 patch 里统一改成了相对。但这个 patch 对 online 构建同样生效了——这是问题根源。

## 建议的修法

### A. 服务器侧（立刻能缓解，不用重新构建）

```nginx
location / {
    index index.html;
    try_files $uri $uri/ =404;   # 关键：带上 $uri/
}
error_page 404 /404.html;        # 用 VuePress 自带的 404.html
```

要点两条：

- `try_files` 必须包含 `$uri/`（或 `$uri/index.html`），让目录 URL 能命中目录索引；
- 404 回退指向 `/404.html`（`.dist/online/404.html` 已经生成了），**绝不能指向 `/index.html`**，否则还会踩到相对跳转的坑。

### B. 构建侧（根治，防止在任何服务器上复发）—— 已实施

让相对路径只对 standalone 生效。standalone 用的是自定义 webpack bundler（`name: "@vuepress/bundler-webpack"`），online 用 vite bundler（`name: "@vuepress/bundler-vite"`），所以在 patch 里判一下即可。

`generateRedirectFiles` 的第一个参数就是 app，被解构成了 `{dir, options}`，而 `options` 就是 `app.options`，所以直接取 `options.bundler.name`，签名不用动：

```js
// 仅离线版（file://）需要相对路径
const useRelative = options.bundler.name === '@vuepress/bundler-webpack';
...
if (useRelative)
    to = url_relative(path.dirname(from), to)
```

顺手加了一道保险：绝对路径目标以 `/` 结尾时补上 `index.html`。

```js
? `${resolvedHostname}${options.base}${removeLeadingSlash(to)}`.replace(/\/$/, 'index.html')
```

这样 `/topics/Scenario/CoverageDefinition` → `/zh/03-基础使用指南/02-场景管理/03-场景属性配置/index.html`，直接命中真实文件，连目录索引都不用指望——服务器就算没配 `$uri/`，第一次跳转就能落地。

已重跑 `npm run build:online` 验证，`.dist/online` 下 71 个重定向页全部变成绝对路径：

- `index.html` → `url=/zh/index.html`
- `topics/Tool/LWCAT.html` → `url=/zh/5.专业使用指南/19-发射窗口接近分析工具.html`

standalone 那条分支的代码路径没变（`url_relative` 之后 `isLinkAbsolute` 必为 false，新加的 `.replace` 是死代码），离线包产物不受影响——这是代码路径推断，没有重跑 standalone 构建验证（webpack 全量构建很慢）。下次打离线包时留意一下 `index.html` 里仍是 `url=zh/index.html` 即可。

patch 文件已用 `npx patch-package @vuepress/plugin-redirect` 重新生成，`技术文档/ATKS 语法高亮与重定向补丁维护指南.md` 里的说明同步更新过了。

## 遗留

- 服务器那份 nginx 配置仍建议按 A 方案改（`try_files $uri $uri/ =404` + 404 指向 `/404.html`）。B 让死循环不再可能发生，但目录 URL 该不该命中目录索引、404 该回哪里，仍然取决于服务器。
- `.dist/online` 这次是就地重建的（目录被占用，`rm -rf` 失败），里面可能残留上一版的哈希资源文件。上传前最好先清空再跑一次构建。