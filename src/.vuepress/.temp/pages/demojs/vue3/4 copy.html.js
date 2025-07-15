import comp from "D:/code/test_code/vuepress_vue3/src/.vuepress/.temp/pages/demojs/vue3/4 copy.html.vue"
const data = JSON.parse("{\"path\":\"/demojs/vue3/4%20copy.html\",\"title\":\"script setup写法\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"script setup写法\",\"order\":4,\"category\":[\"学习记录\"],\"tag\":[\"vue3\",\"script setup\"],\"description\":\"vue3 script setup 语法 4. vue3 script setup 写法 script setup 是 Vue 4.2 中引入的一个新特性，它提供了一种更简洁的代码组织方式，可以让我们在单文件组件中更方便地使用 Composition API。 这种写法的主要优点是： 不用写 setup 函数,不用写 return 语句。 组件只需要引...\"},\"readingTime\":{\"minutes\":6.3,\"words\":1889},\"filePathRelative\":\"demojs/vue3/4 copy.md\",\"excerpt\":\"\\n<h2>4. vue3 script setup 写法</h2>\\n<blockquote>\\n<p>script setup 是 Vue 4.2 中引入的一个新特性，它提供了一种更简洁的代码组织方式，可以让我们在单文件组件中更方便地使用 Composition API。<br>\\n这种写法的主要优点是：</p>\\n</blockquote>\\n<ul>\\n<li>不用写 setup 函数,不用写 return 语句。</li>\\n<li>组件只需要引入不需要注册。</li>\\n<li>不需要写组件名，自动根据文件名生成 name。</li>\\n<li>可以更方便的逻辑分块。</li>\\n</ul>\\n<h3>4.1 基础用法</h3>\",\"autoDesc\":true}")
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
