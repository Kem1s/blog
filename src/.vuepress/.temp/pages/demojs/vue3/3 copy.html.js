import comp from "D:/code/test_code/vuepress_vue3/src/.vuepress/.temp/pages/demojs/vue3/3 copy.html.vue"
const data = JSON.parse("{\"path\":\"/demojs/vue3/3%20copy.html\",\"title\":\"vue3响应式数据详解\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"vue3响应式数据详解\",\"order\":2,\"category\":[\"学习记录\"],\"tag\":[\"vue3\",\"ref\",\"reactive\",\"computed\"],\"description\":\"Vue3 响应式数据详解 1. 响应式数据的三种方式 Vue 3 提供了三种主要的响应式数据创建方式，每种都有其特定的使用场景： 1.1 响应式数据对比 1.2 创建和使用示例 1.3 注意事项 ref 使用注意： 在 setup 中访问值需要加 .value 在模板中直接使用，无需 .value 适合用于基本数据类型的响应式 reactive 使用注...\"},\"readingTime\":{\"minutes\":4.33,\"words\":1300},\"filePathRelative\":\"demojs/vue3/3 copy.md\",\"excerpt\":\"\\n<h2>1. 响应式数据的三种方式</h2>\\n<p>Vue 3 提供了三种主要的响应式数据创建方式，每种都有其特定的使用场景：</p>\\n<h3>1.1 响应式数据对比</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>特性</th>\\n<th>ref</th>\\n<th>reactive</th>\\n<th>computed</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>适用数据类型</td>\\n<td>基本数据类型（推荐）<br>引用类型（可用）</td>\\n<td>引用类型（推荐）<br>基本类型（不推荐）</td>\\n<td>基于其他响应式数据的派生值</td>\\n</tr>\\n<tr>\\n<td>访问方式</td>\\n<td>setup 中需要.value<br>模板中直接使用</td>\\n<td>直接访问属性</td>\\n<td>setup 中需要.value<br>模板中直接使用</td>\\n</tr>\\n<tr>\\n<td>解构行为</td>\\n<td>保持响应性</td>\\n<td>失去响应性（需要配合 toRefs 使用）</td>\\n<td>保持响应性</td>\\n</tr>\\n<tr>\\n<td>使用场景</td>\\n<td>单一值的响应式<br>如：计数器、开关状态</td>\\n<td>复杂对象的响应式<br>如：表单数据、用户信息</td>\\n<td>需要依赖其他数据计算的值<br>如：筛选、统计</td>\\n</tr>\\n</tbody>\\n</table>\",\"autoDesc\":true}")
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
