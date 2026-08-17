<template>
  <div class="atk-overview">
    <!-- 每个模块：标题 + 统一卡片网格 -->
    <section
      v-for="(module, index) in modulesData"
      :key="index"
      class="overview-module"
    >
      <h2 class="module-title">{{ module.title }}</h2>

      <div class="item-grid">
        <template v-for="(row, rowIndex) in module.rows" :key="rowIndex">
          <template v-for="(item, itemIndex) in row" :key="itemIndex">
            <a
              v-if="item.link"
              :href="getLink(item.link)"
              class="item-card is-link"
            >
              <span class="item-name">{{ item.name }}</span>
              <span class="item-arrow" aria-hidden="true">→</span>
            </a>
            <div v-else class="item-card is-plain">
              <span class="item-name">{{ item.name }}</span>
            </div>
          </template>
        </template>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { usePageData } from 'vuepress/client'
import { zhOverViewData } from './zh'
import { enOverViewData } from './en'

const getLink = (path) => {
  const normalizedBase = __VUEPRESS_BASE__.replace(/\/+$/, '')
  const normalizedPath = path.replace(/\/+/g, '/')
  return normalizedBase + normalizedPath
}

// 根据当前语言选择对应数据（英文页用 /en/ 前缀，其余默认中文）
const page = usePageData()
const isEn = computed(() => page.value.path.startsWith('/en/'))
const modulesData = computed(() => isEn.value ? enOverViewData : zhOverViewData)
</script>

<style scoped>
/* ==================== 容器 ==================== */
.atk-overview {
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px 0;
  font-family: "Microsoft YaHei", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

/* ==================== 模块 ==================== */
.overview-module {
  margin-bottom: 44px;
}

.overview-module:last-child {
  margin-bottom: 0;
}

/* 模块标题：左侧强调条 + 标题文字，所有模块左对齐 */
.module-title {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 18px;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
  color: #0f172a;
  letter-spacing: 0.5px;
}

.module-title::before {
  content: '';
  flex-shrink: 0;
  width: 5px;
  height: 22px;
  border-radius: 3px;
  background: linear-gradient(180deg, #1d4ed8 0%, #0891b2 100%);
}

/* ==================== 卡片网格（等宽自适应，保证对齐） ==================== */
.item-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 14px;
}

.item-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 14px 18px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.4;
  box-sizing: border-box;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.item-name {
  min-width: 0;
  word-break: break-word;
}

.item-arrow {
  flex-shrink: 0;
  opacity: 0;
  transform: translateX(-6px);
  transition: all 0.25s ease;
  font-weight: 400;
}

/* 可点击项 */
.item-card.is-link {
  text-decoration: none;
  color: #1551a3;
  background: linear-gradient(135deg, #eff6ff 0%, #f8fafc 100%);
  border: 1px solid #dbeafe;
}

.item-card.is-link:hover {
  color: #ffffff;
  background: linear-gradient(135deg, #1551a3 0%, #0369a1 55%, #0891b2 100%);
  border-color: transparent;
  transform: translateY(-2px);
  box-shadow:
    0 4px 12px rgba(21, 81, 163, 0.22),
    0 2px 4px rgba(21, 81, 163, 0.12);
}

.item-card.is-link:hover .item-arrow {
  opacity: 1;
  transform: translateX(0);
}

/* 暂无文档的占位项 */
.item-card.is-plain {
  color: #94a3b8;
  background: #f8fafc;
  border: 1px dashed #cbd5e1;
  cursor: default;
}

/* ==================== 响应式 ==================== */
@media (max-width: 900px) {
  .atk-overview {
    padding: 28px 16px;
  }

  .overview-module {
    margin-bottom: 36px;
  }

  .module-title {
    font-size: 18px;
  }

  .item-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 12px;
  }
}

@media (max-width: 600px) {
  .item-grid {
    grid-template-columns: 1fr;
  }

  .item-card {
    font-size: 14px;
    padding: 12px 16px;
  }
}
</style>
