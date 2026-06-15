export const connectCommandRoot = '二次开发教程/2-二次开发CONNECT模式/2-Connect命令库';

export const buildCommandGroups = (modules, currentPath = `/${connectCommandRoot}/`) => {
  const groups = new Map();
  const baseDirectory = toDirectoryPath(currentPath);

  for (const [filePath, content] of Object.entries(modules)) {
    if (filePath.endsWith('/README.md')) continue;

    const routePath = toRoutePath(filePath);
    if (!isSameOrChildPath(routePath, baseDirectory)) continue;

    const category = getCategory(filePath, baseDirectory);
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

const toDirectoryPath = (path) => {
  const withoutHash = path.split('#')[0];
  const withoutHtml = withoutHash.replace(/README\.html$/, '').replace(/[^/]+\.html$/, '');
  return withoutHtml.endsWith('/') ? withoutHtml : `${withoutHtml}/`;
};

const toRoutePath = (filePath) => {
  const relative = filePath.replace(/^\.\.\/\.\.\/\.\.\//, '').replace(/\.md$/, '');
  return encodeURI(`/${relative}.html`);
};

const isSameOrChildPath = (routePath, directoryPath) => decodeURI(routePath).startsWith(decodeURI(directoryPath));

const getCategory = (filePath, directoryPath) => {
  const decodedDirectory = decodeURI(directoryPath);
  const decodedRoute = decodeURI(toRoutePath(filePath));
  const relativePath = decodedRoute.replace(decodedDirectory, '').replace(/^\//, '');
  return relativePath.includes('/') ? relativePath.split('/')[0] : decodedDirectory.split('/').filter(Boolean).at(-1) || '通用命令';
};

// Get the first text paragraph from the section after a heading
const getSectionParagraph = (lines, headings, title) => {
  const heading = headings.find(h => h.title === title);
  if (!heading) return '';

  const sectionEnd = headings.find(h => h.line > heading.line && h.level <= heading.level)?.line ?? lines.length;
  const section = lines.slice(heading.line + 1, sectionEnd).join('\n');

  // Remove code blocks, get first non-empty text line
  const textContent = section.replace(/```[\s\S]*?```/g, '').trim();
  return textContent.split('\n')[0]?.trim() || '';
};

// Get the first code block content from the section after a heading
const getSectionCodeBlock = (lines, headings, title) => {
  const heading = headings.find(h => h.title === title);
  if (!heading) return '';

  const sectionEnd = headings.find(h => h.line > heading.line && h.level <= heading.level)?.line ?? lines.length;
  const section = lines.slice(heading.line + 1, sectionEnd).join('\n');

  const match = section.match(/```[^\n]*\n([\s\S]*?)```/);
  return match?.[1]?.trim() || '';
};
