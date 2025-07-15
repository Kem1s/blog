import comp from "D:/code/test_code/vuepress_vue3/src/.vuepress/.temp/pages/tag/vite/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/vite/\",\"title\":\"标签: vite\",\"lang\":\"zh-CN\",\"frontmatter\":{\"dir\":{\"index\":false},\"index\":false,\"feed\":false,\"sitemap\":false,\"title\":\"标签: vite\",\"blog\":{\"type\":\"category\",\"name\":\"vite\",\"key\":\"tag\"},\"layout\":\"Blog\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"标签: vite\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://kem1s.github.io/blog/blog/tag/vite/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"小铭同学\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"标签: vite\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
