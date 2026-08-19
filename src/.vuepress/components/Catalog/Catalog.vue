<script setup lang="ts">
/**
 * 自定义 Catalog 组件
 * 逻辑与 @vuepress/plugin-catalog 的 Catalog 组件一致，
 * 但使用 <div>/<span> 替代 <h2>/<h3> 标签，避免被全局标题样式影响。
 */
import { computed } from 'vue';
import { RouteLink, usePageData, useRoutes, useSiteData } from 'vuepress/client';
import {
  entries,
  isNumber,
  isPlainObject,
  isString,
  keys,
  startsWith,
} from '@vuepress/helper/client';
import { useCatalogInfoGetter } from '@vuepress/plugin-catalog/client';
import type { CatalogLocaleStrings } from './types';
import { zhCatalogStrings } from './zh';
import { enCatalogStrings } from './en';

// ==========================================
//  Props
// ==========================================
interface Props {
  base?: string;
  level?: number;
  index?: boolean;
  hideHeading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  base: '',
  level: 3,
  index: false,
  hideHeading: false,
});

// ==========================================
//  数据源
// ==========================================
const catalogInfoGetter = useCatalogInfoGetter();
const page = usePageData();
const routes = useRoutes();
const siteData = useSiteData();

// ==========================================
//  类型
// ==========================================
interface CatalogItem {
  level: number;
  base: string;
  path: string;
  title: string;
  order?: number;
  children?: CatalogItem[];
}

// ==========================================
//  核心逻辑（与 hope 主题 Catalog 完全一致）
// ==========================================
const catalogData = computed<CatalogItem[]>(() => {
  const base = props.base
    ? '/' + props.base.replace(/^\/+|\/+$/g, '') + '/'
    : page.value.path.replace(/\/[^/]+$/, '/');
  const baseDepth = base.split('/').length - 2;
  const result: CatalogItem[] = [];

  const catalogInfo = entries(routes.value)
    .map(([path, { meta }]) => {
      const info = catalogInfoGetter(meta);
      if (!info) return null;
      const level = path.endsWith('/')
        ? path.split('/').length - 2
        : path.split('/').length - 1;
      return {
        level,
        base: path.replace(/\/[^/]+\/?$/, '/'),
        path,
        title: info.title,
        order: info.order,
      } as CatalogItem;
    })
    .filter(
      (item): item is CatalogItem =>
        isPlainObject(item) && isString(item.title),
    );

  catalogInfo
    .filter(({ level, path }) => {
      if (!startsWith(path, base) || path === base) return false;
      if (base === '/') {
        const otherLocales = keys(siteData.value.locales).filter(
          (item) => item !== '/',
        );
        if (
          path === '/404.html' ||
          otherLocales.some((localePath) => startsWith(path, localePath))
        )
          return false;
      }
      return level - baseDepth <= props.level;
    })
    .sort((a, b) => {
      const levelDiff = a.level - b.level;
      if (levelDiff) return levelDiff;

      const aNum = isNumber(a.order);
      const bNum = isNumber(b.order);
      if (!aNum && !bNum) return a.title.localeCompare(b.title);
      if (!aNum) return 1;
      if (!bNum) return -1;

      const na = a.order as number;
      const nb = b.order as number;
      if (na > 0 && nb > 0) return na - nb;
      if (na < 0 && nb < 0) return na - nb;
      return nb > 0 ? 1 : -1;
    })
    .forEach((info) => {
      const relativeLevel = info.level - baseDepth;
      if (relativeLevel === 1) {
        result.push(info);
      } else if (relativeLevel === 2) {
        const parent = result.find((item) => item.path === info.base);
        if (parent) (parent.children ??= []).push(info);
      } else {
        const grandParent = result.find(
          (item) =>
            item.path === info.base.replace(/\/[^/]+\/$/, '/'),
        );
        const parent = grandParent?.children?.find(
          (item) => item.path === info.base,
        );
        if (parent) (parent.children ??= []).push(info);
      }
    });

  return result;
});

const isDeep = computed(() =>
  catalogData.value.some((item) => item.children && item.children.length > 0),
);

/** 总条目数（一级 + 二级 + 三级） */
const totalCount = computed(() => {
  let n = 0;
  for (const item of catalogData.value) {
    n++; // L1
    if (item.children) {
      for (const child of item.children) {
        n++; // L2
        if (child.children) n += child.children.length; // L3
      }
    }
  }
  return n;
});

// ==========================================
//  国际化
// ==========================================
const isEn = computed(() => page.value.path.startsWith('/en/'));
const localeStrings = computed<CatalogLocaleStrings>(() =>
  isEn.value ? enCatalogStrings : zhCatalogStrings,
);
const countText = computed(() => localeStrings.value.count(totalCount.value));
</script>

<template>
  <div class="atk-catalog" :class="{ 'atk-catalog--index': props.index }">
    <!-- ── 标题栏 ── -->
    <div v-if="!props.hideHeading" class="atk-catalog__header">
      <span class="atk-catalog__header-title">{{ localeStrings.title }}</span>
      <span v-if="catalogData.length" class="atk-catalog__header-count">{{ countText }}</span>
    </div>

    <!-- ── 空态 ── -->
    <p v-if="!catalogData.length" class="atk-catalog__empty">
      {{ localeStrings.empty }}
    </p>

    <!-- ── 有数据 ── -->
    <div v-else class="atk-catalog__body" :class="{ 'atk-catalog__body--deep': isDeep }">
      <div
        v-for="item in catalogData"
        :key="item.path"
        class="atk-catalog__section"
      >
        <!-- ═══ 多级模式 ═══ -->
        <template v-if="isDeep">
          <div :id="item.title" class="atk-catalog__section-header">
            <RouteLink class="atk-catalog__link atk-catalog__link--l1" :to="item.path">
              {{ item.title }}
            </RouteLink>
            <span v-if="item.children?.length" class="atk-catalog__section-count">
              {{ item.children.length }}
            </span>
          </div>

          <div
            v-if="item.children && item.children.length"
            class="atk-catalog__section-body"
          >
            <div
              v-for="child in item.children"
              :key="child.path"
              class="atk-catalog__item atk-catalog__item--l2"
            >
              <RouteLink class="atk-catalog__link atk-catalog__link--l2" :to="child.path">
                {{ child.title }}
              </RouteLink>

              <ol
                v-if="child.children && child.children.length && props.index"
                class="atk-catalog__sublist"
              >
                <li
                  v-for="grandchild in child.children"
                  :key="grandchild.path"
                  class="atk-catalog__subitem"
                >
                  <RouteLink class="atk-catalog__link atk-catalog__link--l3" :to="grandchild.path">
                    {{ grandchild.title }}
                  </RouteLink>
                </li>
              </ol>

              <div
                v-else-if="child.children && child.children.length"
                class="atk-catalog__sublinks"
              >
                <RouteLink
                  v-for="grandchild in child.children"
                  :key="grandchild.path"
                  class="atk-catalog__link atk-catalog__link--l3"
                  :to="grandchild.path"
                >
                  {{ grandchild.title }}
                </RouteLink>
              </div>
            </div>
          </div>
        </template>

        <!-- ═══ 扁平模式 ═══ -->
        <div v-else class="atk-catalog__item atk-catalog__item--l1">
          <RouteLink class="atk-catalog__link atk-catalog__link--l1" :to="item.path">
            {{ item.title }}
          </RouteLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// ============================================================
//  Catalog — 目录卡片
//  设计语言参考 ConnectCommandSummary
//  卡片容器 + 锌灰色系 + 清晰分区 + 一致间距
// ============================================================

// ── 令牌 ──
$text:           #18181b;
$text-muted:     #71717a;
$border:         #d4d4d8;
$border-light:   #e4e4e7;
$divider:        #eeeef0;
$bg-page:        #fafafa;
$bg-hover:       #f4f4f5;
$bg-badge:       #e4e4e7;
$accent:         #1456f0;
$accent-subtle:  rgba(20, 86, 240, 0.08);

// ── 容器 ──
.atk-catalog {
  margin: 1.5rem 0;
  border: 1px solid $border;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  line-height: 1.65;
}

// ── 标题栏 ──
.atk-catalog__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  border-bottom: 1px solid $border;
}

.atk-catalog__header-title {
  font-size: 20px;
  font-weight: 700;
  color: $text;
  letter-spacing: -0.01em;
}

.atk-catalog__header-count {
  display: inline-flex;
  align-items: center;
  padding: 3px 14px;
  background: $accent-subtle;
  color: $accent;
  font-weight: 600;
  border-radius: 12px;
  letter-spacing: 0.02em;
}

// ── 空态 ──
.atk-catalog__empty {
  margin: 0;
  padding: 3rem 2rem;
  text-align: center;
  color: $text-muted;
  border-top: 1px solid $border-light;
}

// ── 主体 ──
.atk-catalog__body {
  // 扁平模式：多列网格
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 16px 24px;

  &--deep {
    display: block;
    padding: 0;
  }
}

// ── 区块（多级模式）──
.atk-catalog__section {
  .atk-catalog__body--deep & {
    border-bottom: 1px solid $divider;

    &:last-child {
      border-bottom: none;
    }
  }
}

// ── 区块标题行（多级模式 L1）──
.atk-catalog__section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px 9px;

  .atk-catalog__link--l1 {
    font-weight: 700;
    color: $text;
    letter-spacing: -0.01em;
  }
}

.atk-catalog__section-count {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 22px;
  padding: 0 8px;
  background: $bg-badge;
  font-weight: 600;
  border-radius: 11px;
  font-variant-numeric: tabular-nums;
}

// ── 区块内容区 ──
.atk-catalog__section-body {
  padding: 0 24px 14px;
}

// ── 条目 ──
.atk-catalog__item {
  &--l1 {
    padding: 0 24px 16px;
  }

  &--l2 {
    padding: 6px 0;
  }
}

// ── 链接基类 ──
.atk-catalog__link {
  color: inherit;
  text-decoration: none;
  transition: color 0.15s;

  &:hover {
    color: $accent;
  }
}

// ── L1（扁平模式）──
.atk-catalog__link--l1 {
  font-weight: 650;
  color: $text;
  display: block;
  padding: 2px 0;
}

// ── L2 ──
.atk-catalog__link--l2 {
  display: block;
  font-weight: 530;
  padding: 3px 8px;
  margin: 0 -8px;
  border-radius: 5px;
  transition: background 0.15s, color 0.15s;

  &:hover {
    background: $bg-hover;
  }
}

// ── L3 ──
.atk-catalog__link--l3 {
  font-weight: 400;
  color: #64748b;
  padding: 2px 6px;
  margin: 0 -6px;
  border-radius: 4px;
  transition: background 0.15s, color 0.15s;

  &:hover {
    background: $bg-hover;
    color: $text-muted;
  }
}

// ── 三级网格 ──
.atk-catalog__sublinks {
  margin-top: 5px;
  padding: 0.75rem;
  border: 1px solid $border-light;
  // border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 2px 1.5rem;
}

// ── 三级有序列表（index 模式）──
.atk-catalog__sublist {
  list-style: none;
  counter-reset: cat-li;
  margin: 5px 0 0;
  padding: 0;
  padding-left: 0.75rem;
  border-left: 2px solid $border-light;
}

.atk-catalog__subitem {
  counter-increment: cat-li;
  padding: 1px 0;

  &::before {
    content: counters(cat-li, '.') '. ';
    color: #a1a1aa;
    font-weight: 460;
    font-variant-numeric: tabular-nums;
  }
}

// ── 扁平模式条目 ──
.atk-catalog__body:not(.atk-catalog__body--deep) {
  .atk-catalog__item--l1 {
    padding: 0;
  }

  .atk-catalog__link--l1 {
    border-radius: 5px;
    padding: 6px 10px;
    margin: 0 -10px;
    transition: background 0.15s, color 0.15s;

    &:hover {
      background: $bg-hover;
    }
  }
}

// ── 响应式 ──
@media (max-width: 860px) {
  .atk-catalog__header {
    padding: 14px 18px;
  }

  .atk-catalog__body {
    padding: 12px 18px;
  }

  .atk-catalog__section-header {
    padding: 10px 18px 8px;
  }

  .atk-catalog__section-body {
    padding: 0 18px 12px;
  }

  .atk-catalog__item--l2 {
    padding-left: 1.3rem;
  }
}

@media (max-width: 520px) {
  .atk-catalog__header {
    padding: 12px 14px;
  }

  .atk-catalog__body {
    padding: 10px 14px;
  }

  .atk-catalog__section-header {
    padding: 10px 14px 8px;
  }

  .atk-catalog__section-body {
    padding: 0 14px 10px;
  }

  .atk-catalog__item--l2 {
    padding-left: 1rem;
  }
}
</style>
