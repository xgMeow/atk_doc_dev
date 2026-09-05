/**
 * <Entry> 卡片构建期支持插件
 *
 * 配合 components/Entry/Entry.vue 使用。VuePress 编译 markdown 时，标签
 * <Entry>…</Entry> 中间的内容默认按普通 HTML 处理，markdown 不会解析。本插件
 * 在 html_block 规则之前插入块规则：识别独占一行的 <Entry …> 与 </Entry>
 * （大小写均可），把两者之间的内容交给 md.block.tokenize 重新按 markdown 解析
 * （公式/表格/图片/相对链接/md-enhance 均生效），并原样保留外层标签——统一以
 * PascalCase <Entry> 输出，使 Vue 编译阶段能把卡片解析为全局注册的 Entry 组件。
 *
 * 用法（markdown）：
 *
 *   <entry name="方位角" unit="deg" note="（度）" objects="['接收器','车辆']">
 *
 *   关联对象相对于分析对象在参考平面内的投影方向角。
 *
 *   可设「最小值」与「最大值」，详见下表。
 *   </entry>
 */
const OPEN_TAG_RE = /^<(entry)\b([^<>]*?)(\/?)>\s*$/i

const findCloseLine = (state, startLine, endLine) => {
  for (let line = startLine + 1; line < endLine; line++) {
    let lpos = state.bMarks[line] + state.tShift[line]
    let lend = state.eMarks[line]
    if (state.sCount[line] - state.blkIndent >= 4 && lpos < lend) continue // 缩进内容，不算结束标签
    const text = state.src.slice(lpos, lend).trim()
    if (/^<\/(entry)>\s*$/i.test(text)) return line
  }
  return -1
}

const entryBlockRule = (state, startLine, endLine, silent) => {
  const src = state.src
  const start = state.bMarks[startLine] + state.tShift[startLine]
  const end = state.eMarks[startLine]
  if (src.charCodeAt(start) !== 60 /* < */) return false
  if (state.sCount[startLine] - state.blkIndent >= 4) return false
  const text = src.slice(start, end)
  if (text.charAt(1) === '/') return false // </entry>

  const match = OPEN_TAG_RE.exec(text)
  if (!match) return false

  const attrsText = (match[2] || "").trim()
  const selfClose = match[3] === "/"
  const closeLine = selfClose ? startLine : findCloseLine(state, startLine, endLine)
  if (closeLine === -1) return false
  if (silent) return true

  const oldParentType = state.parentType
  const oldLineMax = state.lineMax
  state.parentType = "atk-entry"

  const openToken = state.push("atk_entry_open", "", 0)
  openToken.info = attrsText
  openToken.block = true
  openToken.map = [startLine, closeLine + 1]

  if (!selfClose) {
    state.lineMax = closeLine
    state.md.block.tokenize(state, startLine + 1, closeLine)
  }

  const closeToken = state.push("atk_entry_close", "", 0)
  closeToken.block = true

  state.line = closeLine + 1
  state.parentType = oldParentType
  state.lineMax = oldLineMax
  return true
}

/**
 * 注册为 markdown-it 插件：md.use(entryCard)
 */
const entryCard = (md) => {
  md.block.ruler.before("html_block", "atk_entry", entryBlockRule, {
    alt: ["paragraph", "reference", "blockquote", "list"],
  })

  // 原样输出 <Entry …>…</Entry>（PascalCase），交给 Vue 编译解析为 Entry 组件
  md.renderer.rules.atk_entry_open = (tokens, idx) => {
    const attrs = (tokens[idx].info || "").trim()
    return attrs ? `<Entry ${attrs}>\n` : "<Entry>\n"
  }
  md.renderer.rules.atk_entry_close = () => "</Entry>\n"
}

export default entryCard
