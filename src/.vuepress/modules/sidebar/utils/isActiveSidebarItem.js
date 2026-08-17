import { isActiveLink } from "vuepress-shared/client";
export const isActiveSidebarItem = (route, item, exact = false) => {
    if ("activeMatch" in item)
        return new RegExp(item.activeMatch, "u").test(route.path);
    if (isActiveLink(route, item.link))
        return true;
    // 目录通过 prefix 定义结构时，README 页面不在 children 里，
    // 需要单独匹配 prefix，否则祖先节点不会高亮
    if ("prefix" in item && isActiveLink(route, item.prefix))
        return true;
    if ("children" in item && !exact)
        return item.children.some((child) => isActiveSidebarItem(route, child));
    return false;
};