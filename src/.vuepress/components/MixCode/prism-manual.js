/**
 * 在 prism-core 加载前预置 manual 标志。
 *
 * Prism 默认在 DOMContentLoaded 时自动高亮全站所有 `.language-*` 代码块。
 * 本项目的页面代码块已由构建期（@vuepress/plugin-prismjs）高亮，客户端再扫一遍属多余，
 * 且离线版整站扫描会拖慢首屏。这里提前置位 `window.Prism.manual = true`，关闭自动高亮。
 *
 * 注意：ESM import 有提升，本模块必须在 `import Prism from 'prismjs'` 之前 import，
 * 才能赶在 prism-core 读取 `_self.Prism.manual` 之前生效（prism-core 只在初始化时读取一次）。
 */
if (typeof window !== 'undefined') {
  window.Prism = window.Prism || {};
  window.Prism.manual = true;
}
