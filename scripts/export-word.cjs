#!/usr/bin/env node
const childProcess = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const CONFIG_FILE = 'export-word.config.json';
const DEFAULT_OUTPUT = path.join('.dist', 'word', 'ATK帮助文档.docx');
const DEFAULT_INCLUDE = ['README.md', /^\d+[.-]/, '二次开发教程', '发布说明'];
const EXCLUDED_DIRS = new Set([
  '.git',
  '.vuepress',
  '.dist',
  'node_modules',
  'patches',
]);
function parseNumberPrefix(name) {
  const match = name.match(/^(\d+(?:\.\d+)?)/);
  return match ? Number(match[1]) : Number.POSITIVE_INFINITY;
}

function comparePaths(left, right) {
  const leftParts = left.split(path.sep);
  const rightParts = right.split(path.sep);
  const length = Math.max(leftParts.length, rightParts.length);

  for (let index = 0; index < length; index += 1) {
    const leftPart = leftParts[index];
    const rightPart = rightParts[index];
    if (leftPart === undefined) return -1;
    if (rightPart === undefined) return 1;
    if (leftPart === rightPart) continue;

    const leftReadme = leftPart.toLowerCase() === 'readme.md';
    const rightReadme = rightPart.toLowerCase() === 'readme.md';
    if (leftReadme !== rightReadme) return leftReadme ? -1 : 1;

    const leftNumber = parseNumberPrefix(leftPart);
    const rightNumber = parseNumberPrefix(rightPart);
    if (leftNumber !== rightNumber) return leftNumber - rightNumber;

    return leftPart.localeCompare(rightPart, 'zh-CN', { numeric: true, sensitivity: 'base' });
  }

  return 0;
}

function loadConfig(rootDir = process.cwd()) {
  const configPath = path.join(rootDir, CONFIG_FILE);
  if (!fs.existsSync(configPath)) return { include: DEFAULT_INCLUDE };

  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  if (!Array.isArray(config.include)) {
    throw new Error(`${CONFIG_FILE} 的 include 必须是数组。`);
  }

  return { include: config.include };
}

function shouldIncludeRootEntry(entryName, config) {
  return config.include.some((item) => {
    if (item instanceof RegExp) return item.test(entryName);
    return item === entryName;
  });
}

function walkMarkdownFiles(directory, rootDir, files) {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith('.') && entry.name !== '.vuepress') continue;
    if (EXCLUDED_DIRS.has(entry.name)) continue;

    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      walkMarkdownFiles(entryPath, rootDir, files);
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) {
      files.push(entryPath);
    }
  }
}

function collectMarkdownFiles(rootDir = process.cwd(), config = loadConfig(rootDir)) {
  const rootEntries = fs.readdirSync(rootDir, { withFileTypes: true });
  const files = [];

  for (const entry of rootEntries) {
    if (!shouldIncludeRootEntry(entry.name, config)) continue;

    const entryPath = path.join(rootDir, entry.name);
    if (entry.isDirectory()) {
      walkMarkdownFiles(entryPath, rootDir, files);
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) {
      files.push(entryPath);
    }
  }

  return files.sort((left, right) => comparePaths(path.relative(rootDir, left), path.relative(rootDir, right)));
}

function toPosixPath(filePath) {
  return filePath.split(path.sep).join('/');
}

function stripFrontmatter(markdown) {
  return markdown.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '');
}

function rewriteMarkdownLinks(markdown, sourceFile, rootDir, outputDir) {
  const sourceDir = path.dirname(sourceFile);
  const outputBase = outputDir || sourceDir;

  return markdown.replace(/(!?\[[^\]]*\]\()([^\s)<>]+)(\))/g, (match, prefix, target, suffix) => {
    if (/^(?:[a-z][a-z0-9+.-]*:|#|mailto:)/i.test(target)) return match;

    const [rawPath, anchor = ''] = target.split('#');
    if (!rawPath) return match;

    const absoluteTarget = rawPath.startsWith('/')
      ? path.join(rootDir, rawPath.slice(1))
      : path.resolve(sourceDir, rawPath);
    let relativeTarget = path.relative(outputBase, absoluteTarget);
    if (!relativeTarget.startsWith('.')) relativeTarget = `.${path.sep}${relativeTarget}`;

    return `${prefix}${toPosixPath(relativeTarget)}${anchor ? `#${anchor}` : ''}${suffix}`;
  });
}

function normalizeMarkdown(markdown, sourceFile, rootDir, outputDir) {
  return rewriteMarkdownLinks(stripFrontmatter(markdown), sourceFile, rootDir, outputDir).trim();
}

function writeCombinedMarkdown(files, outputFile, rootDir = process.cwd()) {
  fs.mkdirSync(path.dirname(outputFile), { recursive: true });
  const outputDir = path.dirname(outputFile);
  const sections = files.map((file) => {
    const relativeFile = toPosixPath(path.relative(rootDir, file));
    const markdown = fs.readFileSync(file, 'utf8');
    return [`<!-- 来源：${relativeFile} -->`, normalizeMarkdown(markdown, file, rootDir, outputDir)].join('\n\n');
  });

  fs.writeFileSync(outputFile, `${sections.join('\n\n\\pagebreak\n\n')}\n`, 'utf8');
}

function buildPandocArgs({ input, output, rootDir, workDir }) {
  return [
    input,
    '--from',
    'markdown+tex_math_dollars+pipe_tables+backtick_code_blocks',
    '--to',
    'docx',
    '--output',
    output,
    '--resource-path',
    [workDir, rootDir].join(path.delimiter),
  ];
}

function parseArgs(argv) {
  const options = { output: DEFAULT_OUTPUT };
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '-o' || arg === '--output') {
      options.output = argv[index + 1];
      index += 1;
    } else if (arg === '-h' || arg === '--help') {
      options.help = true;
    } else {
      throw new Error(`未知参数：${arg}`);
    }
  }
  return options;
}

function printHelp() {
  console.log('用法：node scripts/export-word.cjs [--output <docx路径>]');
  console.log(`默认输出：${DEFAULT_OUTPUT}`);
  console.log(`说明：脚本会读取 ${CONFIG_FILE} 的 include 列表，并调用 pandoc 生成 Word。`);
}

function run(argv = process.argv.slice(2), rootDir = process.cwd()) {
  const options = parseArgs(argv);
  if (options.help) {
    printHelp();
    return;
  }

  const output = path.resolve(rootDir, options.output);
  const workDir = path.dirname(output);
  const combined = path.join(workDir, 'combined.md');
  const config = loadConfig(rootDir);
  const files = collectMarkdownFiles(rootDir, config);

  if (files.length === 0) throw new Error('未找到可导出的 Markdown 文档。');

  writeCombinedMarkdown(files, combined, rootDir);

  const pandocArgs = buildPandocArgs({
    input: combined,
    output,
    rootDir,
    workDir,
  });

  const result = childProcess.spawnSync('pandoc', pandocArgs, { stdio: 'inherit' });
  if (result.error && result.error.code === 'ENOENT') {
    throw new Error('未找到 pandoc。请先安装 pandoc，并确保 pandoc 命令可在 PATH 中使用。');
  }
  if (result.status !== 0) {
    throw new Error(`pandoc 导出失败，退出码：${result.status}`);
  }

  console.log(`已导出 Word：${path.relative(rootDir, output)}`);
}

module.exports = {
  buildPandocArgs,
  collectMarkdownFiles,
  loadConfig,
  normalizeMarkdown,
  run,
  writeCombinedMarkdown,
};

if (require.main === module) {
  try {
    run();
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
