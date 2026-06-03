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

  const commandHeadings = headings.some(item => item.level === 2)
    ? headings.filter(item => item.level === 2)
    : headings.filter(item => item.level === 1).slice(0, 1);

  return commandHeadings
    .map((heading) => {
      const sectionEnd = headings.find(item => item.line > heading.line && item.level <= heading.level)?.line ?? lines.length;
      const section = lines.slice(heading.line + 1, sectionEnd).join('\n');
      const effect = extractLabelText(section, '作用');
      const usage = extractUsage(section);

      if (!effect || !usage) return null;

      return {
        command: heading.title,
        effect,
        usage,
        path: heading.level === 1 ? path : `${path}#${slugifyHeading(heading.title)}`,
      };
    })
    .filter(Boolean);
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

const extractLabelText = (section, label) => {
  const match = section.match(new RegExp(`(?:^|\\n)\\s*(?:[-*]\\s*)?${label}：\\s*([^\\n]+)`));
  return match?.[1]?.trim() || '';
};

const extractUsage = (section) => {
  const labelIndex = section.search(/(?:^|\n)\s*(?:[-*]\s*)?用法：/);
  if (labelIndex < 0) return '';

  const afterLabel = section.slice(labelIndex);
  const match = afterLabel.match(/```[^\n]*\n([\s\S]*?)```/);
  return match?.[1]?.trim() || '';
};

const slugifyHeading = (heading) => encodeURIComponent(
  heading
    .trim()
    .toLowerCase()
    .replace(/[`~!@#$%^&*()+=\[\]{}|\\:;"'<>,.?/，。！？、；：“”‘’（）【】]/g, '')
    .replace(/\s+/g, '-')
);
