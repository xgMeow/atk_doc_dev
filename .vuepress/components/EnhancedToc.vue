<template>
  <div class="enhanced-toc-wrapper">
    <!-- 组件会在 mounted 后注入内容到 .vp-toc-list -->
  </div>
</template>

<script setup>
import { onMounted, watch, nextTick, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
let scrollHandler = null
let headerElements = []
let tocItems = []

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
    if (level < 2) return

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

// 设置高亮
const setActiveById = (targetId) => {
  tocItems.forEach(item => {
    if (item.id === targetId) {
      item.li.classList.add('active')
    } else {
      item.li.classList.remove('active')
    }
  })
}

// 更新高亮状态（根据滚动位置）
const updateActiveHighlight = () => {
  const scrollTop = window.scrollY
  const navbarHeight = 120

  let activeId = null
  let minDistance = Infinity

  headerElements.forEach((header) => {
    if (!header) return
    
    const rect = header.getBoundingClientRect()
    const headerTop = rect.top + scrollTop - navbarHeight
    
    // 标题在视口上方或刚好进入视口
    if (rect.top <= navbarHeight + 50) {
      const distance = Math.abs(scrollTop - headerTop + navbarHeight)
      if (distance < minDistance) {
        minDistance = distance
        activeId = header.id
      }
    }
  })

  if (activeId) {
    setActiveById(activeId)
  }
}

// 更新 TOC
const updateToc = () => {
  const tocList = document.querySelector('.vp-toc-list')
  if (!tocList) return

  const items = generateTocItems()
  
  tocList.innerHTML = ''
  headerElements = []
  tocItems = []

  items.forEach(item => {
    const li = document.createElement('li')
    li.className = `vp-toc-item`
    
    const a = document.createElement('a')
    a.className = `route-link vp-toc-link level${item.level}`
    a.href = `#${item.id}`
    a.textContent = item.text
    
    // 缩进
    const indentMap = {
      2: '0.75em',
      3: '1.75em',
      4: '2.75em',
      5: '3.75em',
      6: '4.75em'
    }
    a.style.paddingLeft = indentMap[item.level] || '0.75em'
    
    // 字体大小
    const fontSizeMap = {
      2: '14px',
      3: '13px',
      4: '13px',
      5: '12px',
      6: '12px'
    }
    a.style.fontSize = fontSizeMap[item.level] || '14px'

    // 点击事件 - 立即设置高亮
    a.addEventListener('click', (e) => {
      setActiveById(item.id)
    })
    
    li.appendChild(a)
    tocList.appendChild(li)

    if (item.element) {
      headerElements.push(item.element)
      tocItems.push({ id: item.id, li })
    }
  })

  // 初始高亮
  nextTick(() => {
    setTimeout(updateActiveHighlight, 100)
  })
}

onMounted(() => {
  nextTick(() => {
    setTimeout(() => {
      updateToc()
      
      // 滚动监听
      scrollHandler = () => {
        requestAnimationFrame(updateActiveHighlight)
      }
      window.addEventListener('scroll', scrollHandler, { passive: true })
    }, 500)
  })
})

watch(
  () => route.path,
  () => {
    nextTick(() => {
      setTimeout(updateToc, 500)
    })
  }
)

// 监听 hash 变化（点击跳转）
watch(
  () => route.hash,
  (newHash) => {
    if (newHash) {
      const id = newHash.replace('#', '')
      setTimeout(() => {
        setActiveById(id)
      }, 300)
    }
  }
)

onUnmounted(() => {
  if (scrollHandler) {
    window.removeEventListener('scroll', scrollHandler)
  }
})
</script>

<style>
.enhanced-toc-wrapper {
  display: none;
}

.vp-toc-item {
  position: relative;
  margin: 0;
  padding: 0.2em 0;
  list-style: none;
  border-radius: 0 12px 12px 0;
  transition: background-color 0.25s;
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
  transition: color 0.25s;
}

.vp-toc-link:hover {
  color: var(--menu-color-blue, #1456f0);
}

.vp-toc-item.active .vp-toc-link {
  color: var(--menu-color-blue, #1456f0);
  font-weight: 500;
}

.vp-toc-link.level2 {
  font-weight: 500;
}

html[data-theme="dark"] .vp-toc-item.active {
  background: rgba(20, 86, 240, 0.15);
}

html[data-theme="dark"] .vp-toc-link {
  color: var(--text-color, #d8d8d8);
}

html[data-theme="dark"] .vp-toc-link:hover,
html[data-theme="dark"] .vp-toc-item.active .vp-toc-link {
  color: #fff;
}
</style>
