/**
 * 一次性脚本：将案例文件中的 ```python 代码块转换为 ```atk 模板格式
 *
 * 转换规则：
 *   1. 独立行 # 注释 → {C:注释}
 *   2. '字符串' → {S:字符串}
 *   3. 行尾 ;# 注释 → 拆分处理（分号去掉，注释转 {C:...}）
 *   4. ```python → ```atk
 *
 * 用法：node scripts/convert-cases.js
 * 注意：转换后请人工审核，确保没有遗漏或错误
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob'); // 可能需要手动遍历

const CASE_DIR = path.resolve(__dirname, '..', '02-案例教程/8-二次开发案例');

/**
 * 转换一行 Python 代码为 atk 模板格式
 * @param {string} line - 原始 Python 代码行
 * @returns {string} 转换后的 atk 模板行
 */
function convertPythonLine(line) {
  // 保留行首缩进
  const indent = line.match(/^(\s*)/)[1];
  let content = line.trim();

  if (!content) return ''; // 空行

  // 情况 1：整行都是注释
  if (content.startsWith('#')) {
    const commentText = content.substring(1).trim();
    return indent + '{C:' + commentText + '}';
  }

  // 情况 2：代码 + 行尾注释
  // 匹配：代码部分（不含 ' 字符后面的 #）+ # 注释
  // 简单策略：找到最后一个不在字符串内的 #
  let commentIdx = -1;
  let inString = false;
  let stringChar = '';
  for (let i = 0; i < content.length - 1; i++) {
    const ch = content[i];
    if (!inString && (ch === "'" || ch === '"')) {
      inString = true;
      stringChar = ch;
    } else if (inString && ch === stringChar && content[i - 1] !== '\\') {
      inString = false;
      stringChar = '';
    } else if (!inString && ch === '#' && (i === 0 || content[i - 1] !== '#')) {
      commentIdx = i;
      break;
    }
  }

  let codePart = content;
  let commentText = '';

  if (commentIdx >= 0) {
    codePart = content.substring(0, commentIdx).trimEnd();
    commentText = content.substring(commentIdx + 1).trim();
  }

  // 去掉代码末尾的分号（atk 模板统一不带分号）
  codePart = codePart.replace(/;\s*$/, '');

  // 替换字符串字面量 '...' → {S:...}
  codePart = codePart.replace(/'([^']*)'/g, (_, s) => '{S:' + s + '}');

  let result = indent + codePart;
  if (commentText) {
    result += ' {C:' + commentText + '}';
  }

  return result;
}

/**
 * 转换单个文件中的所有 Python 代码块
 * @param {string} filePath - 文件路径
 * @returns {{ changed: boolean, count: number }} 是否修改及转换块数
 */
function convertFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;
  let count = 0;

  // 匹配 ```python ... ``` 代码块
  const blockRegex = /```python\s*\n([\s\S]*?)```/g;

  content = content.replace(blockRegex, (match, codeContent) => {
    count++;
    changed = true;

    // 去掉末尾多余换行
    const trimmed = codeContent.replace(/\n+$/, '');
    const lines = trimmed.split('\n');
    const converted = lines.map(convertPythonLine).join('\n');

    return '```mixcode\n' + converted + '\n```';
  });

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`  ✓ ${path.relative(CASE_DIR, filePath)} (${count} 块)`);
  }

  return { changed, count };
}

/**
 * 递归遍历目录获取所有 .md 文件
 */
function walkDir(dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkDir(fullPath));
    } else if (entry.name.endsWith('.md') && entry.name !== 'README.md') {
      files.push(fullPath);
    }
  }
  return files;
}

// ============ 主流程 ============

console.log('转换案例文件中的 Python 代码块...\n');

const caseFiles = walkDir(CASE_DIR);
let totalBlocks = 0;

for (const file of caseFiles) {
  const { count } = convertFile(file);
  totalBlocks += count;
}

console.log(`\n✅ 共转换 ${totalBlocks} 个代码块，涉及 ${caseFiles.length} 个文件`);
console.log('\n⚠️  请人工审核转换结果，特别是：');
console.log('  1. 包含嵌套引号的字符串是否正确');
console.log('  2. 行尾注释是否拆分正确');
console.log('  3. 确保原文含义未丢失');
