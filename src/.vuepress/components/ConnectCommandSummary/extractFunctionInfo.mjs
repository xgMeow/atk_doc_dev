import {
  buildCategoryNameMap,
  getCategory,
  getLocalePrefix,
  getSectionCodeBlock,
  getSectionParagraph,
  isSameOrChildPath,
  toDirectoryPath,
  toRoutePath,
} from './shared.mjs';

export const scriptFunctionRoot = '/zh/5.专业使用指南/18-脚本工具';

// ── Group Builder ─────────────────────────────────

export const buildFunctionGroups = (modules, currentPath = `/${scriptFunctionRoot}/`) => {
  const groups = new Map();
  const baseDirectory = toDirectoryPath(currentPath);
  const localePrefix = getLocalePrefix(currentPath);
  const categoryNameMap = buildCategoryNameMap(modules, baseDirectory);

  for (const [filePath, content] of Object.entries(modules)) {
    if (filePath.endsWith('/README.md')) continue;

    const routePath = toRoutePath(filePath);
    if (!isSameOrChildPath(routePath, baseDirectory)) continue;
    if (!routePath.startsWith(localePrefix)) continue; // 语言强隔离，避免 zh/en 混用

    const rawCategory = getCategory(filePath, baseDirectory, '内置函数');
    const category = categoryNameMap[rawCategory] || rawCategory;
    const entries = extractFunctionEntries(content, routePath);

    if (!entries.length) continue;

    const groupEntries = groups.get(category) ?? [];
    groupEntries.push(...entries.map(entry => ({ ...entry, category })));
    groups.set(category, groupEntries);
  }

  return Array.from(groups.entries())
    .map(([category, entries]) => ({
      category,
      entries: entries.sort((a, b) => a.name.localeCompare(b.name)),
    }))
    .sort((a, b) => a.category.localeCompare(b.category));
};

export const extractFunctionEntries = (content, path) => {
  const lines = content.replace(/\r\n/g, '\n').split('\n');
  const headings = [];

  for (let index = 0; index < lines.length; index += 1) {
    const match = lines[index].match(/^(#{1,3})\s+(.+?)\s*$/);
    if (match) {
      headings.push({ level: match[1].length, title: match[2].trim(), line: index });
    }
  }

  // Every file is a single-function document: H1 = function name
  const h1 = headings.find(h => h.level === 1);
  if (!h1) return [];

  const name = h1.title;

  // 兼容中英文文档标题：中文「作用/语法」，英文「Description/Syntax」
  const effect = getSectionParagraph(lines, headings, ['作用', 'Description']);
  const usage = getSectionCodeBlock(lines, headings, ['语法', 'Syntax']);

  // 只要有函数名就展示，缺失的字段留空（组件侧渲染占位符），避免整条被静默丢弃
  return [{
    name,
    effect,
    usage,
    path,
  }];
};
