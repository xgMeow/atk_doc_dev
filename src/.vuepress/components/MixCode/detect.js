/**
 * 轻量源码语言识别 —— 只作为 <mix-code> 的兜底：当作者没写 lang，或写的 lang
 * 不在 convert.js 支持的 4 种语言里时，用它猜一下源码到底是什么语言。
 *
 * 有意做得小：不引入第三方依赖，只识别 convert.js 能转换的 4 种语言
 * （python / cpp / java / matlab）。识别不出返回 null，由组件退化为
 * 单一「原文」块展示，而不是给出贴错标签的假转换 tab。
 *
 * 策略：逐行统计「强特征词 + 注释风格 + 分号/花括号」，得出每种语言的分值，
 * 取最高者；若最高分的语言没有任何“独有特征”（如 C 风格注释 `//`、`;`、`{}`
 * 是 cpp/java 共有的，不构成区分），判定为歧义/未知 → 返回 null。
 */

// 各语言“决定性”特征：{ re: 正则(作用于单行), w: 权重 }
// 命中即强烈指向该语言。同一行同一规则最多计一次。
const RULES = {
  python: [
    { re: /\bdef\s+[A-Za-z_]\w*\s*\(/, w: 4 },
    { re: /\b(?:print|input)\s*\(/, w: 3 },
    { re: /\b(?:import|from)\s+[A-Za-z_]/, w: 3 },
    { re: /\b(?:elif|lambda|yield)\b/, w: 4 },
    { re: /\b(?:True|False|None)\b/, w: 2 },
    { re: /\bnot\s+in\b|\bis\s+(?:not\s+)?/, w: 1 },
    { re: /:\s*$/, w: 1 }, // 缩进块的冒号（python 风格）
  ],
  cpp: [
    { re: /#\s*include\b/, w: 6 },
    { re: /#\s*(?:define|pragma|ifn?def|endif)\b/, w: 5 },
    { re: /\bstd::/, w: 5 },
    { re: /\busing namespace\b/, w: 5 },
    { re: /\bint\s+main\s*\(/, w: 5 },
    { re: /\bprintf\s*\(/, w: 3 },
    { re: /\b(?:cout|cin|cerr)\b/, w: 4 },
    { re: /->/, w: 2 },
  ],
  java: [
    { re: /\bpublic\s+static\s+void\s+main\b/, w: 6 },
    { re: /System\.out\b/, w: 6 },
    { re: /\bimport\s+(?:java|javax|org|com)\b/, w: 5 },
    { re: /\bpublic\s+(?:class|interface)\b/, w: 4 },
    { re: /\bString\[\]\s+\w+/, w: 4 },
    { re: /@Override\b/, w: 5 },
    { re: /\.equals\s*\(/, w: 4 },
    { re: /throw\s+new\s+\w+Exception/, w: 4 },
  ],
  matlab: [
    { re: /^\s*function\b/, w: 5 },
    { re: /\b(?:zeros|ones|eye|rand|linspace)\s*\(/, w: 3 },
    { re: /\.\*|\.\/|\.\^/, w: 4 },
    { re: /\bdisp\s*\(/, w: 2 },
    { re: /\bfprintf\s*\(/, w: 3 },
    { re: /\b(?:clc|clear|close\s+all)\b/, w: 2 },
    { re: /\bend\s*$/, w: 1 }, // 结构结束符 end
  ],
};

// C 预处理器行：行首 `#xxx`，是 C/C++ 宏，不能当成 python 的 `#` 注释
const PREPROC = /^#\s*(?:include|define|if|ifdef|ifndef|elif|else|endif|pragma|undef|error|warning|line)\b/;

/**
 * 识别 code 的语言。
 * @param {string} code
 * @returns {('python'|'cpp'|'java'|'matlab'|null)}
 */
export function detectLanguage(code) {
  if (code == null) return null;
  const lines = code.replace(/\r\n/g, '\n').split('\n');

  // —— 统计每行：注释风格、行尾分号、花括号、规则命中 ——
  let pyComments = 0;
  let mlComments = 0;
  let slashComments = 0; // // 或 /*，cpp/java 共有
  let semiLines = 0;
  let braceLines = 0;

  const hits = { python: 0, cpp: 0, java: 0, matlab: 0 };
  const byLang = {
    python: RULES.python,
    cpp: RULES.cpp,
    java: RULES.java,
    matlab: RULES.matlab,
  };

  for (const line of lines) {
    const t = line.trim();
    if (!t) continue;

    // 注释风格
    if (t.startsWith('#')) {
      pyComments += PREPROC.test(t) ? 0 : 1;
    } else if (t.startsWith('%')) {
      mlComments += 1;
    } else if (t.startsWith('//') || t.startsWith('/*') || t.startsWith('*')) {
      slashComments += 1;
    }

    // 行尾分号 / 花括号（粗粒度，够用于区分 python 与 C 系）
    if (/;\s*$/.test(line)) semiLines += 1;
    if (/[{}]/.test(line)) braceLines += 1;

    for (const lang of Object.keys(byLang)) {
      for (const rule of byLang[lang]) {
        if (rule.re.test(line)) {
          hits[lang] += rule.w;
          break; // 每行每语言一条规则即可
        }
      }
    }
  }

  // —— 汇总分值与“独有特征”分值 ——
  const S = {
    python: hits.python + pyComments * 2,
    matlab: hits.matlab + mlComments * 2 + semiLines * 0.5,
    cpp: hits.cpp + slashComments * 2 + semiLines * 0.5 + braceLines * 0.5,
    java: hits.java + slashComments * 2 + semiLines * 0.5 + braceLines * 0.5,
  };
  // “独有特征”：排除共有特征（//、;、{}）后，真正指向某一语言的证据
  const D = {
    python: hits.python + pyComments,
    matlab: hits.matlab + mlComments,
    cpp: hits.cpp,
    java: hits.java,
  };

  const best = Object.keys(S).sort((a, b) => S[b] - S[a])[0];
  if (S[best] < 2) return null; // 几乎没有信号
  if (D[best] <= 0) return null; // 赢家只靠共有特征（歧义），视为未知
  return best;
}

// 定义/块头等「成段结构」的判定正则（均锚定行首，避免命中字符串里偶然出现的词，
// 如 ATK 语句 `atkConnect(conID, 'Astrogator', '...class...')` 中间的 class）
const TYPE_HEAD_RE =
  /^\s*(?:(?:public|protected|private|static|final|abstract|sealed|non-sealed|open|internal)\s+)*(?:class|interface|enum|record|struct)\b/;
const DEF_HEAD_RE = /^\s*(?:async\s+)?def\s+\w+\s*\(/; // python 函数
const FUNC_HEAD_RE = /^\s*function\b/; // matlab 函数
const END_LINE_RE = /^\s*end\s*$/; // matlab 块结束符
const PREPROC_LINE_RE =
  /^\s*#\s*(?:include|define|pragma|ifn?def|endif|undef|error|warning|line)\b/; // C/C++ 预处理

/**
 * 该源码是否为「完整程序 / 定义结构」，而非可跨语言转换的语句序列。
 *
 * mix-code 只对「作者用某种语言写的一串独立语句」（典型：ATK Connect 调用）做跨语言
 * 语法壳转换（换引号/注释/分号）。一旦代码里出现成块结构（类/函数/控制块体、
 * 预处理指令、matlab 的 function...end），其它语言根本不可能靠"换外壳"得到合法代码，
 * 此时组件应只展示源码 tab，避免给出贴错语言的假转换。
 *
 * 判据（命中任一即视为程序）：
 *   - 某行以 `{` 结尾（块/类/函数体开始）或以 `}` 开头（块收尾）；
 *     单行初始化列表 `m = {"a": 1}` 的大括号在行中间，不会命中。
 *   - 行首的类型/定义头：class/interface/struct/enum/record（java/cpp/python）、
 *     python 的 `def name(`、matlab 的 `function ...`。
 *   - matlab 单独成行的 `end`（块结束符）。
 *   - C/C++ 预处理指令行。
 *
 * @param {string} code
 * @returns {boolean}
 */
export function looksLikeProgram(code) {
  if (code == null || !code.trim()) return false;
  const lines = code.replace(/\r\n/g, '\n').split('\n');
  for (const raw of lines) {
    const t = raw.trim();
    if (!t) continue;
    if (/[{]$/.test(t) || /^}/.test(t)) return true;
    if (TYPE_HEAD_RE.test(t)) return true;
    if (DEF_HEAD_RE.test(t)) return true;
    if (FUNC_HEAD_RE.test(t)) return true;
    if (END_LINE_RE.test(t)) return true;
    if (PREPROC_LINE_RE.test(t)) return true;
  }
  return false;
}
