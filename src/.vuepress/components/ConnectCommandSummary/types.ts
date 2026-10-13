export interface CommandSummaryLocaleStrings {
  /** 主标题（脚本模式=函数速查表 / 命令模式=命令速查表） */
  title: { script: string; connect: string };
  /** 条目列标签（函数 / 命令） */
  itemLabel: { script: string; connect: string };
  /** 搜索框占位符 */
  searchPlaceholder: { script: string; connect: string };
  /** 空态提示 */
  empty: { script: string; connect: string };
  /** 总数后缀，如 `5 条` / `5 entries` */
  countSuffix: string;
  /** 语法提示：符号列表前的引导语 */
  syntaxGuideIntro: string;
  /** 语法提示：符号列表后、链接前的衔接语 */
  syntaxGuideLead: string;
  /** 语法提示：链接文本（命令语法约定） */
  syntaxGuideLink: string;
  /** 语法提示：句尾标点 */
  syntaxGuideEnd: string;
  /** 分组模式索引栏标签 */
  categoryIndexLabel: string;
  /** 平铺模式索引栏标签 */
  letterIndexLabel: string;
  /** 表格表头：作用 */
  effectHeader: string;
  /** 表格表头：语法 */
  syntaxHeader: string;
  /** 清除搜索 */
  clearSearch: string;
  /** 按目录分组 */
  modeGrouped: string;
  /** 按字母排列 */
  modeFlat: string;
  /** 索引按钮跳转提示 */
  jumpTo: (letter: string) => string;
  /** 复制按钮 */
  copy: string;
  /** 已复制 */
  copied: string;
}
