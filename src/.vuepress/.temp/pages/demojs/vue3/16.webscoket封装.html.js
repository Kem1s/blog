import comp from "D:/code/test_code/vuepress_vue3/src/.vuepress/.temp/pages/demojs/vue3/16.webscoket封装.html.vue"
const data = JSON.parse("{\"path\":\"/demojs/vue3/16.webscoket%E5%B0%81%E8%A3%85.html\",\"title\":\"16. WebSocket 封装\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"16. WebSocket 封装 16.1 基础知识 WebSocket 是一种在单个 TCP 连接上进行全双工通信的协议。在 Vue3 项目中封装 WebSocket 需要考虑以下几个关键点： 心跳检测: 定期发送心跳包，检测连接状态,避免掉线 断线重连: 连接断开时自动重新连接 消息处理: 统一的消息发送和接收处理 状态管理: 使用 Pinia 管...\"},\"readingTime\":{\"minutes\":3.92,\"words\":1176},\"filePathRelative\":\"demojs/vue3/16.webscoket封装.md\",\"excerpt\":\"\\n<h2>16.1 基础知识</h2>\\n<p>WebSocket 是一种在单个 TCP 连接上进行全双工通信的协议。在 Vue3 项目中封装 WebSocket 需要考虑以下几个关键点：</p>\\n<ol>\\n<li><strong>心跳检测</strong>: 定期发送心跳包，检测连接状态,避免掉线</li>\\n<li><strong>断线重连</strong>: 连接断开时自动重新连接</li>\\n<li><strong>消息处理</strong>: 统一的消息发送和接收处理</li>\\n<li><strong>状态管理</strong>: 使用 Pinia 管理 WebSocket 状态</li>\\n<li><strong>错误处理</strong>: 完善的错误处理机制</li>\\n</ol>\",\"autoDesc\":true}")
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
