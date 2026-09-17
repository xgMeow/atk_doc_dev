<template>
  <figure class="atk-html-demo">
    <div ref="frameBox" class="atk-html-demo__frame" :style="frameStyle">
      <!-- allow="fullscreen"：留给演示页内部自己要用全屏的场景（如内嵌视频） -->
      <iframe
        v-if="html && (active || !lazy)"
        class="atk-html-demo__iframe"
        :srcdoc="html"
        :title="title || src"
        allow="fullscreen"
      />
      <div v-else class="atk-html-demo__state" :class="{ 'atk-html-demo__state--error': !!error }">
        {{ error || '演示加载中…' }}
      </div>
    </div>
    <figcaption v-if="html && (active || !lazy)" class="atk-html-demo__bar">
      <span class="atk-html-demo__caption">{{ title }}</span>
      <button
        class="atk-html-demo__btn"
        :class="{ 'atk-html-demo__btn--blocked': blocked }"
        type="button"
        @click="openStandalone"
      >
        {{ blocked ? '新标签页被拦截' : '在新标签页打开' }}
      </button>
    </figcaption>
  </figure>
</template>

<script setup>
/*
交互式 HTML 演示组件：把文档仓库里的某个 .html 页面原样嵌进正文，用于代替「录屏转 GIF」。

正文里只放动画本身，不放操作面板：演示页在 <head> 里用 window.self !== window.top 判断
自己是被内嵌还是被独立打开，内嵌时收起读数/控制面板，只留画面；卡片右下角的
「在新标签页打开」把同一份页面独立打开，那里才给出完整的仪表与调节控件。
新增演示页请沿用这一约定（判断要写在 <head> 里、早于样式生效，否则面板会先闪一下）。

用法（markdown，组件已在 client.js 全局注册，无需 import）：

  <HtmlDemo src="./media/01-基本约束/satellite-azimuth-elevation.html" title="卫星方位角、仰角示意图" />

  <HtmlDemo src="./media/01-基本约束/xxx.html" title="…" height="620px" />

- src     演示页面路径（必填）
          · 以 ./ 或 ../ 开头：相对当前 md 文件所在目录，与图片的写法一致；
          · 以 / 开头：相对文档源码根目录 src/，如 /zh/03-基础使用指南/media/a.html
- title   图注，同时作为 iframe 的无障碍标题
- height  高度，默认按 16:9 跟随正文宽度自适应（如 "620px" 可固定高度）
          演示页自己收起了面板，一般不必再给 height，让画面正好铺满 16:9 即可
- lazy    默认 true：滚动到附近才把 iframe 建出来，避免长文档里多个演示同时空转动画

实现说明：
1. 页面内容由构建期的 glob 导入（?raw）以纯文本读入，运行时塞进 iframe 的 srcdoc。
   相比 <iframe src="…">，不产生任何 URL 解析，因此 /atk_doc/ 之类的 base 前缀、
   以及离线版的 file:// 协议都能正常工作（离线版的 standalone.cjs 只把
   link/script/a/img 改写为相对路径，不会处理 iframe[src]）。
2. 这里的 glob 必须写成「单个字符串模式 + eager: true + import: 'default'」——
   bundler-standalone/vuepress-loader.cjs 只识别这一种形式（webpack 不支持
   import.meta.glob），写成数组模式或非 eager 会在离线版里漏掉转换而运行时报错。
   代价是演示 html 会随组件一起打进主包，故演示页面不宜过多过大。
3. 同理不要给 .vuepress 加排除模式（`!…`）：数组模式离线版不识别。
   演示页面都在 zh/ · en/ 下，.vuepress/、.temp/ 等点号目录 glob 默认不匹配，
   下面的 startsWith('.vuepress/') 只是兜底。
*/
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { usePageData } from 'vuepress/client'

const props = defineProps({
  src: { type: String, required: true },
  title: { type: String, default: '' },
  height: { type: String, default: '' },
  lazy: { type: Boolean, default: true },
})

/* ---------- 构建期读入所有演示页面（原始文本） ---------- */
const htmlModules = import.meta.glob('../../../**/*.html', {
  eager: true,
  query: '?raw',
  import: 'default',
})

// 归一化：去掉 . / / / .. 等相对片段，便于把「文档相对路径」直接当查表键
function normalizePath(p) {
  const out = []
  for (const seg of String(p || '').split('/')) {
    if (!seg || seg === '.') continue
    if (seg === '..') {
      out.pop()
      continue
    }
    out.push(seg)
  }
  return out.join('/')
}

const demoMap = {}
for (const [key, content] of Object.entries(htmlModules)) {
  const normalized = normalizePath(key)
  // 兜底：万一 glob 匹配到了 .vuepress/.temp 下的 html，不要混进来
  if (normalized.startsWith('.vuepress/')) continue
  demoMap[normalized] = content
}

/* ---------- 把 src 解析成查表键 ---------- */
const page = usePageData()

// 路由 path 里中文等字符是百分号编码的（/zh/03-%E5%9F%BA%E7%A1%80…），
// 而 glob 的键是文件系统里的原始路径，故先解码再比对
function decodeSafe(p) {
  try {
    return decodeURIComponent(p)
  } catch (e) {
    return p
  }
}

// 当前页面所在目录（相对文档根）：/zh/a/b/01-x.html -> zh/a/b
const pageDir = computed(() => {
  const raw = decodeSafe(String(page.value?.path || '').split('#')[0])
  const segs = normalizePath(raw).split('/').filter(Boolean)
  // README 页面对应目录本身，普通页面要去掉文件名
  if (segs.length && /\.html?$/i.test(segs[segs.length - 1])) segs.pop()
  return segs.join('/')
})

const targetKey = computed(() => {
  const src = String(props.src || '').split('#')[0]
  if (!src) return ''
  return src.startsWith('/') ? normalizePath(src) : normalizePath(`${pageDir.value}/${src}`)
})

const html = computed(() => demoMap[targetKey.value] || '')
const error = computed(() =>
  html.value ? '' : `未找到演示页面：${props.src}（解析为 ${targetKey.value}）`,
)

/* ---------- 滚动到附近再创建 iframe ---------- */
const frameBox = ref(null)
const active = ref(false)
let observer = null

onMounted(() => {
  if (!props.lazy || typeof IntersectionObserver === 'undefined') {
    active.value = true
    return
  }
  observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        active.value = true
        releaseObserver()
      }
    },
    { rootMargin: '200px' },
  )
  observer.observe(frameBox.value)
})

onBeforeUnmount(() => {
  releaseObserver()
  if (blockedTimer) clearTimeout(blockedTimer)
})

function releaseObserver() {
  if (observer) {
    observer.disconnect()
    observer = null
  }
}

/* ---------- 尺寸 ---------- */
// 不给 height 时按 16:9 自适应正文宽度；给了则固定高度。
const frameStyle = computed(() => (props.height ? { height: props.height } : {}))

/* ---------- 在新标签页里打开完整界面 ---------- */
/*
 * 构建产物里并没有演示页 .html 本体（它被 ?raw 打进了主包，不进 dist），
 * 所以这里不链接文件，而是拿内存里的同一份源码现场造一个页面：
 *   · http(s)（本地调试 / 在线版）：Blob URL，是个可在新标签页里刷新的真实地址；
 *   · file://（离线版）：部分浏览器禁止顶层导航到 blob:，改用 about:blank + document.write
 *     （这条在 http 下也可用，只是地址栏会停在 about:blank）。
 * 两种都失败基本就是新标签页被拦截，在按钮上原地提示一下。
 *
 * 不管走哪条路，页面都是顶层窗口，演示页据此判断「不是内嵌」，从而展开完整面板。
 */
const blocked = ref(false)
let blockedTimer = null

function openStandalone() {
  const content = html.value
  if (!content) return

  // 先开窗口再写内容：window.open 必须在点击的回调里同步调用，晚一拍就会被拦截
  const openBlankAndWrite = () => {
    const win = window.open('', '_blank')
    if (!win) return null
    win.document.open()
    win.document.write(content)
    win.document.close()
    return win
  }
  const openBlob = () => {
    // 这个 URL 不主动 revoke：撤销之后新标签页一旦刷新就变成空白页，
    // 而一个演示页只有几十 KB，随文档卸载一起回收即可。
    const url = URL.createObjectURL(new Blob([content], { type: 'text/html;charset=utf-8' }))
    return window.open(url, '_blank')
  }

  const attempts =
    window.location.protocol === 'file:' ? [openBlankAndWrite, openBlob] : [openBlob, openBlankAndWrite]

  let win = null
  for (const attempt of attempts) {
    try {
      win = attempt()
    } catch (e) {
      win = null
    }
    if (win) break
  }

  if (!win) {
    blocked.value = true
    if (blockedTimer) clearTimeout(blockedTimer)
    blockedTimer = setTimeout(() => {
      blocked.value = false
    }, 4000)
  }
}
</script>

<style scoped>
.atk-html-demo {
  margin: 0 0 16px;
  border-radius: 8px;
  background: #fff;
  overflow: hidden;
  width: 100%;
}
.atk-html-demo__frame {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  min-height: 320px;
  background: #f7f9fc;
}
.atk-html-demo__iframe {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
}
.atk-html-demo__state {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  font-size: 13px;
  color: #86909c;
  text-align: center;
}
.atk-html-demo__state--error {
  color: #d93026;
}
.atk-html-demo__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 12px;
  border-top: 1px solid #f2f3f5;
}
.atk-html-demo__caption {
  font-size: 12px;
  color: #86909c;
}
.atk-html-demo__btn {
  flex-shrink: 0;
  margin-left: auto;
  padding: 3px 10px;
  border: 1px solid #e5e6eb;
  border-radius: 4px;
  background: #f7f8fa;
  color: #4e5969;
  font-family: inherit;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
}
.atk-html-demo__btn:hover {
  border-color: #0891b2;
  color: #0e7490;
}
.atk-html-demo__btn--blocked,
.atk-html-demo__btn--blocked:hover {
  border-color: #f7c8c4;
  color: #d93026;
}
</style>
