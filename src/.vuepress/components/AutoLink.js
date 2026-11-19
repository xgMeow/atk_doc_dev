// 复制自 vuepress-theme-hope 2.0.0-rc.37 的 AutoLink 组件
// （lib/client/components/AutoLink.js），只加了以下两处改动：
//   1. 链接以 atk-component: 开头时，按当前页面层级解析成组件文档地址
//      （组件文档与站点产物同级、在站点目录之外，见 shared/component-doc.js），
//      并按外链渲染；
//   2. 这类链接渲染成 <a> 而非 <RouteLink> 时会丢掉 route-link 类，而本站导航栏
//      下拉菜单的样式（内边距、hover 背景）是按 a.route-link.nav-link 写的，
//      因此在这里补上，保证与站内导航项外观一致。
// 其余渲染逻辑与主题原版保持一致，主题升级后需重新复制并重放这两处改动。
//
// 之所以要在组件里解析而不是在 HTML 产物里改：站内路由切换后重新渲染的节点
// 拿到的仍是配置里的原始值，只有组件渲染期才知道当前页面在站点里的层级。
import { isLinkHttp, isLinkWithProtocol, keys, startsWith, } from "@vuepress/helper/client";
import { ExternalLinkIcon } from "@vuepress/plugin-external-link-icon/client";
import { computed, defineComponent, h, toRef } from "vue";
import { RouteLink, usePageData, useRoute, useSiteData } from "vuepress/client";
import HopeIcon from "@theme-hope/components/HopeIcon";
import { componentDocTarget, isComponentDocLink, resolveComponentDocHref, } from "../shared/component-doc.js";
export default defineComponent({
    name: "AutoLink",
    inheritAttrs: false,
    props: {
        /**
         * @description Autolink config
         */
        config: {
            type: Object,
            required: true,
        },
        /**
         * @description Whether it's active only when exact match
         */
        exact: Boolean,
        /**
         * @description Whether to hide externalLinkIcon
         */
        noExternalLinkIcon: Boolean,
    },
    emits: ["focusout"],
    slots: Object,
    setup(props, { attrs, emit, slots }) {
        const route = useRoute();
        const siteData = useSiteData();
        const page = usePageData();
        const config = toRef(props, "config");
        // 组件站链接：解析成当前页面层级下的实际地址
        const isComponentDoc = computed(() => isComponentDocLink(config.value.link));
        const linkHref = computed(() => isComponentDoc.value
            ? resolveComponentDocHref(componentDocTarget(config.value.link), page.value.path)
            : config.value.link);
        // If the link has http protocol（组件站链接一律按外链处理：站内路由不认识它，
        // 而且它要新标签页打开）
        const isHttp = computed(() => isComponentDoc.value || isLinkHttp(config.value.link));
        // If the link has non-http protocol
        const withProtocol = computed(() => !isHttp.value && isLinkWithProtocol(config.value.link));
        // Resolve the `target` attr
        const linkTarget = computed(() => config.value.target || (isHttp.value ? "_blank" : undefined));
        // If the `target` attr is "_blank"
        const isBlankTarget = computed(() => linkTarget.value === "_blank");
        // Render `<RouteLink>` or not
        const renderRouteLink = computed(() => !isHttp.value && !withProtocol.value && !isBlankTarget.value);
        // Resolve the `rel` attr
        const linkRel = computed(() => config.value.rel ||
            (isBlankTarget.value ? "noopener noreferrer" : null));
        // Resolve the `aria-label` attr
        const linkAriaLabel = computed(() => config.value.ariaLabel || config.value.text);
        // Should be active when current route is a subpath of this link
        const shouldBeActiveInSubpath = computed(() => {
            // Should not be active in `exact` mode
            if (props.exact)
                return false;
            const localeKeys = keys(siteData.value.locales);
            return localeKeys.length
                ? // Check all the locales
                    localeKeys.every((key) => key !== config.value.link)
                : // Check root
                    config.value.link !== "/";
        });
        // If this link is active
        const isActive = computed(() => renderRouteLink.value
            ? config.value.activeMatch
                ? new RegExp(config.value.activeMatch, "u").test(route.path)
                : // If this link is active in subpath
                    shouldBeActiveInSubpath.value
                        ? startsWith(route.path, config.value.link)
                        : route.path === config.value.link
            : false);
        return () => {
            const { before, after, default: defaultSlot } = slots;
            const { text, icon } = config.value;
            return renderRouteLink.value
                ? h(RouteLink, {
                    to: linkHref.value,
                    "aria-label": linkAriaLabel.value,
                    ...attrs,
                    // Class needs to be merged manually
                    class: ["nav-link", { active: isActive.value }, attrs["class"]],
                    onFocusout: () => emit("focusout"),
                }, () => defaultSlot
                    ? defaultSlot()
                    : [before ? before() : h(HopeIcon, { icon }), text, after?.()])
                : h("a", {
                    href: linkHref.value,
                    rel: linkRel.value,
                    target: linkTarget.value,
                    "aria-label": linkAriaLabel.value,
                    ...attrs,
                    // Class needs to be merged manually；<RouteLink> 自带的 route-link
                    // 这里没有，本站导航栏下拉菜单样式依赖它，需为组件站链接补上
                    class: [
                        isComponentDoc.value ? "route-link" : null,
                        "nav-link",
                        attrs["class"],
                    ],
                    onFocusout: () => emit("focusout"),
                }, defaultSlot
                    ? defaultSlot()
                    : [
                        before ? before() : h(HopeIcon, { icon }),
                        text,
                        props.noExternalLinkIcon ? null : h(ExternalLinkIcon),
                        after?.(),
                    ]);
        };
    },
});
