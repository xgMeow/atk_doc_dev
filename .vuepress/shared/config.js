// 文档站点的 base 路径，所有页面链接都相对于此路径
// GitHub Actions 构建时通过 GITHUB_REPOSITORY 自动检测仓库名并设置 base：
//   atk_doc_dev → /atk_doc_dev/，其他非主仓库同理
// 主仓库 atk_doc（自定义域名）和本地开发默认使用 '/'
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
export const siteBase = repo && repo !== 'atk_doc' ? `/${repo}/` : '/'
