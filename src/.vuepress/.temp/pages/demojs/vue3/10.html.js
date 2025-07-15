import comp from "D:/code/test_code/vuepress_vue3/src/.vuepress/.temp/pages/demojs/vue3/10.html.vue"
const data = JSON.parse("{\"path\":\"/demojs/vue3/10.html\",\"title\":\"路由守卫\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"路由守卫\",\"order\":10,\"category\":[\"学习记录\"],\"tag\":[\"vue3\",\"vue-router\"],\"description\":\"10 路由守卫 路由守卫就是在进入某个组件、或退出某个组件时，根据业务需求看是否需要中断跳转。比如在进入其他页面前，判断用户是否登录，如果没登录就中断跳转，提示用户未登录，也可以强制跳转到登录页。 路由守卫根据场景分为三大类： 全局路由守卫 所有路由都会进入这个守卫 路由独享守卫 某个路由单独的守卫 组件路由守卫 某个组件内的路由守卫 10.1.1 全...\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"路由守卫\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Ming\\\",\\\"url\\\":\\\"https://kem1s.github.io/blog/\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://kem1s.github.io/blog/blog/demojs/vue3/10.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"小铭同学\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"路由守卫\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"10 路由守卫 路由守卫就是在进入某个组件、或退出某个组件时，根据业务需求看是否需要中断跳转。比如在进入其他页面前，判断用户是否登录，如果没登录就中断跳转，提示用户未登录，也可以强制跳转到登录页。 路由守卫根据场景分为三大类： 全局路由守卫 所有路由都会进入这个守卫 路由独享守卫 某个路由单独的守卫 组件路由守卫 某个组件内的路由守卫 10.1.1 全...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"vue-router\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"vue3\"}]]},\"readingTime\":{\"minutes\":3.08,\"words\":925},\"filePathRelative\":\"demojs/vue3/10.md\",\"excerpt\":\"\\n<p>路由守卫就是在进入某个组件、或退出某个组件时，根据业务需求看是否需要中断跳转。比如在进入其他页面前，判断用户是否登录，如果没登录就中断跳转，提示用户未登录，也可以强制跳转到登录页。</p>\\n<p>路由守卫根据场景分为三大类：</p>\\n<ol>\\n<li><strong>全局路由守卫</strong> 所有路由都会进入这个守卫</li>\\n<li><strong>路由独享守卫</strong> 某个路由单独的守卫</li>\\n<li><strong>组件路由守卫</strong> 某个组件内的路由守卫</li>\\n</ol>\\n<h3>10.1.1 全局路由守卫</h3>\\n<h4>router.beforeEach 全局前置守卫</h4>\",\"autoDesc\":true}")
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
