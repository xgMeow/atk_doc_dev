// Component 模式文档（atk-component 项目，Doxygen 生成）的链接解析。
//
// 组件文档不随本站构建：它的产物与站点产物同级，位于站点目录之外——
// .dist/online、.dist/standalone* 是站点产物，组件文档是旁边的 .dist/atk-component-doc，
// 其站点入口在该目录的 html/index.html（同级还有 xml/，不对外）。
// 因此从站内任意页面到组件文档都要先回到站点根，再多跳出一层站点目录。
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
