"use strict";

const path = require('path');
const fs = require('fs');
const fg = require('fast-glob');

/**
 * Transform import.meta.glob() calls into static objects.
 *
 * Vite supports `import.meta.glob` natively and expands it at build time.
 * Webpack does NOT support it — this function polyfills it by:
 *   1. Glob-matching files on disk
 *   2. For ?url:  injecting require() calls (webpack then processes images)
 *   3. For ?raw:  reading files from disk and inlining the content
 */
function transformImportMetaGlob(source, resourcePath) {
  const dir = path.dirname(resourcePath);

  // Match: const VAR = import.meta.glob('PATTERN', { OPTIONS }) [as TYPE];
  // Uses [\s\S] to match across newlines for multiline options
  const regex = /const\s+(\w+)\s*=\s*import\.meta\.glob(?:<[^>]*>)?\s*\(\s*'([^']+)'\s*,\s*\{([\s\S]*?)\}\s*\)(?:\s*as\s+[^;]+)?;?/g;

  let result = source;
  let match;

  while ((match = regex.exec(source)) !== null) {
    const [fullMatch, varName, globPattern, optionsBody] = match;

    const query      = optionsBody.match(/query:\s*'([^']+)'/)?.[1];
    const importOpt  = optionsBody.match(/import:\s*'([^']+)'/)?.[1];
    const eager      = /eager:\s*true/.test(optionsBody);

    if (!eager || importOpt !== 'default') continue;

    // Resolve pattern relative to the .vue file directory
    const absPattern = path.resolve(dir, globPattern).replace(/\\/g, '/');

    let files;
    try {
      files = fg.sync(absPattern, {
        onlyFiles: true,
        ignore: ['**/node_modules/**'],
      });
    } catch (_e) {
      files = [];
    }

    const pairs = files.map(function(absPath) {
      // path.relative already produces e.g. ../../../docs/assets/logo.png
      const relPath = path.relative(dir, absPath).replace(/\\/g, '/');

      var value;
      if (query === '?url') {
        // Let webpack process the image and return its built URL
        value = 'require("' + relPath + '")';
      } else if (query === '?raw') {
        var content = fs.readFileSync(absPath, 'utf-8');
        value = JSON.stringify(content);
      } else {
        value = '""';
      }

      return '  "' + relPath + '": ' + value;
    });

    result = result.replace(fullMatch, 'const ' + varName + ' = {\n' + pairs.join(',\n') + '\n}');
    console.error('[vuepress-loader] transformed import.meta.glob: ' + varName + ' → ' + files.length + ' files');
  }

  return result;
}

// ==========================================
//  Main loader
// ==========================================
module.exports = function vuepressLoader(source) {
  const filePath = this.resourcePath; // stable: always the physical file path, no loaders/queries

  if (!filePath.endsWith('.vue')) return source;

  // 1. Transform import.meta.glob → static objects
  if (source.includes('import.meta.glob(')) {
    console.error('[vuepress-loader] transforming import.meta.glob in: ' + filePath);
  }
  source = transformImportMetaGlob(source, filePath);

  // Verify transformation (only check function calls, comments are harmless)
  if (source.includes('import.meta.glob(')) {
    console.error('[vuepress-loader] ERROR: import.meta.glob() call still present after transform in: ' + filePath);
  }

  // 2. SSR rendering transform (original behaviour); keep original `this.request` for the JSON payload
  const origRequest = this.request;
  source = source.replace(
    /import { ssrRender } from (.*)\n/,
    'import { ssrRender as _ssrRender } from $1\n' +
    "import { ssrContextKey } from 'vue'\n" +
    'const ssrRender = (...args) => {\n' +
    '  const ssrContext = args[2].appContext.provides[ssrContextKey]\n' +
    '  ssrContext._registeredComponents.add(' + JSON.stringify(origRequest) + ')\n' +
    '  return _ssrRender(...args)\n' +
    '}\n'
  );

  return source;
};
