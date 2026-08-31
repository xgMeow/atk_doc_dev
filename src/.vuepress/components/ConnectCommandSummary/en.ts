import type { CommandSummaryLocaleStrings } from './types';

export const enCommandSummaryStrings: CommandSummaryLocaleStrings = {
  title: { script: 'Function Reference', connect: 'Command Reference' },
  itemLabel: { script: 'Function', connect: 'Command' },
  searchPlaceholder: { script: 'Search functions, descriptions, syntax...', connect: 'Search commands, descriptions, syntax...' },
  empty: { script: 'No matching script functions found.', connect: 'No matching CONNECT commands found.' },
  countSuffix: 'entries',
  syntaxGuideIntro: 'In command syntax,',
  syntaxGuideLead: 'and the like all have specific meanings. Please first read the',
  syntaxGuideLink: 'Command Syntax Conventions',
  syntaxGuideEnd: '.',
  categoryIndexLabel: 'Category',
  letterIndexLabel: 'Index',
  effectHeader: 'Description',
  syntaxHeader: 'Syntax',
  clearSearch: 'Clear search',
  modeGrouped: 'Group by directory',
  modeFlat: 'Sort alphabetically',
  jumpTo: (letter) => `Jump to ${letter}`,
  copy: 'Copy command',
  copied: 'Copied',
};
