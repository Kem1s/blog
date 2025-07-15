import comp from "D:/code/test_code/vuepress_vue3/src/.vuepress/.temp/pages/demoOther/index.html.vue"
const data = JSON.parse("{\"path\":\"/demoOther/\",\"title\":\"Demo Other\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Demo Other\",\"article\":false,\"feed\":false,\"sitemap\":false,\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Demo Other\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://kem1s.github.io/blog/blog/demoOther/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"小铭同学\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Demo Other\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
