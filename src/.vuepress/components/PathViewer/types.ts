export interface PathViewerText {
  /** 展开文件列表（aria-label） */
  expand: string;
  /** 折叠文件列表（aria-label） */
  collapse: string;
  /** 标题：文件列表 */
  fileList: string;
  /** 配置说明 */
  configHint: string;
  /** 配置按钮 */
  configBtn: string;
  /** 根路径标签 */
  rootPathLabel: string;
  /** 未配置提示 */
  noRootTip: string;
  /** 检测到可能的软件路径提示 */
  detectedPath: (path: string) => string;
  /** 快速配置按钮 */
  quickConfig: string;
  /** 空列表提示 */
  emptyList: string;
  /** 复制按钮 */
  copy: string;
  /** 复制按钮 title */
  copyTitle: (path: string) => string;
  /** 图标 alt 文本 */
  iconAlt: (ext: string) => string;
  /** 弹窗标题 */
  modalTitle: string;
  /** 弹窗描述 */
  modalDesc: string;
  /** 输入框占位符 */
  placeholder: string;
  /** 自动获取按钮 title */
  autoFetchTitle: string;
  /** 自动获取按钮 */
  autoFetch: string;
  /** 使用示例提示（含 HTML） */
  exampleHint: string;
  /** 清除配置按钮 */
  clearConfig: string;
  /** 保存按钮 */
  save: string;
  /** 取消按钮 */
  cancel: string;
  /** 根路径已设置提示 */
  rootSet: (path: string) => string;
  /** 已清除配置提示 */
  rootCleared: string;
  /** 检测到软件根路径提示 */
  detectedRoot: (path: string) => string;
  /** 非本地环境提示 */
  notLocalEnv: string;
  /** 已自动获取提示 */
  autoFetched: (path: string) => string;
  /** 自动获取失败提示 */
  autoFetchFail: string;
  /** 复制成功提示 */
  copySuccess: (text: string) => string;
  /** 复制失败提示 */
  copyFail: string;
  /** 提取根路径失败（console） */
  extractRootFail: string;
  /** 保存本地配置失败（console） */
  saveConfigFail: string;
  /** 读取本地配置失败（console） */
  readConfigFail: string;
  /** Clipboard 复制失败（console） */
  clipboardFail: string;
  /** 无效路径项（console） */
  invalidItem: string;
}
