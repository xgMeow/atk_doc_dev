// 文档站点的 base 路径，所有页面链接都相对于此路径
// GitHub Actions 构建时通过 GITHUB_REPOSITORY 自动检测仓库名并设置 base：
//   atk_doc → /atk_doc/，atk_doc_dev → /atk_doc_dev/，以此类推
// 本地开发时 GITHUB_REPOSITORY 不存在，默认使用 '/'
// 注：使用 typeof 守卫防止浏览器端 process is not defined 错误
const repo = typeof process !== 'undefined' && process.env
  ? process.env.GITHUB_REPOSITORY?.split('/')[1]
  : undefined
export const siteBase = repo ? `/${repo}/` : '/'
