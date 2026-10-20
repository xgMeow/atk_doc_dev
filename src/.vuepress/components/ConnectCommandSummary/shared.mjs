// ── Path Utilities ──────────────────────────────

export const toDirectoryPath = (path) => {
  const withoutHash = path.split('#')[0];
  const withoutHtml = withoutHash.replace(/README\.html$/, '').replace(/[^/]+\.html$/, '');
  return withoutHtml.endsWith('/') ? withoutHtml : `${withoutHtml}/`;
};

export const toRoutePath = (filePath) => {
  const relative = filePath.replace(/^\.\.\/\.\.\/\.\.\//, '').replace(/\.md$/, '');
  return encodeURI(`/${relative}.html`);
};

export const isSameOrChildPath = (routePath, directoryPath) =>
  decodeURI(routePath).startsWith(decodeURI(directoryPath));

// 从当前路径推导语言前缀；无法识别时默认中文，保证 zh/en 不会混用
export const getLocalePrefix = (currentPath) =>
  currentPath.startsWith('/en/') ? '/en/' : '/zh/';

// 低版本内核没有 Array.prototype.at，取末段改用下标
const lastSegment = (path) => {
  const segments = path.split('/').filter(Boolean);
  return segments[segments.length - 1] || '';
};

export const getCategory = (filePath, directoryPath, defaultCategory = '') => {
  const decodedDirectory = decodeURI(directoryPath);
  const decodedRoute = decodeURI(toRoutePath(filePath));
  const relativePath = decodedRoute.replace(decodedDirectory, '').replace(/^\//, '');
  if (relativePath.includes('/')) {
    return relativePath.split('/')[0];
  }
  return lastSegment(decodedDirectory) || defaultCategory;
};

// ── Category Name Resolution ──────────────────────
// 类别显示名优先级：README frontmatter title → README 一级标题 → 文件夹名（未命中则回落）。

// 仅解析 frontmatter 块中的 title 字段，避免正文里以 title: 开头的行被误匹配；去掉可选引号
const getFrontmatterTitle = (content) => {
  const fm = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fm) return '';
  const m = fm[1].match(/^title:\s*(.+)$/m);
  if (!m) return '';
  return m[1].trim().replace(/^["']|["']$/g, '').trim();
};

const stripQuotes = (text) => text.trim().replace(/^["']|["']$/g, '').trim();

// 仅解析 frontmatter 块中的列表字段；支持 `groups: [a, b]` 与 `groups:\n  - a` 两种写法。
// 命名分组用逻辑名而非路径，故命令改名/移动/目录改名都不会让它失效。
export const getFrontmatterList = (content, key) => {
  const fm = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fm) return [];
  const body = fm[1];

  // 行内写法：groups: [a, b]
  const inline = body.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
  if (inline && inline[1].trim().startsWith('[')) {
    return inline[1]
      .trim()
      .replace(/^\[|\]$/g, '')
      .split(/[,，]/)
      .map(stripQuotes)
      .filter(Boolean);
  }

  // 块式写法：groups: 换行后跟若干个 `- 项`
  const block = body.match(new RegExp(`^${key}:\\s*$`, 'm'));
  if (!block) return [];

  const items = [];
  for (const line of body.slice(block.index + block[0].length).split(/\r?\n/)) {
    const m = line.match(/^\s+-\s*(.+?)\s*$/);
    if (m) {
      items.push(stripQuotes(m[1]));
      continue;
    }
    if (line.trim() && !/^\s/.test(line)) break; // 回到下一行顶层 key，列表结束
  }
  return items.filter(Boolean);
};

// 视图页 = 只放一个速查表组件的页面，本身不是一条命令。
// 平铺后对象页/模块页与命令页同处一个目录，靠这条把它挡在首页 A–Z 之外。
export const isViewPage = (content) => content.includes('<ConnectCommandSummary');

export const buildCategoryNameMap = (modules, baseDirectory) => {
  const map = {};
  const decodedBase = decodeURI(baseDirectory);
  const localePrefix = getLocalePrefix(baseDirectory);

  for (const [filePath, content] of Object.entries(modules)) {
    if (!filePath.endsWith('/README.md')) continue;

    const routePath = toRoutePath(filePath);
    const dirPath = toDirectoryPath(routePath);
    if (!isSameOrChildPath(dirPath, baseDirectory)) continue;
    if (!dirPath.startsWith(localePrefix)) continue; // 语言强隔离，避免 zh/en 混用

    // 与 getCategory 相同的 raw name 计算逻辑（文件夹名）
    const decodedDir = decodeURI(dirPath);
    const relativePath = decodedDir.replace(decodedBase, '').replace(/^\//, '').replace(/\/$/, '');
    const rawName = relativePath || lastSegment(decodedBase);

    if (!rawName) continue;

    // 1) frontmatter title
    const title = getFrontmatterTitle(content);
    if (title) {
      map[rawName] = title;
      continue;
    }

    // 2) 一级标题
    const h1Match = content.match(/^#\s+(.+)$/m);
    if (h1Match) {
      map[rawName] = h1Match[1].trim();
    }
    // 3) 都没有则回落文件夹名（调用方 categoryNameMap[x] || x）
  }

  return map;
};

// ── Group List ──────────────────────────────────

// 页面 group 属性：字符串（换行或逗号分隔）或数组 → 分组名列表
export const parseGroupList = (raw) => {
  const list = Array.isArray(raw) ? raw : String(raw ?? '').split(/[,，\n]/);
  return list.map(item => String(item).trim()).filter(Boolean);
};

// ── Section Extraction ──────────────────────────

// 按标题定位小节：支持单个标题或多个候选标题（中/英文文档并存），返回第一个命中的小节
const findSectionHeading = (headings, titles) => {
  const list = Array.isArray(titles) ? titles : [titles];
  for (const title of list) {
    const heading = headings.find(h => h.title === title);
    if (heading) return heading;
  }
  return undefined;
};

// Get the text paragraph(s) from the section after a heading
export const getSectionParagraph = (lines, headings, titles) => {
  const heading = findSectionHeading(headings, titles);
  if (!heading) return '';

  const sectionEnd = headings.find(h => h.line > heading.line && h.level <= heading.level)?.line ?? lines.length;
  const section = lines.slice(heading.line + 1, sectionEnd).join('\n');

  // 去除代码块，返回完整文本（支持多行）；换行按原始文本保留，渲染时统一收敛
  const textContent = section.replace(/```[\s\S]*?```/g, '').trim();
  return textContent;
};

// Get the first code block content from the section after a heading
export const getSectionCodeBlock = (lines, headings, titles) => {
  const heading = findSectionHeading(headings, titles);
  if (!heading) return '';

  const sectionEnd = headings.find(h => h.line > heading.line && h.level <= heading.level)?.line ?? lines.length;
  const section = lines.slice(heading.line + 1, sectionEnd).join('\n');

  const match = section.match(/```[^\n]*\n([\s\S]*?)```/);
  return match?.[1]?.trim() || '';
};
