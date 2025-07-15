import comp from "D:/code/test_code/vuepress_vue3/src/.vuepress/.temp/pages/demojs/vue3/7.html.vue"
const data = JSON.parse("{\"path\":\"/demojs/vue3/7.html\",\"title\":\"watch监听\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"watch监听\",\"order\":7,\"category\":[\"学习记录\"],\"tag\":[\"vue3\",\"script setup\"],\"description\":\"7 watch 监听 7.1 vue3 的 watch 监听 7.1.1 监听一个值 Vue 3 的 watch 可以监听响应式数据的变化。需要注意以下几点： 被监听的数据必须是响应式的（使用 ref、reactive 或 computed 创建） 监听 reactive 对象的属性时，需要使用 getter 函数 监听 ref 类型时可以直接传入变量...\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"watch监听\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Ming\\\",\\\"url\\\":\\\"https://kem1s.github.io/blog/\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://kem1s.github.io/blog/blog/demojs/vue3/7.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"小铭同学\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"watch监听\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"7 watch 监听 7.1 vue3 的 watch 监听 7.1.1 监听一个值 Vue 3 的 watch 可以监听响应式数据的变化。需要注意以下几点： 被监听的数据必须是响应式的（使用 ref、reactive 或 computed 创建） 监听 reactive 对象的属性时，需要使用 getter 函数 监听 ref 类型时可以直接传入变量...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"script setup\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"vue3\"}]]},\"readingTime\":{\"minutes\":2.84,\"words\":851},\"filePathRelative\":\"demojs/vue3/7.md\",\"excerpt\":\"\\n<h1>7.1 vue3 的 watch 监听</h1>\\n<h3>7.1.1 监听一个值</h3>\\n<p>Vue 3 的 watch 可以监听响应式数据的变化。需要注意以下几点：</p>\\n<ul>\\n<li>被监听的数据必须是响应式的（使用 <code>ref</code>、<code>reactive</code> 或 <code>computed</code> 创建）</li>\\n<li>监听 <code>reactive</code> 对象的属性时，需要使用 getter 函数</li>\\n<li>监听 <code>ref</code> 类型时可以直接传入变量名</li>\\n</ul>\\n<p>来看一个具体例子：</p>\",\"autoDesc\":true}")
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
