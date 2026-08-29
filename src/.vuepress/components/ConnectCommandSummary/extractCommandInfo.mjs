import {
  buildCategoryNameMap,
  getCategory,
  getSectionCodeBlock,
  getSectionParagraph,
  isSameOrChildPath,
  toDirectoryPath,
  toRoutePath,
} from './shared.mjs';

export const connectCommandRoot = '/zh/二次开发教程/2-二次开发CONNECT模式/2-命令参考/3-Connect对象命令库';

// ── Group Builder ─────────────────────────────────

export const buildCommandGroups = (modules, currentPath = `/${connectCommandRoot}/`) => {
  const groups = new Map();
  const baseDirectory = toDirectoryPath(currentPath);
  const categoryNameMap = buildCategoryNameMap(modules, baseDirectory);

  for (const [filePath, content] of Object.entries(modules)) {
    if (filePath.endsWith('/README.md')) continue;

    const routePath = toRoutePath(filePath);
    if (!isSameOrChildPath(routePath, baseDirectory)) continue;

    const rawCategory = getCategory(filePath, baseDirectory, '通用命令');
    const category = categoryNameMap[rawCategory] || rawCategory;
    const entries = extractCommandEntries(content, routePath);

    if (!entries.length) continue;

    const groupEntries = groups.get(category) ?? [];
    groupEntries.push(...entries.map(entry => ({ ...entry, category })));
    groups.set(category, groupEntries);
  }

  return Array.from(groups.entries())
    .map(([category, entries]) => ({
      category,
      entries: entries.sort((a, b) => a.command.localeCompare(b.command)),
    }))
    .sort((a, b) => a.category.localeCompare(b.category));
};

export const extractCommandEntries = (content, path) => {
  const lines = content.replace(/\r\n/g, '\n').split('\n');
  const headings = [];

  for (let index = 0; index < lines.length; index += 1) {
    const match = lines[index].match(/^(#{1,3})\s+(.+?)\s*$/);
    if (match) {
      headings.push({ level: match[1].length, title: match[2].trim(), line: index });
    }
  }

  // Every file is a single-command document: H1 = command name
  const h1 = headings.find(h => h.level === 1);
  if (!h1) return [];

  const command = h1.title;

  const effect = getSectionParagraph(lines, headings, '作用');
  const usage = getSectionCodeBlock(lines, headings, '语法');

  if (!effect || !usage) return [];

  return [{
    command,
    effect,
    usage,
    path,
  }];
};
