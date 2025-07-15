import comp from "D:/code/test_code/vuepress_vue3/src/.vuepress/.temp/pages/demojs/vue3/11.html.vue"
const data = JSON.parse("{\"path\":\"/demojs/vue3/11.html\",\"title\":\"动态路由\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"动态路由\",\"order\":11,\"category\":[\"学习记录\"],\"tag\":[\"vue3\",\"vue-router\"],\"description\":\"11. 动态路由 - 权限路由最佳实践 11.1 实现思路 场景分析 后台系统常见的权限控制需求： 不同角色看到不同的菜单 未授权页面无法访问 路由和菜单要同步 权限要支持动态更新 实现思路 路由分类： 常量路由：登录、404 等公共页面 动态路由：需要权限控制的页面 错误路由：404、403 等错误页面 权限控制流程： 用户登录 → 获取权限信息 根...\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"动态路由\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Ming\\\",\\\"url\\\":\\\"https://kem1s.github.io/blog/\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://kem1s.github.io/blog/blog/demojs/vue3/11.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"小铭同学\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"动态路由\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"11. 动态路由 - 权限路由最佳实践 11.1 实现思路 场景分析 后台系统常见的权限控制需求： 不同角色看到不同的菜单 未授权页面无法访问 路由和菜单要同步 权限要支持动态更新 实现思路 路由分类： 常量路由：登录、404 等公共页面 动态路由：需要权限控制的页面 错误路由：404、403 等错误页面 权限控制流程： 用户登录 → 获取权限信息 根...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"vue-router\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"vue3\"}]]},\"readingTime\":{\"minutes\":3.9,\"words\":1171},\"filePathRelative\":\"demojs/vue3/11.md\",\"excerpt\":\"\\n<h2>11.1 实现思路</h2>\\n<h3>场景分析</h3>\\n<ol>\\n<li>后台系统常见的权限控制需求：\\n<ul>\\n<li>不同角色看到不同的菜单</li>\\n<li>未授权页面无法访问</li>\\n<li>路由和菜单要同步</li>\\n<li>权限要支持动态更新</li>\\n</ul>\\n</li>\\n</ol>\\n<h3>实现思路</h3>\\n<ol>\\n<li>\\n<p><strong>路由分类</strong>：</p>\\n<ul>\\n<li>常量路由：登录、404 等公共页面</li>\\n<li>动态路由：需要权限控制的页面</li>\\n<li>错误路由：404、403 等错误页面</li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>权限控制流程</strong>：</p>\\n<ul>\\n<li>用户登录 → 获取权限信息</li>\\n<li>根据权限过滤路由 → 动态添加路由</li>\\n<li>生成菜单 → 渲染界面</li>\\n<li>路由守卫拦截无权限访问</li>\\n</ul>\\n</li>\\n</ol>\",\"autoDesc\":true}")
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
