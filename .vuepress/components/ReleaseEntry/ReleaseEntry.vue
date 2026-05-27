<template>
  <article class="release-entry" :class="{ 'is-open': isOpen }">
    <div class="release-header" @click="toggleOpen">
      <svg class="release-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round">
        <path d="M9 18l6-6-6-6" />
      </svg>
      <span class="release-version">{{ version }}</span>
      <span class="release-date">{{ date }}</span>
      <span v-if="isLatest" class="release-latest">
        <span class="release-latest-dot"></span>最新
      </span>
    </div>
    <div class="release-body">
      <div class="release-body-inner">
        <div v-for="(cat, ci) in renderCategories" :key="cat.type || ci" v-show="cat.hasContent" class="changelog-category">
          <div class="changelog-category-header">
            <span class="changelog-category-dot" :style="cat.dotStyle"></span>
            <span class="changelog-category-title" :style="cat.titleStyle">{{ cat.label }}</span>
          </div>
          <div class="changelog-entries">
            <div v-for="(entry, ei) in cat.entries" :key="ei" :class="['changelog-entry', { 'is-grouped': entry.title }]">
              <div v-if="entry.title" class="changelog-group-title" v-html="entry.title"></div>
              <ul class="changelog-list">
                <li v-for="(item, idx) in entry.items" :key="idx" v-html="item"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
/*
使用示例：
<ReleaseEntry
  version="4.0.0-rc.4"
  date="2026-02-02"
  :isLatest="false"
  :defaultOpen="false"
  :changes="changes"
/>

changes 支持数组格式，适合按发布类别顺序展示：
[
  {
    type: 'fixed',
    label: '修复',
    items: [
      '修复普通问题',
      {
        title: '核心计算与绘制',
        items: ['修复问题 A', '修复问题 B']
      },
      {
        items: ['不需要分组标题的问题 A', '不需要分组标题的问题 B']
      }
    ]
  }
]

changes 也支持对象格式，字段名对应 new、improved、fixed、removed、other：
{
  new: ['新增功能'],
  fixed: [
    {
      title: '程序稳定性与界面',
      items: ['修复崩溃问题']
    },
    {
      items: ['无标题分组内容']
    }
  ]
}

items 可以直接写字符串，也可以写对象。
- 字符串：作为普通列表项渲染。
- 对象：必须有 items；title 可选。
- 对象有 title：渲染为带分组标题的浅色卡片。
- 对象没有 title：不显示分组标题，按普通列表块渲染。
items 中的字符串会通过 v-html 渲染，可使用 <code>、<strong> 等行内 HTML。
colors 可按类别配置颜色：{ fixed: { dot: '#f6ad55', title: '#c47a24' } }。
*/
import { ref, computed } from 'vue'

const props = defineProps({
  // 版本号
  version: {
    type: String,
    required: true
  },
  // 发布日期
  date: {
    type: String,
    required: true
  },
  // 是否显示“最新”徽章
  isLatest: {
    type: Boolean,
    default: false
  },
  // 初始是否展开
  defaultOpen: {
    type: Boolean,
    default: false
  },
  // 更新内容，支持 HTML 字符串数组
  changes: {
    type: [Object, Array],
    required: true
  },
  // 颜色配置：支持传入 CSS 颜色值（如 '#48bb78'）或类名（如 'green'）
  // 若不传则使用默认颜色
  colors: {
    type: Object,
    default: () => ({
      new: { dot: '#48bb78', title: '#2d8a56' },
      improved: { dot: '#53a8ff', title: '#409eff' },
      fixed: { dot: '#ff5f5f', title: '#ff5f5f' },
      removed: { dot: '#e6a23c', title: '#e6a23c' },
      other: { dot: '#3182ce', title: '#3182ce' }
    })
  }
})

const isOpen = ref(props.defaultOpen)

const toggleOpen = () => {
  isOpen.value = !isOpen.value
}

const categoriesMap = [
  { type: 'new', label: '新增', itemsKey: 'new' },
  { type: 'improved', label: '改进', itemsKey: 'improved' },
  { type: 'fixed', label: '修复', itemsKey: 'fixed' },
  { type: 'removed', label: '删除', itemsKey: 'removed' },
  { type: 'other', label: '其他', itemsKey: 'other' }
]

const getCategoryStyles = (type) => {
  const colors = props.colors || {}
  const colorConfig = colors[type] || colors.other || { dot: '#5b8def', title: '#3f6fb5' }

  if (typeof colorConfig === 'string') {
    const isColorValue = /^(#|rgb|rgba|hsl)/i.test(colorConfig)
    if (isColorValue) {
      return {
        dotStyle: { backgroundColor: colorConfig },
        titleStyle: { color: colorConfig }
      }
    }
    return { dotStyle: {}, titleStyle: {} }
  }

  if (typeof colorConfig === 'object') {
    return {
      dotStyle: colorConfig.dot ? { backgroundColor: colorConfig.dot } : {},
      titleStyle: colorConfig.title ? { color: colorConfig.title } : {}
    }
  }

  return { dotStyle: {}, titleStyle: {} }
}

const getCategoryLabel = (type) => categoriesMap.find(cat => cat.type === type)?.label || categoriesMap.find(cat => cat.type === 'other').label
const getDotStyle = (type) => getCategoryStyles(type).dotStyle
const getTitleStyle = (type) => getCategoryStyles(type).titleStyle

const normalizeEntries = (items = []) => (Array.isArray(items) ? items : []).map(item => {
  if (typeof item === 'string') {
    return { items: [item] }
  }

  return {
    title: item.title || item.label,
    items: Array.isArray(item.items) ? item.items : []
  }
}).filter(entry => entry.items.length)

const renderCategories = computed(() => {
  const source = Array.isArray(props.changes)
    ? props.changes
    : categoriesMap.map(cat => ({
        ...cat,
        items: props.changes[cat.itemsKey] || []
      }))

  return source.map(cat => {
    const { dotStyle, titleStyle } = getCategoryStyles(cat.type)
    const entries = normalizeEntries(cat.items)

    return {
      type: cat.type,
      label: cat.label || getCategoryLabel(cat.type),
      entries,
      hasContent: entries.length > 0,
      dotStyle,
      titleStyle
    }
  })
})
</script>

<style scoped>
.release-entry {
  position: relative;
  background: #ffffff;
  border: 1px solid #e5eaf2;
  border-radius: 4px;
    box-shadow:
    0 1px 2px rgba(18, 25, 58, 0.04),
    0 4px 12px rgba(18, 25, 58, 0.03),
    0 8px 24px rgba(18, 25, 58, 0.02);
  margin: 18px 0;
  overflow: hidden;
  transition: border-color 0.18s ease;
  font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
}

.release-entry:hover,
.release-entry.is-open {
  border-color: #d4deeb;
}

.release-header {
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 22px;
  cursor: pointer;
  user-select: none;
  transition: background 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.release-header:hover {
  background: #f8fafc;
}

.release-entry.is-open .release-header {
  background: #fbfdff;
  box-shadow: inset 0 -1px 0 #edf2f7;
}

.release-chevron {
  display: block;
  width: 18px;
  height: 18px;
  color: #7890ad;
  flex: 0 0 18px;
  transform: rotate(0deg);
  transform-origin: 50% 50%;
  transition:
    color 0.16s ease,
    transform 0.16s ease;
}

.release-entry.is-open .release-chevron {
  color: #4f74aa;
  transform: rotate(90deg);
}

.release-version {
  font-family: "Berkeley Mono", ui-monospace, Menlo, Consolas, monospace;
  font-size: 15px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: #0f172a;
  letter-spacing: 0.01em;
}

.release-date {
  font-size: 13px;
  color: #64748b;
}

.release-latest {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 2px 9px;
  background: #eef5ff;
  border: 1px solid #d8e6f7;
  color: #3f6fb5;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
  margin-left: auto;
}

.release-latest-dot {
  width: 6px;
  height: 6px;
  background: #5b8def;
  border-radius: 50%;
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }
}

.release-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.16s ease;
}

.release-entry.is-open .release-body {
  max-height: 3000px;
  overflow: auto;
}

.release-body-inner {
  padding: 16px 22px 22px;
}

.changelog-category {
  position: relative;
  margin-bottom: 18px;
  padding-left: 2px;
}

.changelog-category:last-child {
  margin-bottom: 0;
}

.changelog-category-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.changelog-category-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  box-shadow: 0 0 0 3px rgba(100, 116, 139, 0.08);
  flex-shrink: 0;
}

.changelog-category-title {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.03em;
}

.changelog-entries {
  display: grid;
  gap: 10px;
}

.changelog-entry.is-grouped {
  padding: 10px 14px 12px;
  background: #f8fafc;
  border: 1px solid #edf2f7;
  border-radius: 6px;
}

.changelog-group-title {
  display: inline-flex;
  align-items: center;
  margin-bottom: 6px;
  padding: 2px 8px;
  background: #ffffff;
  border: 1px solid #e5eaf2;
  border-radius: 999px;
  color: #334155;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.5;
}

.changelog-list {
  padding-left: 20px;
  list-style: disc;
  margin: 0;
}

.changelog-list li {
  font-size: 15px;
  color: #3f4a5a;
  line-height: 1.66;
  padding: 2px 0;
}

.changelog-list li::marker {
  color: #cbd5e1;
}

@media (max-width: 600px) {
  .release-header {
    gap: 12px;
    padding: 13px 16px;
    flex-wrap: wrap;
  }

  .release-version {
    font-size: 13px;
  }

  .release-date {
    font-size: 12px;
  }

  .release-latest {
    margin-left: auto;
  }

  .release-body-inner {
    padding: 14px 16px 16px;
  }

  .changelog-list {
    padding-left: 16px;
  }
}
</style>