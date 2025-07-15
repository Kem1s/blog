import comp from "D:/code/test_code/vuepress_vue3/src/.vuepress/.temp/pages/demojs/vue3/19.webpack或vite常用配置.html.vue"
const data = JSON.parse("{\"path\":\"/demojs/vue3/19.webpack%E6%88%96vite%E5%B8%B8%E7%94%A8%E9%85%8D%E7%BD%AE.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"19.webpack或vite常用配置 首屏优化案例 1. Ehcarts打包优化,采用异步加载的方案，较按需加载减少619kb,较全量引入减少1094kb。具体代码参考第20章，Echarts的使用。 2. element-plus优化，采用按需引入加webpack分包的方式，体积从260多kb减少到70多kb。具体代码见第2章,element-ui...\"},\"readingTime\":{\"minutes\":5.77,\"words\":1731},\"filePathRelative\":\"demojs/vue3/19.webpack或vite常用配置.md\",\"excerpt\":\"<h2>19.webpack或vite常用配置</h2>\\n<blockquote>\\n<p>首屏优化案例<br>\\n<strong>1.</strong> Ehcarts打包优化,采用<strong>异步加载</strong>的方案，较<strong>按需加载</strong>减少619kb,较<strong>全量引入</strong>减少1094kb。具体代码参考第20章，Echarts的使用。<br>\\n<strong>2.</strong> element-plus优化，采用<strong>按需引入</strong>加<strong>webpack分包</strong>的方式，体积从260多kb减少到70多kb。具体代码见第2章,element-ui的使用。<br>\\n<strong>3.</strong> webpack可以安装<code>webpack-bundle-analyzer</code>进行打包分析,vite可以使用<code>rollup-plugin-visualizer</code>进行打包分析。</p>\\n</blockquote>\",\"autoDesc\":true}")
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
