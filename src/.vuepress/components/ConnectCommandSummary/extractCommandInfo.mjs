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

// ── Cross-library Alphabetical Index ─────────────

// 模块命令页（机动规划 / 偏差分析）的标题是中文动作名，无法参与字母序；
// 真正的命令标识符写在「语法」里，如 `Astrogator <Satellite Object Path> InsertSegment ...`。
// 前缀 token 有 Astrogator / Astrogator_RM / AstroUQ / AstroUQ_RM 多种，占位符本身又含空格，
// 故锚定 `<...Object Path>` 而不是按空白切分取第 N 个 token。
const OBJECT_PATH_ANCHOR = /^[A-Za-z_]+[ \t]+<[^>]*Object Path>[ \t]+(\S+)/;

export const deriveCommandId = (usage = '') => usage.match(OBJECT_PATH_ANCHOR)?.[1] ?? '';

const isPlainAscii = (text) => /^[\x20-\x7E]+$/.test(text);

// 模块库名：.../4-Connect机动规划命令库/... → 机动规划（对象命令库不是「模块库」，返回空）
const getModuleLibraryName = (routePath) => {
  const match = decodeURI(routePath).match(/\d+-Connect(.+?)命令库\//);
  const name = match?.[1] ?? '';
  return name === '对象' ? '' : name;
};

/**
 * 全库字母序总索引：对象命令库 + 各模块命令库（机动规划 / 偏差分析）。
 * 只收命令不收属性（STK 的 Alphabetical Listing 同样只收命令），库首页与视图页也不是命令。
 * 排序键统一为英文命令名 —— 对象命令页 H1 本身就是命令名，模块命令页从语法派生，
 * 这样「记得命令名、不知道属于哪个库」时能在同一个字母序里找到。
 */
export const buildAlphaEntries = (modules, localePrefix = '/zh/') => {
  const entries = [];

  for (const [filePath, content] of Object.entries(modules)) {
    if (filePath.endsWith('/README.md')) continue;
    if (isViewPage(content)) continue;

    const routePath = toRoutePath(filePath);
    if (!routePath.startsWith(localePrefix)) continue; // 语言强隔离，避免 zh/en 混用
    // 各库的命令都住在「命令/」目录下；这一条同时挡掉属性页与库首页
    if (!decodeURI(routePath).includes('/命令/')) continue;

    const [entry] = extractCommandEntries(content, routePath);
    if (!entry) continue;

    const derived = isPlainAscii(entry.command) ? entry.command : deriveCommandId(entry.usage);
    const sortName = derived || entry.command;

    entries.push({
      ...entry,
      sortName,
      // 命令列主文本 / 副标题：模块命令主显英文命令名、副显中文页名
      display: sortName,
      subtitle: sortName === entry.command ? '' : entry.command,
      // 来源标签：对象命令取它自报的分组名（重名时恰好就是对象名），模块命令取库名
      category: getFrontmatterList(content, 'groups')[0] || getModuleLibraryName(routePath),
    });
  }

  return entries;
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
