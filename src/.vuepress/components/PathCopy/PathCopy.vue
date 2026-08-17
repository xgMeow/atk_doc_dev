<template>
  <span ref="rootRef" class="path-copy">
    <button
      class="path-trigger"
      type="button"
      :aria-controls="popoverId"
      :aria-expanded="isOpen"
      :aria-label="`查看并复制文件路径：${displayName}`"
      aria-haspopup="dialog"
      @click="togglePopover"
      @keydown.esc="closePopover"
    >
      <span class="trigger-text">{{ displayName }}</span>
    </button>

    <transition name="bubble">
      <span v-if="isOpen" :id="popoverId" class="path-popover" role="dialog" aria-label="文件路径操作">
        <span class="popover-header">
          <span class="popover-title">文件路径</span>
          <span class="path-state" :class="{ muted: rootPathHint }">{{ pathStateLabel }}</span>
        </span>

        <span v-if="rootPathHint" class="path-hint">{{ rootPathHint }}</span>

        <span class="path-card">
          <code class="popover-path">{{ displayPath }}</code>
        </span>

        <span class="popover-actions">
          <a class="popover-action secondary" :href="viewerHref" @click="closePopover">
            跳转文件列表
          </a>
          <button class="popover-action primary" type="button" @click="copyPath">
            {{ copyButtonLabel }}
          </button>
        </span>

        <transition name="message">
          <span v-if="message" class="path-message" aria-live="polite">{{ message }}</span>
        </transition>
      </span>
    </transition>
  </span>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { getRootPathHint, joinPath, resolvePathEntry, resolveViewerTarget } from './pathCopyUtils.mjs'

const props = defineProps({
  entry: {
    type: [Object, String],
    default: null,
  },
  path: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  storageKey: {
    type: String,
    default: 'ATK_root_path',
  },
  viewerTarget: {
    type: String,
    default: 'PathViewer',
  },
})

const rootRef = ref(null)
const rootPath = ref('')
const message = ref('')
const isOpen = ref(false)
const popoverId = `path-copy-${Math.random().toString(36).slice(2, 10)}`
let messageTimer = null

const pathEntry = computed(() => resolvePathEntry(props.entry, props.path, props.label))
const displayPath = computed(() => joinPath(rootPath.value, pathEntry.value.path))
const displayName = computed(() => pathEntry.value.label || displayPath.value)
const rootPathHint = computed(() => getRootPathHint(rootPath.value))
const viewerHref = computed(() => resolveViewerTarget(props.viewerTarget))
const pathStateLabel = computed(() => rootPathHint.value ? '相对路径' : '完整路径')
const copyButtonLabel = computed(() => message.value === '已复制' ? '已复制' : '复制路径')

const showMessage = (msg) => {
  if (messageTimer) clearTimeout(messageTimer)
  message.value = msg
  messageTimer = setTimeout(() => {
    message.value = ''
    messageTimer = null
  }, 2500)
}

const loadRootPath = () => {
  try {
    rootPath.value = localStorage.getItem(props.storageKey) || ''
  } catch (error) {
    rootPath.value = ''
  }
}

const openPopover = () => {
  loadRootPath()
  isOpen.value = true
}

const closePopover = () => {
  isOpen.value = false
}

const togglePopover = () => {
  if (isOpen.value) {
    closePopover()
  } else {
    openPopover()
  }
}

const handleDocumentClick = (event) => {
  if (!rootRef.value || rootRef.value.contains(event.target)) return
  closePopover()
}

const fallbackCopy = (text) => {
  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.select()
  const success = document.execCommand('copy')
  document.body.removeChild(textarea)
  showMessage(success ? '已复制' : '复制失败')
}

const copyPath = async () => {
  loadRootPath()
  const text = displayPath.value
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text)
      showMessage('已复制')
      return
    } catch (error) {
      fallbackCopy(text)
      return
    }
  }

  fallbackCopy(text)
}

onMounted(() => {
  loadRootPath()
  document.addEventListener('click', handleDocumentClick)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleDocumentClick)
  if (messageTimer) clearTimeout(messageTimer)
})
</script>

<style scoped>
.path-copy {
  --path-accent: #006edc;
  --path-accent-strong: #004d9a;
  --path-accent-soft: #e8f3ff;
  --path-accent-wash: #f4f9ff;
  --path-success: #0b8f66;
  --path-warning: #d77700;
  --path-ink: #17273d;
  --path-muted: #6f7c8f;
  --path-line: #dbe6f2;
  --path-panel: rgba(255, 255, 255, 0.98);
  --path-shadow: 0 22px 55px rgba(25, 50, 82, 0.2), 0 3px 10px rgba(25, 50, 82, 0.08);

  position: relative;
  display: inline;
}

.path-trigger {
  position: relative;
  display: inline;
  margin: 0;
  padding: 0 2px;
  color: var(--path-accent);
  background: transparent;
  /* background: linear-gradient(90deg, rgba(0, 110, 220, 0.14), rgba(0, 110, 220, 0.04)) left calc(100% - 0.08em) / 100% 0.46em no-repeat; */
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  font: inherit;
  line-height: inherit;
  text-align: inherit;
  text-decoration: none;
  transition: color 0.18s ease, background-size 0.18s ease, background-position 0.18s ease;
}

.trigger-text {
  overflow-wrap: anywhere;
}

/* .path-trigger:hover, */
.path-trigger:focus-visible,
.path-trigger[aria-expanded='true'] {
  color: var(--path-accent-strong);
  background-position: left bottom;
  background-size: 100% 0.86em;
  outline: none;
}

.path-trigger:hover::after,
.path-trigger:focus-visible::after,
.path-trigger[aria-expanded='true']::after {
  opacity: 0.8;
  transform: translateY(-0.18em) scale(1.25);
}

.path-trigger:focus-visible {
  box-shadow: 0 0 0 3px rgba(0, 110, 220, 0.14);
}

.path-popover {
  position: absolute;
  left: 50%;
  bottom: calc(100% + 14px);
  z-index: 100;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 10px;
  width: max-content;
  max-width: min(560px, calc(100vw - 32px));
  padding: 14px;
  color: var(--path-ink);
  background: var(--path-panel);
  border: 1px solid rgba(180, 200, 224, 0.85);
  border-radius: 16px;
  box-shadow: var(--path-shadow);
  transform: translateX(-50%);
  backdrop-filter: blur(12px);
}

.path-popover::before {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background:
    radial-gradient(circle at 18px 18px, rgba(0, 110, 220, 0.12), transparent 26px),
    linear-gradient(135deg, rgba(255, 255, 255, 0.75), transparent 42%);
  content: '';
  pointer-events: none;
}

.path-popover::after {
  position: absolute;
  left: 50%;
  bottom: -6px;
  width: 12px;
  height: 12px;
  background: var(--path-panel);
  border-right: 1px solid rgba(180, 200, 224, 0.85);
  border-bottom: 1px solid rgba(180, 200, 224, 0.85);
  content: '';
  transform: translateX(-50%) rotate(45deg);
}

.popover-header,
.path-hint,
.path-card,
.popover-actions,
.path-message {
  position: relative;
  z-index: 1;
}

.popover-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.popover-title {
  color: var(--path-ink);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.02em;
}

.path-state {
  display: inline-flex;
  align-items: center;
  min-height: 22px;
  padding: 0 9px;
  color: var(--path-success);
  background: rgba(11, 143, 102, 0.1);
  border: 1px solid rgba(11, 143, 102, 0.18);
  border-radius: 999px;
  font-size: 11px;
  font-weight: 800;
  line-height: 1;
  white-space: nowrap;
}

.path-state.muted {
  color: var(--path-warning);
  background: rgba(215, 119, 0, 0.1);
  border-color: rgba(215, 119, 0, 0.18);
}

.path-hint {
  padding: 8px 10px;
  color: #49657f;
  background: linear-gradient(135deg, #fff8eb, #fffdf7);
  border: 1px solid #f6dfb7;
  border-radius: 11px;
  font-size: 12px;
  line-height: 1.55;
}

.path-card {
  display: block;
  padding: 1px;
  background: linear-gradient(135deg, rgba(0, 110, 220, 0.24), rgba(0, 110, 220, 0.04));
  border-radius: 12px;
}

.popover-path {
  display: block;
  max-width: 100%;
  padding: 10px 12px;
  overflow-wrap: anywhere;
  color: #1a2d43;
  background: linear-gradient(180deg, #f9fcff, #f3f8fe);
  border-radius: 11px;
  font-family: 'Cascadia Code', 'SFMono-Regular', Consolas, ui-monospace, monospace;
  font-size: 12px;
  line-height: 1.6;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.85);
}

.popover-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
}

.popover-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 31px;
  padding: 0 13px;
  border-radius: 999px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 800;
  line-height: 1;
  text-decoration: none;
  transition: background 0.16s ease, border-color 0.16s ease, color 0.16s ease, box-shadow 0.16s ease, transform 0.16s ease;
}

.popover-action:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 110, 220, 0.14);
}

.popover-action.secondary {
  color: #47647f;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid #d5e1ee;
}

.popover-action.secondary:hover,
.popover-action.secondary:focus-visible {
  color: var(--path-accent-strong);
  background: var(--path-accent-wash);
  border-color: #a9c8e8;
  transform: translateY(-1px);
}

.popover-action.primary {
  color: #ffffff;
  background: linear-gradient(135deg, #0075e8, #005bb8);
  border: 1px solid #0062c3;
  box-shadow: 0 8px 18px rgba(0, 91, 184, 0.2);
}

.popover-action.primary:hover,
.popover-action.primary:focus-visible {
  color: #ffffff;
  background: linear-gradient(135deg, #006bd3, #004f9e);
  border-color: #0056ad;
  box-shadow: 0 10px 22px rgba(0, 91, 184, 0.26);
  transform: translateY(-1px);
}

.path-message {
  position: absolute;
  right: 14px;
  bottom: -32px;
  padding: 4px 10px;
  color: #ffffff;
  background: #18324a;
  border-radius: 999px;
  box-shadow: 0 10px 24px rgba(24, 50, 74, 0.22);
  font-size: 11px;
  font-weight: 800;
  line-height: 1.4;
  pointer-events: none;
  white-space: nowrap;
}

.bubble-enter-active,
.bubble-leave-active {
  transition: opacity 0.16s ease, transform 0.16s ease;
}

.bubble-enter-from,
.bubble-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(5px) scale(0.98);
}

.message-enter-active,
.message-leave-active {
  transition: opacity 0.14s ease, transform 0.14s ease;
}

.message-enter-from,
.message-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

@media (prefers-reduced-motion: reduce) {
  .path-trigger,
  .path-trigger::after,
  .popover-action,
  .bubble-enter-active,
  .bubble-leave-active,
  .message-enter-active,
  .message-leave-active {
    transition: none;
  }
}

@media (max-width: 719px) {
  .path-popover {
    left: 0;
    right: auto;
    width: min(560px, calc(100vw - 32px));
    transform: none;
  }

  .path-popover::after {
    left: 18px;
    transform: rotate(45deg);
  }

  .bubble-enter-from,
  .bubble-leave-to {
    transform: translateY(5px) scale(0.98);
  }

  .popover-header,
  .popover-actions {
    align-items: flex-start;
  }

  .popover-header {
    flex-direction: column;
    gap: 8px;
  }

  .popover-actions {
    justify-content: flex-start;
    flex-wrap: wrap;
  }
}
</style>
