import {
  buildCategoryNameMap,
  getCategory,
  getFrontmatterList,
  getLocalePrefix,
  getSectionCodeBlock,
  getSectionParagraph,
  isSameOrChildPath,
  isViewPage,
  parseGroupList,
  toDirectoryPath,
  toRoutePath,
} from './shared.mjs';

export const connectCommandRoot = '/zh/二次开发教程/2-二次开发CONNECT模式/2-命令参考/3-Connect对象命令库';

// ── Declared Groups（命令页自报归属，反向聚合） ──────

/**
 * 页面声明 group="卫星" 时，拿到所有在 frontmatter 里声明了 groups: [..., 卫星, ...] 的命令。
 * 每条命令显示在哪一节由它自己的 groups[0] 决定 —— 一份定义，多处出现；
 * 判定依据是声明而非路径，因此路径撞车、目录改名都不会再影响归属。
 */
export const buildGroupEntries = (modules, groupNames, localePrefix = '/zh/') => {
  const wanted = new Set(parseGroupList(groupNames));
  if (!wanted.size) return [];

  const entries = [];
  const matched = new Set();

  for (const [filePath, content] of Object.entries(modules)) {
    const routePath = toRoutePath(filePath);
    if (!routePath.startsWith(localePrefix)) continue; // 语言强隔离，避免 zh/en 混用
    if (isViewPage(content)) continue;

    const groups = getFrontmatterList(content, 'groups');
    if (!groups.length) continue;

    const hits = groups.filter(g => wanted.has(g));
    if (!hits.length) continue;
    hits.forEach(g => matched.add(g));

    const [entry] = extractCommandEntries(content, routePath);
    if (!entry) {
      console.warn(`[ConnectCommandSummary] ${filePath} 声明了 groups 但没有一级标题，未能识别命令名`);
      continue;
    }
    entries.push({ ...entry, category: groups[0] });
  }

  // 声明了却没被任何命令认领的组名多半是笔误，显式告警而不是静默少一个分组
  for (const name of wanted) {
    if (!matched.has(name)) {
      console.warn(`[ConnectCommandSummary] group "${name}" 没有任何命令声明，该分组为空`);
    }
  }

  return entries;
};

// ── Group Builder ─────────────────────────────────

export const buildCommandGroups = (modules, currentPath = `/${connectCommandRoot}/`) => {
  const groups = new Map();
  const baseDirectory = toDirectoryPath(currentPath);
  const localePrefix = getLocalePrefix(currentPath);
  const categoryNameMap = buildCategoryNameMap(modules, baseDirectory);

  for (const [filePath, content] of Object.entries(modules)) {
    if (filePath.endsWith('/README.md')) continue;
    if (isViewPage(content)) continue; // 视图页只放速查表组件，不是一条命令

    const routePath = toRoutePath(filePath);
    if (!isSameOrChildPath(routePath, baseDirectory)) continue;
    if (!routePath.startsWith(localePrefix)) continue; // 语言强隔离，避免 zh/en 混用

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

  // 兼容中英文文档标题：中文「作用/语法」，英文「Description/Syntax」
  const effect = getSectionParagraph(lines, headings, ['作用', 'Description']);
  const usage = getSectionCodeBlock(lines, headings, ['语法', 'Syntax']);

  // 只要有命令名就展示，缺失的字段留空（组件侧渲染占位符），避免整条被静默丢弃
  return [{
    command,
    effect,
    usage,
    path,
  }];
};
