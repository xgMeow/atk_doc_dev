import { isString } from "@vuepress/helper/client";
import { defineComponent, h, computed } from "vue";
import { useRoute } from "vuepress/client";
import AutoLink from "@theme-hope/components/AutoLink";
import HopeIcon from "@theme-hope/components/HopeIcon";
import { highlightText, isActiveSidebarItem } from "@theme-hope/modules/sidebar/utils/index";
import "../styles/sidebar-child.scss";

export default defineComponent({
    name: "SidebarChild",
    props: {
        /**
         * Sidebar item config
         *
         * 侧边栏项目配置
         */
        config: {
            type: Object,
            required: true,
        },
        // 由上层 SidebarLinks 逐层传下来（同 SidebarGroup）
        searchQuery: {
            type: String,
            default: "",
        },
    },
    setup(props) {
        const route = useRoute();

        const isMatched = computed(() => {
            if (!props.searchQuery || !props.config.text) return false;
            return props.config.text.toLowerCase().includes(props.searchQuery.toLowerCase());
        });

        return () =>
            isString(props.config.link)
                ? // If the item has link, render it as `<AutoLink>`
                  h(AutoLink, {
                      class: [
                          "vp-sidebar-link",
                          "vp-sidebar-page",
                          {
                              active: isActiveSidebarItem(route, props.config, true),
                              "search-matched": isMatched.value
                          },
                      ],
                      exact: true,
                      config: props.config,
                  }, {
                      // 命中时才接管内容渲染，把命中的片段包成 <mark>；
                      // 没命中交给 AutoLink 默认渲染，不产生多余节点。
                      // AutoLink 有 slot 就整段替换，所以 icon 要自己补回来
                      default: isMatched.value
                          ? () => [h(HopeIcon, { icon: props.config.icon }), highlightText(props.config.text, props.searchQuery)]
                          : undefined,
                  })
                : // If the item only has text, render it as `<p>`
                  h("p", {
                      class: [
                          { "search-matched": isMatched.value }
                      ]
                  }, [
                      h(HopeIcon, { icon: props.config.icon }),
                      highlightText(props.config.text, props.searchQuery),
                  ]);
    },
});
