<template>
  <span class="color-swatch">
    <span
      class="color-swatch-block"
      :class="{ copied }"
      :style="{ background: bgColor }"
      role="button"
      tabindex="0"
      @click="copyValue"
    >
      <span class="swatch-icon">
        <svg v-if="copied" viewBox="0 0 1024 1024" width="13" height="13">
          <path d="M866.133333 296.533333l-407.466666 407.466667L256 501.333333 209.066667 548.266667l249.6 249.6L912.533333 342.4z" :fill="iconColor" />
        </svg>
        <svg v-else viewBox="0 0 1024 1024" width="13" height="13">
          <path d="M761.088 715.3152a38.7072 38.7072 0 0 1 0-77.4144 37.4272 37.4272 0 0 0 37.4272-37.4272V265.0112a37.4272 37.4272 0 0 0-37.4272-37.4272H425.6256a37.4272 37.4272 0 0 0-37.4272 37.4272 38.7072 38.7072 0 1 1-77.4144 0 115.0976 115.0976 0 0 1 114.8416-114.8416h335.4624a115.0976 115.0976 0 0 1 114.8416 114.8416v335.4624a115.0976 115.0976 0 0 1-114.8416 114.8416z" :fill="iconColor" />
          <path d="M589.4656 883.0976H268.1856a121.1392 121.1392 0 0 1-121.2928-121.2928v-322.56a121.1392 121.1392 0 0 1 121.2928-121.344h321.28a121.1392 121.1392 0 0 1 121.2928 121.2928v322.56c1.28 67.1232-54.1696 121.344-121.2928 121.344zM268.1856 395.3152a43.52 43.52 0 0 0-43.8784 43.8784v322.56a43.52 43.52 0 0 0 43.8784 43.8784h321.28a43.52 43.52 0 0 0 43.8784-43.8784v-322.56a43.52 43.52 0 0 0-43.8784-43.8784z" :fill="iconColor" />
        </svg>
      </span>
    </span>
    <span>{{ displayText }}</span>
  </span>
</template>

<script setup lang="ts">
import { computed, onUnmounted, ref } from 'vue'

const COLOR_MAP: Record<string, string> = {
  red: 'FF0000', blue: '0000FF', green: '00CC00', yellow: 'FFFF00',
  white: 'FFFFFF', black: '000000', orange: 'FFA500', purple: '800080',
  pink: 'FFC0CB', gray: '808080', grey: '808080', cyan: '00FFFF',
  magenta: 'FF00FF', brown: 'A52A2A', lime: '00FF00', navy: '000080',
  teal: '008080', olive: '808000', maroon: '800000', silver: 'C0C0C0',
  gold: 'FFD700', coral: 'FF7F50', indigo: '4B0082', violet: 'EE82EE',
  tan: 'D2B48C', aqua: '00FFFF',
}

const props = defineProps<{ hex?: string; rgb?: string; name?: string }>()
const copied = ref(false)
let timer: ReturnType<typeof setTimeout> | null = null

onUnmounted(() => {
  if (timer) clearTimeout(timer)
})

const toHex = (n: number) => n.toString(16).padStart(2, '0').toUpperCase()

const hexValue = computed(() => {
  if (props.name) {
    return COLOR_MAP[props.name.toLowerCase()] || '000000'
  }
  if (props.rgb) {
    const r = parseInt(props.rgb.slice(0, 3))
    const g = parseInt(props.rgb.slice(3, 6))
    const b = parseInt(props.rgb.slice(6, 9))
    return `${toHex(r)}${toHex(g)}${toHex(b)}`
  }
  return (props.hex || '000000').toUpperCase()
})

const bgColor = computed(() => '#' + hexValue.value)

const displayText = computed(() => {
  if (props.name) return props.name
  if (props.rgb) return '%' + props.rgb
  return '#' + (props.hex || '000000')
})

const iconColor = computed(() => {
  const hex = hexValue.value
  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)
  return 0.299 * r + 0.587 * g + 0.114 * b > 140 ? '#333' : '#fff'
})

const copyValue = async () => {
  try {
    await navigator.clipboard.writeText(displayText.value)
    copied.value = true
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => { copied.value = false }, 1200)
  } catch {
    // 忽略剪贴板不可用的情况
  }
}
</script>

<style scoped>
.color-swatch {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
}
.color-swatch-block {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border: 1px solid #999;
  border-radius: 2px;
  flex-shrink: 0;
  cursor: pointer;
}
.color-swatch-block:hover {
  border-color: #333;
}
.swatch-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 13px;
  height: 13px;
  opacity: 0;
  transition: opacity 0.15s;
}
.color-swatch-block:hover .swatch-icon,
.color-swatch-block.copied .swatch-icon {
  opacity: 1;
}
</style>
