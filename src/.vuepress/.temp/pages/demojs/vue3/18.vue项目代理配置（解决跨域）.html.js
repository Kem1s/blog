import comp from "D:/code/test_code/vuepress_vue3/src/.vuepress/.temp/pages/demojs/vue3/18.vue项目代理配置（解决跨域）.html.vue"
const data = JSON.parse("{\"path\":\"/demojs/vue3/18.vue%E9%A1%B9%E7%9B%AE%E4%BB%A3%E7%90%86%E9%85%8D%E7%BD%AE%EF%BC%88%E8%A7%A3%E5%86%B3%E8%B7%A8%E5%9F%9F%EF%BC%89.html\",\"title\":\"18. Vue跨域问题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"18. Vue跨域问题 18.1 基础概念 1. 什么是跨域 跨域是指一个域下的文档或脚本试图去请求另一个域下的资源，这个请求会受到同源策略的限制，导致请求失败。 2. 同源策略 同源策略是一种安全协议，它要求\\\"协议+域名+端口\\\"三者相同。以下情况都属于跨域： 18.2 跨域解决方案 18.2.1 CORS（跨域资源共享） CORS 是最常用的跨域解决...\"},\"readingTime\":{\"minutes\":2.67,\"words\":802},\"filePathRelative\":\"demojs/vue3/18.vue项目代理配置（解决跨域）.md\",\"excerpt\":\"\\n<h2>18.1 基础概念</h2>\\n<h3>1. 什么是跨域</h3>\\n<p>跨域是指一个域下的文档或脚本试图去请求另一个域下的资源，这个请求会受到同源策略的限制，导致请求失败。</p>\\n<h3>2. 同源策略</h3>\\n<p>同源策略是一种安全协议，它要求\\\"协议+域名+端口\\\"三者相同。以下情况都属于跨域：</p>\\n<div class=\\\"language-bash line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"bash\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code class=\\\"language-bash\\\"><span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\"># 当前页面 url: http://www.example.com/index.html</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\"># 以下都是跨域：</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">http://www.another.com/index.html</span><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">       # 不同域名</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">http://www.example.com:8080/index.html</span><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">  # 不同端口</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">https://www.example.com/index.html</span><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">      # 不同协议</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
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
