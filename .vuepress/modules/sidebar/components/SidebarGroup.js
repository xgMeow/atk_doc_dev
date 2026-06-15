import { computed, defineComponent, h, onMounted, onUnmounted, ref } from "vue";
import { useRoute, useRouter } from "vuepress/client";
import AutoLink from "@theme-hope/components/AutoLink";
import HopeIcon from "@theme-hope/components/HopeIcon";
import SidebarLinks from "@theme-hope/modules/sidebar/components/SidebarLinks";
import { isActiveSidebarItem } from "@theme-hope/modules/sidebar/utils/index";
import "../styles/sidebar-group.scss";

export default defineComponent({
    name: "SidebarGroup",
    props: {
        config: {
            type: Object,
            required: true,
        },
        open: {
            type: Boolean,
            required: true,
        },
    },
    emits: ["toggle"],
    setup(props, { emit }) {
        const route = useRoute();
        const router = useRouter();
        const active = computed(() => isActiveSidebarItem(route, props.config));

        // exact 匹配需要考虑 prefix 构造的路径（同 handleHeaderClick 逻辑）
        const exact = computed(() => {
            if (isActiveSidebarItem(route, props.config, true)) return true;
            // 没有 link 但有 prefix 时，用 prefix 构造 README 路径再做精确匹配
            const { link, prefix } = props.config;
            if (!link && prefix) {
                const targetLink = prefix.startsWith("/") ? prefix : `/${prefix}`;
                return isActiveSidebarItem(route, { ...props.config, link: targetLink }, true);
            }
            return false;
        });

        const searchQuery = ref("");

        const handleSearch = (event) => {
            searchQuery.value = event.detail.query || "";
        };

        onMounted(() => {
            if (typeof window !== "undefined") {
                window.addEventListener("sidebar-search", handleSearch);
            }
        });

        onUnmounted(() => {
            if (typeof window !== "undefined") {
                window.removeEventListener("sidebar-search", handleSearch);
            }
        });

        const isMatched = computed(() => {
            if (!searchQuery.value || !props.config.text) return false;
            return props.config.text.toLowerCase().includes(searchQuery.value.toLowerCase());
        });

        /**
         * 点击标题/header 区域（箭头除外）：
         * 1. 如果目录是折叠状态 → 展开子目录
         * 2. 导航到对应 README 页面
         *    - 有 link 时用 link
         *    - 无 link 但有 prefix 时（结构模式），构造路径 /{prefix}
         * 如果目录已展开，则仅导航不改变展开状态
         */
        const handleHeaderClick = () => {
            const { link, prefix } = props.config;
            // 构造导航目标：link 优先，否则用 prefix 构造 README 路径
            const targetLink = link || (prefix ? (prefix.startsWith("/") ? prefix : `/${prefix}`) : null);
            if (targetLink) {
                router.push(targetLink);
            }
            // 折叠状态时展开
            if (!props.open) {
                emit("toggle");
            }
        };

        /**
         * 点击箭头：仅折叠/展开目录，不触发导航
         * stopPropagation 阻止事件冒泡到按钮，避免触发 handleHeaderClick
         */
        const handleArrowClick = (event) => {
            event.stopPropagation();
            event.preventDefault();
            emit("toggle");
        };

        return () => {
            const { collapsible, children = [], icon, prefix, link, text } = props.config;

            // 箭头元素：独立点击区域，仅用于折叠/展开
            const arrowElement = collapsible
                ? h("span", {
                    class: ["vp-arrow", props.open ? "down" : "end"],
                    onClick: handleArrowClick,
                })
                : null;

            return h("section", {
                class: [
                    "vp-sidebar-group",
                    { "search-matched": isMatched.value }
                ]
            }, [
                h(collapsible ? "button" : "p", {
                    class: [
                        "vp-sidebar-header",
                        {
                            clickable: collapsible || link,
                            exact: exact.value,
                            active: active.value,
                        },
                    ],
                    ...(collapsible
                        ? {
                            type: "button",
                            onClick: handleHeaderClick,
                            onKeydown: (event) => {
                                if (event.key === "Enter") handleHeaderClick();
                            },
                        }
                        : {}),
                }, [
                    h(HopeIcon, { icon }),
                    // 标题区域：button 内不能嵌套 <a>（无效 HTML），
                    // 因此 collapsible 时用 span + router.push 导航；
                    // 非 collapsible（<p> 标签）时保留 AutoLink 处理导航
                    h("span", { class: "vp-sidebar-title-wrap" }, [
                        collapsible
                            ? h("span", { class: "vp-sidebar-title" }, text)
                            : link
                                ? h(AutoLink, {
                                    class: "vp-sidebar-title",
                                    config: { text, link },
                                    noExternalLinkIcon: true,
                                })
                                : h("span", { class: "vp-sidebar-title" }, text),
                    ]),
                    arrowElement,
                ]),
                h(SidebarLinks, {
                    key: prefix,
                    config: children,
                    style: { display: (props.open || !collapsible) ? "block" : "none" }
                })
            ]);
        };
    },
});
