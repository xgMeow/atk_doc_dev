/**
 * ATK 多语言代码生成 — 语言定义与标记处理
 *
 * 支持四种语言：Python、C++、Java、MATLAB
 * 每种语言定义其：引号方式、注释方式、分号规范、代码块标签
 *
 * 模板标记语法：
 *   {S:text}  — 字符串字面量，按目标语言自动选择引号
 *   {C:text}  — 注释，按目标语言自动选择注释符
 */

const LANGS = {
  python: {
    name: 'Python',
    tag: 'python',
    /** 用单引号包裹，内部单引号需转义为 \' */
    quote: (s) => `'${s.replace(/'/g, "\\'")}'`,
    comment: (s) => `# ${s}`,
    semicolon: '',
  },
  cpp: {
    name: 'C++',
    tag: 'cpp',
    /** 用双引号包裹，先转义反斜杠再转义双引号。用回调避免 replace() 替换字符串中 \\ 被二次解析 */
    quote: (s) => `"${s.replace(/\\/g, () => '\\\\').replace(/"/g, () => '\\"')}"`,
    comment: (s) => `// ${s}`,
    semicolon: ';',
  },
  java: {
    name: 'Java',
    tag: 'java',
    quote: (s) => `"${s.replace(/\\/g, () => '\\\\').replace(/"/g, () => '\\"')}"`,
    comment: (s) => `// ${s}`,
    semicolon: ';',
  },
  matlab: {
    name: 'MATLAB',
    tag: 'matlab',
    /** MATLAB 中用两个连续单引号转义内部单引号：'it''s' */
    quote: (s) => `'${s.replace(/'/g, "''")}'`,
    comment: (s) => `% ${s}`,
    semicolon: ';',
  },
};

/** 所有支持的语言 key */
const ALL_LANGS = ['python', 'cpp', 'java', 'matlab'];

/**
 * 对一行内容进行标记替换（{S:...} → 引号, {C:...} → 注释）
 * @param {string} line - 原始行
 * @param {string} lang - 目标语言 key
 * @returns {string} 处理后的行
 */
function processLine(line, lang) {
  const rules = LANGS[lang];
  if (!rules) return line;

  // {S:内容} → 语言对应的引号字符串
  line = line.replace(/\{S:([^}]*)\}/g, (_, content) => rules.quote(content));
  // {C:内容} → 语言对应的注释
  line = line.replace(/\{C:([^}]*)\}/g, (_, content) => rules.comment(content));

  return line;
}

/**
 * 对整段代码内容进行标记替换与分号处理
 * @param {string} content - 原始代码内容
 * @param {string} lang - 目标语言 key
 * @returns {string} 处理后的代码
 */
function processContent(content, lang) {
  const rules = LANGS[lang];
  if (!rules) return content;

  const commentPrefix = rules.comment('').trim();

  return content.split(/\r?\n/).map((line) => {
    let processed = processLine(line, lang);
    const trimmed = processed.trim();

    // 空行直接返回
    if (!trimmed) return processed;

    // 分号处理
    if (!rules.semicolon) {
      // Python：去掉末尾分号
      processed = processed.replace(/;\s*$/, '');
    } else {
      // C++/Java/MATLAB：注释行和已有分号的行不加
      if (!trimmed.endsWith(';') && !trimmed.startsWith(commentPrefix)) {
        processed = processed + ';';
      }
    }

    return processed;
  }).join('\n').replace(/^\n+/, '').replace(/\n+$/, '');
}

/**
 * 生成 ::: code-tabs 块（包含所有语言 Tab）
 * @param {string} content - atk 代码块内容
 * @param {string[]} [langs] - 要生成的语言列表，默认全部
 * @returns {string} 展开后的 code-tabs markdown
 */
function expandToCodeTabs(content, langs = ALL_LANGS) {
  const tabs = langs.map((lang) => {
    const rules = LANGS[lang];
    const processed = processContent(content, lang);
    return `@tab ${rules.name}\n\`\`\`${rules.tag}\n${processed}\n\`\`\``;
  });

  return `::: code-tabs\n${tabs.join('\n\n')}\n:::\n`;
}

module.exports = {
  LANGS,
  ALL_LANGS,
  processContent,
  expandToCodeTabs,
};
