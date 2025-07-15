import comp from "D:/code/test_code/vuepress_vue3/src/.vuepress/.temp/pages/demojs/vue3/5.html.vue"
const data = JSON.parse("{\"path\":\"/demojs/vue3/5.html\",\"title\":\"生命周期详解\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"生命周期详解\",\"order\":5,\"category\":[\"学习记录\"],\"tag\":[\"vue3\",\"script setup\"],\"description\":\"Vue 生命周期详解 1. Vue 2 与 Vue 3 生命周期对比 2. Vue 3 生命周期示例 3. Vue 2 生命周期示例 4. 生命周期最佳实践 创建阶段： Vue 3 中优先使用 setup() 代替 beforeCreate 和 created 异步数据获取推荐在 created(Vue 2) 或 setup(Vue 3) 中进行 挂载...\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"生命周期详解\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Ming\\\",\\\"url\\\":\\\"https://kem1s.github.io/blog/\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://kem1s.github.io/blog/blog/demojs/vue3/5.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"小铭同学\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"生命周期详解\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Vue 生命周期详解 1. Vue 2 与 Vue 3 生命周期对比 2. Vue 3 生命周期示例 3. Vue 2 生命周期示例 4. 生命周期最佳实践 创建阶段： Vue 3 中优先使用 setup() 代替 beforeCreate 和 created 异步数据获取推荐在 created(Vue 2) 或 setup(Vue 3) 中进行 挂载...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"script setup\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"vue3\"}]]},\"readingTime\":{\"minutes\":2.82,\"words\":847},\"filePathRelative\":\"demojs/vue3/5.md\",\"excerpt\":\"\\n<h2>1. Vue 2 与 Vue 3 生命周期对比</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>Vue 2.x</th>\\n<th>Vue 3.x</th>\\n<th>执行时机</th>\\n<th>使用场景</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>beforeCreate</td>\\n<td>setup()</td>\\n<td>组件实例被创建之前</td>\\n<td>无法访问组件实例，较少使用</td>\\n</tr>\\n<tr>\\n<td>created</td>\\n<td>setup()</td>\\n<td>组件实例创建完成</td>\\n<td>可以访问响应式数据，适合异步数据获取</td>\\n</tr>\\n<tr>\\n<td>beforeMount</td>\\n<td>onBeforeMount</td>\\n<td>组件挂载到 DOM 之前</td>\\n<td>访问不到 DOM，适合最后的数据准备</td>\\n</tr>\\n<tr>\\n<td>mounted</td>\\n<td>onMounted</td>\\n<td>组件挂载到 DOM 之后</td>\\n<td>可以访问 DOM，初始化第三方库，添加事件监听等</td>\\n</tr>\\n<tr>\\n<td>beforeUpdate</td>\\n<td>onBeforeUpdate</td>\\n<td>组件更新之前</td>\\n<td>可以获取更新前的 DOM 状态</td>\\n</tr>\\n<tr>\\n<td>updated</td>\\n<td>onUpdated</td>\\n<td>组件更新之后</td>\\n<td>可以访问更新后的 DOM</td>\\n</tr>\\n<tr>\\n<td>beforeDestroy</td>\\n<td>onBeforeUnmount</td>\\n<td>组件卸载之前</td>\\n<td>清理定时器、事件监听器等</td>\\n</tr>\\n<tr>\\n<td>destroyed</td>\\n<td>onUnmounted</td>\\n<td>组件卸载之后</td>\\n<td>组件完全销毁后的清理工作</td>\\n</tr>\\n</tbody>\\n</table>\",\"autoDesc\":true}")
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
