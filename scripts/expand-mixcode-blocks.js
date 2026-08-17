/**
 * 文件级 atk 代码块展开与还原
 *
 * 用法：
 *   直接运行：node scripts/expand-mixcode-blocks.js [--restore]
 *   作为模块：const { expand, restore } = require('./expand-mixcode-blocks')
 */

const fs = require('fs');
const path = require('path');

const { expandToCodeTabs } = require('../src/.vuepress/markdown/mixcode-lang');

const MIXCODE_BLOCK_RE = /```\s*mixcode\s*\r?\n([\s\S]*?)```/g;
const ROOT_DIR = path.resolve(__dirname, '..');
const BACKUP_DIR = path.join(ROOT_DIR, '.mixcode-backups');

const SCAN_DIRS = [
  'src/zh/02-案例教程/8-二次开发案例',
  'src/en/02-案例教程/8-二次开发案例',
];

// ============ 工具函数 ============

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function walkMdFiles(dir) {
  const files = [];
  if (!fs.existsSync(dir)) return files;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walkMdFiles(full));
    else if (entry.name.endsWith('.md')) files.push(full);
  }
  return files;
}

// ============ 展开 ============

function expand() {
  // 清理旧备份
  if (fs.existsSync(BACKUP_DIR)) {
    fs.rmSync(BACKUP_DIR, { recursive: true, force: true });
  }

  let totalFiles = 0, totalBlocks = 0;

  for (const dir of SCAN_DIRS) {
    const fullDir = path.join(ROOT_DIR, dir);
    for (const file of walkMdFiles(fullDir)) {
      const content = fs.readFileSync(file, 'utf-8');
      if (!content.includes('mixcode')) continue;

      let count = 0;
      const expanded = content.replace(MIXCODE_BLOCK_RE, (_match, code) => {
        count++;
        return expandToCodeTabs(code.replace(/\r?\n+$/, ''));
      });

      if (count > 0) {
        // 备份原始文件
        const rel = path.relative(ROOT_DIR, file);
        const backupPath = path.join(BACKUP_DIR, rel);
        ensureDir(path.dirname(backupPath));
        fs.writeFileSync(backupPath, content, 'utf-8');

        // 写入展开后的内容
        fs.writeFileSync(file, expanded, 'utf-8');

        totalFiles++;
        totalBlocks += count;
        console.log(`  ✓ ${rel} (${count} 块)`);
      }
    }
  }

  return { files: totalFiles, blocks: totalBlocks };
}

// ============ 还原 ============

function restore() {
  if (!fs.existsSync(BACKUP_DIR)) return { files: 0 };

  let count = 0;
  for (const backupPath of walkMdFiles(BACKUP_DIR)) {
    const rel = path.relative(BACKUP_DIR, backupPath);
    const orig = path.join(ROOT_DIR, rel);
    fs.writeFileSync(orig, fs.readFileSync(backupPath, 'utf-8'));
    console.log(`  ↺ ${rel}`);
    count++;
  }

  fs.rmSync(BACKUP_DIR, { recursive: true, force: true });
  return { files: count };
}

// ============ 导出 ============

module.exports = { expand, restore };

// ============ 直接运行 ============

if (require.main === module) {
  const cmd = process.argv[2];
  if (cmd === '--restore' || cmd === '-r') {
    console.log('🔙 还原原始文件...\n');
    const r = restore();
    console.log(`\n✅ 已还原 ${r.files} 个文件`);
  } else {
    console.log('🔧 展开 ```atk 代码块...\n');
    const r = expand();
    console.log(`\n✅ 展开完成：${r.blocks} 个块 / ${r.files} 个文件`);
    console.log('💡 运行 node scripts/expand-mixcode-blocks.js --restore 还原');
  }
}
