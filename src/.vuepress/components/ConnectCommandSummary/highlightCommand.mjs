/**
 * ATK Connect 命令语法高亮
 * 产出 HTML 与 PrismJS atk-command 语言定义一致，共用 .token.* CSS。
 *
 * Token 类型（按匹配优先级排列）：
 *   command   — 首词（命令名）
 *   string    — "字符串字面量"
 *   group     — (参数组合)
 *   optional  — [可选参数/片段]
 *   option    — {枚举选项}
 *   required  — <必填参数>
 *   repeat    — ... 可重复标记
 *   separator — | 选项分隔符
 */

const TOKEN_RULES = [
  // 1. 字符串 — 内容中可能含 < > { } 等，必须最先匹配
  { type: 'string',    re: /"[^"]*"/y },
  // 2. 参数组合 (...)
  { type: 'group',     re: /\([^)]+\)/y },
  // 3. 可选整体 [...]（内部不再拆 token，语义优先）
  { type: 'optional',  re: /\[[^\]]+\]/y },
  // 4. 枚举选项 {...}（支持一层嵌套）
  { type: 'option',    re: /\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}/y },
  // 5. 必填参数 <...>
  { type: 'required',  re: /<[^<>]+>/y },
  // 6. 可重复标记（... 或 Unicode 省略号 …）
  { type: 'repeat',    re: /\.{3}|…/y },
  // 7. 选项分隔符
  { type: 'separator', re: /\|/y },
];

// HTML 转义映射
const ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };
const esc = (s) => s.replace(/[&<>"]/g, c => ESC[c] || c);

/**
 * 对命令用法字符串做语法高亮，返回 HTML
 */
export function highlightUsage(text) {
  if (!text) return '';

  const parts = [];
  let pos = 0;

  // 首词 — command
  const cmdMatch = text.match(/^\S+/);
  if (cmdMatch) {
    parts.push(`<span class="token command">${esc(cmdMatch[0])}</span>`);
    pos = cmdMatch[0].length;
  }

  // 剩余部分按规则 tokenize
  const remaining = text.slice(pos);
  let i = 0;
  while (i < remaining.length) {
    let matched = false;
    for (const rule of TOKEN_RULES) {
      rule.re.lastIndex = i;
      const m = rule.re.exec(remaining);
      if (m) {
        parts.push(`<span class="token ${rule.type}">${esc(m[0])}</span>`);
        i += m[0].length;
        matched = true;
        break;
      }
    }
    if (!matched) {
      // 普通字符，累积直到下一个可能 token 的起始位置
      const nextTokenPos = findNextTokenStart(remaining, i);
      parts.push(esc(remaining.slice(i, nextTokenPos)));
      i = nextTokenPos;
    }
  }

  return parts.join('');
}

function findNextTokenStart(text, from) {
  const markers = ['"', '(', '[', '{', '<', '.', '|'];
  let min = text.length;
  for (const m of markers) {
    const idx = text.indexOf(m, from);
    if (idx !== -1 && idx < min) min = idx;
  }
  return min > from ? min : from + 1;
}
