export interface OverViewItem {
  /** 展示名称 */
  name: string;
  /** 链接路径（含语言前缀 /zh/、/en/，无链接时为 null） */
  link: string | null;
}

export interface OverViewModule {
  /** 模块标题，允许自然换行 */
  title: string;
  /** 内容行，每行两个条目 */
  rows: OverViewItem[][];
}
