// 离线包（file://）整页重载后，侧边栏自己的滚动位置也会一起丢掉。
// 这里把「每套侧边栏树（按顶层条目算签名）上次滚到哪」记进 localStorage，
// 页面挂载时先滚回去；是否真的滚回由调用方决定
// （当前页激活项不在保存位置的可视范围内时，仍按原逻辑把激活项滚进来）。
//
// 只对 file:// 生效：在线版是 SPA，侧边栏容器不重建，滚动位置本来就在。

const STORAGE_KEY = "atk:sidebar-scroll:v1";

// 侧边栏树的数量有限（每个语言、每种目录配置一套），留个上限只为防止签名变化后无限累积
const MAX_ENTRIES = 40;

// 滚动过程中合并写盘：停下来 150ms 才落盘一次
const SAVE_DELAY = 150;

const isFileProtocol = () =>
    typeof window !== "undefined" && window.location.protocol === "file:";

// 是否处于需要记忆滚动位置的离线环境（在线、SSR 都返回 false）
export const isOfflineSidebarScroll = isFileProtocol;

let positions = null;
let pending = null;
let timer = 0;

// 签名里带完整目录路径，可能上千字符；存哈希让 localStorage 里的键保持简短
const hashSignature = (signature) => {
    let hash = 0x811c9dc5;
    for (let i = 0; i < signature.length; i++) {
        hash ^= signature.charCodeAt(i);
        hash = Math.imul(hash, 0x01000193);
    }
    return (hash >>> 0).toString(36);
};

const loadPositions = () => {
    if (positions) {
        return positions;
    }
    positions = {};
    if (typeof window === "undefined") {
        return positions;
    }
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) {
            return positions;
        }
        const data = JSON.parse(raw);
        const saved = data && data.positions;
        if (!saved || typeof saved !== "object") {
            return positions;
        }
        Object.keys(saved).forEach((key) => {
            const top = saved[key];
            if (typeof top === "number" && isFinite(top) && top >= 0) {
                positions[key] = Math.round(top);
            }
        });
    } catch (error) {
        // 读不出来或内容损坏时按「没有记录」处理
    }
    return positions;
};

const writePositions = () => {
    if (typeof window === "undefined") {
        return;
    }
    const keys = Object.keys(positions);
    while (keys.length > MAX_ENTRIES) {
        delete positions[keys.shift()];
    }
    try {
        window.localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({ version: 1, positions }),
        );
    } catch (error) {
        // 写不进去只是失去记忆能力，不打断交互
    }
};

const writeNow = () => {
    if (!pending) {
        return;
    }
    const { key, top } = pending;
    pending = null;
    if (!isFileProtocol()) {
        return;
    }
    const saved = loadPositions();
    if (saved[key] === top) {
        return;
    }
    saved[key] = top;
    writePositions();
};

/**
 * 某套侧边栏在滚动记录里的键
 *
 * 这个键会写进 SSR 的 data-atk-scroll-key 属性，离线 HTML 的内联脚本直接用它取位置，
 * 所以不要在别处另行计算。
 *
 * @param signature 侧边栏签名（语言 + 顶层条目）
 */
export const sidebarScrollKey = (signature) => (signature ? hashSignature(signature) : "");

/**
 * 读取某套侧边栏上次的滚动位置
 *
 * @param signature 侧边栏签名（语言 + 顶层条目）
 * @returns 滚动位置；没有记录时返回 null
 */
export const readSidebarScroll = (signature) => {
    if (!isFileProtocol() || !signature) {
        return null;
    }
    const saved = loadPositions();
    const key = sidebarScrollKey(signature);
    return Object.prototype.hasOwnProperty.call(saved, key) ? saved[key] : null;
};

/**
 * 记录滚动位置（滚动过程中调用，内部延迟落盘）
 *
 * @param signature 侧边栏签名
 * @param top 当前 scrollTop
 */
export const writeSidebarScroll = (signature, top) => {
    if (!isFileProtocol() || !signature) {
        return;
    }
    pending = {
        key: sidebarScrollKey(signature),
        top: Math.max(0, Math.round(top || 0)),
    };
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(() => {
        timer = 0;
        writeNow();
    }, SAVE_DELAY);
};

// 页面要卸载（离线跳转前会触发 pagehide）时立刻落盘，避免最后一段滚动没来得及记
export const flushSidebarScroll = () => {
    if (timer) {
        clearTimeout(timer);
        timer = 0;
    }
    writeNow();
};
