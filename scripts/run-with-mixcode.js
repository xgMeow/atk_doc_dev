/**
 * 包装 vuepress 命令：展开 atk 块 → 运行 vuepress → 自动还原
 *
 * 处理正常退出和 Ctrl+C (SIGINT) 两种场景，确保原始文件始终被还原。
 *
 * 用法：
 *   node scripts/run-with-mixcode.js dev . [--clean-cache]
 *   node scripts/run-with-mixcode.js build . --dest .dist/online .
 */

const { spawn } = require('child_process');
const { expand, restore } = require('./expand-mixcode-blocks');

// 1. 展开 atk 块
console.log('🔧 展开 ```atk 代码块...\n');
const result = expand();
console.log(`\n✅ 展开完成：${result.blocks} 个块 / ${result.files} 个文件`);

// 2. 启动 vuepress
console.log('\n▶️  启动 vuepress...\n');

const args = process.argv.slice(2);
const child = spawn('npx', ['vuepress', ...args], {
  cwd: __dirname + '/..',
  stdio: 'inherit',
  shell: true,
});

let restored = false;

function doRestore() {
  if (restored) return;
  restored = true;
  console.log('\n🔙 还原原始文件...\n');
  const r = restore();
  console.log(`\n✅ 已还原 ${r.files} 个文件`);
}

// 正常退出（传播退出码，确保 build 失败时 npm script 的 && 能正确中断）
child.on('exit', (code) => {
  doRestore();
  process.exit(code);
});

// Ctrl+C / 终止信号
process.on('SIGINT', () => {
  child.kill('SIGINT');
  // 不在这里调用 doRestore，等 child exit 事件统一处理
});

process.on('SIGTERM', () => {
  child.kill('SIGTERM');
});
