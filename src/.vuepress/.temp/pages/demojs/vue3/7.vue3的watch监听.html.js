import comp from "D:/code/test_code/vuepress_vue3/src/.vuepress/.temp/pages/demojs/vue3/7.vue3的watch监听.html.vue"
const data = JSON.parse("{\"path\":\"/demojs/vue3/7.vue3%E7%9A%84watch%E7%9B%91%E5%90%AC.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"7.1 vue3的watch监听 7.1.1 监听一个值 Vue 3 的 watch 可以监听响应式数据的变化。需要注意以下几点： 被监听的数据必须是响应式的（使用 ref、reactive 或 computed 创建） 监听 reactive 对象的属性时，需要使用 getter 函数 监听 ref 类型时可以直接传入变量名 来看一个具体例子： 7....\"},\"readingTime\":{\"minutes\":2.76,\"words\":829},\"filePathRelative\":\"demojs/vue3/7.vue3的watch监听.md\",\"excerpt\":\"<h2>7.1 vue3的watch监听</h2>\\n<h3>7.1.1 监听一个值</h3>\\n<p>Vue 3 的 watch 可以监听响应式数据的变化。需要注意以下几点：</p>\\n<ul>\\n<li>被监听的数据必须是响应式的（使用 <code>ref</code>、<code>reactive</code> 或 <code>computed</code> 创建）</li>\\n<li>监听 <code>reactive</code> 对象的属性时，需要使用 getter 函数</li>\\n<li>监听 <code>ref</code> 类型时可以直接传入变量名</li>\\n</ul>\\n<p>来看一个具体例子：</p>\",\"autoDesc\":true}")
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
