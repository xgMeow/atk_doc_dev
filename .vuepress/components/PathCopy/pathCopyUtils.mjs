export const normalizePath = (path) => {
  if (!path) return ''
  let normalized = path.replace(/\//g, '\\').replace(/\\+/g, '\\')
  if (normalized.endsWith('\\')) normalized = normalized.slice(0, -1)
  return normalized
}

export const joinPath = (root, relative) => {
  const normalizedRelative = normalizePath(relative)
  if (!root) return normalizedRelative

  let rel = normalizedRelative
  if (rel.startsWith('\\')) rel = rel.slice(1)
  return `${normalizePath(root)}\\${rel}`
}

export const resolveViewerTarget = (targetId = 'PathViewer') => `#${targetId}`

export const resolvePathEntry = (entry, fallbackPath = '', fallbackLabel = '') => {
  if (typeof entry === 'string') return { path: entry, label: fallbackLabel }
  if (entry && typeof entry === 'object') return { path: entry.path || fallbackPath, label: entry.label || entry.name || fallbackLabel }
  return { path: fallbackPath, label: fallbackLabel }
}

export const getRootPathHint = (rootPath) => rootPath ? '' : '当前未配置软件安装路径，展示的是相对路径，配置后可复制完整绝对路径'
