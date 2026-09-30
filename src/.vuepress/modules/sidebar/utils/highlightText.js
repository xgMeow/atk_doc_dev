import { h } from "vue";

/**
 * 把 text 中命中 query 的片段包成 `<mark>`，用于侧边栏搜索高亮。
 *
 * 逐段切分而不是构造正则，避免 query 里的 `_`、`(`、`[` 等被当成元字符
 * （命令名里 `Units_Set` 这类下划线很常见）。大小写不敏感。
 *
 * 没有命中时原样返回字符串，调用方可以直接塞进 h() 的 children。
 */
export const highlightText = (text, query) => {
    if (!text || !query) return text;

    const source = String(text);
    const needle = String(query).toLowerCase();
    const haystack = source.toLowerCase();
    const nodes = [];
    let cursor = 0;

    while (cursor < source.length) {
        const at = haystack.indexOf(needle, cursor);

        // 后面都不再命中，剩下的一次性收尾
        if (at === -1) {
            nodes.push(source.slice(cursor));
            break;
        }

        if (at > cursor) nodes.push(source.slice(cursor, at));
        nodes.push(
            h("mark", { class: "vp-sidebar-hl" }, source.slice(at, at + needle.length))
        );
        cursor = at + needle.length;
    }

    return nodes.length ? nodes : source;
};
