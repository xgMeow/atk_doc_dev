export interface OverViewItem {
  /** 展示名称 */
  name: string;
  /** 链接路径（含语言前缀 /zh/、/en/，无链接时为 null） */
  link: string | null;
  /**
   * 组件站内的相对路径（与 link 二选一）。
   * 填写后该条目跳到 atk-component 文档站，在线离线地址由构建类型决定。
   */
  doc?: string;
}

export interface OverViewModule {
  /** 模块标题，允许自然换行 */
  title: string;
  /** 内容行，每行两个条目 */
  rows: OverViewItem[][];
}
