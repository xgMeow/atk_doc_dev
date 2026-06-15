<template>
  <div class="path-viewer" id="PathViewer">
    <div class="title-box">
      <div class="title">
        <div class="title-row">
          <span
            class="collapse-arrow"
            @click="toggleCollapse"
            :aria-label="isListCollapsed ? '展开文件列表' : '折叠文件列表'"
          >
            {{ isListCollapsed ? '▶' : '▼' }}
          </span>
          <span class="title-text">文件列表</span>
        </div>
        <div class="config-hint">
          配置后文件列表将自动拼接为完整路径，点击“复制”按钮即可复制路径
        </div>
      </div>
      <div>
        <button class="config-btn" @click="openConfigDialog">配置软件根路径</button>
      </div>
    </div>

    <!-- 文件列表（支持折叠/展开） -->
    <div class="file-list-wrapper" v-show="!isListCollapsed">
      <div v-if="rootPath" class="root-status">
        <span class="label">ATK 根路径：</span>
        <span>{{ rootPath }}</span>
      </div>
     <template v-if="!rootPath">
        <div class="tip-alert">
          当前未配置软件安装路径，展示的是相对路径，配置后可获取完整绝对路径
        </div>
        <!-- 如果检测到路径但未配置，显示快速配置提示 -->
        <div v-if="isLocalFile && autoDetectedPath && !rootPath" class="quick-config-hint">
          🔍 检测到可能的软件路径：{{ autoDetectedPath }}
          <button class="quick-config-btn" @click="quickFillAndOpen">点击配置</button>
        </div>
      </template>
  
      <div class="file-list">
        <div v-if="displayPaths.length === 0" class="empty-state">
          📂 暂无文件列表
        </div>
        <div v-else v-for="(item, index) in displayPaths" :key="index" class="list-item">
          <span class="path-icon" v-html="getIconHtml(item)"></span>
          <div class="path-info">
            <div class="display-name">
              {{ item.displayName }}
            </div>
            <div v-if="item.description" class="path-description">
              {{ item.description }}
            </div>
            <div class="path-row" v-if="item.displayName !== item.fullPath">
              <code class="full-path">{{ item.fullPath }}</code>
              <button class="copy-btn" @click="copyPath(item.fullPath, index)" :title="'复制路径: ' + item.fullPath">
                <svg class="copy-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                复制
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 配置弹窗 -->
    <div v-if="showDialog" class="modal-overlay" @click.self="closeDialog">
      <div class="modal-container">
        <h3>配置软件根路径</h3>
        <p class="modal-desc">
          请输入软件安装目录的绝对路径，之后文件列表会自动拼接为完整路径。
        </p>
        <div class="input-group">
          <input
            v-model="modalPath"
            type="text"
            placeholder="例如: D:\ProgramTool\ATK-4.0-rc.4"
            @keyup.enter="saveConfig"
          />
          <!-- 只在本地 file:// 协议下显示自动获取按钮 -->
          <button
            v-if="isLocalFile"
            class="btn-auto-fetch"
            @click="autoFetchFromUrl"
            title="从当前页面URL自动提取软件根路径"
          >
            自动获取
          </button>
        </div>
        <div v-if="autoDetectedPath && isLocalFile" class="auto-detect-hint">
          🔍 检测到可能的软件路径：{{ autoDetectedPath }}
        </div>
        <!-- 新增的功能示例提示 -->
        <div class="example-hint">
          💡 <strong>使用示例：</strong>假设您输入根路径 <code>D:\ProgramTool\ATK-4.0-rc.4</code>，
          文件列表中如有路径 <code>Help\Examples\01-入门案例</code>，
          系统会自动拼接为 <code>D:\ProgramTool\ATK-4.0-rc.4\Help\Examples\01-入门案例</code>，
          点击对应项的“复制路径”按钮即可一键复制完整路径。
        </div>
        <div class="modal-actions">
          <button class="btn-clear" @click="clearAndClose">清除配置</button>
          <button class="btn-save" @click="saveConfig">保存</button>
          <button class="btn-cancel" @click="closeDialog">取消</button>
        </div>
      </div>
    </div>

    <!-- 全局提示 -->
    <transition name="fade">
      <div v-if="message" class="toast-message">
        {{ message }}
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
// import scenarioIcon from './images/scenario.png'

// ==================== 工具函数 ====================
/**
 * 将路径中的正斜杠统一转换为反斜杠，并去除末尾多余的反斜杠
 * @param {string} path - 原始路径
 * @returns {string} 规范化后的路径
 */
const normalizePath = (path) => {
  if (!path) return ''
  let normalized = path.replace(/\//g, '\\').replace(/\\+/g, '\\')
  if (normalized.endsWith('\\')) normalized = normalized.slice(0, -1)
  return normalized
}

/**
 * 拼接根路径和相对路径，生成完整路径
 * @param {string} root - 根路径（可能为空）
 * @param {string} relative - 相对路径
 * @returns {string} 完整路径
 */
const joinPath = (root, relative) => {
  if (!root) return relative
  let rel = relative
  if (rel.startsWith('\\')) rel = rel.slice(1)
  const normalizedRoot = normalizePath(root)
  return `${normalizedRoot}\\${rel}`
}

/**
 * 判断路径是否为文件（包含扩展名且不是以点开头的隐藏文件）
 * @param {string} path - 路径
 * @returns {boolean}
 */
const isFilePath = (path) => {
  if (!path) return false
  let trimmed = path
  if (trimmed.endsWith('\\')) trimmed = trimmed.slice(0, -1)
  const lastPart = trimmed.split('\\').pop()
  return lastPart.includes('.') && !lastPart.startsWith('.')
}

/**
 * 提取文件名（基础名称）
 * @param {string} path - 完整路径
 * @returns {string} 文件名或最后一段
 */
const extractBaseName = (path) => {
  if (!path) return ''
  let trimmed = path
  if (trimmed.endsWith('\\')) trimmed = trimmed.slice(0, -1)
  const parts = trimmed.split('\\')
  return parts[parts.length - 1] || ''
}

/**
 * 获取文件扩展名（小写）
 * @param {string} path - 文件路径
 * @returns {string} 扩展名（如 '.atk'），若没有则返回空字符串
 */
const getFileExtension = (path) => {
  const fileName = extractBaseName(path)
  const lastDotIndex = fileName.lastIndexOf('.')
  if (lastDotIndex === -1) return ''
  return fileName.substring(lastDotIndex).toLowerCase()
}

/**
 * 判断是否为图片文件（基于扩展名）
 * @param {string} path - 文件路径
 * @param {Array} imageExtensions - 图片扩展名列表
 * @returns {boolean}
 */
const isImageFile = (path, imageExtensions) => {
  const ext = getFileExtension(path)
  return imageExtensions.includes(ext)
}

/**
 * 从当前页面的 file:// URL 中提取软件根路径
 * 策略：优先查找 'help' 目录，取 help 的父目录作为根路径；如果未找到，则查找包含 softwareIdentifier 的目录段
 * @param {string} url - 当前页面 URL
 * @param {string} softwareIdentifier - 软件标识关键词
 * @returns {string|null} 提取的根路径，失败返回 null
 */
const extractRootPathFromUrl = (url, softwareIdentifier) => {
  if (!url || !url.startsWith('file://')) return null
  try {
    // 去掉 file:// 前缀，并解码 URL 编码的中文
    let path = url.replace(/^file:\/\/\/?/, '')
    path = decodeURIComponent(path)
    path = normalizePath(path)

    const pathParts = path.split('\\')

    // 策略1：优先查找 'help' 目录，取 help 的父目录作为根路径
    for (let i = 0; i < pathParts.length; i++) {
      const part = pathParts[i]
      if (part && part.toLowerCase() === 'help') {
        if (i > 0) return pathParts.slice(0, i).join('\\')
        break
      }
    }

    // 策略2：查找包含软件标识的目录
    for (let i = 0; i < pathParts.length; i++) {
      const part = pathParts[i]
      if (part && part.includes(softwareIdentifier)) {
        return pathParts.slice(0, i + 1).join('\\')
      }
    }

    return null
  } catch (error) {
    console.error('提取根路径失败:', error)
    return null
  }
}

// ==================== Props 定义 ====================
const props = defineProps({
  relativePaths: {
    type: Array,
  },
  storageKey: {
    type: String,
    default: 'ATK_root_path',
  },
  softwareIdentifier: {
    type: String,
    default: 'ATK',
  },
  iconConfig: {
    type: Object,
    default: () => ({
      fileTypeIcons: {
        '.atk': '<svg t="1775133327450" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12975" width="256" height="256"><path d="M98.9 577.2h350v350h-350zM98.9 112.6h350v350h-350zM567.3 577.2h350v350h-350zM520.493 287.543L742.31 65.725l221.818 221.818L742.31 509.36z" fill="#ff9212" p-id="12976"></path></svg>',
        '.xml': '<svg t="1775133327450" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12975" width="256" height="256"><path d="M98.9 577.2h350v350h-350zM98.9 112.6h350v350h-350zM567.3 577.2h350v350h-350zM520.493 287.543L742.31 65.725l221.818 221.818L742.31 509.36z" fill="#ff9212" p-id="12976"></path></svg>'
      },
      defaultFileIcon: '📄',
      defaultFolderIcon: '📁',
      defaultImgIcon: '🖼️',
      imageExtensions: ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.bmp'],
    }),
  },
})
 
// ==================== 响应式状态 ====================
const rootPath = ref('') // 用户配置的根路径
const message = ref('') // 提示消息文本
const showDialog = ref(false) // 是否显示配置弹窗
const modalPath = ref('') // 弹窗中输入的临时路径
const isListCollapsed = ref(false) // 文件列表是否折叠
const isLocalFile = ref(false) // 当前是否在 file:// 协议下
const autoDetectedPath = ref('') // 自动检测到的软件根路径

let messageTimer = null // 消息定时器句柄

// ==================== 辅助方法 ====================
/**
 * 显示短暂提示消息（5秒后自动消失）
 * @param {string} msg - 消息内容
 */
const showMessage = (msg) => {
  if (messageTimer) clearTimeout(messageTimer)
  message.value = msg
  messageTimer = setTimeout(() => {
    message.value = ''
    messageTimer = null
  }, 5000)
}

/**
 * 获取文件/文件夹对应的图标 HTML
 * @param {Object} item - 包含 fullPath 和 isFile 属性的对象
 * @returns {string} HTML 字符串或文本图标
 */
const getIconHtml = (item) => {
  if (!item.isFile) return props.iconConfig.defaultFolderIcon

  const ext = getFileExtension(item.fullPath)
  const customIcon = props.iconConfig.fileTypeIcons[ext]
  if (customIcon) {
    // 如果是 URL 或绝对路径，使用 img 标签
    if (customIcon.startsWith('/') || customIcon.startsWith('http')) {
      return `<img src="${customIcon}" alt="${ext}图标" class="icon-img" />`
    }
    return customIcon
  }

  if (isImageFile(item.fullPath, props.iconConfig.imageExtensions)) {
    return props.iconConfig.defaultImgIcon
  }

  return props.iconConfig.defaultFileIcon
}

/**
 * 保存根路径到 localStorage，并更新状态
 * @param {string} path - 新的根路径
 */
const setRootPathValue = (newPath) => {
  const normalized = normalizePath(newPath)
  rootPath.value = normalized
  try {
    if (normalized) {
      localStorage.setItem(props.storageKey, normalized)
    } else {
      localStorage.removeItem(props.storageKey)
    }
  } catch (error) {
    console.error('保存本地配置失败:', error)
  }
  if (normalized) {
    showMessage(`✅ 根路径已设置: ${normalized}`)
  } else {
    showMessage('🔄 已清除根路径配置，现显示原始相对路径')
  }
}

/**
 * 检测当前环境并尝试自动获取软件根路径（仅检测，不自动保存）
 */
const detectAndAutoFetch = () => {
  const currentUrl = window.location.href
  // 测试用固定 URL 进行调试
  // const currentUrl = "file:///D:/ProgramTool/ATK-4.0-rc.4/Help/html/3.案例教程/1-入门案例.html";
  if (currentUrl.startsWith('file://')) {
    isLocalFile.value = true
    const detectedPath = extractRootPathFromUrl(currentUrl, props.softwareIdentifier)
    if (detectedPath) {
      autoDetectedPath.value = detectedPath
      if (!rootPath.value) {
        showMessage(`🔍 检测到软件根路径: ${detectedPath}，请点击“配置软件根路径”并保存`)
      }
    } else {
      autoDetectedPath.value = ''
    }
  } else {
    isLocalFile.value = false
    autoDetectedPath.value = ''
  }
}

/**
 * 从 localStorage 加载已保存的根路径配置
 */
const loadRootPath = () => {
  try {
    const saved = localStorage.getItem(props.storageKey)
    if (saved) {
      rootPath.value = saved
    }
  } catch (error) {
    console.error('读取本地配置失败:', error)
  }
  // 无论是否有保存的配置，都执行检测（用于显示自动获取按钮和提示）
  detectAndAutoFetch()
}

// ==================== 事件处理（用户交互） ====================
/** 打开配置弹窗，预填当前值或检测到的路径 */
const openConfigDialog = () => {
  if (rootPath.value) {
    modalPath.value = rootPath.value
  } else if (autoDetectedPath.value) {
    modalPath.value = autoDetectedPath.value
  } else {
    modalPath.value = ''
  }
  showDialog.value = true
}

/** 关闭配置弹窗 */
const closeDialog = () => {
  showDialog.value = false
}

/** 保存配置弹窗中的路径 */
const saveConfig = () => {
  const newPath = modalPath.value.trim()
  setRootPathValue(newPath)
  closeDialog()
}

/** 清除配置并关闭弹窗 */
const clearAndClose = () => {
  setRootPathValue('')
  closeDialog()
}

/** 自动获取路径（仅填充到输入框，不自动保存） */
const autoFetchFromUrl = () => {
  const currentUrl = window.location.href
  // 测试用固定 URL 进行调试
  // const currentUrl = "file:///D:/ProgramTool/ATK-4.0-rc.4/Help/html/3.案例教程/1-入门案例.html";
  if (!currentUrl.startsWith('file://')) {
    showMessage('❌ 当前不在本地文件环境，无法自动获取')
    return
  }
  const detectedPath = extractRootPathFromUrl(currentUrl, props.softwareIdentifier)
  if (detectedPath) {
    modalPath.value = detectedPath
    autoDetectedPath.value = detectedPath // 更新检测到的路径
    showMessage(`✅ 已自动获取软件路径: ${detectedPath}，请点击“保存”生效`)
  } else {
    showMessage('❌ 未能自动识别软件根路径，请手动输入')
  }
}

/** 快速填充并打开弹窗（用于未配置时的快捷配置） */
const quickFillAndOpen = () => {
  if (autoDetectedPath.value) {
    modalPath.value = autoDetectedPath.value
    showDialog.value = true
  } else {
    openConfigDialog()
  }
}

/** 折叠/展开文件列表 */
const toggleCollapse = () => {
  isListCollapsed.value = !isListCollapsed.value
}

/**
 * 复制文本到剪贴板（支持降级方案）
 * @param {string} text - 要复制的文本
 */
const copyPath = async (text) => {
  const fallbackCopy = () => {
    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    const success = document.execCommand('copy')
    document.body.removeChild(textarea)
    if (success) {
      showMessage(`✅ 复制成功: ${text}`)
    } else {
      showMessage('❌ 复制失败，请手动复制')
    }
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text)
      showMessage(`✅ 复制成功: ${text}`)
    } catch (err) {
      console.error('Clipboard API 复制失败:', err)
      fallbackCopy()
    }
  } else {
    fallbackCopy()
  }
}

// ==================== 计算属性 ====================
/**
 * 生成最终展示的文件列表
 * 将相对路径与根路径拼接，并附加显示名称、是否为文件等信息
 */
const displayPaths = computed(() => {
  if (!props.relativePaths || props.relativePaths.length === 0) return []

  return props.relativePaths
    .map((item) => {
      let originalPath = ''
      let customName = null
      let description = null

      if (typeof item === 'string') {
        originalPath = item
      } else if (item && typeof item === 'object') {
        originalPath = item.path || ''
        customName = item.name || null
        description = item.description || null
      } else {
        console.warn('无效的路径项:', item)
        return null
      }

      const fullPath = joinPath(rootPath.value, originalPath)
      const isFile = isFilePath(fullPath)

      let displayName = ''
      if (customName !== null && customName !== '') {
        displayName = customName
      } else {
        displayName = extractBaseName(fullPath)
        if (!displayName) displayName = fullPath
      }

      return { original: originalPath, fullPath, displayName, isFile, description }
    })
    .filter((item) => item !== null)
})

// ==================== 生命周期 ====================
onMounted(() => {
  loadRootPath()
})
</script>

<style scoped>
/* ==================== CSS 变量 ==================== */
.path-viewer {
  --primary: #006fee;
  --primary-hover: #005bc4;
  --primary-light: #eef5ff;
  --success: #16a34a;
  --success-light: #f0fdf4;
  --warning: #dc2626;
  --warning-hover: #b91c1c;
  --gray-50: #f6f8fb;
  --gray-100: #eef1f6;
  --gray-200: #dde1e8;
  --gray-300: #c2c8d2;
  --gray-400: #97a0af;
  --gray-500: #6b7480;
  --gray-600: #505862;
  --gray-700: #383e47;
  --gray-800: #282d35;
  --gray-900: #1c2025;
  --border-radius-sm: 5px;
  --border-radius-md: 8px;
  --border-radius-lg: 12px;
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 12px 28px rgba(0, 0, 0, 0.12);
  --transition-fast: 0.12s ease;
}

/* 整体容器 */
.path-viewer {
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  background: #ffffff;
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--gray-200);
  padding: 20px 24px;
  margin: 20px auto;
  box-shadow: var(--shadow-sm);
}

/* 头部区域 */
.title-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 4px;
}

.title {
  flex: 1;
  min-width: 0;
}

.title-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}

.collapse-arrow {
  font-size: 12px;
  cursor: pointer;
  user-select: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: var(--border-radius-sm);
  transition: background-color var(--transition-fast), color var(--transition-fast);
  color: var(--gray-600);
  background: var(--gray-50);
}

.collapse-arrow:hover {
  background-color: var(--primary-light);
  color: var(--primary);
}

.title-text {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--gray-900);
}

.config-hint {
  font-size: 12px;
  color: var(--gray-600);
  padding-left: 34px;
  line-height: 1.4;
}

.config-btn {
  padding: 7px 16px;
  border: 1px solid var(--primary);
  border-radius: var(--border-radius-md);
  background: white;
  color: var(--primary);
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  transition: background-color var(--transition-fast), border-color var(--transition-fast), color var(--transition-fast);
  flex-shrink: 0;
  align-self: center;
}

.config-btn:hover {
  background: var(--primary);
  color: white;
}

/* 根路径状态栏 */
.root-status {
  font-size: 13px;
  color: var(--gray-700);
  background: var(--gray-50);
  padding: 10px 14px;
  border-radius: var(--border-radius-md);
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  word-break: break-all;
  margin: 16px 0;
  border: 1px solid var(--gray-200);
}

.root-status .label {
  font-weight: 600;
  color: var(--gray-800);
}

/* 提示框 */
.tip-alert {
  margin: 16px 0;
  background: var(--primary-light);
  color: var(--primary-hover);
  border-radius: var(--border-radius-sm);
  font-size: 12px;
  padding: 8px 12px;
  border: 1px solid rgba(0, 111, 238, 0.1);
}

.quick-config-hint {
  margin-top: 12px;
  font-size: 12px;
  color: var(--success);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  background: var(--success-light);
  padding: 8px 12px;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
}

.quick-config-btn {
  background: var(--success);
  color: white;
  border: none;
  border-radius: var(--border-radius-sm);
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color var(--transition-fast);
}

.quick-config-btn:hover {
  background: #116329;
}

/* 文件列表包装器 */
.file-list-wrapper {
  /* 无动画，直接显示/隐藏 */
}

/* 文件列表区域 */
.file-list {
  max-height: 360px;
  overflow-y: auto;
  border-radius: var(--border-radius-md);
  margin-top: 8px;
  border: 1px solid var(--gray-200);
  background: white;
}

.empty-state {
  text-align: center;
  padding: 48px 20px;
  color: var(--gray-500);
  font-size: 14px;
  background: var(--gray-50);
  border-radius: var(--border-radius-md);
}

/* 列表项 */
.list-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 14px;
  background: white;
  border-bottom: 1px solid var(--gray-100);
}

.list-item:last-child {
  border-bottom: none;
}

.path-icon {
  font-size: 18px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-top: 1px;
}

.icon-img {
  width: 18px;
  height: 18px;
  object-fit: contain;
}

.path-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.display-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--gray-800);
  line-height: 1.4;
  word-break: break-word;
}

.path-description {
  font-size: 12px;
  color: var(--gray-600);
  line-height: 1.45;
}

/* 路径行：全路径 + 复制按钮 */
.path-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 2px;
}

.path-row:hover .full-path {
  background: #e6f0fd;
  color: var(--gray-700);
}

.full-path {
  font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
  font-size: 11px;
  color: var(--gray-600);
  word-break: break-all;
  line-height: 1.4;
  user-select: all;
  background: var(--gray-50);
  padding: 4px 8px;
  border-radius: var(--border-radius-sm);
  flex: 1;
  min-width: 0;
  transition: background-color var(--transition-fast), color var(--transition-fast);
}

/* 复制按钮 */
.copy-btn {
  background: white;
  border: 1px solid var(--gray-300);
  border-radius: var(--border-radius-sm);
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 500;
  color: var(--gray-600);
  cursor: pointer;
  transition: background-color var(--transition-fast), border-color var(--transition-fast), color var(--transition-fast);
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
  flex-shrink: 0;
}

.copy-btn:hover {
  background: var(--primary-light);
  border-color: var(--primary);
  color: var(--primary);
}

.copy-icon {
  flex-shrink: 0;
  stroke-width: 2;
}

/* 模态弹窗 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.15s ease;
}

.modal-container {
  background: white;
  border-radius: var(--border-radius-lg);
  width: 90%;
  max-width: 540px;
  padding: 28px;
  box-shadow: var(--shadow-lg);
  animation: modalFadeIn 0.15s ease;
}

.modal-container h3 {
  margin: 0 0 6px 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--gray-900);
}

.modal-desc {
  font-size: 0.85rem;
  color: var(--gray-600);
  margin-bottom: 18px;
  line-height: 1.45;
}

.input-group {
  display: flex;
  gap: 10px;
  margin-bottom: 14px;
}

.modal-container input {
  flex: 1;
  padding: 10px 12px;
  border: 1px solid var(--gray-300);
  border-radius: var(--border-radius-md);
  font-size: 13px;
  font-family: 'SF Mono', 'Fira Code', monospace;
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
  background: white;
  color: var(--gray-800);
}

.modal-container input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(0, 111, 238, 0.12);
}

.btn-auto-fetch {
  padding: 0 16px;
  background: var(--gray-50);
  border: 1px solid var(--gray-300);
  border-radius: var(--border-radius-md);
  font-size: 13px;
  font-weight: 500;
  color: var(--gray-600);
  cursor: pointer;
  transition: background-color var(--transition-fast), border-color var(--transition-fast);
}

.btn-auto-fetch:hover {
  background: var(--gray-100);
  border-color: var(--gray-400);
  color: var(--gray-800);
}

.auto-detect-hint {
  font-size: 12px;
  color: var(--success);
  margin-bottom: 14px;
  padding: 8px 12px;
  background: var(--success-light);
  border-radius: var(--border-radius-sm);
  word-break: break-all;
}

.example-hint {
  font-size: 12px;
  background: var(--primary-light);
  border: 1px solid rgba(0, 111, 238, 0.1);
  padding: 12px 14px;
  border-radius: var(--border-radius-md);
  margin: 14px 0;
  color: var(--gray-700);
  line-height: 1.5;
}

.example-hint code {
  background: rgba(0, 111, 238, 0.08);
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
  font-size: 11px;
  color: #8250df;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 14px;
}

.modal-actions button {
  padding: 8px 18px;
  border-radius: var(--border-radius-md);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color var(--transition-fast);
  border: none;
}

.btn-save {
  background: var(--primary);
  color: white;
}

.btn-save:hover {
  background: var(--primary-hover);
}

.btn-clear {
  background: var(--warning);
  color: white;
}

.btn-clear:hover {
  background: var(--warning-hover);
}

.btn-cancel {
  background: var(--gray-50);
  color: var(--gray-700);
  border: 1px solid var(--gray-300);
}

.btn-cancel:hover {
  background: var(--gray-100);
}

@keyframes modalFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Toast 提示 */
.toast-message {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(26, 30, 35, 0.94);
  color: white;
  padding: 10px 22px;
  border-radius: 40px;
  font-size: 13px;
  font-weight: 500;
  z-index: 1100;
  pointer-events: none;
  box-shadow: var(--shadow-lg);
  backdrop-filter: blur(8px);
  max-width: 90vw;
  word-break: break-word;
  text-align: center;
  line-height: 1.4;
  animation: toastIn 0.15s ease;
}

@keyframes toastIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 滚动条 */
.file-list::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

.file-list::-webkit-scrollbar-track {
  background: transparent;
}

.file-list::-webkit-scrollbar-thumb {
  background: var(--gray-300);
  border-radius: 10px;
}

.file-list::-webkit-scrollbar-thumb:hover {
  background: var(--gray-400);
}

/* 响应式调整 */
@media (max-width: 640px) {
  .path-viewer {
    padding: 16px;
    margin: 12px;
  }

  .title-box {
    flex-direction: column;
    align-items: stretch;
  }

  .config-btn {
    align-self: stretch;
    text-align: center;
  }

  .config-hint {
    padding-left: 0;
  }

  .list-item {
    flex-wrap: wrap;
    gap: 8px;
  }

  .path-row {
    flex-wrap: wrap;
  }

  .modal-container {
    padding: 20px;
  }
}
</style>