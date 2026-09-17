/**
 * 标题锚点工具
 *
 * VuePress 只为 markdown 解析出的标题生成 id，由组件在客户端渲染的标题
 * （如 Entry 卡片的名称）默认没有 id，右侧目录（EnhancedToc）读到的
 * `header.getAttribute('id')` 为 null，链接就成了 `#null`，点击无法跳转。
 *
 * 这里复用与 VuePress 内置标题锚点相同的 slug 规则（@mdit-vue/shared 的
 * slugify），让组件标题也能得到与 markdown 标题一致的 `#锚点`，
 * 既供目录跳转，也让深链可直接命中。
 */

// 控制字符 U+0000–U+001F：用 fromCharCode 拼出，避免源码里出现不可见字符
const rControl = new RegExp(`[${String.fromCharCode(0)}-${String.fromCharCode(0x1f)}]`, 'g')
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g
// 组合附加符号 U+0300–U+036F：用 fromCharCode 拼出，避免源码里出现不可见字符
const rCombining = new RegExp(`[${String.fromCharCode(0x300)}-${String.fromCharCode(0x36f)}]`, 'g')

/** 与 @mdit-vue/shared slugify 保持一致的标题 slug（中文原样保留，空白与符号折成 -） */
export const slugifyAnchor = (str) =>
  String(str ?? '')
    .normalize('NFKD')
    .replace(rCombining, '')
    .replace(rControl, '')
    .replace(rSpecial, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/^(\d)/, '_$1')
    .toLowerCase()

/**
 * 为 base 取一个未被占用的锚点 id，冲突时按 markdown-it-anchor 的规则追加 -1、-2…
 * @param {string} base 基础 slug
 * @param {(id: string) => boolean} isTaken 判断某 id 是否已被页面中的其他元素占用
 */
export const uniqueAnchorId = (base, isTaken) => {
  if (!base) return ''
  if (!isTaken(base)) return base
  let i = 1
  while (isTaken(`${base}-${i}`)) i += 1
  return `${base}-${i}`
}
