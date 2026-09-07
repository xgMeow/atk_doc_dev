<template>
  <article
    class="atk-entry"
    :class="{ 'atk-entry--collapsed': collapsed }"
  >
    <div class="atk-entry__head">
      <div class="atk-entry__title-row">
        <span
          class="atk-entry__arrow"
          role="button"
          tabindex="0"
          :aria-expanded="!collapsed"
          @click="toggle"
          @keydown.enter.prevent="toggle"
          @keydown.space.prevent="toggle"
        >▼</span>
        <component :is="headingTag" class="atk-entry__name">{{ name }}</component>
      </div>
      <div v-if="chipList.length" class="atk-entry__tags">
        <span
          v-for="(chip, i) in chipList"
          :key="i"
          class="atk-entry__chip"
          :style="chip.style"
        >{{ chip.text }}</span>
      </div>
    </div>
    <div ref="bodyRef" class="atk-entry__collapsible">
      <div v-if="metaParts.length" class="atk-entry__meta">
        <template v-for="(part, i) in metaParts" :key="i">
          <span v-if="i" class="atk-entry__meta-sep">｜</span>
          <span class="atk-entry__meta-label">{{ part.label }}</span>{{ part.value }}
        </template>
      </div>
      <div class="atk-entry__body">
        <!-- 标签之间是构建期 markdown 解析后的内容 -->
        <slot />
      </div>
    </div>
  </article>
</template>

<script setup>
/*
使用示例（建议使用 PascalCase，小写 entry 也会被构建期统一转成 <Entry>）：

  <Entry name="方位角" detail="deg,rad,arcSec,arcMin,revs" note="角度" objects="接收器,车辆">
    关联对象相对于分析对象在参考平面内的投影方向角。
    可设**最小值**与**最大值**。
  </Entry>

  <Entry name="当地时间" objects="接收器,车辆" format="HH:MM:SS.mmm">
    以对象所在时区的墙钟时间计的有效窗口。
  </Entry>

- name    属性名（必填）
- objects 适用对象；多个用逗号/顿号分隔，如 `接收器,车辆` 或 `接收器、车辆`
- detail  单位代码，可多个；空格或逗号分隔的字符串（如 `deg rad arcSec`）或数组均可
- note    量纲中文注记（如 `角度`），原样展示在“量纲”段；无单位时仅作量纲展示
- format  数值/时间格式（如 `00:00:00.000`），展示在“格式”段
- level   名称标题级（默认 3，即 h3；嵌在 “###” 小节下可用 level="4"）

功能与观感参考 references/doubao_html_20260907_102247.html 的指标条目卡片：
点击头部可折叠/展开，箭头随之旋转；量纲/单位在标题下方一条浅灰信息条。
*/
import { computed, onMounted, ref } from 'vue'

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
  objects: { type: [Array, String], default: '' },
  detail: { type: [Array, String], default: '' },
  note: { type: String, default: '' },
  format: { type: String, default: '' },
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

// 支持多个单位：数组或空格/逗号分隔的字符串，如 `deg rad arcSec` 或 ['deg','rad']
const unitList = computed(() => {
  if (Array.isArray(props.detail)) {
    return props.detail.map((s) => String(s).trim()).filter(Boolean)
  }
  return String(props.detail || '')
    .split(/[\s,，、;；]+/)
    .map((s) => s.trim())
    .filter(Boolean)
})

// 信息条分「量纲」「支持单位」「格式」等段，观感参考参考文件的 `量纲：X｜支持单位：Y、Z`
const metaParts = computed(() => {
  const parts = []
  const note = String(props.note || '').trim()
  const format = String(props.format || '').trim()
  if (note) parts.push({ label: '量纲：', value: note })
  if (unitList.value.length) parts.push({ label: '支持单位：', value: unitList.value.join('、') })
  if (format) parts.push({ label: '格式：', value: format })
  return parts
})

// ---------- 折叠 / 展开 ----------
const collapsed = ref(false) // 默认展开，与参考文件一致
const bodyRef = ref(null)

const toggle = () => {
  const el = bodyRef.value
  if (!el) return
  // 先钉住当前高度，让 max-height 有过渡起点
  el.style.maxHeight = el.scrollHeight + 'px'
  if (collapsed.value) {
    // 展开
    collapsed.value = false
  } else {
    // 折叠：强制回流后再收为 0，产生收缩动画
    void el.offsetHeight
    el.style.maxHeight = '0px'
    collapsed.value = true
  }
}

onMounted(() => {
  const el = bodyRef.value
  if (el) el.style.maxHeight = el.scrollHeight + 'px'
})
</script>

<style scoped>
/* 观感参考 references/doubao_html_20260907_102247.html 的 metric-item：扁平列表项 + 下边框分隔 */
.atk-entry {
  padding: 20px 0;
  border-bottom: 1px solid #e5e7eb;
  transition: background-color 0.2s;
  color: #213547;
  font-size: 15px;
}
.atk-entry:last-child {
  border-bottom: none;
}

/* 头部行：名称 + 适用对象标签，同一行，基线对齐，可换行 */
.atk-entry__head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 16px;
  row-gap: 8px;
  margin-bottom: 12px;
}
.atk-entry__title-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 0;
}

/* 折叠箭头：仅箭头可点击，展开 ▼，折叠时逆时针旋转 90° */
.atk-entry__arrow {
  display: inline-flex;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  color: #6b7280;
  user-select: none;
  transition: transform 0.2s ease;
}
.atk-entry--collapsed .atk-entry__arrow {
  transform: rotate(-90deg);
}

/* 名称 */
.atk-entry__name {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
  color: #111827;
}

/* 适用对象彩色胶囊（软底 + 彩色文字，无描边） */
.atk-entry__tags {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}
.atk-entry__chip {
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  padding: 3px 9px;
  border-radius: 999px;
  white-space: nowrap;
}

/* 可折叠容器：量纲信息条 + 正文 */
.atk-entry__collapsible {
  overflow: hidden;
  transition: max-height 0.25s ease;
}

/* 量纲/单位：浅灰圆角信息条 */
.atk-entry__meta {
  background: #f9fafb;
  padding: 8px 12px;
  border-radius: 6px;
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 1.4;
  color: #6b7280;
}
.atk-entry__meta-label {
  font-weight: 500;
  color: #374151;
}
.atk-entry__meta-sep {
  margin: 0 6px;
  color: #d1d5db;
}

/* 正文（插槽里的 markdown 属于父作用域，需用 :deep 命中） */
.atk-entry__body {
  font-size: 15px;
  line-height: 1.65;
  color: #44403c;
}
.atk-entry__body :deep(p) {
  margin: 0.55em 0;
}
.atk-entry__body :deep(p:first-child) {
  margin-top: 0;
}
.atk-entry__body :deep(p:last-child) {
  margin-bottom: 0;
}
.atk-entry__body :deep(table) {
  margin: 0.6em 0;
}

/* 窄屏：头部纵向堆叠 */
@media (max-width: 800px) {
  .atk-entry__head {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
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
    background: #fff !important;
  }
}
</style>
