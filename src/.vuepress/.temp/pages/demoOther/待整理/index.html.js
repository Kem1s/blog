import comp from "D:/code/test_code/vuepress_vue3/src/.vuepress/.temp/pages/demoOther/待整理/index.html.vue"
const data = JSON.parse("{\"path\":\"/demoOther/%E5%BE%85%E6%95%B4%E7%90%86/\",\"title\":\"待整理\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"待整理\",\"article\":false,\"feed\":false,\"sitemap\":false,\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"待整理\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://kem1s.github.io/blog/blog/demoOther/%E5%BE%85%E6%95%B4%E7%90%86/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"小铭同学\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"待整理\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
