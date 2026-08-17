<script setup lang="ts">
import { computed } from 'vue';
import { RouteLink, usePageData, useRoutes, useSiteData } from 'vuepress/client';
import { entries, isNumber, isPlainObject, isString, keys, startsWith } from '@vuepress/helper/client';
import { useCatalogInfoGetter } from '@vuepress/plugin-catalog/client';

interface Props {
  /** 扫描的根路径，空字符串表示当前页面所在目录 */
  base?: string;
  /** 目录嵌套深度上限，从 base 起算 */
  level?: number;
  /** 卡片网格列数 */
  cols?: number;
  /** 是否展示图标/缩略图区域 */
  showIcon?: boolean;
  /** 是否展示描述文字区域 */
  showDescription?: boolean;
  /** 卡片底部按钮文案 */
  buttonText?: string;
  /** 排布模式：mixed 将无子文档的模块平铺在上，structured 统一按层级展示 */
  layout?: 'mixed' | 'structured';
}

const props = withDefaults(defineProps<Props>(), {
  base: '',
  level: 3,
  cols: 4,
  showIcon: true,
  showDescription: true,
  buttonText: '打开',
  layout: 'mixed',
});

// ==========================================
//  构建时：图片 URL 解析
//  Vite 不直接提供文档目录下的静态资源，必须通过 import.meta.glob 导入让 Vite 处理
// ==========================================

/** 将 glob 返回的文件系统路径转为站点相对路径，匹配 imageUrlMap key 格式 */
const stripGlobPrefix = (p: string) => p.replace(/^\.\.\/\.\.\/\.\.\//, '');

const imageModules = import.meta.glob('../../../**/*.{png,jpg,jpeg,gif,svg,webp,bmp,ico}', {
  query: '?url',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const imageUrlMap: Record<string, string> = {};
// 构建时填充 —— 遍历 import.meta.glob 返回的图片模块，将路径转换为站点路径作为 key
for (const [fsPath, url] of Object.entries(imageModules)) {
  imageUrlMap[`/${stripGlobPrefix(fsPath)}`] = url;
}

const resolveThumbnailUrl = (path: string | undefined): string | undefined => {
  if (!path) return undefined;
  // 已解析的绝对路径或外部 URL 直接返回
  if (path.startsWith('/@fs/') || path.startsWith('http://') || path.startsWith('https://')) return path;
  // 相对路径通过 imageUrlMap 查找 Vite 处理后的真实 URL
  return imageUrlMap[path] || path;
};

// 从所有 markdown 文件中提取第一张图片，建立 路由路径→图片 的映射
// 优先级：frontmatter thumbnail > 文档第一张图片 > icon
const mdModules = import.meta.glob('../../../**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const fsPathToRoute = (fsPath: string): string => {
  const relative = stripGlobPrefix(fsPath);
  const noExt = relative.replace(/\.md$/, '');
  let routePath: string;
  // README / index 视为目录入口，挂到目录路径下
  if (noExt.endsWith('/README') || noExt.endsWith('/index') || noExt === 'README' || noExt === 'index') {
    const dir = noExt.replace(/\/(?:README|index)$/, '').replace(/^(?:README|index)$/, '');
    routePath = dir ? `/${dir}/` : '/';
  } else {
    routePath = `/${noExt}.html`;
  }
  return encodeURI(routePath);
};

const getMdDir = (globPath: string): string => {
  return stripGlobPrefix(globPath).replace(/\/[^/]+\.md$/, '');
};

/** 从 markdown 源码中提取第一张可见图片路径（优先 Markdown 语法，其次排除 no-view 的 HTML img） */
const extractFirstImage = (content: string): string | null => {
  const mdMatch = content.match(/!\[.*?\]\(([^)\s]+?)\)/);
  if (mdMatch) return mdMatch[1];
  const htmlMatches = content.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi);
  for (const m of htmlMatches) {
    if (!/no-view/i.test(m[0])) return m[1];
  }
  return null;
};

const resolveImagePath = (imgPath: string, mdDir: string): string => {
  if (imgPath.startsWith('/') || imgPath.startsWith('http://') || imgPath.startsWith('https://')) {
    return imgPath;
  }
  return `/${mdDir}/${imgPath.replace(/^\.\//, '')}`;
};

const firstImageMap: Record<string, string> = {};
for (const [filePath, content] of Object.entries(mdModules)) {
  if (filePath.includes('node_modules')) continue;
  const routePath = fsPathToRoute(filePath);
  const img = extractFirstImage(content);
  if (img) {
    firstImageMap[routePath] = resolveImagePath(img, getMdDir(filePath));
  }
}

// ==========================================
//  运行时：目录数据
// ==========================================
const catalogInfoGetter = useCatalogInfoGetter();
const page = usePageData();
const routes = useRoutes();
const siteData = useSiteData();

interface CatalogItem {
  /** 相对于站点根目录的层级深度 */
  level: number;
  /** 所属父级路径 */
  base: string;
  /** 页面路由路径 */
  path: string;
  /** 页面标题，即 frontmatter 中的 title */
  title: string;
  /** 排序权重，正数升序在前，负数在后 */
  order?: number;
  /** 页面描述，即 frontmatter 中的 description */
  description?: string;
  /** SVG path d 属性值，作为图标 */
  icon?: string;
  /** 缩略图 URL，优先级：frontmatter thumbnail > 文档首张图片 */
  thumbnail?: string;
  /** 子级目录项 */
  children?: CatalogItem[];
}

/**
 * 核心目录数据：从路由信息中提取并构建树形结构。
 * 流程：提取各路由的 catalog info → 按 base 和 level 过滤 → 按层级深度排序 → 构建父子嵌套树
 */
const catalogData = computed(() => {
  const base = props.base ? `/${props.base}/`.replace(/\/+/g, '/') : page.value.path.replace(/\/[^/]+$/, '/');
  const baseDepth = base.split('/').length - 2;
  const result: CatalogItem[] = [];

  // 从所有路由中提取 catalog 信息（title/order/description/icon/thumbnail）
  const catalogInfo = entries(routes.value)
    .map(([path, { meta }]) => {
      const info = catalogInfoGetter(meta) || meta;
      if (!info?.title) return null;
      return {
        level: path.endsWith('/') ? path.split('/').length - 2 : path.split('/').length - 1,
        base: path.replace(/\/[^/]+\/?$/, '/'),
        path,
        title: info.title,
        order: info.order,
        description: info.description,
        icon: info.icon,
        thumbnail: resolveThumbnailUrl(
          (info as Record<string, unknown>).thumbnail as string
          || firstImageMap[path]
        ),
      } as CatalogItem;
    })
    .filter((item): item is CatalogItem => isPlainObject(item) && isString(item.title));

  catalogInfo
    // 过滤：仅保留 base 路径下的页面，且层级不超过 props.level
    .filter(({ level, path }) => {
      if (!startsWith(path, base) || path === base) return false;
      if (base === '/') {
        const otherLocales = keys(siteData.value.locales).filter(item => item !== '/');
        if (path === '/404.html' || otherLocales.some(localePath => startsWith(path, localePath))) return false;
      }
      return level - baseDepth <= props.level;
    })
    // 排序：先按层级深度升序，同层级按 order 再按 title 字母序
    .sort((a, b) => {
      const levelDiff = a.level - b.level;
      if (levelDiff) return levelDiff;
      return compareOrder(a.order, b.order) || a.title.localeCompare(b.title);
    })
    // 构建父子嵌套树：relativeLevel 1 为一级模块，2 为子文档，3+ 为孙级文档
    .forEach((info) => {
      const relativeLevel = info.level - baseDepth;
      if (relativeLevel === 1) {
        result.push(info);
      } else if (relativeLevel === 2) {
        const parent = result.find(item => item.path === info.base);
        if (parent) (parent.children ??= []).push(info);
      } else {
        const grandParent = result.find(item => item.path === info.base.replace(/\/[^/]+\/$/, '/'));
        const parent = grandParent?.children?.find(item => item.path === info.base);
        if (parent) (parent.children ??= []).push(info);
      }
    });

  return result;
});

/** 排序辅助：正数 order 按升序排列于前，负数 order 按升序排列于后，无 order 的排中间 */
const compareOrder = (a: unknown, b: unknown): number => {
  const aNum = isNumber(a);
  const bNum = isNumber(b);
  if (!aNum && !bNum) return 0;
  if (!aNum) return 1;
  if (!bNum) return -1;
  const na = a as number, nb = b as number;
  if (na > 0 && nb > 0) return na - nb;
  if (na < 0 && nb < 0) return na - nb;
  return nb > 0 ? 1 : -1;
};

/**
 * 将一级模块拆分为 { heading, cards }[] 结构，统一卡片渲染
 * heading 为 null 时表示模块直属文档（无三级标题）
 */
const displayModules = computed(() => {
  return catalogData.value.map(module => {
    const children = module.children || [];
    const leafItems = children.length
      ? children.filter(c => !c.children?.length)
      : [module];
    const branchChildren = children.filter(c => c.children?.length);

    const cardSections: { heading: CatalogItem | null; cards: CatalogItem[] }[] = [];
    if (leafItems.length) {
      cardSections.push({ heading: null, cards: leafItems });
    }
    for (const sub of branchChildren) {
      cardSections.push({ heading: sub, cards: sub.children || [] });
    }
    return { ...module, cardSections };
  });
});

/** 卡片网格列数样式，由 props.cols 控制 */
const gridStyle = computed(() => ({
  gridTemplateColumns: `repeat(${props.cols}, minmax(0, 1fr))`,
}));

/** 将一级模块按有无子文档拆分为目录和文档两组，供 mixed 布局使用 */
const flatModules = computed(() => {
  const dirs = displayModules.value.filter(m => m.children?.length);
  const docs = displayModules.value.filter(m => !m.children?.length);
  return { dirs, docs };
});
</script>

<template>
  <div class="catalog-card-wrapper">
    <!-- 混合排布：文档平铺在上，目录在下 -->
    <template v-if="layout === 'mixed'">
      <div v-if="flatModules.docs.length" class="catalog-module" :style="{ '--module-index': 0 }">
        <div class="card-grid" :style="gridStyle">
          <div
            v-for="(card, cardIndex) in flatModules.docs"
            :key="card.path"
            class="example-card"
            :style="{ '--card-index': cardIndex }"
          >
            <div v-if="showIcon" class="card-icon-wrapper" :class="{ 'has-thumbnail': card.thumbnail }">
              <img v-if="card.thumbnail" :src="card.thumbnail" class="card-thumbnail" alt="" />
              <svg v-else-if="card.icon" class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path :d="card.icon" />
              </svg>
              <svg v-else class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="9" y1="9" x2="15" y2="9" />
                <line x1="9" y1="15" x2="15" y2="15" />
              </svg>
            </div>
            <div class="card-main">
              <div class="card-title">{{ card.title }}</div>
              <div v-if="showDescription && card.description" class="card-description" :title="card.description">{{ card.description }}</div>
              <div v-else-if="showDescription" class="card-description-placeholder"></div>
              <RouteLink :to="card.path" class="card-button-link">
                <div class="card-button">
                  <span class="button-text">{{ buttonText }}</span>
                  <svg class="button-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </RouteLink>
            </div>
          </div>
        </div>
      </div>

      <div
        v-for="(module, index) in flatModules.dirs"
        :key="module.path"
        class="catalog-module"
        :style="{ '--module-index': index + 1 }"
      >
        <div class="module-title">
          <RouteLink :to="module.path" class="module-title-link title-text">{{ module.title }}</RouteLink>
        </div>

        <div
          v-for="section in module.cardSections"
          :key="section.heading?.path || section.cards[0]?.path"
          class="card-section"
        >
          <div v-if="section.heading" class="sub-module-title">
            <RouteLink :to="section.heading.path" class="sub-module-title-link title-text">
              {{ section.heading.title }}
            </RouteLink>
          </div>
          <div class="card-grid" :style="gridStyle">
            <div
              v-for="(card, cardIndex) in section.cards"
              :key="card.path"
              class="example-card"
              :style="{ '--card-index': cardIndex }"
            >
              <div v-if="showIcon" class="card-icon-wrapper" :class="{ 'has-thumbnail': card.thumbnail }">
                <img v-if="card.thumbnail" :src="card.thumbnail" class="card-thumbnail" alt="" />
                <svg v-else-if="card.icon" class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path :d="card.icon" />
                </svg>
                <svg v-else class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="9" y1="9" x2="15" y2="9" />
                  <line x1="9" y1="15" x2="15" y2="15" />
                </svg>
              </div>
              <div class="card-main">
                <div class="card-title">{{ card.title }}</div>
                <div v-if="showDescription && card.description" class="card-description" :title="card.description">{{ card.description }}</div>
                <div v-else-if="showDescription" class="card-description-placeholder"></div>
                <RouteLink :to="card.path" class="card-button-link">
                  <div class="card-button">
                    <span class="button-text">{{ buttonText }}</span>
                    <svg class="button-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </RouteLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <!-- 结构化排布：每个模块始终显示标题 -->
    <template v-else>
      <div
        v-for="(module, index) in displayModules"
        :key="module.path"
        class="catalog-module"
        :style="{ '--module-index': index }"
      >
        <div class="module-title">
          <RouteLink :to="module.path" class="module-title-link title-text">{{ module.title }}</RouteLink>
        </div>

        <div
          v-for="section in module.cardSections"
          :key="section.heading?.path || section.cards[0]?.path"
          class="card-section"
        >
          <div v-if="section.heading" class="sub-module-title">
            <RouteLink :to="section.heading.path" class="sub-module-title-link title-text">
              {{ section.heading.title }}
            </RouteLink>
          </div>
          <div class="card-grid" :style="gridStyle">
            <div
              v-for="(card, cardIndex) in section.cards"
              :key="card.path"
              class="example-card"
              :style="{ '--card-index': cardIndex }"
            >
              <div v-if="showIcon" class="card-icon-wrapper" :class="{ 'has-thumbnail': card.thumbnail }">
                <img v-if="card.thumbnail" :src="card.thumbnail" class="card-thumbnail" alt="" />
                <svg v-else-if="card.icon" class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path :d="card.icon" />
                </svg>
                <svg v-else class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="9" y1="9" x2="15" y2="9" />
                  <line x1="9" y1="15" x2="15" y2="15" />
                </svg>
              </div>
              <div class="card-main">
                <div class="card-title">{{ card.title }}</div>
                <div v-if="showDescription && card.description" class="card-description" :title="card.description">{{ card.description }}</div>
                <div v-else-if="showDescription" class="card-description-placeholder"></div>
                <RouteLink :to="card.path" class="card-button-link">
                  <div class="card-button">
                    <span class="button-text">{{ buttonText }}</span>
                    <svg class="button-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </RouteLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">

$clr-accent:        #1456f0;
$clr-accent-alt:    #3b82f6;
$clr-accent-soft:   #eef4ff;
$clr-accent-glow:   rgba(20, 86, 240, 0.18);
$clr-text-primary:  #1a1f36;
$clr-text-secondary:#5c6379;
$clr-text-muted:    #8e96ab;
$clr-card-bg:       #ffffff;
$clr-card-border:   #e8ecf4;
$clr-icon-bg:       #f7f9fc;
$clr-icon-fg:       #6b7799;
$clr-divider:       #f0f3f9;

// ==========================================
//  基础布局
// ==========================================

img {
  margin: 0 auto;
}

.catalog-card-wrapper {
  margin: 0;
  padding: 0;
}

.catalog-module {
  margin-bottom: 2.5rem;
  animation: module-fade-up 0.7s cubic-bezier(0.17, 0.67, 0.12, 0.99) both;
  animation-delay: calc(var(--module-index, 0) * 0.14s);

  &:last-child {
    margin-bottom: 0;
  }
}

@keyframes module-fade-up {
  from {
    opacity: 0;
    transform: translateY(28px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// ==========================================
//  模块标题
// ==========================================

.module-title {
  margin: 0 0 1.25rem;
  padding: 0 0 0.75rem;
  font-size: 1.3rem;
  font-weight: 700;
  color: $clr-text-primary;
  letter-spacing: -0.01em;
  border-bottom: 1px solid $clr-divider;
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    display: inline-block;
    width: 3px;
    height: 18px;
    background: linear-gradient(180deg, $clr-accent 0%, $clr-accent-alt 100%);
    border-radius: 2px;
    margin-right: 0.65rem;
    flex-shrink: 0;
    transition: height 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, $clr-accent 0%, $clr-accent-alt 50%, rgba($clr-accent-alt, 0) 100%);
    border-radius: 1px;
    transition: width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
  }

  &:hover {
    &::before {
      height: 22px;
    }
    &::after {
      width: 64px;
    }
  }
}

.module-title-link {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: $clr-accent;
  }
}

// ==========================================
//  子模块标题
// ==========================================
.title-text {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", STHeiti, "Microsoft YaHei", SimSun, sans-serif;
  font-weight: bolder;
}

.sub-module-title {
  margin: 1.25rem 0 0.875rem;
  font-size: 1.1rem;
  color: $clr-text-secondary;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.65rem;
  position: relative;
  width: fit-content;
  transition: color 0.35s ease, letter-spacing 0.4s ease;

  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    background: linear-gradient(135deg, $clr-accent 0%, $clr-accent-alt 100%);
    flex-shrink: 0;
    transform: rotate(45deg);
    transition:
      transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
      box-shadow 0.3s ease,
      background 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: linear-gradient(90deg, $clr-accent 0%, transparent 100%);
    transition: width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
  }

  &:hover {
    color: $clr-accent;
    letter-spacing: 0.12em;

    &::before {
      transform: rotate(45deg) scale(1.3);
      box-shadow:
        0 0 8px rgba($clr-accent, 0.5),
        0 0 16px rgba($clr-accent, 0.25);
    }

    &::after {
      width: 100%;
    }
  }
}

.sub-module-title-link {
  color: inherit;
  text-decoration: none;
  transition: opacity 0.25s ease, letter-spacing 0.3s ease;

  &:hover {
    opacity: 0.7;
    letter-spacing: 0.18em;
  }
}

// ==========================================
//  卡片区域
// ==========================================

.card-section {
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  &:first-child .sub-module-title {
    margin-top: 0;
  }
}

.card-grid {
  display: grid;
  gap: 1rem;
}

// ==========================================
//  卡片核心
// ==========================================

.example-card {
  display: flex;
  flex-direction: column;
  position: relative;
  background: $clr-card-bg;
  border: 1px solid $clr-card-border;
  border-radius: 8px;
  text-decoration: none;
  height: 100%;
  box-sizing: border-box;
  box-shadow:
    0 1px 2px rgba(18, 25, 58, 0.04),
    0 4px 12px rgba(18, 25, 58, 0.03),
    0 8px 24px rgba(18, 25, 58, 0.02);
  transition:
    border-color 0.4s cubic-bezier(0.22, 0.61, 0.36, 1),
    box-shadow 0.5s cubic-bezier(0.22, 0.61, 0.36, 1),
    transform 0.5s cubic-bezier(0.17, 0.67, 0.12, 0.99);
  animation: card-reveal 0.65s cubic-bezier(0.17, 0.67, 0.12, 0.99) both;
  animation-delay: calc(var(--card-index, 0) * 0.08s + var(--module-index, 0) * 0.14s + 0.08s);
  overflow: hidden;

  // 角落装饰元素
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    right: -20px;
    width: 60px;
    height: 60px;
    background: radial-gradient(circle, $clr-accent-glow 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    transform: scale(0.5);
    pointer-events: none;
    z-index: 1;
  }

  // 底部渐变遮罩
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40%;
    background: linear-gradient(180deg, transparent 0%, rgba($clr-accent, 0.015) 100%);
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
  }

  &:hover {
    border-color: rgba($clr-accent, 0.35);
    box-shadow:
      0 1px 2px rgba(18, 25, 58, 0.06),
      0 8px 24px $clr-accent-glow,
      0 16px 48px rgba(20, 86, 240, 0.08),
      0 24px 72px rgba(20, 86, 240, 0.04);
    transform: translateY(-6px) scale(1.01);

    &::before {
      opacity: 1;
      transform: scale(1.2);
    }

    &::after {
      opacity: 1;
    }
  }
}

.card-main {
  padding: 1rem 1.125rem 1rem;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  flex: 1;
}

@keyframes card-reveal {
  from {
    opacity: 0;
    transform: translateY(18px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

// ==========================================
//  卡片图标/缩略图区域
// ==========================================

.card-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  background: $clr-icon-bg;
  overflow: hidden;
  flex-shrink: 0;
  position: relative;
  transition:
    background 0.4s ease,
    transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.4s ease;

  // 网格纹理
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba($clr-accent, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba($clr-accent, 0.03) 1px, transparent 1px);
    background-size: 20px 20px;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  // 发光边框
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border: 1px solid transparent;
    transition: border-color 0.4s ease;
    pointer-events: none;
  }

  .example-card:hover & {
    background: $clr-accent-soft;
    transform: scale(1.02);
    box-shadow: inset 0 0 40px rgba($clr-accent, 0.05);

    &::before {
      opacity: 1;
    }

    &::after {
      border-color: rgba($clr-accent, 0.12);
    }
  }

  &.has-thumbnail {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    background: $clr-card-border;
    border-radius: 0;

    &::before,
    &::after {
      display: none;
    }

    .example-card:hover & {
      background: $clr-card-border;
      transform: none;
      box-shadow: none;
    }
  }
}

.card-thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition:
    transform 0.7s cubic-bezier(0.17, 0.67, 0.12, 0.99),
    filter 0.5s ease;
  position: relative;
  z-index: 1;

  // 渐变叠加层
  & + & {
    // 占位用
  }

  .example-card:hover & {
    transform: scale(1.06);
    filter: brightness(1.03) saturate(1.05);
  }
}

// 缩略图卡片的特殊样式调整
.example-card:has(.card-thumbnail) {
  padding-top: 0;

  .card-main {
    border-top: 1px solid $clr-divider;
  }
}

.card-icon {
  width: 28px;
  height: 28px;
  color: $clr-icon-fg;
  position: relative;
  z-index: 1;
  transition:
    color 0.4s ease,
    transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
    filter 0.4s ease;

  .example-card:hover & {
    color: $clr-accent;
    transform: rotate(-5deg) scale(1.15) translateY(-2px);
    filter: drop-shadow(0 4px 8px rgba($clr-accent, 0.25));
  }
}

// ==========================================
//  卡片标题
// ==========================================

.card-title {
  font-size: 0.9rem;
  font-weight: 700;
  color: $clr-text-primary;
  line-height: 1.4;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
  transition: color 0.35s ease;
  position: relative;

  .example-card:hover & {
    color: $clr-accent;
  }
}

// ==========================================
//  卡片描述
// ==========================================

.card-description {
  flex: 1;
  font-size: 0.775rem;
  color: $clr-text-secondary;
  line-height: 1.55;
  margin-bottom: 0.625rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: color 0.35s ease;

  .example-card:hover & {
    color: lighten($clr-text-secondary, 5%);
  }
}

.card-description-placeholder {
  flex: 1;
  min-height: 1.2rem;
  margin-bottom: 0.625rem;
}

// ==========================================
//  卡片底部按钮 — 动效
// ==========================================

.card-button-link {
  display: inline-flex;
  margin-top: auto;
  align-self: flex-end;
  text-decoration: none;
  color: inherit;
}

.card-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  padding: 0.35rem 0.75rem 0.35rem 0.85rem;
  background: linear-gradient(135deg, $clr-accent-soft 0%, rgba($clr-accent, 0.04) 100%);
  cursor: pointer;
  border: 1px solid rgba($clr-accent, 0.12);
  border-radius: 7px;
  font-size: 0.75rem;
  font-weight: 600;
  color: $clr-accent;
  letter-spacing: 0.02em;
  transition:
    background 0.4s ease,
    border-color 0.4s ease,
    gap 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
    transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.4s ease,
    padding-left 0.3s ease,
    padding-right 0.3s ease;

  .example-card:hover & {
    background: linear-gradient(135deg, $clr-accent 0%, $clr-accent-alt 100%);
    border-color: $clr-accent;
    color: #ffffff;
    gap: 0.5rem;
    padding-left: 0.95rem;
    padding-right: 0.95rem;
    transform: translateX(-2px);
    box-shadow:
      0 3px 10px rgba($clr-accent, 0.3),
      0 2px 5px rgba($clr-accent, 0.18);
  }
}

.button-text {
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
  letter-spacing: inherit;
  transition: letter-spacing 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);

  .example-card:hover & {
    letter-spacing: 0.06em;
  }
}

.button-arrow {
  width: 14px;
  height: 14px;
  color: inherit;
  transition:
    transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);

  .example-card:hover & {
    transform: translateX(6px) scale(1.1);
  }
}

// ==========================================
//  响应式
// ==========================================

@media (max-width: 1200px) {
  .card-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
  }
}

@media (max-width: 900px) {
  .card-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  }
  .card-icon-wrapper:not(.has-thumbnail) {
    width: 48px;
    height: 48px;
    border-radius: 14px;
  }
  .card-icon {
    width: 22px;
    height: 22px;
  }
  .example-card {
    padding: 1.25rem 1rem 1rem;
  }
}

@media (max-width: 600px) {
  .card-grid {
    grid-template-columns: 1fr !important;
  }
  .catalog-module {
    margin-bottom: 1.75rem;
  }
  .module-title {
    font-size: 1rem;
    margin-bottom: 1rem;
    padding-bottom: 0.65rem;
  }
  .sub-module-title {
    font-size: 0.675rem;
  }
  .example-card {
    padding: 1rem 0.875rem 0.75rem;

    &:has(.card-thumbnail) {
      padding-top: 0;
    }
  }
  .card-main {
    padding: 0.75rem 1rem 1rem;
  }
}
</style>
