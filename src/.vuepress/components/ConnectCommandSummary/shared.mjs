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

export const getCategory = (filePath, directoryPath, defaultCategory = '') => {
  const decodedDirectory = decodeURI(directoryPath);
  const decodedRoute = decodeURI(toRoutePath(filePath));
  const relativePath = decodedRoute.replace(decodedDirectory, '').replace(/^\//, '');
  if (relativePath.includes('/')) {
    return relativePath.split('/')[0];
  }
  return decodedDirectory.split('/').filter(Boolean).at(-1) || defaultCategory;
};

// ── Category Name Resolution ──────────────────────
// Build a map from raw directory name → display name,
// using README frontmatter title → H1 → fallback to raw name.

export const buildCategoryNameMap = (modules, baseDirectory) => {
  const map = {};
  const decodedBase = decodeURI(baseDirectory);

  for (const [filePath, content] of Object.entries(modules)) {
    if (!filePath.endsWith('/README.md')) continue;

    const routePath = toRoutePath(filePath);
    const dirPath = toDirectoryPath(routePath);
    if (!isSameOrChildPath(dirPath, baseDirectory)) continue;

    // Compute the raw name using same logic as getCategory
    const decodedDir = decodeURI(dirPath);
    const relativePath = decodedDir.replace(decodedBase, '').replace(/^\//, '').replace(/\/$/, '');
    const rawName = relativePath || decodedBase.split('/').filter(Boolean).at(-1) || '';

    if (!rawName) continue;

    // 1) frontmatter title
    const titleMatch = content.match(/^title:\s*(.+)$/m);
    if (titleMatch) {
      map[rawName] = titleMatch[1].trim();
      continue;
    }

    // 2) first H1 heading
    const h1Match = content.match(/^#\s+(.+)$/m);
    if (h1Match) {
      map[rawName] = h1Match[1].trim();
    }
  }

  return map;
};

// ── Section Extraction ──────────────────────────

// Get the first text paragraph from the section after a heading
export const getSectionParagraph = (lines, headings, title) => {
  const heading = headings.find(h => h.title === title);
  if (!heading) return '';

  const sectionEnd = headings.find(h => h.line > heading.line && h.level <= heading.level)?.line ?? lines.length;
  const section = lines.slice(heading.line + 1, sectionEnd).join('\n');

  // Remove code blocks, get first non-empty text line
  const textContent = section.replace(/```[\s\S]*?```/g, '').trim();
  return textContent.split('\n')[0]?.trim() || '';
};

// Get the first code block content from the section after a heading
export const getSectionCodeBlock = (lines, headings, title) => {
  const heading = headings.find(h => h.title === title);
  if (!heading) return '';

  const sectionEnd = headings.find(h => h.line > heading.line && h.level <= heading.level)?.line ?? lines.length;
  const section = lines.slice(heading.line + 1, sectionEnd).join('\n');

  const match = section.match(/```[^\n]*\n([\s\S]*?)```/);
  return match?.[1]?.trim() || '';
};
