import comp from "D:/code/test_code/vuepress_vue3/src/.vuepress/.temp/pages/demojs/vue3/16.html.vue"
const data = JSON.parse("{\"path\":\"/demojs/vue3/16.html\",\"title\":\"WebSocket 封装\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"WebSocket 封装\",\"order\":16,\"category\":[\"学习记录\"],\"tag\":[\"vue3\",\"WebSocket\"],\"description\":\"16. WebSocket 封装 16.1 基础知识 提示 实际项目可以使用 socket.io,或者三方库,考虑的更周到,兼容性更好 WebSocket 是一种在单个 TCP 连接上进行全双工通信的协议。在 Vue3 项目中封装 WebSocket 需要考虑以下几个关键点： 心跳检测: 定期发送心跳包，检测连接状态,避免掉线 断线重连: 连接断开时自...\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"WebSocket 封装\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Ming\\\",\\\"url\\\":\\\"https://kem1s.github.io/blog/\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://kem1s.github.io/blog/blog/demojs/vue3/16.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"小铭同学\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"WebSocket 封装\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"16. WebSocket 封装 16.1 基础知识 提示 实际项目可以使用 socket.io,或者三方库,考虑的更周到,兼容性更好 WebSocket 是一种在单个 TCP 连接上进行全双工通信的协议。在 Vue3 项目中封装 WebSocket 需要考虑以下几个关键点： 心跳检测: 定期发送心跳包，检测连接状态,避免掉线 断线重连: 连接断开时自...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"WebSocket\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"vue3\"}]]},\"readingTime\":{\"minutes\":4.06,\"words\":1219},\"filePathRelative\":\"demojs/vue3/16.md\",\"excerpt\":\"\\n<h2>16.1 基础知识</h2>\\n<div class=\\\"hint-container tip\\\">\\n<p class=\\\"hint-container-title\\\">提示</p>\\n<p>实际项目可以使用 <a href=\\\"http://socket.io\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">socket.io</a>,或者三方库,考虑的更周到,兼容性更好<br>\\nWebSocket 是一种在单个 TCP 连接上进行全双工通信的协议。在 Vue3 项目中封装 WebSocket 需要考虑以下几个关键点：</p>\\n</div>\\n<ol>\\n<li><strong>心跳检测</strong>: 定期发送心跳包，检测连接状态,避免掉线</li>\\n<li><strong>断线重连</strong>: 连接断开时自动重新连接</li>\\n<li><strong>消息处理</strong>: 统一的消息发送和接收处理</li>\\n<li><strong>状态管理</strong>: 使用 Pinia 管理 WebSocket 状态</li>\\n<li><strong>错误处理</strong>: 完善的错误处理机制</li>\\n</ol>\",\"autoDesc\":true}")
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
