<script setup lang="ts">
import { computed, nextTick, onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import { RouteLink } from 'vuepress/client';
import { buildCommandGroups } from './extractCommandInfo.mjs';

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

const commandModules = import.meta.glob('../../../二次开发教程/2-二次开发CONNECT模式/2-Connect命令库/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const keyword = ref('');

const collapsed = reactive<Record<string, boolean>>({});
function toggleGroup(cat: string) {
  collapsed[cat] = !collapsed[cat];
}

function groupId(text: string): string {
  return text.trim().toLowerCase()
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
const shownCount = computed(() => filteredGroups.value.reduce((sum, group) => sum + group.entries.length, 0));

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
      <svg class="cmd-search-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      <input v-model="keyword" type="search" placeholder="搜索命令、作用、用法..." class="cmd-search-input" />
      <span v-if="keyword.trim()" class="cmd-search-count">{{ shownCount }}/{{ commandCount }}</span>
    </div>

    <div v-if="filteredGroups.length" class="cmd-groups">
      <div v-for="group in filteredGroups" :key="group.category" class="cmd-group">
        <div class="cmd-group-header" role="button" tabindex="0" @click="toggleGroup(group.category)" @keydown.enter.prevent="toggleGroup(group.category)" @keydown.space.prevent="toggleGroup(group.category)">
          <svg class="cmd-chevron" :class="{ 'is-collapsed': collapsed[group.category] }" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          <h3 :id="groupId(group.category)" class="cmd-group-title">{{ group.category }}</h3>
          <span class="cmd-group-count">{{ group.entries.length }}</span>
        </div>

        <Transition name="fade">
          <div v-if="!collapsed[group.category]" class="cmd-table-wrap">
            <table class="cmd-table">
            <thead>
              <tr>
                <th>命令</th>
                <th>作用</th>
                <th>用法</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="entry in group.entries" :key="`${entry.path}-${entry.command}`">
                <td class="cmd-cell-cmd">
                  <RouteLink :to="entry.path">{{ entry.command }}</RouteLink>
                </td>
                <td class="cmd-cell-effect">{{ entry.effect }}</td>
                <td class="cmd-cell-usage"><code class="cmd-code">{{ entry.usage }}</code></td>
              </tr>
            </tbody>
            </table>
          </div>
        </Transition>
      </div>
    </div>

    <div v-else class="cmd-empty">未找到匹配的 CONNECT 命令。</div>
  </section>
</template>

<style scoped lang="scss">
.cmd-summary {
  --text: #1a1a1a;
  --text-secondary: #555;
  --text-muted: #888;
  --border: #e5e5e5;
  --border-light: #f0f0f0;
  --bg-hover: #f8f8f8;
  --bg-badge: #eee;
  --bg-code: #f5f5f5;
  --accent: #2563eb;

  margin-top: 1.5rem;
}

/* ── Header ──────────────────────────────── */

.cmd-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
}

.cmd-title {
  margin: 0;
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.02em;
}

.cmd-total {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-secondary);
}

/* ── Search ──────────────────────────────── */

.cmd-search {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 1rem;
  padding: 0.4rem 0.7rem;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: #fff;
  transition: border-color 0.15s;
}

.cmd-search:focus-within {
  border-color: #bbb;
}

.cmd-search-icon {
  flex-shrink: 0;
  display: flex;
  color: var(--text-muted);
}

.cmd-search-input {
  flex: 1;
  min-width: 0;
  border: none;
  outline: none;
  background: transparent;
  font-size: 0.82rem;
  color: var(--text);
  line-height: 1.4;

  &::placeholder {
    color: #bbb;
  }

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
}

.cmd-search-count {
  flex-shrink: 0;
  font-size: 0.72rem;
  color: var(--text-muted);
  font-variant-numeric: tabular-nums;
}

/* ── Groups ──────────────────────────────── */

.cmd-groups {
  margin-top: 1.25rem;
  display: grid;
  gap: 1.5rem;
}

.cmd-group-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.5rem;
  border-bottom: 1px solid var(--border);
  cursor: pointer;
  user-select: none;
  transition: background 0.15s;

  &:hover {
    background: var(--bg-hover);
    // margin: 0 -0.5rem;
    // padding: 0.5rem 0.5rem 0.2rem 0;
    border-radius: 4px;
  }
}

.cmd-group-title {
  margin: 0;
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--text);
  scroll-margin-top: 120px;
}

.cmd-group-count {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--text-muted);
  background: var(--bg-badge);
  padding: 0.05rem 0.4rem;
  border-radius: 4px;
  line-height: 1.5;
  margin-left: auto;
}

.cmd-chevron {
  flex-shrink: 0;
  color: var(--text-muted);
  transition: transform 0.2s ease;
  transform: rotate(90deg); /* expanded: points down */

  &.is-collapsed {
    transform: rotate(0deg); /* collapsed: points right */
  }
}

/* ── Table ───────────────────────────────── */

.cmd-table-wrap {
  overflow-x: auto;
}

.cmd-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;

  th {
    padding: 0.55rem 0.75rem;
    font-size: 0.72rem;
    font-weight: 600;
    color: var(--text-muted);
    text-align: left;
    letter-spacing: 0.04em;
    border-bottom: 1px solid var(--border-light);
  }

  th:nth-child(1) { width: 18%; }
  th:nth-child(2) { width: 30%; }
  th:nth-child(3) { width: 52%; }

  td {
    padding: 0.65rem 0.75rem;
    vertical-align: top;
    border-bottom: 1px solid var(--border-light);
    color: var(--text);
    line-height: 1.6;
  }

  tbody tr {
    transition: background 0.12s;
  }

  tbody tr:hover {
    background: var(--bg-hover);
  }

}

.cmd-cell-cmd a {
  color: var(--accent);
  font-weight: 600;
  text-decoration: none;
  word-break: break-word;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 2px;
  }
}

.cmd-cell-effect {
  color: var(--text-secondary);
}

.cmd-code {
  display: block;
  padding: 0.35rem 0.55rem;
  border: 1px solid var(--border-light);
  border-radius: 5px;
  background: var(--bg-code);
  color: var(--text-secondary);
  font-size: 0.78rem;
  line-height: 1.55;
  white-space: pre-wrap;
  word-break: break-word;
  font-family: ui-monospace, 'SF Mono', 'Cascadia Code', 'Consolas', monospace;
}

/* ── Transition ──────────────────────────── */

.fade-enter-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(-6px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

/* ── Empty ───────────────────────────────── */

.cmd-empty {
  margin-top: 1rem;
  padding: 1.5rem 1rem;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.85rem;
  border: 1px dashed var(--border);
  border-radius: 6px;
}

/* ── Responsive ──────────────────────────── */

@media (max-width: 760px) {
  .cmd-table {
    min-width: 600px;
  }

  .cmd-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
}
</style>
