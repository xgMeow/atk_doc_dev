import { defineClientConfig } from 'vuepress/client'
import { useRoute, useRouter } from 'vue-router'
import { resolveRoute as _resolveRoute, resolveRoutePath as _resolveRoutePath } from 'vuepress/client';
import { useRoutes } from 'vuepress/client';
import { defineCatalogInfoGetter } from '@vuepress/plugin-catalog/client'
import EnhancedToc from './components/EnhancedToc.vue'
import NotFound from './components/NotFound.vue'
import Catalog from './components/Catalog/Catalog.vue'
import CatalogCard from './components/CatalogCard/CatalogCard.vue'
import ConnectCommandSummary from './components/ConnectCommandSummary/ConnectCommandSummary.vue'
import MixCode from './components/MixCode/MixCode.vue'
import ColorSwatch from './components/ColorSwatch.vue'
import Entry from './components/Entry/Entry.vue'
import HtmlDemo from './components/HtmlDemo/HtmlDemo.vue'
import './styles/atk-command-tokens.scss'

// 定义目录信息获取器，传入文档元数据，返回目录信息对象
defineCatalogInfoGetter((meta) => {
    if (!meta.title) return null;
    return {
        title: meta.title,
        description: meta.description,
        thumbnail: meta.thumbnail,
        order: meta.order,
        icon: meta.icon,
    };
});

var is_file_protocol = false;   // 是否是离线模型
var root_dir = "";              // 用于在离线模式下缓存当前文档所在的文件夹

// 站内跳转时主线程会被新页面的渲染占满，先把加载遮罩画出来、让过这一帧再继续跳，
// 否则慢页面（公式、大表格）看起来就是“点了没反应”。转圈只用 transform 动画，
// 由合成层驱动，主线程阻塞期间仍会转。
const installRouteLoading = (router) => {
    let layer = null;
    let pending = null;
    let failTimer = 0;
    let token = 0;
    let first = true;

    const ensureLayer = () => {
        if (layer && layer.isConnected) return layer;
        layer = document.createElement("div");
        layer.className = "atk-route-loading";
        layer.setAttribute("aria-hidden", "true");
        const box = document.createElement("div");
        box.className = "atk-route-loading__box";
        const spinner = document.createElement("span");
        spinner.className = "atk-route-loading__spinner";
        const text = document.createElement("span");
        text.textContent = "正在加载…";
        box.appendChild(spinner);
        box.appendChild(text);
        layer.appendChild(box);
        document.body.appendChild(layer);
        return layer;
    };

    const hide = (current) => {
        if (current !== token || !layer) return;
        clearTimeout(failTimer);
        layer.classList.remove("is-active");
    };

    const show = () => {
        const current = ++token;
        ensureLayer().classList.add("is-active");
        clearTimeout(failTimer);
        failTimer = setTimeout(() => hide(current), 15000);
        return current;
    };

    // 等这一帧真正画出来：rAF 之后要再让出一个任务，否则渲染阻塞会把这一帧一起吞掉
    const afterPaint = () =>
        new Promise((resolve) => {
            let done = false;
            const finish = () => {
                if (done) return;
                done = true;
                resolve();
            };
            requestAnimationFrame(() => setTimeout(finish, 0));
            setTimeout(finish, 100);
        });

    // 路由确认只代表地址变了：页面组件是异步加载的，要等标题或内容容器换成新的才算真的切完
    const waitForSwap = (current, contentBefore, textBefore) => {
        const started = performance.now();
        const check = () => {
            if (current !== token) return;
            const content = document.querySelector(".theme-hope-content");
            const title = document.querySelector(".vp-page-title h1");
            const text = title ? title.textContent.trim() : "";
            const swapped = (content && content !== contentBefore) || (text && text !== textBefore);
            if (swapped || performance.now() - started > 12000) {
                // 双 rAF：等新页面这一帧真正画出来再收起
                requestAnimationFrame(() => requestAnimationFrame(() => hide(current)));
                return;
            }
            requestAnimationFrame(check);
        };
        requestAnimationFrame(check);
    };

    router.beforeEach(async (to, from) => {
        if (first) {
            first = false;
            return;
        }
        // 同页锚点不动页面，不提示
        if (to.path === from.path) return;
        const current = show();
        const contentBefore = document.querySelector(".theme-hope-content");
        const titleBefore = document.querySelector(".vp-page-title h1");
        pending = { current, contentBefore, textBefore: titleBefore ? titleBefore.textContent.trim() : "" };
        // 先把进度条画出来，再放行路由；否则同步渲染会把这一帧吞掉
        await afterPaint();
    });

    router.afterEach((to, from, failure) => {
        if (!pending) return;
        const { current, contentBefore, textBefore } = pending;
        pending = null;
        if (failure) {
            hide(current);
            return;
        }
        waitForSwap(current, contentBefore, textBefore);
    });
};

export default defineClientConfig({
  enhance ({ app, router, siteData }) {
    app.component('Catalog', Catalog);
    app.component('CatalogCard', CatalogCard);
    app.component('ConnectCommandSummary', ConnectCommandSummary);
    app.component('MixCode', MixCode);
    app.component('ColorSwatch', ColorSwatch);
    app.component('Entry', Entry);
    app.component('HtmlDemo', HtmlDemo);
    // console.log("__VUEPRESS_SSR__=", __VUEPRESS_SSR__)
    if (!__VUEPRESS_SSR__) {
        if(location.href.startsWith("file://")){
            is_file_protocol = true;
        }
    }
    
    router.beforeEach((to) => {
        //console.log("beforeEach", {to});
    });
  
    router.afterEach((to) => {
        //console.log("afterEach", {to});
    });

    // 离线模式的跳转由下面的 beforeResolve 重写路径，这里不接管
    if (!__VUEPRESS_SSR__ && !is_file_protocol) {
        installRouteLoading(router);
    }

    router.beforeResolve( async(to, from) => {
        //console.log(Date.now)
        //console.log("from", JSON.stringify(from))
        //console.log("to", JSON.stringify(to))

        if(is_file_protocol){
            if(to.fullPath.startsWith("#")){
                to.hash = to.fullPath;
                to.fullPath = from.fullPath + to.hash;
                to.path = from.path;
                return
            }
            let fullpath = to.fullPath;
            if(fullpath.startsWith("/"))
                fullpath = fullpath.slice(1);
            if(fullpath.indexOf("#") >= 0){
                fullpath = fullpath.split("#")[0]
            }
            let split_path = fullpath.split("/") || []; 

            // console.log("fullpath", fullpath)
            // console.log("split_path", split_path)

            for(let i=0;i<split_path.length;i++){
                let path_new = "/" + split_path.slice(i).join("/");
                let route = _resolveRoute(path_new);
                if(!route.notFound){
                    // 在离线模式下缓存当前文档所在的文件夹路径到root_dir
                    if(!root_dir || i>0){
                        // linux 下必须以/开头, 这样windows也没有问题
                        root_dir = "/" + split_path.slice(0, i).join("/")   
                        // router.options.history.base = "file:///" + root_dir;
                    }
                    // console.log(route)
                    const pageChunk = await route.loader();
                    // console.log(pageChunk)
                    to.path = route.path;

                    // 防止以/结尾时错误跳转的情况，在末尾加上index.html
                    let to_path = to.path;
                    if(to_path.endsWith("/")){
                        to_path = to_path + "index.html";
                    }
                    // console.log("root_dir", root_dir)
                    // console.log("to_path", to_path)
                    // console.log("to.hash", to.hash)

                    to.fullPath = root_dir + to_path + to.hash;

                    to.meta = {
                        // attach route meta
                        ...route.meta,
                        // attach page chunk route meta
                        _pageChunk: pageChunk
                    };
                    console.log(to, "hash=", to.hash);
                    break;
                }
            }
        }
    });
    
  },
  
  setup() {
    // 获取当前的路由位置
    const route = useRoute()
    // 或者 vue-router 实例
    const router = useRouter();
    let routes = useRoutes();

    // 修复代码复制按钮会在末尾多加换行符的问题：
    // 拦截 navigator.clipboard.writeText，统一去掉末尾多余换行
    if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
      const origWriteText = navigator.clipboard.writeText.bind(navigator.clipboard);
      navigator.clipboard.writeText = (text) => origWriteText(text.replace(/[\r\n]+$/, ''));
    }
  },
  rootComponents: [EnhancedToc],
  layouts: {
    NotFound,
  },
})
