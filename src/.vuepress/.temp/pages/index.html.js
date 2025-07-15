import comp from "D:/code/test_code/my-docs/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"博客主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"Blog\",\"icon\":\"house\",\"title\":\"博客主页\",\"heroImage\":\"https://theme-hope-assets.vuejs.press/logo.svg\",\"bgImage\":\"assets/images/bg.png\",\"heroText\":\"小铭的博客\",\"heroFullScreen\":true,\"tagline\":\"欢迎来的小铭同学的博客\",\"projects\":[{\"icon\":\"folder-open\",\"name\":\"Vue2\",\"desc\":\"Vue2相关知识\",\"link\":\"/demojs/vue2/\"},{\"icon\":\"link\",\"name\":\"Vue3\",\"desc\":\"Vue3相关知识\",\"link\":\"/demojs/vue3/\"},{\"icon\":\"book\",\"name\":\"Node.js\",\"desc\":\"Node.js相关知识\",\"link\":\"/demoNode/\"},{\"icon\":\"newspaper\",\"name\":\"文章名称\",\"desc\":\"文章详细描述\",\"link\":\"https://你的文章链接\"},{\"icon\":\"user-group\",\"name\":\"React\",\"desc\":\"React相关知识\",\"link\":\"/demoReact/\"},{\"icon\":\"link\",\"name\":\"其他\",\"desc\":\"其他技术知识\",\"link\":\"/demoOther/\"}],\"footer\":\"为了更美好的明天而战！\",\"description\":\"这是一个记录学习记录的博客。 没有高深的技术，只有简短的踩坑历程。\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"博客主页\\\",\\\"description\\\":\\\"这是一个记录学习记录的博客。 没有高深的技术，只有简短的踩坑历程。\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://kem1s.github.io/blog/blog/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"小铭同学\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"博客主页\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"这是一个记录学习记录的博客。 没有高深的技术，只有简短的踩坑历程。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0.6,\"words\":181},\"filePathRelative\":\"README.md\",\"excerpt\":\"<p>这是一个记录学习记录的博客。</p>\\n<p>没有高深的技术，只有简短的踩坑历程。</p>\\n<!-- 相关配置文档请见 [博客主页](https://theme-hope.vuejs.press/zh/guide/blog/home.html)。 -->\\n\",\"autoDesc\":true}")
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
