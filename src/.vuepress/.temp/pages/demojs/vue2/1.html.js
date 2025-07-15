import comp from "D:/code/test_code/my-docs/src/.vuepress/.temp/pages/demojs/vue2/1.html.vue"
const data = JSON.parse("{\"path\":\"/demojs/vue2/1.html\",\"title\":\"1. vue2演示\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"1. vue2演示\",\"order\":2,\"category\":[\"学习记录\"],\"tag\":[\"vue2\"],\"description\":\"input 输入正整数\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"1. vue2演示\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Ming\\\",\\\"url\\\":\\\"https://kem1s.github.io/blog/\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://kem1s.github.io/blog/blog/demojs/vue2/1.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"小铭同学\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"1. vue2演示\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"input 输入正整数\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"vue2\"}]]},\"readingTime\":{\"minutes\":0.41,\"words\":123},\"filePathRelative\":\"demojs/vue2/1.md\",\"excerpt\":\"<h3>input 输入正整数</h3>\\n\\n\",\"autoDesc\":true}")
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
