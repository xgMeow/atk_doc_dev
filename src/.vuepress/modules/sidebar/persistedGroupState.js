// 离线包（file://）每次站内跳转都会整页重载，组件里的展开状态随文档一起丢掉，
// 所以把用户手动展开/折叠的分组记进 localStorage，下次打开任意页面时恢复。
//
// 只记「手动操作」（点箭头、全部展开、全部折叠）：因当前路由自动展开的分组不写入，
// 否则用久了整棵树都会被记住、越开越长。
//
// 在线版是 SPA，状态本来就在内存里，这里所有函数直接返回，行为与改动前完全一致。
//
// 分组的身份用「resolve 后的 prefix + 标题」：prefix 是绝对路径（含 /zh/、/en/ 与层级），
// 目录改名或挪位置后旧键自然失效；恢复时以当前树为准，不会把没见过的键套到别的分组上。

const STORAGE_KEY = "atk:sidebar-open:v1";

// 正常使用达不到这个量级；留个上限只为防止反复改目录后旧键无限累积
const MAX_KEYS = 400;

const isFileProtocol = () =>
    typeof window !== "undefined" && window.location.protocol === "file:";

// 是否处于需要记忆展开状态的离线环境（在线、SSR 都返回 false）
export const isOfflineSidebar = isFileProtocol;

/**
 * 分组在「离线版记忆」里的身份：resolve 后的 prefix（绝对路径，含语言与层级）+ 标题。
 * 同级两个分组都没配 prefix 时会继承同一个父级 prefix，加上标题才能区分。
 *
 * 这个格式同时写进 SSR 的 data-atk-group 属性里，供离线 HTML 的内联脚本在首帧前先恢复展开，
 * 所以 format 改动要同步 src/.vuepress/standalone-html.cjs 里的注释说明。
 */
export const sidebarGroupKey = (item) =>
    `${(item && (item.prefix || item.link)) || ""}|${(item && item.text) || ""}`;

let openKeys = null;
let saveScheduled = false;

// 存储不可用（隐私模式、配额）、内容损坏时一律按「没有记忆」处理，不影响页面本身
const loadOpenKeys = () => {
    if (openKeys) {
        return openKeys;
    }
    openKeys = new Set();
    if (typeof window === "undefined") {
        return openKeys;
    }
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) {
            return openKeys;
        }
        const data = JSON.parse(raw);
        const list = Array.isArray(data) ? data : data && data.keys;
        if (Array.isArray(list)) {
            list.forEach((key) => {
                if (typeof key === "string" && key) {
                    openKeys.add(key);
                }
            });
        }
    } catch (error) {
        // 读不出来就当没存过，下次写盘会覆盖掉坏数据
    }
    return openKeys;
};

const writeOpenKeys = () => {
    if (typeof window === "undefined") {
        return;
    }
    // Set 的遍历顺序就是写入顺序，超限时丢最早的那些
    while (openKeys.size > MAX_KEYS) {
        openKeys.delete(openKeys.values().next().value);
    }
    try {
        window.localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({ version: 1, keys: Array.from(openKeys) }),
        );
    } catch (error) {
        // 写不进去只是失去记忆能力，不打断交互
    }
};

// 「全部展开/全部折叠」会让每个层级的 SidebarLinks 实例都改一次状态，
// 合并到同一次微任务里写盘，避免一次点击触发上百次 localStorage 写入。
const scheduleSave = () => {
    if (saveScheduled) {
        return;
    }
    saveScheduled = true;
    Promise.resolve().then(() => {
        saveScheduled = false;
        writeOpenKeys();
    });
};

/**
 * 该分组上次是否被手动展开
 *
 * @param key 分组键（prefix + 标题）
 */
export const isGroupOpenSaved = (key) => {
    if (!isFileProtocol() || !key) {
        return false;
    }
    return loadOpenKeys().has(key);
};

/**
 * 记录单个分组的展开状态（用户点击时调用）
 *
 * @param key 分组键
 * @param open 是否展开
 */
export const saveGroupOpen = (key, open) => {
    if (!isFileProtocol() || !key) {
        return;
    }
    const keys = loadOpenKeys();
    if (open) {
        if (keys.has(key)) {
            return;
        }
        keys.add(key);
    } else if (!keys.delete(key)) {
        return;
    }
    scheduleSave();
};

/**
 * 批量记录分组的展开状态（全部展开/折叠时调用）
 *
 * @param entries 形如 [[key, open], ...]
 */
export const saveGroupOpenBatch = (entries) => {
    if (!isFileProtocol() || !entries.length) {
        return;
    }
    const keys = loadOpenKeys();
    let changed = false;
    entries.forEach(([key, open]) => {
        if (!key) {
            return;
        }
        if (open) {
            if (!keys.has(key)) {
                keys.add(key);
                changed = true;
            }
        } else if (keys.delete(key)) {
            changed = true;
        }
    });
    if (changed) {
        scheduleSave();
    }
};
