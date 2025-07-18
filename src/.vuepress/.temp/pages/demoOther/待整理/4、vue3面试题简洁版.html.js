import comp from "D:/code/test_code/vuepress_vue3/src/.vuepress/.temp/pages/demoOther/待整理/4、vue3面试题简洁版.html.vue"
const data = JSON.parse("{\"path\":\"/demoOther/%E5%BE%85%E6%95%B4%E7%90%86/4%E3%80%81vue3%E9%9D%A2%E8%AF%95%E9%A2%98%E7%AE%80%E6%B4%81%E7%89%88.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"1、Vue3的Composition Api 和 Vue2的 Options Api有什么区别？ 2、Vue3的设计目标是什么，做了哪些优化？ 设计目标：主要为了解决以下问题 随着功能增长，逻辑复杂的组件代码难以维护 缺少可靠的复用逻辑机制 类型推断不够友好 优化 去掉不常用api，体积更小 优化diff算法和响应式实现原理，响应更快 TypeScri...\"},\"readingTime\":{\"minutes\":3.81,\"words\":1142},\"filePathRelative\":\"demoOther/待整理/4、vue3面试题简洁版.md\",\"excerpt\":\"<h3>1、Vue3的Composition Api 和 Vue2的 Options Api有什么区别？</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>类型</th>\\n<th>Vue2</th>\\n<th>Vue3</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td></td>\\n<td><strong>Composition Api（组合式）</strong></td>\\n<td><strong>Options Api（选项式）</strong></td>\\n</tr>\\n<tr>\\n<td><strong>逻辑组织</strong></td>\\n<td>自由度更高，数据和方法可以整合到一起，不用在<code>data</code>、<code>methods</code>之间来回切换</td>\\n<td>自由度更差，逻辑太分散，大型组件修改起来困难</td>\\n</tr>\\n<tr>\\n<td><strong>TS支持度</strong></td>\\n<td>完全支持</td>\\n<td>支持有限</td>\\n</tr>\\n<tr>\\n<td><strong>响应式数据</strong></td>\\n<td>通过<code>Object.defineProperty</code>，无法检测对象属性增减或数组索引变化</td>\\n<td>通过<code>Proxy</code> 代理，支持更全面的响应式操作</td>\\n</tr>\\n<tr>\\n<td><strong>逻辑复用</strong></td>\\n<td>需要用minxs,存在命名冲突、来源不透明等问题</td>\\n<td>通过自定义组合函数封装，不存在命名冲突</td>\\n</tr>\\n</tbody>\\n</table>\",\"autoDesc\":true}")
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
