import comp from "D:/code/test_code/vuepress_vue3/src/.vuepress/.temp/pages/demojs/vue3/19.html.vue"
const data = JSON.parse("{\"path\":\"/demojs/vue3/19.html\",\"title\":\"webpack或vite常用配置\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"webpack或vite常用配置\",\"order\":19,\"category\":[\"学习记录\"],\"tag\":[\"vue3\",\"webpack\",\"vite\"],\"description\":\"19.webpack 或 vite 常用配置 提示 首屏优化案例 1. Ehcarts 打包优化,采用异步加载的方案，较按需加载减少 619kb,较全量引入减少 1094kb。具体代码参考第 20 章，Echarts 的使用。 2. element-plus 优化，采用按需引入加webpack 分包的方式，体积从 260 多 kb 减少到 70 多 k...\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"webpack或vite常用配置\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Ming\\\",\\\"url\\\":\\\"https://kem1s.github.io/blog/\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://kem1s.github.io/blog/blog/demojs/vue3/19.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"小铭同学\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"webpack或vite常用配置\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"19.webpack 或 vite 常用配置 提示 首屏优化案例 1. Ehcarts 打包优化,采用异步加载的方案，较按需加载减少 619kb,较全量引入减少 1094kb。具体代码参考第 20 章，Echarts 的使用。 2. element-plus 优化，采用按需引入加webpack 分包的方式，体积从 260 多 kb 减少到 70 多 k...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"vite\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"webpack\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"vue3\"}]]},\"readingTime\":{\"minutes\":5.85,\"words\":1754},\"filePathRelative\":\"demojs/vue3/19.md\",\"excerpt\":\"\\n<div class=\\\"hint-container tip\\\">\\n<p class=\\\"hint-container-title\\\">提示</p>\\n<p>首屏优化案例<br>\\n<strong>1.</strong> Ehcarts 打包优化,采用<strong>异步加载</strong>的方案，较<strong>按需加载</strong>减少 619kb,较<strong>全量引入</strong>减少 1094kb。具体代码参考第 20 章，Echarts 的使用。<br>\\n<strong>2.</strong> element-plus 优化，采用<strong>按需引入</strong>加<strong>webpack 分包</strong>的方式，体积从 260 多 kb 减少到 70 多 kb。具体代码见第 2 章,element-ui 的使用。<br>\\n<strong>3.</strong> webpack 可以安装<code>webpack-bundle-analyzer</code>进行打包分析,vite 可以使用<code>rollup-plugin-visualizer</code>进行打包分析。</p>\\n</div>\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
