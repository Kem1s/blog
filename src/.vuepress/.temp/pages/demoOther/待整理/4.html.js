import comp from "D:/code/test_code/vuepress_vue3/src/.vuepress/.temp/pages/demoOther/待整理/4.html.vue"
const data = JSON.parse("{\"path\":\"/demoOther/%E5%BE%85%E6%95%B4%E7%90%86/4.html\",\"title\":\"面试常问\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":4,\"category\":[\"面试常问\"],\"description\":\"面试常问 1.vue2 的双向绑定和 vue3 的双向绑定有什么区别 vue2 是通过 Object.defineProperty 实现的，vue3 是通过 Proxy 实现的; defineProperty 是 Object 的方法,监听对象时,需要通过遍历对象已有的属性,对每一个属性进行劫持,通过 getter/setter 来实现数据的劫持,当数...\"},\"readingTime\":{\"minutes\":14.46,\"words\":4337},\"filePathRelative\":\"demoOther/待整理/4.md\",\"excerpt\":\"\\n<h3>1.vue2 的双向绑定和 vue3 的双向绑定有什么区别</h3>\\n<p>vue2 是通过 Object.defineProperty 实现的，vue3 是通过 Proxy 实现的;<br>\\ndefineProperty 是 Object 的方法,监听对象时,需要通过遍历对象<strong>已有的属性</strong>,对每一个属性进行劫持,通过 getter/setter 来实现数据的劫持,当数据发生变化时,会触发 getter/setter,从而通知视图更新;这也导致以下几个问题:</p>\\n<ol>\\n<li>无法监听对象新增/删除属性</li>\\n<li>遍历对象属性时,如果属性值是对象,需要递归遍历,性能较低</li>\\n<li>通过对象方法操作数组时,无法监听到数组的变化(vue 重新了数组几个方法,稍微弥补了这个问题)</li>\\n</ol>\",\"autoDesc\":true}")
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
