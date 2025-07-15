import comp from "D:/code/test_code/vuepress_vue3/src/.vuepress/.temp/pages/demojs/vue3/10.路由守卫.html.vue"
const data = JSON.parse("{\"path\":\"/demojs/vue3/10.%E8%B7%AF%E7%94%B1%E5%AE%88%E5%8D%AB.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"10 路由守卫 路由守卫就是在进入某个组件、或退出某个组件时，根据业务需求看是否需要中断跳转。比如在进入其他页面前，判断用户是否登录，如果没登录就中断跳转，提示用户未登录，也可以强制跳转到登录页。 路由守卫根据场景分为三大类： 全局路由守卫 所有路由都会进入这个守卫 路由独享守卫 某个路由单独的守卫 组件路由守卫 某个组件内的路由守卫 10.1.1 全...\"},\"readingTime\":{\"minutes\":3.02,\"words\":906},\"filePathRelative\":\"demojs/vue3/10.路由守卫.md\",\"excerpt\":\"<h2>10 路由守卫</h2>\\n<p>路由守卫就是在进入某个组件、或退出某个组件时，根据业务需求看是否需要中断跳转。比如在进入其他页面前，判断用户是否登录，如果没登录就中断跳转，提示用户未登录，也可以强制跳转到登录页。</p>\\n<p>路由守卫根据场景分为三大类：</p>\\n<ol>\\n<li><strong>全局路由守卫</strong> 所有路由都会进入这个守卫</li>\\n<li><strong>路由独享守卫</strong> 某个路由单独的守卫</li>\\n<li><strong>组件路由守卫</strong> 某个组件内的路由守卫</li>\\n</ol>\\n<h3>10.1.1 全局路由守卫</h3>\",\"autoDesc\":true}")
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
