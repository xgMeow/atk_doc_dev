<script setup>
import { ref, computed, useSlots, watch } from 'vue';
// 必须先于 prismjs 加载：关闭 Prism 自动高亮全站（详见 prism-manual.js）
import './prism-manual';
import Prism from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-matlab';
import { convert, LANGS, ALL } from './convert';
import { detectLanguage, looksLikeProgram } from './detect';

const props = defineProps({
  // 源码语言。省略(空)时尝试自动识别；给了不支持的语言则先识别、识别不出退化为原文块
  lang: { type: String, default: '' },
  // 可选：base64 编码的源码（优先于 slot 内容）
  code: { type: String, default: '' },
  // 展示哪些语言 tab，逗号分隔；默认全部
  langs: { type: String, default: '' },
  // 是否显示行号（默认不显示）
  lineNumbers: { type: [Boolean, String], default: false },
});

const activeKey = ref(null); // 当前选中的 tab 的语言 key（原文块模式下为 null）
const slots = useSlots();

function decodeBase64(str) {
  try {
    const bin = atob(str);
    const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
    return new TextDecoder('utf-8').decode(bytes);
  } catch {
    return str;
  }
}

// 从默认插槽的 vnode 中提取纯文本（SSR/CSR 通用，不依赖 DOM）
function vnodesToText(vnodes) {
  if (vnodes == null) return '';
  let text = '';
  const walk = (node) => {
    if (node == null) return;
    if (typeof node === 'string' || typeof node === 'number') {
      text += String(node);
      return;
    }
    if (Array.isArray(node)) {
      node.forEach(walk);
      return;
    }
    if (node.children != null) walk(node.children);
  };
  walk(Array.isArray(vnodes) ? vnodes : [vnodes]);
  return text;
}

// 源码：优先用 base64 的 code prop，否则回退到插槽纯文本。
// 必须在 setup 里同步计算，SSR 才能渲染出代码（不能放进 onMounted）。
const sourceCode = computed(() => {
  if (props.code) return decodeBase64(props.code);
  return vnodesToText(slots.default?.());
});

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// 兜底判断：检测不出时，若代码明显是 C 系风格（`{}`、`//`、行尾 `;`）则不猜成 python，
// 退化为原文块；否则按历史默认 python 处理（裸的 ATK 命令没有这些特征，仍按 python 转换）。
function looksCFamily(code) {
  return /[{}]/.test(code) || /\/\//.test(code) || /;\s*$/.test(code.replace(/\r/g, ''));
}

// 生效的源码语言 key；null 表示"无法转换 → 只显示原文"
const srcLang = computed(() => {
  const raw = (props.lang || '').trim().toLowerCase();
  if (LANGS[raw]) return raw; // 作者明确写了受支持的语言，不识别
  const detected = detectLanguage(sourceCode.value);
  if (raw) return detected; // 给了不支持的语言：能识别就用，识别不出 → null（原文块）
  // 完全省略 lang：识别；识别不出且不像 C 系代码时，按历史默认回退 python
  if (detected) return detected;
  return looksCFamily(sourceCode.value) ? null : 'python';
});

// 是否只显示原文（源码语言无法确定/不属于可转换范围）
const noConvert = computed(() => srcLang.value == null);

// 源码是「完整程序/定义结构」（类/函数/块体…）→ 跨语言转换无法保证目标语言合法，
// 此时只展示源码自身 tab，不再给出其它语言的假转换（转换结果贴到目标语言会报错）。
const isProgram = computed(() => srcLang.value != null && looksLikeProgram(sourceCode.value));

const langList = computed(() => {
  // 完整程序：只保留源码语言（convert 对 src===dst 原样返回 → tab 即作者原文）
  if (isProgram.value) return [srcLang.value];
  const list = (props.langs || ALL.join(',')).split(',').map((s) => s.trim()).filter(Boolean);
  return list.filter((l) => LANGS[l]);
});

// 当前生效源码语言/可用 tab 变化时，收敛选中项：
// 优先选中源码语言自身（原文展示），不在列表里则选第一个，避免出现"无选中/空白"。
watch(
  [srcLang, langList],
  () => {
    if (srcLang.value == null) {
      activeKey.value = null;
      return;
    }
    const list = langList.value;
    activeKey.value = list.includes(srcLang.value) ? srcLang.value : (list[0] ?? null);
  },
  { immediate: true }
);

const codeMap = computed(() => {
  if (srcLang.value == null) return {};
  const src = srcLang.value;
  const m = {};
  for (const l of langList.value) {
    // convert 对 src===dst 原样返回，因此"源码 tab"始终展示作者原文
    m[l] = convert(sourceCode.value, src, l);
  }
  return m;
});

// 当前显示代码：原文块模式显示 sourceCode；转换模式按选中的 tab
const activeCode = computed(() => {
  if (srcLang.value == null) return sourceCode.value;
  return codeMap.value[activeKey.value] ?? '';
});

const activeTag = computed(() => (srcLang.value == null ? 'text' : LANGS[activeKey.value]?.tag || 'text'));

const activeHtml = computed(() => {
  const code = activeCode.value;
  if (srcLang.value == null) return escapeHtml(code); // 原文块：不猜测语言，安全转义
  const def = Prism.languages[activeTag.value];
  if (!def) return escapeHtml(code);
  return Prism.highlight(code, def, activeTag.value);
});

// 行号：布尔属性/字符串 "false" 视为关闭，其余视为开启
const showLineNumbers = computed(() => {
  const v = props.lineNumbers;
  return !(v === false || v === 'false' || v == null);
});

const lineCount = computed(() => activeCode.value.split('\n').length);

// 顶栏 tab：原文块模式只放一个"原文"标签
const tabs = computed(() => {
  if (srcLang.value == null) return [{ key: null, name: '原文', plain: true }];
  return langList.value.map((l) => ({ key: l, name: LANGS[l].name }));
});

const copied = ref(false);
async function copy() {
  try {
    await navigator.clipboard.writeText(activeCode.value);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch {
    /* ignore */
  }
}
</script>

<template>
  <div class="mix-code">
    <div class="mix-code-nav" role="tablist">
      <template v-for="t in tabs" :key="t.key">
        <span v-if="t.plain" class="mix-code-tab mix-code-tab-plain" role="tab" aria-selected="true">{{ t.name }}</span>
        <button
          v-else
          type="button"
          class="mix-code-tab"
          :class="{ active: t.key === activeKey }"
          role="tab"
          :aria-selected="t.key === activeKey"
          @click="activeKey = t.key"
        >{{ t.name }}</button>
      </template>
      <button
        class="mix-code-copy"
        :class="{ copied }"
        type="button"
        :title="copied ? '已复制' : '复制代码'"
        @click="copy"
      >{{ copied ? '✓ 已复制' : '复制' }}</button>
    </div>

    <div class="mix-code-body">
      <div
        :class="[`mix-code-code language-${activeTag}`, { 'has-line-numbers': showLineNumbers }]"
      >
        <div v-if="showLineNumbers" class="mix-line-numbers" aria-hidden="true">
          <div v-for="n in lineCount" :key="n" class="mix-line-number">{{ n }}</div>
        </div>
        <pre><code v-html="activeHtml"></code></pre>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mix-code {
  margin: 1.5rem 0;
  border-radius: 10px;
  border: 1px solid var(--border-color, #d4d4d8);
  background: #f6f8fa;
  overflow: hidden;
}

.mix-code-tab-plain {
  cursor: default;
  color: #18181b;
  font-weight: 600;
}

.mix-code-nav {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 12px;
  border-bottom: 1px solid var(--border-color, #e4e4e7);
  background: #fff;
}

.mix-code-tab {
  padding: 5px 14px;
  font-size: 14px;
  font-weight: 500;
  color: #52525b;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 6px;
  cursor: pointer;
  transition: color 0.15s, background 0.15s, border-color 0.15s;

  &:hover {
    color: #2563eb;
    background: rgba(37, 99, 235, 0.06);
  }

  &.active {
    color: #2563eb;
    background: rgba(37, 99, 235, 0.08);
    border-color: rgba(37, 99, 235, 0.25);
  }
}

.mix-code-copy {
  margin-left: auto;
  padding: 4px 12px;
  font-size: 13px;
  color: #52525b;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 6px;
  cursor: pointer;
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: #2563eb;
    background: rgba(37, 99, 235, 0.06);
  }

  &.copied {
    color: #16a34a;
  }
}

.mix-code-body {
  max-height: 50vh;
  overflow: auto;
}

/* 复用全局 .language-* 代码块样式与 .token.* 高亮。
   行号列用 mix- 前缀，避免撞主题 code/base.scss 里 .line-number 的 CSS counter。
   代码区用单一滚动容器（body 同时管横纵滚动），行号列 sticky 固定左侧，
   这样横向滚动条始终在 50vh 可视区底部，且行号在横向滚动时保持可见。 */
.mix-code .mix-code-code {
  position: relative;
  margin: 0;
  border-radius: 0;
  background: #f6f8fa;
  line-height: 1.7;
  display: flex;
  width: max-content;
  min-width: 100%;

  pre {
    margin: 0;
    padding: 1rem 1.25rem;
    white-space: pre;
    // 行号列是 0.95em，pre 也要同字号，否则行盒高度以 pre 的 16px 为准，
    // 代码行会比行号高、逐行错位。
    font-size: 0.95em;
    // 覆盖主题 .theme-hope-content pre 的 line-height: 1.375。
    // 若不复写，代码行高 1.375 而行号列行高 1.7/1.9，flex 容器会把 pre
    // 拉伸到与行号列等高，导致代码下方多出一大段空白（代码越长越多）。
    line-height: inherit;
    // 覆盖主题 pre 的 overflow: auto，滚动统一交给 .mix-code-body
    overflow: visible;
  }

  code {
    background: transparent;
    padding: 0;
    font-family: 'JetBrains Mono', 'JetBrainsMono', var(--font-family-code, monospace);
    // 字号继承 pre 的 0.95em，避免 em 相对父级再叠加导致行高不一致
    line-height: inherit;
    white-space: pre;
  }

  /* 行号列：sticky 固定在左侧，横向滚动时保持可见 */
  .mix-line-numbers {
    position: sticky;
    left: 0;
    flex: none;
    // 需高于主题给 pre 的 z-index: 1，否则横向滚动时代码会盖住行号
    z-index: 2;
    padding: 1rem 0;
    width: 3em;
    text-align: right;
    font-family: 'JetBrains Mono', 'JetBrainsMono', var(--font-family-code, monospace);
    font-size: 0.95em;
    line-height: inherit;
    color: #4870ac;
    background: #f6f8fa;
    border-right: 1px solid #a2b6d452;
    user-select: none;
    overflow: hidden;

    .mix-line-number {
      padding-right: 0.6em;
    }
  }
}
</style>
