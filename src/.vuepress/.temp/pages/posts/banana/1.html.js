import comp from "D:/code/test_code/my-docs/src/.vuepress/.temp/pages/posts/banana/1.html.vue"
const data = JSON.parse("{\"path\":\"/posts/banana/1.html\",\"title\":\"香蕉 1\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2022-01-05T00:00:00.000Z\",\"category\":[\"香蕉\",\"水果\"],\"tag\":[\"黄\",\"弯曲的\",\"长\"],\"description\":\"香蕉 1 标题 2 这里是内容。 标题 3 这里是内容。\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"香蕉 1\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2022-01-05T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Ming\\\",\\\"url\\\":\\\"https://kem1s.github.io/blog/\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://kem1s.github.io/blog/posts/banana/1.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"小铭同学\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"香蕉 1\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"香蕉 1 标题 2 这里是内容。 标题 3 这里是内容。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"长\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"弯曲的\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"黄\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-01-05T00:00:00.000Z\"}]]},\"readingTime\":{\"minutes\":0.13,\"words\":38},\"filePathRelative\":\"posts/banana/1.md\",\"excerpt\":\"\\n<h2>标题 2</h2>\\n<p>这里是内容。</p>\\n<h3>标题 3</h3>\\n<p>这里是内容。</p>\\n\",\"autoDesc\":true}")
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
