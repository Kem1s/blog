import comp from "D:/code/test_code/vuepress_vue3/src/.vuepress/.temp/pages/demojs/vue2/1 copy.html.vue"
const data = JSON.parse("{\"path\":\"/demojs/vue2/1%20copy.html\",\"title\":\"1. vue2演示\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"1. vue2演示\",\"order\":2,\"category\":[\"学习记录\"],\"tag\":[\"vue2\"],\"description\":\"input 输入正整数\"},\"readingTime\":{\"minutes\":0.41,\"words\":123},\"filePathRelative\":\"demojs/vue2/1 copy.md\",\"excerpt\":\"<h3>input 输入正整数</h3>\\n\\n\",\"autoDesc\":true}")
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
