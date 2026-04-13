<template>
  <div class="enhanced-toc-wrapper">
    <!-- 组件会在 mounted 后注入内容到 .vp-toc-list -->
  </div>
</template>

<script setup>
import { onMounted, watch, onUnmounted, nextTick } from 'vue'
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
    
    // 添加缩进样式
    a.style.paddingLeft = `${(item.level - 2) * 12}px`
    
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

/* TOC 层级样式 */
.vp-toc-link.level2 {
  font-weight: 500;
}

.vp-toc-link.level3 {
  font-size: 0.9em;
  color: var(--vp-c-text-2);
}

.vp-toc-link.level4 {
  font-size: 0.85em;
  color: var(--vp-c-text-3);
}

.vp-toc-link.level5,
.vp-toc-link.level6 {
  font-size: 0.8em;
  color: var(--vp-c-text-3);
}
</style>
