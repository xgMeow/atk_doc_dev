// 文档站点的 base 路径，所有页面链接都相对于此路径
//
// 默认按 GitHub Pages 的规则推断：站点部署在 /<repo>/ 子路径下，
// 由 GITHUB_REPOSITORY 取仓库名（atk_doc → /atk_doc/，atk_doc_dev → /atk_doc_dev/）；
// 本地开发时该变量不存在，退化为 '/'。
//
// SITE_BASE_ROOT=true 用于覆盖上述推断：gitlink 把站点挂在独立域名
// （atk-help.gitlink.org.cn）的根路径下，没有 /<repo>/ 这一层，
// 由 .gitea/workflows/打包.yml 构建时设置。
//
// SITE_BASE_SUBDIR=online 用于在 /<repo>/ 之下再套一层站点目录：GitHub Pages 的发布根
// 并列存放站点与组件接口文档（online/ 与 atk-component-doc/），站点因此落在
// /<repo>/online/，base 随之变成 /<repo>/online/，由 .github/workflows/deploy-docs.yml
// 构建时设置。
//
// 这里特意用布尔标记而不是直接传 base 路径（如 SITE_BASE='/'）：Git Bash(MSYS)
// 会把 '/' 这类 POSIX 路径自动改写成 Windows 路径（实测变成 D:/ProgramTool/Git/），
// 当 runner 跑在 Windows 上时会让 base 静默跑偏。布尔值不受该转换影响。
//
// 注：使用 typeof 守卫防止浏览器端 process is not defined 错误
const env = typeof process !== 'undefined' && process.env ? process.env : {}
const atRoot = env.SITE_BASE_ROOT === 'true'
const repo = env.GITHUB_REPOSITORY?.split('/')[1]
// 站点在 /<repo>/ 之下的子目录名，去掉首尾斜杠；不设置时站点直接落在 /<repo>/
const sub = (env.SITE_BASE_SUBDIR || '').replace(/^\/+|\/+$/g, '')
const rootBase = atRoot || !repo ? '/' : `/${repo}/`
export const siteBase = sub ? `${rootBase}${sub}/` : rootBase
