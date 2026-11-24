// Component 模式文档（atk-component 项目，Doxygen 生成）的链接解析。
//
// 组件文档不随本站源码构建：它由 atk-component 仓库的流水线产出，本站只负责取用与指路。
// 交付布局只有一种，在线版与离线版保持一致：组件文档与站点产物同级，位于站点目录之外的
// atk-component-doc/html/，入口是该目录的 index.html。
//
//   * 离线版：.dist/standalone* 是站点产物，.dist/atk-component-doc 在它旁边，随包交付；这个
//     目录里除 html/ 外还有 Doxygen 附带的 xml/，不进站内链接；
//   * 在线版：发布根下并列 online/（站点）与 atk-component-doc/（组件文档），组件文档由
//     scripts/fetch-component-doc.mjs 拉到站点旁边，包里只有 html 的内容：
//       - GitHub Pages：https://<user>.github.io/<repo>/online/ 与 .../<repo>/atk-component-doc/
//       - Gitea（站点在域名根）：https://atk-help.gitlink.org.cn/ 与 .../atk-component-doc/
//
// 因此从站内任意页面到组件文档都要先回到站点根，再多跳出一层站点目录。
//
// 在线版必须留出这一层：站点直接放在发布根（base 为 /<repo>/、不带 online/ 这一层）时，
// 多退一级会越过站点根到 origin 根，而 origin 根不在发布范围内，这个入口就跳不过去。
// 两条在线流水线的产物形态见 .github/workflows/deploy-docs.yml 与 .gitea/workflows/打包.yml。
//
// 必须在渲染时就算好：站内路由切换后重新渲染的节点不会经过任何产物的后处理，
// 只有组件渲染期拿得到当前页面路径，才能算出正确的 ../ 层数。

/** 组件文档相对站点目录的位置。交付布局变化（例如去掉末尾的 html）时只改这里。 */
export const COMPONENT_DOC_DIR = "atk-component-doc/html";

/** 组件文档链接前缀。配置里写成 `atk-component:index.html` 这种形式。 */
export const COMPONENT_DOC_PREFIX = "atk-component:";

/**
 * 是否是一条组件文档链接
 * @param {unknown} link
 */
export const isComponentDocLink = (link) =>
  typeof link === "string" && link.startsWith(COMPONENT_DOC_PREFIX);

/**
 * 去掉前缀，取出组件文档内的相对路径
 * @param {string} link
 */
export const componentDocTarget = (link) =>
  isComponentDocLink(link) ? link.slice(COMPONENT_DOC_PREFIX.length).replace(/^\/+/, "") : "";

/**
 * 把组件文档内的相对路径解析成当前页面可用的地址
 * @param {string} target 组件文档内的相对路径，如 index.html、page_component_flow_cpp.html
 * @param {string} pagePath 当前页面的站点路径，取自 usePageData().path
 */
export const resolveComponentDocHref = (target, pagePath) => {
  const rel = (target || "").replace(/^\/+/, "");

  // pagePath 形如 /zh/（首页，落在 zh/index.html）或 /zh/二次开发教程/x.html，
  // 目录层数按「路径里除文件名外的段数」算，首页以 / 结尾没有文件名要扣；
  // 回到站点根后再多补一层，才落到站点目录之外。
  const path = pagePath || "/";
  const segments = path.split("/").filter(Boolean);
  const depth = path.endsWith("/") ? segments.length : Math.max(segments.length - 1, 0);

  return "../".repeat(depth + 1) + COMPONENT_DOC_DIR + "/" + rel;
};
