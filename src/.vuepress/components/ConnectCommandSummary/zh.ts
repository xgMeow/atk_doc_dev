import type { CommandSummaryLocaleStrings } from './types';

export const zhCommandSummaryStrings: CommandSummaryLocaleStrings = {
  title: { script: '函数速查表', connect: '命令速查表' },
  itemLabel: { script: '函数', connect: '命令' },
  searchPlaceholder: { script: '搜索函数、作用、语法...', connect: '搜索命令、作用、语法...' },
  empty: { script: '未找到匹配的脚本函数。', connect: '未找到匹配的 CONNECT 命令。' },
  countSuffix: '条',
  syntaxGuideIntro: '命令语法中的',
  syntaxGuideLead: '等符号均有特定含义，请先阅读',
  syntaxGuideLink: '命令语法约定',
  syntaxGuideEnd: '。',
  categoryIndexLabel: '分类',
  letterIndexLabel: '索引',
  effectHeader: '作用',
  syntaxHeader: '语法',
  clearSearch: '清除搜索',
  modeGrouped: '按目录分组',
  modeFlat: '按字母排列',
  jumpTo: (letter) => `跳转到 ${letter}`,
  copy: '复制命令',
  copied: '已复制',
};
