<template>
  <article class="atk-entry">
    <div class="atk-entry__head">
      <span class="atk-entry__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="8" x2="21" y1="6" y2="6" />
          <line x1="8" x2="21" y1="12" y2="12" />
          <line x1="8" x2="21" y1="18" y2="18" />
          <line x1="3" x2="3.01" y1="6" y2="6" />
          <line x1="3" x2="3.01" y1="12" y2="12" />
          <line x1="3" x2="3.01" y1="18" y2="18" />
        </svg>
      </span>
      <component :is="headingTag" class="atk-entry__name">{{ name }}</component>
      <div v-if="metaVisible" class="atk-entry__meta">
        <span
          v-for="(chip, i) in chipList"
          :key="i"
          class="atk-entry__chip"
          :style="chip.style"
        >{{ chip.text }}</span>
        <span v-if="unit" class="atk-entry__unit">
          <b>{{ unit }}</b><span v-if="note">{{ note }}</span>
        </span>
        <span v-else-if="note" class="atk-entry__unit atk-entry__unit--none">
          <span>{{ note }}</span>
        </span>
      </div>
    </div>
    <div class="atk-entry__body">
      <!-- 标签之间是构建期 markdown 解析后的内容 -->
      <slot />
    </div>
  </article>
</template>

<script setup>
/*
使用示例（建议使用 PascalCase，小写 entry 也会被构建期统一转成 <Entry>）：

  <Entry name="方位角" unit="deg" note="（度）" objects="接收器,车辆">
    关联对象相对于分析对象在参考平面内的投影方向角。
    可设**最小值**与**最大值**。
  </Entry>

- name    属性名（必填）
- objects 适用对象；多个用逗号/顿号分隔，如 `接收器,车辆` 或 `接收器、车辆`
- unit    单位代码（deg、m、s…）
- note    单位中文注记（（度）…）；无单位且只给 note 时按“无单位”展示
- level   卡片名称标题级（默认 3，即 h3；嵌在 “###” 小节下可用 level="4"）
*/
import { computed } from 'vue'

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
  unit: { type: String, default: '' },
  note: { type: String, default: '' },
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
      style: { color, background: toRgba(color, 0.1), borderColor: toRgba(color, 0.28) },
    }
  })
)

const metaVisible = computed(() => chipList.value.length > 0 || Boolean(props.unit) || Boolean(props.note))
</script>

<style scoped>
/* 观感参考 references/属性说明.html 的 entry：白色卡片 + 圆角 */
.atk-entry {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 13px 0;
  padding: 13px 18px 15px;
  background: #ffffff;
  border: 1px solid #e6ecf5;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.03), 0 4px 12px -4px rgba(15, 23, 42, 0.05);
  color: #213547;
  font-size: 15px;
}

.atk-entry + .atk-entry {
  margin-top: 10px;
}

/* 头部行 */
.atk-entry__head {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  row-gap: 8px;
}

/* 图标：浅灰圆角小方块 */
.atk-entry__icon {
  flex: none;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #475569;
  background: #f1f5f9;
}
.atk-entry__icon svg {
  width: 16px;
  height: 16px;
}

/* 名称 */
.atk-entry__name {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  color: #1f2a3d;
}

/* 右侧元信息：适用对象标签 + 单位徽标 */
.atk-entry__meta {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

/* 适用对象彩色圆角标签（文字/背景/描边由 style 绑定决定） */
.atk-entry__chip {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  padding: 3px 10px;
  border-radius: 999px;
  border: 1px solid transparent;
  white-space: nowrap;
}

/* 单位徽标：代码等宽 + 中文注记小字 */
.atk-entry__unit {
  display: inline-flex;
  align-items: baseline;
  gap: 5px;
  font-family: ui-monospace, "SF Mono", "JetBrains Mono", Consolas, monospace;
  font-size: 12px;
  color: #334155;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  padding: 3px 10px;
  border-radius: 7px;
  white-space: nowrap;
}
.atk-entry__unit b {
  font-weight: 700;
}
.atk-entry__unit > span {
  font-family: inherit;
  font-size: 11px;
  color: #8b99ab;
}
/* “无单位”形态：整枚灰字 */
.atk-entry__unit--none {
  color: #94a3b8;
}
.atk-entry__unit--none > span {
  color: inherit;
}

/* 卡内正文（插槽里的 markdown 属于父作用域，需用 :deep 命中） */
.atk-entry__body {
  font-size: 0.96em;
  line-height: 1.8;
  color: #39455a;
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

/* 窄屏：元信息换到整行，保持左对齐 */
@media (max-width: 640px) {
  .atk-entry__meta {
    margin-left: 0;
    width: 100%;
  }
}
</style>
