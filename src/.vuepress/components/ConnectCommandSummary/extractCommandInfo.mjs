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

export const connectCommandRoot = '/zh/二次开发教程/2-二次开发CONNECT模式/2-命令参考/3-Connect对象命令库';

// ── Included Commands（页面手动追加的命令） ─────────

// 引用项写法：命令库内的文档路径后缀，如 `VO/VO Model`（可省略 .md，可带上级目录）。
// 之所以用路径而非命令名：库内确实存在重名 H1（Define / SetPosition / GetValue / SetValue），
// 按名字查找有歧义。

const commandRefPattern = /\/2-命令参考\/(.+)$/;

// 模块索引按 modules 对象缓存（import.meta.glob 的结果是静态的），
// 避免每次 computed 重算时重新遍历全库。
const moduleIndexCache = new WeakMap();

const buildModuleIndex = (modules, localePrefix) => {
  let cache = moduleIndexCache.get(modules);
  if (!cache) {
    cache = new Map();
    moduleIndexCache.set(modules, cache);
  }
  if (cache.has(localePrefix)) return cache.get(localePrefix);

  const index = [];
  for (const [filePath, content] of Object.entries(modules)) {
    if (filePath.endsWith('/README.md')) continue;

    const routePath = toRoutePath(filePath);
    if (!routePath.startsWith(localePrefix)) continue; // 语言强隔离，避免 zh/en 混用

    const decoded = decodeURI(routePath).replace(/\.html$/, '');
    const match = decoded.match(commandRefPattern);
    if (!match) continue;

    // 命中用的相对路径，如 `3-Connect对象命令库/VO/VO Model`
    const rel = match[1];
    // 分类取所在文件夹名，与页面自身分组的命名规则一致
    const segments = decoded.split('/').filter(Boolean);
    index.push({ rel, routePath, content, category: segments.at(-2) || '' });
  }

  cache.set(localePrefix, index);
  return index;
};

/**
 * 把页面 include 里声明的引用项解析成速查表条目。
 * 解析不到的项不静默丢弃，而是产出 missing 条目（组件侧渲染成不可点的行）。
 */
export const buildIncludedEntries = (modules, refs, localePrefix = '/zh/') => {
  const index = buildModuleIndex(modules, localePrefix);
  const entries = [];
  const visited = new Set();

  for (const ref of refs) {
    const normalized = decodeURI(ref)
      .replace(/\.(md|html)$/i, '')
      .replace(/^\.?\//, '')
      .replace(/\/+$/, '');
    if (!normalized || visited.has(normalized)) continue;
    visited.add(normalized);

    const hits = index.filter(item => item.rel === normalized || item.rel.endsWith(`/${normalized}`));

    if (hits.length > 1) {
      console.warn(`[ConnectCommandSummary] include "${ref}" 匹配到 ${hits.length} 个文档，取第一个：${hits[0].rel}`);
    }

    const hit = hits[0];
    if (!hit) {
      console.warn(`[ConnectCommandSummary] include "${ref}" 未在命令库中找到对应文档`);
      entries.push({
        command: normalized,
        effect: '',
        usage: '',
        path: '',
        category: normalized.split('/')[0] || '',
        missing: true,
      });
      continue;
    }

    const [entry] = extractCommandEntries(hit.content, hit.routePath);
    if (entry) {
      entries.push({ ...entry, category: hit.category });
    } else {
      console.warn(`[ConnectCommandSummary] include "${ref}" 命中 ${hit.rel}，但该文档没有一级标题，未能识别命令名`);
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
