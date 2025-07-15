import comp from "D:/code/test_code/vuepress_vue3/src/.vuepress/.temp/pages/demojs/vue3/14.递归组件.html.vue"
const data = JSON.parse("{\"path\":\"/demojs/vue3/14.%E9%80%92%E5%BD%92%E7%BB%84%E4%BB%B6.html\",\"title\":\"14. Vue 递归组件\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"14. Vue 递归组件 递归组件是一种自我调用的组件形式，常用于处理树形结构数据，如： 树形菜单 多级评论 组织架构图 文件夹结构 多级表头 14.1 Vue 2 递归组件 在 Vue 2 中实现递归组件需要注意两个关键点： 必须设置 name 属性：用于组件自我引用 必须有结束条件：防止无限递归导致栈溢出 父组件使用： 14.2 Vue3 递归组件...\"},\"readingTime\":{\"minutes\":1.76,\"words\":529},\"filePathRelative\":\"demojs/vue3/14.递归组件.md\",\"excerpt\":\"\\n<blockquote>\\n<p>递归组件是一种自我调用的组件形式，常用于处理树形结构数据，如：</p>\\n<ul>\\n<li>树形菜单</li>\\n<li>多级评论</li>\\n<li>组织架构图</li>\\n<li>文件夹结构</li>\\n<li>多级表头</li>\\n</ul>\\n</blockquote>\\n<h2>14.1 Vue 2 递归组件</h2>\\n<p>在 Vue 2 中实现递归组件需要注意两个关键点：</p>\\n<ol>\\n<li><strong>必须设置 name 属性</strong>：用于组件自我引用</li>\\n<li><strong>必须有结束条件</strong>：防止无限递归导致栈溢出</li>\\n</ol>\",\"autoDesc\":true}")
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
