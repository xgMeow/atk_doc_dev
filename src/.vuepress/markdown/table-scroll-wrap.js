/**
 * 表格横向滚动包装插件
 *
 * 正文 markdown 表格一旦列太多/内容太长，宽度会超过内容列，把整页撑出横向滚动。
 * 本插件在渲染时给每个 <table> 外包一层 <div class="table-scroll-wrap">：
 *   <div class="table-scroll-wrap"><table>…</table></div>
 * 外层容器用 overflow-x: auto 让超宽表格在自身区域内左右滚动（表头随表格一起移动），
 * 页面整体不再横向溢出。表格仍保持原生 <table> 布局，边框/列宽样式不受影响。
 *
 * 通过 markdown-it renderer 规则在 table_open / table_close 前后补标签，
 * 不触碰 token 树，安全处理嵌套（列表、提示块内的表格）。
 */
function tableScrollWrap(md) {
  const { renderer } = md

  const renderOpen =
    renderer.rules.table_open ||
    ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options))
  const renderClose =
    renderer.rules.table_close ||
    ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options))

  renderer.rules.table_open = (tokens, idx, options, env, self) =>
    '<div class="table-scroll-wrap">' +
    renderOpen(tokens, idx, options, env, self)

  renderer.rules.table_close = (tokens, idx, options, env, self) =>
    renderClose(tokens, idx, options, env, self) + '</div>'
}

export default tableScrollWrap
