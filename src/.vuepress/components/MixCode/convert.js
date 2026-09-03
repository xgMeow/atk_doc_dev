/**
 * MixCode — 跨语言代码转换
 *
 * 作者只用一种语言（默认 Python）写代码，本模块把它"翻译"成其它目标语言。
 * 不再使用 {S:}/{C:} 标记写法，作者直接写源码，这里按「语法壳」转换：
 *
 * 只改动各语言真正不同的部分，字符串/注释/普通代码的内容尽量原样保留：
 *   Python      'str'      # 注释   无分号
 *   C++ / Java  "str"      // 注释  分号
 *   MATLAB      'str'('')  % 注释   分号
 *
 * 关键约定：
 *   1. 源语言 == 目标语言时直接原样返回（源码 tab 必须展示作者原文，不能被"洗"一遍）；
 *   2. 解析字符串时保留反斜杠原样（`\X` 存两个字符），不再把 `\` 解码掉——
 *      否则 Windows 路径 / \n \t / 正则里的反斜杠会被静默吞掉；
 *   3. 跨语言时只换引号、注释符、行尾分号，字符串内部文本原样，仅对目标语言的
 *      引号做必要的转义（如内部裸 `"` 在 C++ 里要写成 `\"`）。
 *      这是"尽力而为"：无法把源语义精确翻译到不同转义体系的目标语言。
 */

const LANGS = {
  python: {
    name: 'Python',
    tag: 'python',
    comment: '#',             // 注释符
    strDelims: ["'", '"'],    // 字符串定界符
    escape: '\\',             // 反斜杠转义（解析时保留原样）
    matlabDoubleQuote: false, // 是否用 '' 双写表示引号（MATLAB）
    quote: "'",               // 渲染时使用的引号
    semicolon: false,         // 行尾是否需要分号
  },
  cpp: {
    name: 'C++',
    tag: 'cpp',
    comment: '//',
    strDelims: ['"'],
    escape: '\\',
    matlabDoubleQuote: false,
    quote: '"',
    semicolon: true,
  },
  java: {
    name: 'Java',
    tag: 'java',
    comment: '//',
    strDelims: ['"'],
    escape: '\\',
    matlabDoubleQuote: false,
    quote: '"',
    semicolon: true,
  },
  matlab: {
    name: 'MATLAB',
    tag: 'matlab',
    comment: '%',
    strDelims: ["'"],
    escape: null,             // matlab 不用反斜杠转义，用 '' 双写
    matlabDoubleQuote: true,
    quote: "'",
    semicolon: true,
  },
};

const ALL = ['python', 'cpp', 'java', 'matlab'];

/**
 * 解析一行源码为 token 列表。
 *
 * 字符串 token.text 存的是定界符之间的「原文」：
 * - 反斜杠转义语言：`\X` 原样存两个字符（不丢反斜杠），以便原样再渲染；
 * - matlab：把转义的 `''` 折叠成单个 `'` 存内文（matlab 用双写表示内部引号）。
 *
 * @param {string} line 单行源码
 * @param {object} cfg LANGS[src]
 * @returns {Array<{kind:'code'|'string'|'comment', text:string}>}
 */
function parseLine(line, cfg) {
  const tokens = [];
  let buf = '';
  let i = 0;
  const n = line.length;
  const flush = () => {
    if (buf) {
      tokens.push({ kind: 'code', text: buf });
      buf = '';
    }
  };

  while (i < n) {
    const ch = line[i];

    // 注释：注释符出现在字符串外，直达行尾
    if (line.startsWith(cfg.comment, i)) {
      flush();
      // 存注释符之后的原文（含作者原有的前导空格），渲染时不再重新排版
      tokens.push({ kind: 'comment', text: line.slice(i + cfg.comment.length) });
      return tokens;
    }

    // 字符串
    if (cfg.strDelims.includes(ch)) {
      flush();
      const d = ch;
      let j = i + 1;
      let inner = '';
      while (j < n) {
        const c = line[j];
        if (c === d) {
          // matlab：'' 表示转义的单引号（折叠为一个 ' 存入内文）
          if (cfg.matlabDoubleQuote && line[j + 1] === d) {
            inner += d;
            j += 2;
            continue;
          }
          break; // 字符串结束
        }
        if (cfg.escape && c === cfg.escape && j + 1 < n) {
          // 保留反斜杠及下一字符原样，跳过这对字符
          inner += c;
          inner += line[j + 1];
          j += 2;
          continue;
        }
        inner += c;
        j += 1;
      }
      tokens.push({ kind: 'string', text: inner });
      i = j + 1;
      continue;
    }

    buf += ch;
    i += 1;
  }
  flush();
  return tokens;
}

/**
 * 把字符串原文包进目标语言的引号。
 *
 * 反斜杠转义语言（python/cpp/java）：只转义「尚未被转义」的目标引号，
 * 其余字符（含反斜杠）原样保留。
 * matlab：内部 `'` 一律双写成 `''`，反斜杠无特殊含义、原样保留。
 */
function quoteString(inner, dstCfg) {
  const q = dstCfg.quote;
  if (dstCfg.matlabDoubleQuote) {
    return q + inner.replace(/'/g, "''") + q;
  }
  let out = q;
  for (let i = 0; i < inner.length; i++) {
    const c = inner[i];
    if (c === q) {
      // 统计左侧连续反斜杠个数：奇数表示该引号在源码里已是被转义的引号，无需再转义
      let bs = 0;
      for (let k = i - 1; k >= 0 && inner[k] === '\\'; k--) bs++;
      out += bs % 2 === 1 ? q : '\\' + q;
    } else {
      out += c;
    }
  }
  return out + q;
}

/**
 * 该行代码段是否以「语法结构符」/「指令」结尾，而非一条完整语句。
 *
 * 分号语言里只有「语句」需要行尾 `;`，而这类行不需要，补了反而是语法错误
 * （曾把完整 Java/C++ 程序转 C++ 时补成 `public class Demo {;` / `};`）：
 *   - `#include` / `#define` 等预处理指令：不是语句，不补 `;`
 *   - `{`            块/类/函数体开始：`public class Demo {`、`if (x) {`
 *   - `:`            case/标签/访问说明符：`case 1:`、`public:`
 *   - 单独成行的 `}` 块收尾：`}`（`= { ... }` 初始化列表是语句、仍需 `;`，不在此列）
 */
function isStructuralEnd(code) {
  const body = code.trim();
  if (body.startsWith('#')) return true; // 预处理指令行
  const last = body[body.length - 1];
  if (last === '{' || last === ':') return true;
  if (last === '}') {
    // `}` 之前没有其它非空字符 → 是纯收尾的块结束符；否则是单行初始化列表(语句)
    return !/\S/.test(body.slice(0, -1));
  }
  return false;
}

/**
 * 把一行的 token 列表渲染为目标语言的一行
 */
function renderLine(tokens, dstCfg) {
  let code = '';
  let commentText = null; // 注释体（若有），存原文

  for (const t of tokens) {
    if (t.kind === 'string') code += quoteString(t.text, dstCfg);
    else if (t.kind === 'comment') commentText = t.text;
    else code += t.text;
  }

  code = code.trimEnd();
  const hasCode = code.length > 0;

  if (dstCfg.semicolon) {
    // 需要分号的语言：只给「完整语句行」补分号（纯注释行、块定界符/标签行不加）
    if (hasCode && !code.endsWith(';') && !isStructuralEnd(code)) code += ';';
  } else if (hasCode && code.endsWith(';')) {
    // python：去掉语句末尾的分号
    code = code.slice(0, -1);
  }
  code = code.trimEnd();

  if (commentText === null) return code;

  const marker = dstCfg.comment;
  if (!code) return marker + commentText; // 纯注释行
  return `${code} ${marker}${commentText}`;
}

/**
 * 把 src 语言的代码转换为 dst 语言
 * @param {string} code 源码
 * @param {string} src 源码语言 key
 * @param {string} dst 目标语言 key
 */
export function convert(code, src, dst) {
  if (code == null) return code;
  // 同语言 / 不认识的 key：原样返回，保证"源码 tab"永远展示作者原文
  if (src === dst || !LANGS[src] || !LANGS[dst]) return code;
  const srcCfg = LANGS[src];
  const dstCfg = LANGS[dst];
  return code
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map((line) => renderLine(parseLine(line, srcCfg), dstCfg))
    .join('\n');
}

export { LANGS, ALL };
