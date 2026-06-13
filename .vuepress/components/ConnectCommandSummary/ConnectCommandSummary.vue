<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { RouteLink } from 'vuepress/client';
import { buildCommandGroups } from './extractCommandInfo.mjs';
import { highlightUsage } from './highlightCommand.mjs';

interface CommandEntry {
  command: string;
  effect: string;
  usage: string;
  path: string;
  category: string;
}

interface CommandGroup {
  category: string;
  entries: CommandEntry[];
}

const props = withDefaults(defineProps<{
  base?: string;
}>(), {
  base: '',
});

const route = useRoute();

const commandModules = import.meta.glob('../../../二次开发教程/2-二次开发CONNECT模式/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const keyword = ref('');
const searchInputRef = ref<HTMLInputElement>();

const copiedCommand = ref('');

async function copyUsage(entry: CommandEntry) {
  try {
    await navigator.clipboard.writeText(entry.usage);
    copiedCommand.value = `${entry.path}-${entry.command}`;
    setTimeout(() => {
      if (copiedCommand.value === `${entry.path}-${entry.command}`) {
        copiedCommand.value = '';
      }
    }, 2000);
  } catch {
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = entry.usage;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    copiedCommand.value = `${entry.path}-${entry.command}`;
    setTimeout(() => {
      if (copiedCommand.value === `${entry.path}-${entry.command}`) {
        copiedCommand.value = '';
      }
    }, 2000);
  }
}

const displayMode = ref<'grouped' | 'flat'>('grouped');

function renderInlineMarkdown(text: string): string {
  return text
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

function sectionId(text: string): string {
  return 'cmd-sec-' + text.trim().toLowerCase()
    .replace(/[\s]+/g, '-')
    .replace(/[`~!@#$%^&*()_=+[\]{}|;:'",.<>/?·！￥……（）——【】‘；：”“。，、？\s]/g, '-')
    .replace(/--+/g, '-')
    .replace(/^-|-$/g, '')
    .replace(/\./g, '-');
}

const commandGroups = computed<CommandGroup[]>(() => buildCommandGroups(commandModules, props.base || route.path));

const filteredGroups = computed(() => {
  const value = keyword.value.trim().toLowerCase();
  if (!value) return commandGroups.value;

  return commandGroups.value
    .map(group => ({
      ...group,
      entries: group.entries.filter(entry => [
        entry.command,
        entry.effect,
        entry.usage,
        entry.category,
      ].some(text => text.toLowerCase().includes(value))),
    }))
    .filter(group => group.entries.length);
});

const commandCount = computed(() => commandGroups.value.reduce((sum, group) => sum + group.entries.length, 0));
const shownCount = computed(() => sections.value.reduce((sum, sec) => sum + sec.entries.length, 0));

/* ── 类别索引（分组模式） ─────────────────── */

const categoryIndex = computed(() =>
  filteredGroups.value.map(g => g.category),
);

/** 平滑滚到指定 section，偏移由 CSS scroll-margin-top 处理 */
function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

/* 平铺模式：所有条目按命令名字母排序 */
const flatEntries = computed<CommandEntry[]>(() =>
  commandGroups.value
    .flatMap(g => g.entries)
    .sort((a, b) => a.command.localeCompare(b.command)),
);

const filteredFlat = computed(() => {
  const value = keyword.value.trim().toLowerCase();
  if (!value) return flatEntries.value;
  return flatEntries.value.filter(entry =>
    [entry.command, entry.effect, entry.usage, entry.category].some(text =>
      text.toLowerCase().includes(value),
    ),
  );
});

/* 平铺模式：按首字母分组，非字母归入 # */
interface LetterGroup { letter: string; entries: CommandEntry[] }

const letterGroups = computed<LetterGroup[]>(() => {
  const map: Record<string, CommandEntry[]> = {};
  for (const e of filteredFlat.value) {
    const ch = e.command.charAt(0).toUpperCase();
    const key = /[A-Z]/.test(ch) ? ch : '#';
    (map[key] ??= []).push(e);
  }
  return Object.entries(map)
    .sort(([a], [b]) => a === '#' ? 1 : b === '#' ? -1 : a.localeCompare(b))
    .map(([letter, entries]) => ({ letter, entries }));
});

/* 全量字母表 A-Z + #，标记当前是否有该字母的命令 */
const abcdLetters = computed(() => {
  const active = new Set(letterGroups.value.map(lg => lg.letter));
  return [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '#'].map(ch => ({
    letter: ch,
    active: active.has(ch),
  }));
});

/* ── 统一 Section 视图（两种模式共用渲染） ─── */
interface Section { id: string; title: string; entries: CommandEntry[] }

const sections = computed<Section[]>(() => {
  if (displayMode.value === 'grouped') {
    return filteredGroups.value.map(g => ({
      id: sectionId(g.category),
      title: g.category,
      entries: g.entries,
    }));
  }
  return letterGroups.value.map(lg => ({
    id: `cmd-letter-${lg.letter}`,
    title: lg.letter,
    entries: lg.entries,
  }));
});

const hasResults = computed(() => sections.value.length > 0);

onMounted(() => {
  nextTick(() => {
    window.dispatchEvent(new CustomEvent('cmd-summary-rendered'));
  });
});
</script>

<template>
  <section class="cmd-summary">
    <div class="cmd-header">
      <h2 class="cmd-title">命令速查表</h2>
      <span class="cmd-total">{{ commandCount }} 条</span>
    </div>

    <div class="cmd-search">
      <div class="cmd-search-input-wrap">
        <svg class="cmd-search-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <input ref="searchInputRef" v-model="keyword" type="search" placeholder="搜索命令、作用、用法..." class="cmd-search-input" />
        <button v-if="keyword" class="cmd-search-clear" @click="keyword = ''; searchInputRef?.focus()" aria-label="清除搜索" title="清除搜索">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
        </button>
        <span v-if="keyword.trim()" class="cmd-search-count">{{ shownCount }}/{{ commandCount }}</span>
      </div>
      <div class="cmd-mode-toggle">
        <button class="cmd-mode-btn" :class="{ active: displayMode === 'grouped' }" @click="displayMode = 'grouped'" title="按目录分组">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
        </button>
        <button class="cmd-mode-btn" :class="{ active: displayMode === 'flat' }" @click="displayMode = 'flat'" title="按字母排列">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 12h6"/><path d="M15 6h6"/><path d="m3 13 3.553-7.724a.5.5 0 0 1 .894 0L11 13"/><path d="M3 18h18"/><path d="M4 11h6"/></svg>
        </button>
      </div>
    </div>

    <!-- ── 索引栏（两种模式标签不同） ────────── -->
    <nav v-if="hasResults && displayMode === 'grouped'" class="cmd-index-bar" aria-label="分类索引">
      <span class="cmd-index-label">分类</span>
      <button
        v-for="ci in categoryIndex" :key="ci"
        class="cmd-index-btn cmd-index-btn--cat"
        @click="scrollToSection(sectionId(ci))"
      >{{ ci }}</button>
    </nav>
    <nav v-if="hasResults && displayMode === 'flat'" class="cmd-index-bar" aria-label="字母索引">
      <span class="cmd-index-label">索引</span>
      <button
        v-for="ch in abcdLetters" :key="ch.letter"
        class="cmd-index-btn"
        :class="{ active: ch.active }"
        :disabled="!ch.active"
        :aria-label="`跳转到 ${ch.letter}`"
        @click="ch.active && scrollToSection('cmd-letter-' + ch.letter)"
      >{{ ch.letter }}</button>
    </nav>

    <!-- ── 共用 Section 列表 ──────────────────── -->
    <div v-if="hasResults" class="cmd-sections">
      <div v-for="sec in sections" :key="sec.id" class="cmd-section">
        <!-- 非 sticky 锚点，scrollIntoView 目标 -->
        <span :id="sec.id" class="cmd-section-anchor"></span>
        <div class="cmd-section-header">
          <span class="cmd-section-title">{{ sec.title }}</span>
          <span class="cmd-section-count">{{ sec.entries.length }}</span>
        </div>
        <div class="cmd-table-wrap">
          <table class="cmd-table">
          <thead>
            <tr>
              <th>命令</th>
              <th>作用</th>
              <th>用法</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="entry in sec.entries" :key="`${entry.path}-${entry.command}`">
              <td class="cmd-cell-cmd">
                <RouteLink :to="entry.path">{{ entry.command }}</RouteLink>
              </td>
              <td class="cmd-cell-effect" v-html="renderInlineMarkdown(entry.effect)"></td>
              <td class="cmd-cell-usage">
                <div class="cmd-usage-row">
                  <code class="cmd-code" v-html="highlightUsage(entry.usage)"></code>
                  <button
                    class="cmd-copy-btn"
                    :class="{ 'is-copied': copiedCommand === `${entry.path}-${entry.command}` }"
                    :aria-label="copiedCommand === `${entry.path}-${entry.command}` ? '已复制' : '复制命令'"
                    :title="copiedCommand === `${entry.path}-${entry.command}` ? '已复制' : '复制命令'"
                    @click.stop="copyUsage(entry)"
                  >
                    <svg v-if="copiedCommand !== `${entry.path}-${entry.command}`" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                    <svg v-else width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
          </table>
        </div>
      </div>
    </div>

    <div v-else class="cmd-empty">未找到匹配的 CONNECT 命令。</div>
  </section>
</template>

<style scoped lang="scss">
/* ═══════════════════════════════════════════════
   ATK Connect 命令速查表
   与站点整体风格统一，简洁规整
   ═══════════════════════════════════════════════ */

.cmd-summary {
  --text: #3c3c43;
  --text-muted: #8f959e;
  --border: #dfe2e5;
  --border-light: #eaecef;
  --bg-hover: #f6f8fa;
  --bg-badge: #f0f0f2;
  --bg-code: #f1f1f1;
  --code-fg: #476582;
  --accent: #1456f0;
  --accent-subtle: rgba(20, 86, 240, 0.08);

  /* 搜索栏 / 索引栏高度，用于计算吸顶偏移 */
  --cmd-search-h: 60px;
  --cmd-abcd-h: 36px;

  margin-top: 1.5rem;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 8px;
  /* 注：不能 overflow:hidden，否则 position:sticky 失效 */
}

/* ── Header ──────────────────────────────── */

.cmd-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border);
  border-radius: 8px 8px 0 0;
  background: #fff;
}

.cmd-title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--text);
}

.cmd-total {
  display: inline-flex;
  align-items: center;
  padding: 2px 12px;
  background: var(--accent-subtle);
  color: var(--accent);
  font-size: 13px;
  font-weight: 600;
  border-radius: 12px;
}

/* ── Search ──────────────────────────────── */

.cmd-search {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-bottom: 1px solid var(--border);
  background: #fafbfc;

  /* 吸顶：navbar + breadcrumb(54px=35+0.5rem+0.3rem+6px border) 之下，+2px 呼吸 */
  position: sticky;
  top: calc(var(--navbar-height) + 52px);
  z-index: 5;
}

.cmd-search-input-wrap {
  position: relative;
  flex: 1;
  min-width: 0;
}

.cmd-search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
  pointer-events: none;
  z-index: 1;
}

.cmd-search-input {
  width: 100%;
  padding: 8px 48px 8px 34px;
  font-size: 14px;
  color: var(--text);
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 6px;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;

  &::placeholder {
    color: #b0b5bd;
  }

  &:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 2px rgba(20, 86, 240, 0.12);
  }

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
}

.cmd-search-count {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
  color: var(--text-muted);
  font-variant-numeric: tabular-nums;
  pointer-events: none;
}

.cmd-search-clear {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  color: var(--text-muted);
  background: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: var(--text);
    background: var(--bg-badge);
  }
}

.cmd-search-clear + .cmd-search-count {
  right: 36px;
}

.cmd-search-btn {
  flex-shrink: 0;
  align-self: stretch;
  padding: 0 12px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-muted);
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 6px;
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.15s, border-color 0.15s, background 0.15s;

  &:hover {
    color: var(--accent);
    border-color: var(--accent);
    background: var(--accent-subtle);
  }
}

/* ── Mode Toggle ──────────────────────────── */

.cmd-mode-toggle {
  display: flex;
  flex-shrink: 0;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 6px;
  overflow: hidden;
}

.cmd-mode-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  color: var(--text-muted);
  background: #fff;
  border: none;
  cursor: pointer;
  transition: color 0.15s, background 0.15s;

  &:first-child {
    border-right: 1px solid var(--border);
  }

  &:hover {
    background: var(--bg-hover);
  }

  &.active {
    color: var(--accent);
    background: var(--accent-subtle);
  }
}

/* ── 索引栏（两种模式共用，吸顶） ──────────── */

.cmd-index-bar {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2px;
  padding: 5px 20px;
  border-bottom: 1px solid var(--border);
  background: #fafbfc;

  /* 吸顶：navbar + breadcrumb + search 之下 */
  position: sticky;
  top: calc(var(--navbar-height) + 52px + var(--cmd-search-h));
  z-index: 4;
}

.cmd-index-label {
  flex-shrink: 0;
  margin-right: 6px;
  font-size: 11px;
  font-weight: 500;
  color: var(--text-muted);
  user-select: none;
}

.cmd-index-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 28px;
  height: 26px;
  padding: 0 5px;
  font-size: 12px;
  font-weight: 600;
  font-family: var(--font-family-code, 'JetBrains Mono', ui-monospace, 'Cascadia Code', Consolas, monospace);
  color: var(--accent);
  background: transparent;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, color 0.15s;
  user-select: none;
  white-space: nowrap;

  &:hover:not(:disabled) {
    background: var(--accent-subtle);
    border-color: var(--accent);
  }

  &:disabled {
    color: #d0d3d8;
    cursor: default;
  }

  /* 类别名可能较长 */
  &--cat {
    font-family: inherit;
    padding: 0 8px;
  }
}

/* ── 分组段落（两种模式共用） ──────────────── */

.cmd-sections {
  /* spacer */
}

.cmd-section {
  border-bottom: 1px solid var(--border);

  &:last-child {
    border-bottom: none;
  }
}

.cmd-section-anchor {
  /* 非 sticky 锚点，scrollIntoView 目标 */
  display: block;
  height: 0;
  overflow: hidden;
  scroll-margin-top: calc(var(--navbar-height) + 52px + var(--cmd-search-h) + var(--cmd-abcd-h));
}

.cmd-section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 20px;
  color: var(--text);

  /* 吸顶：navbar + breadcrumb + search + index 之下 */
  position: sticky;
  top: calc(var(--navbar-height) + 52px + var(--cmd-search-h) + var(--cmd-abcd-h));
  z-index: 3;
  background: #fff;
  box-shadow: 0 1px 0 0 var(--border);
}

.cmd-section-title {
  font-size: 15px;
  font-weight: 600;
}

.cmd-section-count {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 20px;
  padding: 0 7px;
  background: var(--bg-badge);
  color: var(--text-muted);
  font-size: 12px;
  font-weight: 500;
  border-radius: 10px;
  font-variant-numeric: tabular-nums;
}

/* ── Table Wrapper ───────────────────────── */

.cmd-table-wrap {
  overflow-x: auto;
  padding: 0 20px 16px;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #d0d3d8;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #b0b5bd;
  }
}

/* ── Table ───────────────────────────────── */

.cmd-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  line-height: 1.8;

  thead th {
    padding: 0.6em 1em;
    font-size: 14px;
    font-weight: 600;
    color: #67676c;
    background: #f6f6f7;
    border: 1px solid var(--border);
    text-align: left;
    white-space: nowrap;
  }

  tbody td {
    padding: 0.6em 1em;
    border: 1px solid var(--border);
    vertical-align: top;
    color: var(--text);
    background: #fff;
  }

  tbody tr {
    transition: background 0.12s;
  }

  tbody tr:hover td {
    background: var(--bg-hover);
  }
}

/* ── Table Column Widths ─────────────────── */

.cmd-cell-cmd {
  width: 18%;
  min-width: 140px;
}

.cmd-cell-effect {
  width: 28%;
  min-width: 140px;
}

.cmd-cell-usage {
  width: 54%;
  min-width: 240px;
}

/* ── Command Name Link ───────────────────── */

.cmd-cell-cmd a {
  color: var(--accent);
  text-decoration: none;
  font-family: var(--font-family-code, 'JetBrains Mono', ui-monospace, 'Cascadia Code', Consolas, monospace);
  font-size: 13px;
  font-weight: 500;
  transition: color 0.2s;
  word-break: break-all;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 2px;
  }
}

/* ── Effect Description ──────────────────── */

.cmd-cell-effect {
  color: var(--text);

  :deep(code) {
    padding: 0.15em 0.5em;
    border-radius: 4px;
    background: var(--bg-code);
    color: var(--code-fg);
    font-size: inherit;
    font-family: var(--font-family-code, 'JetBrains Mono', ui-monospace, 'Cascadia Code', Consolas, monospace);
    word-break: break-word;
  }

  :deep(strong) {
    font-weight: 600;
    color: var(--text);
  }
}

/* ── Usage Row + Copy ───────────────────── */

.cmd-usage-row {
  display: flex;
  align-items: flex-start;
  gap: 6px;
}

.cmd-usage-row .cmd-code {
  flex: 1;
  min-width: 0;
}

.cmd-copy-btn {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  padding: 0;
  margin: 0;
  color: var(--text-muted);
  background: transparent;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.15s, color 0.15s, background 0.15s, border-color 0.15s;

  &:hover {
    color: var(--accent);
    background: var(--accent-subtle);
    border-color: var(--border);
  }

  &.is-copied {
    opacity: 1;
    color: #16a34a;
    background: rgba(22, 163, 74, 0.08);
    border-color: rgba(22, 163, 74, 0.2);
  }
}

/* ── Usage Code ──────────────────────────── */

.cmd-code {
  display: inline;
  padding: 0.15em 0.5em;
  font-family: var(--font-family-code, 'JetBrains Mono', ui-monospace, 'Cascadia Code', Consolas, monospace);
  font-size: 13px;
  line-height: 1.7;
  color: var(--code-fg);
  background: var(--bg-code);
  border-radius: 4px;
  word-break: break-all;
}

/* ── Transition ──────────────────────────── */

.fade-enter-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.fade-leave-active {
  transition: opacity 0.1s ease, transform 0.1s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(-4px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-2px);
}

/* ── Empty ───────────────────────────────── */

.cmd-empty {
  padding: 2rem 1.5rem;
  text-align: center;
  color: var(--text-muted);
  font-size: 14px;
  border-top: 1px solid var(--border-light);
}

/* ── Responsive ──────────────────────────── */

@media (max-width: 860px) {
  .cmd-summary {
    --cmd-search-h: 56px;
    --cmd-abcd-h: 34px;
  }

  .cmd-header {
    padding: 14px 16px;
  }

  .cmd-search {
    padding: 10px 16px;
  }

  .cmd-search-input {
    padding: 8px 42px 8px 30px;
  }

  .cmd-index-bar {
    padding: 5px 16px;
  }

  .cmd-section-header {
    padding: 10px 16px;
  }

  .cmd-table-wrap {
    padding: 0 16px 12px;
  }

  .cmd-table {
    font-size: 13px;
  }

  .cmd-cell-cmd {
    min-width: 120px;
  }

  .cmd-cell-effect {
    min-width: 120px;
  }

  .cmd-cell-usage {
    min-width: 200px;
  }
}

@media (max-width: 520px) {
  .cmd-summary {
    --cmd-search-h: 50px;
    --cmd-abcd-h: 32px;
  }

  .cmd-header {
    padding: 12px 12px;
  }

  .cmd-search {
    padding: 8px 12px;
    flex-wrap: wrap;
  }

  .cmd-search-input {
    font-size: 13px;
    padding-left: 30px;
  }

  .cmd-search-btn {
    font-size: 12px;
    padding: 0 10px;
  }

  .cmd-mode-btn {
    width: 30px;
    height: 30px;
  }

  .cmd-index-bar {
    padding: 4px 12px;
  }

  .cmd-index-btn {
    min-width: 24px;
    height: 22px;
    font-size: 11px;
  }

  .cmd-section-header {
    padding: 8px 12px;
  }

  .cmd-table-wrap {
    padding: 0 12px 8px;
  }

  .cmd-table {
    font-size: 12px;
  }

  .cmd-table thead th,
  .cmd-table tbody td {
    padding: 0.5em 0.6em;
  }

  .cmd-title {
    font-size: 16px;
  }
}
</style>
