import { computed, defineComponent, h, nextTick, onMounted, onUnmounted, shallowRef, watch, ref } from "vue";
import { usePageData, useRoute } from "vuepress/client";
import SidebarLinks from "@theme-hope/modules/sidebar/components/SidebarLinks";
import { useSidebarItems } from "@theme-hope/modules/sidebar/composables/index";
import {
    flushSidebarScroll,
    isOfflineSidebarScroll,
    readSidebarScroll,
    sidebarScrollKey,
    writeSidebarScroll,
} from "../persistedSidebarScroll.js";
import { zhSidebarText } from "./zh";
import { enSidebarText } from "./en";
import "../styles/sidebar.scss";

export default defineComponent({
    name: "SideBar",
    slots: Object,
    setup(_props, { slots }) {
        const route = useRoute();
        const sidebarItems = useSidebarItems();
        const sidebar = shallowRef();

        // 搜索功能
        const searchQuery = ref("");

        // 国际化文案（英文页用 /en/ 前缀，其余默认中文）
        const page = usePageData();
        const isEn = computed(() => page.value.path.startsWith("/en/"));
        const t = computed(() => (isEn.value ? enSidebarText : zhSidebarText));

        // 离线版整页重载后恢复侧边栏的滚动位置：同一套目录树（语言 + 顶层条目）共用一条记录
        const scrollSignature = computed(() => {
            const items = sidebarItems.value || [];
            return `${isEn.value ? "en" : "zh"}|${items
                .map((item) => item.prefix || item.link || item.text || "")
                .join("|")}`;
        });

        const handleSidebarScroll = () => {
            if (!sidebar.value) return;
            writeSidebarScroll(scrollSignature.value, sidebar.value.scrollTop);
        };

        // 导航后把当前页面条目滚进侧边栏可视区
        let stopScrollWatch = null;

        onMounted(() => {
            if (typeof window === "undefined") return;
            // 离线版整页重载会丢掉侧边栏自身的滚动位置，先把滚动监听挂上
            if (isOfflineSidebarScroll()) {
                sidebar.value?.addEventListener("scroll", handleSidebarScroll, { passive: true });
                window.addEventListener("pagehide", flushSidebarScroll);
            }
            let firstRun = true;
            // 同时监听 path：SPA 跳转到别的页面时 hash 通常没变，只监听 hash 不会触发
            stopScrollWatch = watch(() => [route.path, route.hash], async () => {
                // 等分组展开状态和 DOM 更新完，否则目标还藏在 display:none 里，rect 全是 0
                await nextTick();
                // 首次挂载先把滚动位置滚回去。分组恢复是在子组件的 mounted 里改状态、
                // 由同一轮 flush 补到 DOM 上的，nextTick 之后高度已是最终值；
                // 这里不能再等 rAF/定时器——那会让浏览器先画出未恢复的位置再跳过去，
                // 看起来就是“闪一下”。
                if (firstRun) {
                    firstRun = false;
                    if (isOfflineSidebarScroll()) {
                        const saved = readSidebarScroll(scrollSignature.value);
                        if (saved !== null && sidebar.value) {
                            sidebar.value.scrollTop = saved;
                        }
                    }
                }
                // 侧边栏链接不带 #锚点，不能用 href + hash 去选，直接取当前激活项
                const activeSidebarItem = document.querySelector(".vp-sidebar a.vp-sidebar-page.active");
                if (!activeSidebarItem || !sidebar.value) return;
                const { top: sidebarTop, height: sidebarHeight } = sidebar.value.getBoundingClientRect();
                const { top: activeSidebarItemTop, height: activeSidebarItemHeight } = activeSidebarItem.getBoundingClientRect();
                // 保存的位置看不到激活项时（例如从顶部导航跳到别的章节），仍把激活项滚进来
                if (activeSidebarItemTop < sidebarTop)
                    activeSidebarItem.scrollIntoView({ block: "start" });
                else if (activeSidebarItemTop + activeSidebarItemHeight > sidebarTop + sidebarHeight)
                    activeSidebarItem.scrollIntoView({ block: "end" });
            }, { immediate: true, flush: "post" });
        });

        onUnmounted(() => {
            stopScrollWatch?.();
            if (typeof window !== "undefined") {
                sidebar.value?.removeEventListener("scroll", handleSidebarScroll);
                window.removeEventListener("pagehide", flushSidebarScroll);
                flushSidebarScroll();
            }
        });

        // 全部折叠
        const collapseAll = () => {
            if (typeof window !== "undefined") {
                window.dispatchEvent(new CustomEvent("sidebar-toggle-all", { 
                    detail: { collapsed: true } 
                }));
            }
        };

        // 全部展开
        const expandAll = () => {
            if (typeof window !== "undefined") {
                window.dispatchEvent(new CustomEvent("sidebar-toggle-all", { 
                    detail: { collapsed: false } 
                }));
            }
        };

        // 搜索功能
        const handleSearch = () => {
            if (typeof window !== "undefined") {
                window.dispatchEvent(new CustomEvent("sidebar-search", { 
                    detail: { query: searchQuery.value } 
                }));
            }
        };

        // 清除搜索
        const clearSearch = () => {
            searchQuery.value = "";
            handleSearch();
        };

        // 搜索图标 SVG
        const searchIcon = h("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "sidebar-icon"
        }, [
            h("circle", { cx: "11", cy: "11", r: "8" }),
            h("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
        ]);

        // 清除图标 SVG
        const clearIcon = h("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "sidebar-icon sidebar-clear-icon",
            onClick: clearSearch
        }, [
            h("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
            h("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
        ]);

        // 折叠图标 SVG
        const collapseIcon = h("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "sidebar-icon"
        }, [
            h("polyline", { points: "4 14 10 14 10 20" }),
            h("polyline", { points: "20 10 14 10 14 4" }),
            h("line", { x1: "14", y1: "10", x2: "21", y2: "3" }),
            h("line", { x1: "3", y1: "21", x2: "10", y2: "14" })
        ]);

        // 展开图标 SVG
        const expandIcon = h("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "sidebar-icon"
        }, [
            h("polyline", { points: "15 3 21 3 21 9" }),
            h("polyline", { points: "9 21 3 21 3 15" }),
            h("line", { x1: "21", y1: "3", x2: "14", y2: "10" }),
            h("line", { x1: "3", y1: "21", x2: "10", y2: "14" })
        ]);

        // 搜索框组件（文案随语言变化，放在渲染函数中构建）
        const renderSearchBox = (t) => h("div", { class: "sidebar-search-box" }, [
            h("div", { class: "sidebar-search-input-wrapper" }, [
                searchIcon,
                h("input", {
                    type: "text",
                    class: "sidebar-search-input",
                    placeholder: t.searchPlaceholder,
                    value: searchQuery.value,
                    onInput: (e) => {
                        searchQuery.value = e.target.value;
                        handleSearch();
                    }
                }),
                searchQuery.value ? clearIcon : null
            ])
        ]);

        // 工具栏组件（文案随语言变化，放在渲染函数中构建）
        const renderToolbar = (t) => h("div", { class: "sidebar-toolbar" }, [
            h("button", {
                class: "sidebar-toolbar-btn",
                title: t.collapseAllTitle,
                onClick: collapseAll
            }, [
                collapseIcon,
                h("span", { class: "sidebar-toolbar-text" }, t.collapseAllText)
            ]),
            h("button", {
                class: "sidebar-toolbar-btn",
                title: t.expandAllTitle,
                onClick: expandAll
            }, [
                expandIcon,
                h("span", { class: "sidebar-toolbar-text" }, t.expandAllText)
            ])
        ]);

        return () => h("aside", {
            ref: sidebar,
            key: "sidebar",
            id: "sidebar",
            class: "vp-sidebar",
            // 当前这套目录树的滚动记录键：离线 HTML 的内联脚本靠它在首帧前恢复滚动位置
            "data-atk-scroll-key": sidebarScrollKey(scrollSignature.value),
        }, [
            renderSearchBox(t.value),
            renderToolbar(t.value),
            slots.top?.(),
            slots.default?.() || h(SidebarLinks, {
                config: sidebarItems.value,
                searchQuery: searchQuery.value
            }),
            slots.bottom?.(),
        ]);
    },
});
