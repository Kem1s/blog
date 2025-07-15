import comp from "D:/code/test_code/vuepress_vue3/src/.vuepress/.temp/pages/demojs/vue3/2 copy.html.vue"
const data = JSON.parse("{\"path\":\"/demojs/vue3/2%20copy.html\",\"title\":\"1. vue3项目开发指南\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"1. vue3项目开发指南\",\"order\":2,\"category\":[\"学习记录\"],\"tag\":[\"vue3\",\"Element-plus\",\"Element-ui\"],\"description\":\"Vue 项目开发指南 1. 样式配置 1.1 使用 SASS 环境要求：请根据 Node.js 版本选择合适的 sass-loader 版本 安装依赖 配置全局样式 2. UI 框架集成 2.1 Vue 2 集成 Element UI 安装 完整引入 按需引入（推荐） 安装 babel-plugin-component 配置 Babel 按需引入组件 ...\"},\"readingTime\":{\"minutes\":4.56,\"words\":1367},\"filePathRelative\":\"demojs/vue3/2 copy.md\",\"excerpt\":\"\\n<h2>1. 样式配置</h2>\\n<h3>1.1 使用 SASS</h3>\\n<blockquote>\\n<p><strong>环境要求</strong>：请根据 Node.js 版本选择合适的 sass-loader 版本</p>\\n</blockquote>\\n<table>\\n<thead>\\n<tr>\\n<th>Node.js 版本</th>\\n<th>推荐安装版本</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>Node 14.x</td>\\n<td>sass-loader@10.2.1</td>\\n</tr>\\n<tr>\\n<td>Node 18.x</td>\\n<td>sass-loader@13.3.2 + sass@1.69.0</td>\\n</tr>\\n</tbody>\\n</table>\",\"autoDesc\":true}")
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
