import comp from "D:/code/test_code/vuepress_vue3/src/.vuepress/.temp/pages/demojs/vue3/15.axios和alova请求封装.html.vue"
const data = JSON.parse("{\"path\":\"/demojs/vue3/15.axios%E5%92%8Calova%E8%AF%B7%E6%B1%82%E5%B0%81%E8%A3%85.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"可以理解为对ajax的全局配置，相当于vue路由的全局前置守卫和后置守卫。 全局配置api请求地址，可以根据开发环境和生产环境配置对应的api接口地址，参考https://zhuanlan.zhihu.com/p/680381468；或https://blog.csdn.net/zx15271563333/article/details/1354997...\"},\"readingTime\":{\"minutes\":7.52,\"words\":2256},\"filePathRelative\":\"demojs/vue3/15.axios和alova请求封装.md\",\"excerpt\":\"<blockquote>\\n<p>可以理解为对ajax的全局配置，相当于vue路由的全局前置守卫和后置守卫。</p>\\n<p>全局配置api请求地址，可以根据开发环境和生产环境配置对应的api接口地址，参考<a href=\\\"https://zhuanlan.zhihu.com/p/680381468\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://zhuanlan.zhihu.com/p/680381468</a>；或<a href=\\\"https://blog.csdn.net/zx15271563333/article/details/135499701\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://blog.csdn.net/zx15271563333/article/details/135499701</a></p>\\n<p>request请求拦截器，对所有接口调用前进行设置，比如用户token，或者对上传接口等特殊接口单独配置特别的请求头；</p>\\n<p>response响应拦截器 ， 对所有接口的响应状态拦截，看是否未登录或者其他权限问题。</p>\\n</blockquote>\",\"autoDesc\":true}")
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
