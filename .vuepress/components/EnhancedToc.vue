<template>
  <div class="enhanced-toc-wrapper">
    <!-- 组件会在 mounted 后注入内容到 .vp-toc-list -->
  </div>
</template>

<script setup>
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// 获取标题层级
const getHeaderLevel = (el) => {
  const match = el.tagName.match(/H(\d)/)
  return match ? parseInt(match[1]) : 0
}

// 生成 TOC 项目
const generateTocItems = () => {
  const contentContainer = document.querySelector('.theme-hope-content')
  if (!contentContainer) return []

  const headers = contentContainer.querySelectorAll('h2, h3, h4, h5, h6')
  const items = []

  headers.forEach((header) => {
    const level = getHeaderLevel(header)
    if (level < 2) return // 跳过 h1

    const id = header.getAttribute('id')
    const text = header.textContent?.trim() || ''
    
    items.push({
      level,
      id,
      text,
      element: header
    })
  })

  return items
}

// 更新 TOC
const updateToc = () => {
  const tocList = document.querySelector('.vp-toc-list')
  if (!tocList) return

  const items = generateTocItems()
  
  // 清空现有内容
  tocList.innerHTML = ''

  items.forEach(item => {
    const li = document.createElement('li')
    li.className = `vp-toc-item`
    
    const a = document.createElement('a')
    a.className = `route-link vp-toc-link level${item.level}`
    a.href = `#${item.id}`
    a.textContent = item.text
    
    // 根据层级设置缩进（内联样式确保生效）
    const indentMap = {
      2: '0.75em',
      3: '1.75em',
      4: '2.75em',
      5: '3.75em',
      6: '4.75em'
    }
    a.style.paddingLeft = indentMap[item.level] || '0.75em'
    
    // 根据层级设置字体大小
    const fontSizeMap = {
      2: '14px',
      3: '13px',
      4: '13px',
      5: '12px',
      6: '12px'
    }
    a.style.fontSize = fontSizeMap[item.level] || '14px'
    
    li.appendChild(a)
    tocList.appendChild(li)
  })
}

onMounted(() => {
  // 初始更新
  nextTick(() => {
    setTimeout(updateToc, 500)
  })
})

// 监听路由变化
watch(
  () => route.path,
  () => {
    nextTick(() => {
      setTimeout(updateToc, 500)
    })
  }
)
</script>

<style>
.enhanced-toc-wrapper {
  display: none;
}

/* TOC 基础样式 */
.vp-toc-item {
  position: relative;
  margin: 0;
  padding: 0.2em 0;
  list-style: none;
  border-radius: 0 12px 12px 0;
}

.vp-toc-item.active {
  background: #f0f4ff;
}

.vp-toc-link {
  display: block;
  padding: 0.25em 0.75em;
  color: var(--text-color, #213547);
  line-height: 1.5;
  text-decoration: none;
  transition: color 0.25s, background-color 0.25s;
}

.vp-toc-link:hover {
  color: var(--menu-color-blue, #1456f0);
}

.vp-toc-link.level2 {
  font-weight: 500;
}

/* 暗色模式适配 */
html[data-theme="dark"] .vp-toc-item.active {
  background: rgba(255, 255, 255, 0.08);
}

html[data-theme="dark"] .vp-toc-link {
  color: var(--text-color, #d8d8d8);
}

html[data-theme="dark"] .vp-toc-link:hover {
  color: var(--menu-color-blue, #fff);
}
</style>
