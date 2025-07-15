import comp from "D:/code/test_code/vuepress_vue3/src/.vuepress/.temp/pages/demojs/vue3/21.webpack优化相关.html.vue"
const data = JSON.parse("{\"path\":\"/demojs/vue3/21.webpack%E4%BC%98%E5%8C%96%E7%9B%B8%E5%85%B3.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"21.webpack 优化相关 21.1 魔法注释（Magic Comments） 作用：webpack 自带，分割 js、优化页面加载速度 在 Webpack 中，魔法注释（Magic Comments）主要用于动态导入（import()）时控制代码分割行为。它既可以生成单独的文件，又可以控制是否立即加载。对于有些组件中引入 js 库或组件，不太重要...\"},\"readingTime\":{\"minutes\":5.16,\"words\":1549},\"filePathRelative\":\"demojs/vue3/21.webpack优化相关.md\",\"excerpt\":\"<h2>21.webpack 优化相关</h2>\\n<h3>21.1 魔法注释（Magic Comments）</h3>\\n<ul>\\n<li><strong>作用</strong>：webpack 自带，分割 js、优化页面加载速度</li>\\n</ul>\\n<p>在 Webpack 中，魔法注释（Magic Comments）主要用于动态导入（import()）时控制代码分割行为。它既可以生成单独的文件，又可以控制是否立即加载。对于有些组件中引入 js 库或组件，不太重要的我们可以设置空闲时加载，提高页面性能。</p>\\n<h4>参数说明</h4>\\n<ul>\\n<li>\\n<p><strong>webpackChunkName</strong>: \\\"chunkName\\\"</p>\\n<ul>\\n<li>指定生成的 chunk 名称</li>\\n<li>输出文件格式为: chunkName.[contenthash].js</li>\\n<li>示例：webpackChunkName: \\\"myText\\\" → myText.123abc.js</li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>webpackMode</strong>: 控制模块的加载模式</p>\\n<ul>\\n<li>\\\"lazy\\\"（默认）：异步加载，生成单独的 chunk</li>\\n<li>\\\"eager\\\"：不会生成额外的 chunk，代码会被内联到当前 chunk 中</li>\\n<li>\\\"weak\\\"：尝试加载模块，如果模块已经被加载则返回其 Promise，否则返回 null</li>\\n<li>\\\"lazy-once\\\"：生成一个可以满足所有 importer 的单独 chunk</li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>webpackPrefetch</strong>: true</p>\\n<ul>\\n<li>预获取，浏览器在<strong>空闲时</strong>加载未来可能需要的资源</li>\\n<li>会在页面加载完成后，利用空闲时间下载</li>\\n<li>适用于优先级较低的资源</li>\\n<li>在网络空闲时才会加载</li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>webpackPreload</strong>: true</p>\\n<ul>\\n<li>预加载，浏览器<strong>优先</strong>加载未来可能需要的资源</li>\\n<li>与父 chunk 并行加载</li>\\n<li>适用于优先级较高的资源</li>\\n<li>立即开始加载</li>\\n</ul>\\n</li>\\n</ul>\",\"autoDesc\":true}")
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
