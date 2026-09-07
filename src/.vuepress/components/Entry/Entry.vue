<template>
  <article
    class="atk-entry"
    :class="{ 'atk-entry--collapsed': collapsed }"
  >
    <!-- 头部：标题 + 折叠箭头；可折叠时整条可点击 -->
    <div
      class="atk-entry__head"
      :class="{ 'atk-entry__head--clickable': hasCollapsible }"
      :role="hasCollapsible ? 'button' : undefined"
      :tabindex="hasCollapsible ? 0 : undefined"
      :aria-expanded="hasCollapsible ? !collapsed : undefined"
      @click="toggle"
      @keydown.enter.prevent="toggle"
      @keydown.space.prevent="toggle"
    >
      <div class="atk-entry__title-row">
        <span v-if="hasCollapsible" class="atk-entry__arrow">▼</span>
        <component :is="headingTag" class="atk-entry__name">{{ name }}</component>
      </div>
    </div>
    <!-- 静态区：适用对象标签 + 量纲/单位条 + 常显摘要，均始终可见 -->
    <div class="atk-entry__static">
      <div v-if="chipList.length" class="atk-entry__tags">
        <span
          v-for="(chip, i) in chipList"
          :key="i"
          class="atk-entry__chip"
          :style="chip.style"
        >{{ chip.text }}</span>
      </div>
      <p v-if="desc" class="atk-entry__desc">{{ desc }}</p>
      <div v-if="metaParts.length" class="atk-entry__meta">
        <template v-for="(part, i) in metaParts" :key="i">
          <span v-if="i" class="atk-entry__meta-sep">｜</span>
          <span class="atk-entry__meta-label">{{ part.label }}</span>{{ part.value }}
        </template>
      </div>
    </div>
    <!-- 折叠区：模型/公式 + 说明；正文来自插槽（构建期 markdown 解析后） -->
    <div v-if="hasCollapsible" ref="bodyRef" class="atk-entry__collapsible">
      <div class="atk-entry__body">
        <slot />
      </div>
    </div>
  </article>
</template>

<script setup>
/*
使用示例（建议使用 PascalCase，小写 entry 也会被构建期统一转成 <Entry>）：

  <Entry name="方位角" meta="量纲：角度|单位：deg,rad,arcSec,arcMin,revs" objects="接收器,车辆">
    关联对象相对于分析对象在参考平面内的投影方向角。
    可设**最小值**与**最大值**。
  </Entry>

  <Entry name="当地时间" meta="格式：HH:MM:SS.mmm" objects="接收器,车辆">
    以对象所在时区的墙钟时间计的有效窗口。
  </Entry>

- name    属性名（必填）
- objects 适用对象；多个用逗号/顿号分隔，如 `接收器,车辆` 或 `接收器、车辆`
- meta    元信息条，多组 "key：value" 用 | 或 , 分隔；如 `量纲：角度|单位：deg,rad`。值含逗号时请用 | 分隔多组
- level   名称标题级（默认 3，即 h3；嵌在 “###” 小节下可用 level="4"）

结构参考 references/doubao_html_20260907_123129.html 的词条卡片，分三段：
1. 头部：标题 + 可折叠箭头，带下边框，整条可点击；
2. 静态区：适用对象标签 + 量纲/单位条 + 一句话摘要，始终可见；
3. 折叠区：模型/公式（灰色居中托盘）+ 说明（左侧强调色提示框）。默认展开。
卡片以阴影替代实线边框，更轻量。
*/
import { Comment, Text, computed, onMounted, ref, useSlots } from 'vue'

// 对象色表与「02-属性配置」下的对象页一一对应（含覆盖定义、品质因子等），并保留 太阳/月球/中心天体
const OBJECT_COLORS = {
  车辆: '#7c3aed',
  飞机: '#4f46e5',
  舰船: '#0891b2',
  潜艇: '#0f766e',
  地面站: '#059669',
  卫星: '#0e7490',
  卫星集群: '#0369a1',
  卫星系统: '#1d4ed8',
  火箭: '#ea580c',
  导弹: '#dc2626',
  集群: '#65a30d',
  传感器: '#c026d3',
  接收器: '#2563eb',
  发射器: '#db2777',
  天线: '#0284c7',
  链路: '#06b6d4',
  区域目标: '#ca8a04',
  恒星: '#eab308',
  行星: '#b45309',
  覆盖定义: '#7e22ce',
  品质因子: '#16a34a',
  太阳: '#d97706',
  月球: '#64748b',
  中心天体: '#334155',
}
const FALLBACK_COLORS = ['#2563eb', '#7c3aed', '#059669', '#d97706', '#0e7490', '#dc2626', '#4f46e5']

const props = defineProps({
  name: { type: String, required: true },
  desc: { type: String, default: '' }, // 一句话作用说明（常显摘要，模型无关，不带 markdown 强调）
  objects: { type: [Array, String], default: '' },
  meta: { type: String, default: '' }, // 元信息条：多组 key：value，用 | 或 , 分隔；值里含逗号时用 | 分隔多组
  level: { type: [String, Number], default: 3 },
})

// 卡片标题标签：默认 h3，可用 level 指定 h2–h6（如嵌在 “###” 小节下用 h4）
const headingTag = computed(() => {
  const n = Math.max(2, Math.min(6, Number(props.level) || 3))
  return `h${n}`
})

const pickColor = (token) => {
  if (OBJECT_COLORS[token]) return OBJECT_COLORS[token]
  let hash = 0
  for (const ch of token) hash = (hash * 31 + ch.codePointAt(0)) >>> 0
  return FALLBACK_COLORS[hash % FALLBACK_COLORS.length]
}

const toRgba = (hex, alpha) => {
  const match = /^#?([0-9a-f]{6})$/i.exec(hex)
  if (!match) return hex
  const n = parseInt(match[1], 16)
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`
}

// objects 通常是逗号/顿号分隔的字符串，如 `接收器,车辆`；也兼容数组传入
const objectList = computed(() => {
  if (Array.isArray(props.objects)) {
    return props.objects.map((s) => String(s).trim()).filter(Boolean)
  }
  return String(props.objects || '')
    .trim()
    .replace(/^\[/, '')
    .replace(/\]$/, '')
    .replace(/['"]/g, '')
    .split(/[\s,，、;；/·•]+/)
    .map((s) => s.trim())
    .filter(Boolean)
})

const chipList = computed(() =>
  objectList.value.map((text) => {
    const color = pickColor(text)
    return {
      text,
      // 软底色 + 彩色文字，无描边，观感参考参考文件的标签
      style: { color, background: toRgba(color, 0.08) },
    }
  })
)

// 解析元信息条：把 meta="格式：****,量纲：温度,**:**" / "量纲：角度|单位：deg,rad,arcSec" 这类
// 多组“key：value”拆成 {label, value} 数组。多组之间用 | 或 ,（、；也兼容）分隔，
// 每对用第一个 ： 或 : 拆开 key/value；无分隔符的片段当作独立值。
const metaParts = computed(() => {
  const raw = String(props.meta || '').trim()
  if (!raw) return []
  const tokens = raw.includes('|') ? raw.split('|') : raw.split(/[,，、;；]/)
  const parts = []
  for (const t of tokens) {
    const s = t.trim()
    if (!s) continue
    const idx = s.search(/[：:]/)
    if (idx === -1) parts.push({ label: '', value: s })
    else parts.push({ label: s.slice(0, idx).trim() + '：', value: s.slice(idx + 1).trim() })
  }
  return parts
})

// 判断插槽正文是否真有内容（空段/仅空白/注释/空元素不算），用于决定是否显示折叠箭头与可折叠区
const slots = useSlots()
const VOID_TAGS = new Set(['img', 'br', 'hr', 'input', 'meta', 'link'])
const vnodeHasContent = (vnode) => {
  if (!vnode) return false
  if (vnode.type === Comment) return false
  if (vnode.type === Text) return typeof vnode.children === 'string' && vnode.children.trim().length > 0
  const ch = vnode.children
  if (typeof ch === 'string') return ch.trim().length > 0
  if (Array.isArray(ch)) return ch.some(vnodeHasContent)
  return VOID_TAGS.has(vnode.type) // 元素节点：void 标签（如图片）视为有内容，空元素视为无内容
}
const hasBodyContent = computed(() => (slots.default ? slots.default() : []).some(vnodeHasContent))

// 是否可折叠：仅当插槽正文确有内容（模型/公式/说明等）时才显示箭头与折叠区；
// 纯描述卡（仅标签/量纲/摘要）不折叠，标签与量纲已归入始终可见的静态区。
const hasCollapsible = computed(() => hasBodyContent.value)

// ---------- 折叠 / 展开 ----------
const collapsed = ref(false) // 默认展开：静态区常显，折叠区（模型/公式/说明）默认完整展示，点击可收起
const bodyRef = ref(null)

const toggle = () => {
  const el = bodyRef.value
  if (!el) return
  if (collapsed.value) {
    // 展开：先闭合再给出现值，动画结束后放开高度限制，避免正文（图片/表格/公式）被截断
    collapsed.value = false
    el.style.maxHeight = '0px'
    void el.offsetHeight
    el.style.maxHeight = el.scrollHeight + 'px'
    const release = () => { el.style.maxHeight = 'none' }
    el.addEventListener('transitionend', release, { once: true })
    window.setTimeout(release, 400) // 兜底，防止 transitionend 未触发
  } else {
    // 折叠：钉住当前高度再收为 0，产生收缩动画
    collapsed.value = true
    el.style.maxHeight = el.scrollHeight + 'px'
    void el.offsetHeight
    el.style.maxHeight = '0px'
  }
}

onMounted(() => {
  // 默认展开：放开高度上限，正文自然完整展示（可含图片、表格、公式）；折叠态才把高度收为 0
  const el = bodyRef.value
  if (!el) return
  if (collapsed.value) el.style.maxHeight = '0px'
  else el.style.maxHeight = 'none'
})
</script>

<style scoped>
/* 模型参考 references/doubao_html_20260907_123129.html 的词条卡片：
   卡片以阴影替代实线边框（更轻量化）；头部可点击折叠；对象标签/量纲条/摘要
   归入始终可见的静态区；折叠区含模型公式（灰色居中托盘）与说明（左侧强调色提示框）。 */
.atk-entry {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  margin-bottom: 16px;
  color: #1d2129;
}
.atk-entry:last-child {
  margin-bottom: 0;
}

/* ---------- 头部：标题 + 折叠箭头 ---------- */
.atk-entry__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px 14px;
  border-bottom: 1px solid #f2f3f5;
}
.atk-entry__head--clickable {
  cursor: pointer;
}
.atk-entry__title-row {
  display: flex;
  align-items: center;
  gap: 12px;
}
.atk-entry__arrow {
  display: inline-flex;
  font-size: 16px;
  line-height: 1;
  color: #86909c;
  user-select: none;
  transition: transform 0.24s ease;
}
.atk-entry--collapsed .atk-entry__arrow {
  transform: rotate(-90deg);
}
.atk-entry__name {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
  color: #1d2129;
}

/* ---------- 静态区：对象标签 / 量纲条 / 常显摘要 ---------- */
.atk-entry__static {
  padding: 14px 20px 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.atk-entry__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.atk-entry__chip {
  display: inline-flex;
  align-items: center;
   font-size: 14px;
  font-weight: 500;
  line-height: 1;
  padding: 2px 9px;
  border-radius: 4px;
  white-space: nowrap;
}
/* 量纲/单位/格式：浅灰通栏信息条 */
.atk-entry__meta {
  width: 100%;
  background: #f2f3f5;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.6;
  color: #4e5969;
}
.atk-entry__meta-label {
  font-weight: 600;
  color: #4e5969;
}
.atk-entry__meta-sep {
  margin: 0 6px;
  color: #c9cdd4;
}
/* 常显摘要：模型无关的一句话作用说明，始终可见 */
.atk-entry__desc {
  margin: 0;
  line-height: 1.7;
  color: #1d2129;
}

/* ---------- 折叠区：模型公式 + 说明 ---------- */
.atk-entry__collapsible {
  overflow: hidden;
  transition: max-height 0.25s ease, border-color 0.25s ease;
  border-top: 1px dashed #e5e6eb;
}
/* 折叠后高度为 0，0 高度元素仍会画出顶部虚线，故折叠态隐藏之 */
.atk-entry--collapsed .atk-entry__collapsible {
  border-top-color: transparent;
}
.atk-entry__body {
  padding: 20px 20px;
  font-size: 14px;
  line-height: 1.7;
  color: #4e5969;
}
/* 块级公式（$$...$$ 渲染成 .katex-display）：灰色居中托盘 */
.atk-entry__body :deep(.katex-display) {
  padding: 14px 16px;
  background: #f2f3f5;
  border-radius: 8px;
  text-align: center;
  margin: 0 0 16px;
  overflow-x: auto;
}
.atk-entry__body :deep(p) {
  margin: 0.5em 0;
}
.atk-entry__body :deep(p:first-child) {
  margin-top: 0;
}
.atk-entry__body :deep(p:last-child) {
  margin-bottom: 0;
}
/* 说明引用块（> **说明**：...）→ 中性浅灰提示块：不用主题默认蓝色、无左侧竖线 */
.atk-entry__body :deep(blockquote) {
  background: #f7f8fa;
  border-radius: 8px;
  color: #4e5969;
  border-left: none;
}
.atk-entry__body :deep(blockquote p) {
  margin: 0;
}
.atk-entry__body :deep(table) {
  margin: 0.6em 0;
}

/* 窄屏：横向内边距收窄 */
@media (max-width: 800px) {
  .atk-entry__head,
  .atk-entry__static,
  .atk-entry__body {
    padding-left: 16px;
    padding-right: 16px;
  }
}

/* 打印：强制全部展开，隐藏箭头 */
@media print {
  .atk-entry__collapsible {
    max-height: none !important;
  }
  .atk-entry__arrow {
    display: none;
  }
  .atk-entry {
    border: 1px solid #999;
    box-shadow: none;
    page-break-inside: avoid;
  }
}
</style>
