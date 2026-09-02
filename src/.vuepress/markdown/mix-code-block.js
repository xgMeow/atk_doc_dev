/**
 * MixCode 块级解析插件
 *
 * markdown-it 默认把 `<mix-code>...</mix-code>` 当成 HTML block（type-7）处理，有两个问题：
 *   1. type-7 HTML block 以空行为界，代码里的空行会提前结束块，
 *      空行后的 `#` 行会被解析成标题、代码行被解析成段落；
 *   2. VuePress 会把页面 HTML 编译成 Vue 模板，默认压缩标签内空白（whitespace:'condense'），
 *      组件标签内的换行会被折叠成空格，导致整段代码被并成一行。
 *
 * 本插件在块级解析阶段整体捕获 `<mix-code>` 块（支持空行），并改写成：
 *   <mix-code ...><pre v-pre>代码</pre></mix-code>
 * - `<pre>` 让 Vue 模板编译器保留换行与空行；
 * - `v-pre` 让代码内的 `#`、`{{` 等指令/插值不参与模板编译；
 * - 代码必须再做 HTML 转义：`v-pre` 只禁用指令编译，并不能阻止模板解析器把
 *   `#include <iostream>` 里的 `<iostream>` 当成真实标签（会报 "Element is missing
 *   end tag" 使整页编译失败）。转义成 `&lt;...&gt;` 后模板解析期不会成标签，
 *   编译期实体被解码回原文，最终 vnodesToText 提取到的仍是作者写的代码。
 *
 * 组件侧仍通过默认插槽提取纯文本，改写后插槽内容是 `<pre v-pre>` 元素，
 * vnodesToText 会取其子文本节点（含换行）。
 */

/**
 * 把代码转成 HTML 安全的文本。
 *
 * 必须先转义 `&` 再转义 `<`、`>`：若作者代码里原本就有 `&lt;` 之类的实体，
 * 转义 `&` 后变成 `&amp;lt;`，在模板编译期只会解码一次回到 `&lt;`（字面量），
 * 避免被二次解码成裸 `<` 而再次触发标签解析。
 */
function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

const OPEN_RE = /^<mix-code\b[^>]*>\s*$/i;
const CLOSE_RE = /^<\/mix-code\s*>\s*$/i;

function mixCodeBlock(md) {
  md.block.ruler.before('html_block', 'mix_code_block', (state, startLine, endLine, silent) => {
    const startContent = state.src.slice(state.bMarks[startLine], state.eMarks[startLine]);
    if (!OPEN_RE.test(startContent)) return false;

    if (silent) return true;

    let inner = '';
    let closeLine = -1;
    for (let line = startLine + 1; line < endLine; line++) {
      const lineContent = state.src.slice(state.bMarks[line], state.eMarks[line]);
      if (CLOSE_RE.test(lineContent)) {
        closeLine = line;
        break;
      }
      inner += lineContent + '\n';
    }
    // 找不到闭合标签：交给默认的 HTML block 规则处理（保持原样）
    if (closeLine === -1) return false;

    const openTag = startContent.trimEnd();
    const code = escapeHtml(inner.replace(/\n$/, ''));

    const token = state.push('html_block', '', 0);
    token.content = `${openTag}<pre v-pre>${code}</pre></mix-code>`;
    token.map = [startLine, closeLine + 1];
    state.line = closeLine + 1;
    return true;
  });
}

export default mixCodeBlock;
