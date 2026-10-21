import { computed, defineComponent, h, ref, watch, onMounted, onUnmounted } from "vue";
import { useRoute } from "vuepress/client";
import SidebarChild from "@theme-hope/modules/sidebar/components/SidebarChild";
import SidebarGroup from "@theme-hope/modules/sidebar/components/SidebarGroup";
import { isMatchedSidebarItem } from "@theme-hope/modules/sidebar/utils/index";
import {
    isGroupOpenSaved,
    isOfflineSidebar,
    saveGroupOpen,
    saveGroupOpenBatch,
    sidebarGroupKey,
} from "../persistedGroupState.js";
import "../styles/sidebar-links.scss";

export default defineComponent({
    name: "SidebarLinks",
    props: {
        config: {
            type: Array,
            required: true,
        },
        searchQuery: {
            type: String,
            default: "",
        },
    },
    setup(props) {
        const route = useRoute();
        const openGroupIndex = ref({});
        const lastUpdateTime = ref(0);

        // 分组在「离线版记忆」里的身份：prefix + 标题（实现在 persistedGroupState.js，
        // 离线 HTML 里的内联脚本也按同样的格式恢复，改动时两边要一起看）
        const groupKey = sidebarGroupKey;

        const matchedGroupIndex = () =>
            props.config.findIndex((item) => isMatchedSidebarItem(route, item));

        // 恢复「上次手动展开的分组」并叠加上「当前页所在分组」：
        // 前者是要保住的东西，后者保证用户始终能看到自己在目录里的位置。
        const restoreOpenState = () => {
            const state = {};
            props.config.forEach((item, index) => {
                if (item.type === "group" && isGroupOpenSaved(groupKey(item))) {
                    state[index] = true;
                }
            });
            const index = matchedGroupIndex();
            if (index >= 0) {
                state[index] = true;
            }
            openGroupIndex.value = state;
        };

        const toggleGroup = (index) => {
            if( Date.now() - lastUpdateTime.value > 100){
                openGroupIndex.value[index] = openGroupIndex.value[index] ? false: true;
                lastUpdateTime.value = Date.now();
                const item = props.config[index];
                if (item && item.type === "group") {
                    saveGroupOpen(groupKey(item), !!openGroupIndex.value[index]);
                }
            }
        };

        // 监听全部折叠/展开事件
        const handleToggleAll = (event) => {
            const { collapsed } = event.detail;
            const newState = {};
            const entries = [];
            props.config.forEach((_, index) => {
                newState[index] = !collapsed;
                const item = props.config[index];
                if (item && item.type === "group") {
                    entries.push([groupKey(item), !collapsed]);
                }
            });
            openGroupIndex.value = newState;
            lastUpdateTime.value = Date.now();
            saveGroupOpenBatch(entries);
        };

        // 监听搜索事件
        const handleSearch = (event) => {
            const { query } = event.detail;
            if (!query) {
                // 清空搜索后回到「保存的展开状态 + 当前页所在分组」；
                // 搜索期间的临时展开不写盘，避免把目录布局带偏
                if (isOfflineSidebar()) {
                    restoreOpenState();
                }
                return;
            }

            const lowerQuery = query.toLowerCase();
            const newState = {};
            props.config.forEach((item, index) => {
                const hasMatch = (item) => {
                    if (item.text && item.text.toLowerCase().includes(lowerQuery)) {
                        return true;
                    }
                    if (item.children) {
                        return item.children.some(hasMatch);
                    }
                    return false;
                };
                newState[index] = hasMatch(item);
            });

            openGroupIndex.value = { ...openGroupIndex.value, ...newState };
        };

        onMounted(() => {
            if (typeof window === "undefined") return;
            // 离线版每次跳转都是整页重载，这里把上次手动展开的分组恢复回来。
            // 放在 mounted 而不是 setup：服务端渲染的 HTML 里这些分组是收起的，
            // hydrate 阶段不会回填 style，挂载后再改状态才能真正把子列表的 display 切过来。
            if (isOfflineSidebar()) {
                restoreOpenState();
            }
            window.addEventListener("sidebar-toggle-all", handleToggleAll);
            window.addEventListener("sidebar-search", handleSearch);
        });

        onUnmounted(() => {
            if (typeof window !== "undefined") {
                window.removeEventListener("sidebar-toggle-all", handleToggleAll);
                window.removeEventListener("sidebar-search", handleSearch);
            }
        });

        watch(() => route.path, () => {
            const index = matchedGroupIndex();
            if (index >= 0 && Date.now() - lastUpdateTime.value > 100) {
                openGroupIndex.value[index] = true;
                lastUpdateTime.value = Date.now();
            }
        }, { immediate: true, flush: "post" });

        // 递归检查是否有匹配的子项
        const hasMatchedChild = (item) => {
            if (!props.searchQuery) return true;
            const lowerQuery = props.searchQuery.toLowerCase();
            if (item.text && item.text.toLowerCase().includes(lowerQuery)) {
                return true;
            }
            if (item.children) {
                return item.children.some(hasMatchedChild);
            }
            return false;
        };

        // 过滤配置（使用 computed 确保 props.config 或 searchQuery 变化时重新计算）
        const filteredConfig = computed(() => props.config.map((item, index) => {
            if (!props.searchQuery) return { item, index };
            if (hasMatchedChild(item)) {
                return { item, index };
            }
            return null;
        }).filter(Boolean));

        return () => h("ul", { class: "vp-sidebar-links" }, filteredConfig.value.map(({ item, index }) => {
            return h("li", {
                class: ["sidebar-item-wrapper"]
            }, item.type === "group"
                ? h(SidebarGroup, {
                    config: item,
                    open: !!openGroupIndex.value[index],
                    // 必须往下传，否则只有顶层会过滤，子层照样把所有兄弟页铺出来
                    searchQuery: props.searchQuery,
                    onToggle: () => toggleGroup(index),
                })
                : h(SidebarChild, {
                    config: item,
                    searchQuery: props.searchQuery,
                }));
        }));
    },
});
