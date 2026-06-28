/**
 * 从 .atk.md 模板生成各语言版本的 .md 文件
 *
 * 用法：node scripts/gen-lang-files.js
 *
 * 模板使用 ```atk 标记代码块，使用 {S:...} 和 {C:...} 标记字符串和注释。
 * 本脚本读取模板，为每种目标语言生成独立的 .md 文件，其中：
 *   - ```atk 替换为 ```{lang}
 *   - {S:text} 替换为语言对应的引号字符串
 *   - {C:text} 替换为语言对应的注释格式
 */

const fs = require('fs');
const path = require('path');
const { LANGS, ALL_LANGS, processContent } = require('../.vuepress/markdown/mixcode-lang');

/**
 * 处理单个模板文件，生成各语言版本
 * @param {string} templatePath - 模板文件路径
 * @param {string} [outDir] - 输出目录，默认为模板所在目录
 */
function generateLangFiles(templatePath, outDir = null) {
  const template = fs.readFileSync(templatePath, 'utf-8');
  const dir = outDir || path.dirname(templatePath);
  const baseName = path.basename(templatePath, '.mixcode.md');

  for (const lang of ALL_LANGS) {
    const rules = LANGS[lang];
    const outPath = path.join(dir, `${baseName}-${lang}.md`);

    // 1. 替换 ```atk → ```{lang}
    // 2. 在 ```atk ... ``` 代码块内处理 {S:...} 和 {C:...}
    let result = template.replace(
      /```\s*mixcode([^\n]*)\r?\n([\s\S]*?)```/g,
      (_match, extra, content) => {
        // 去掉代码块末尾多余的换行，避免生成文件中出现空行
        const trimmed = content.replace(/\n+$/, '');
        const processed = processContent(trimmed, lang);
        return '```' + rules.tag + extra + '\n' + processed + '\n```';
      }
    );

    fs.writeFileSync(outPath, result, 'utf-8');
    console.log(`  ✓ ${path.relative(process.cwd(), outPath)}`);
  }
}

// ============ 主流程 ============

const root = path.resolve(__dirname, '..');

// 接口说明模板
const atkCommandTemplate = path.join(
  root,
  '二次开发教程/2-二次开发CONNECT模式/.include/atkCommand.mixcode.md'
);

console.log('生成语言文件...\n');

if (fs.existsSync(atkCommandTemplate)) {
  console.log('[接口说明] atkCommand');
  generateLangFiles(atkCommandTemplate);
} else {
  console.log('[接口说明] atkCommand.mixcode.md 不存在，跳过');
}

console.log('\n✅ 语言文件生成完成');
