export const categoriesMap = JSON.parse("{\"category\":{\"/\":{\"path\":\"/category/\",\"map\":{\"前端技术\":{\"path\":\"/category/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/\",\"indexes\":[0]},\"TypeScript\":{\"path\":\"/category/typescript/\",\"indexes\":[1,2,3,4]},\"学习记录\":{\"path\":\"/category/%E5%AD%A6%E4%B9%A0%E8%AE%B0%E5%BD%95/\",\"indexes\":[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]},\"Vue3\":{\"path\":\"/category/vue3/\",\"indexes\":[2,3,4]},\"Element-Plus\":{\"path\":\"/category/element-plus/\",\"indexes\":[2,3,4]},\"js面试题\":{\"path\":\"/category/js%E9%9D%A2%E8%AF%95%E9%A2%98/\",\"indexes\":[29]},\"vue3面试题\":{\"path\":\"/category/vue3%E9%9D%A2%E8%AF%95%E9%A2%98/\",\"indexes\":[30]},\"Promise\":{\"path\":\"/category/promise/\",\"indexes\":[31]},\"面试常问\":{\"path\":\"/category/%E9%9D%A2%E8%AF%95%E5%B8%B8%E9%97%AE/\",\"indexes\":[32]}}}},\"tag\":{\"/\":{\"path\":\"/tag/\",\"map\":{\"vue3\":{\"path\":\"/tag/vue3/\",\"indexes\":[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]},\"Element-plus\":{\"path\":\"/tag/element-plus/\",\"indexes\":[5,16]},\"vue-router\":{\"path\":\"/tag/vue-router/\",\"indexes\":[5,6,7,26]},\"vuex\":{\"path\":\"/tag/vuex/\",\"indexes\":[5]},\"pinia\":{\"path\":\"/tag/pinia/\",\"indexes\":[5,25]},\"slot\":{\"path\":\"/tag/slot/\",\"indexes\":[8]},\"plugin\":{\"path\":\"/tag/plugin/\",\"indexes\":[9,10]},\"axios\":{\"path\":\"/tag/axios/\",\"indexes\":[11]},\"alova\":{\"path\":\"/tag/alova/\",\"indexes\":[11]},\"WebSocket\":{\"path\":\"/tag/websocket/\",\"indexes\":[12]},\"beforeEach\":{\"path\":\"/tag/beforeeach/\",\"indexes\":[13]},\"跨域\":{\"path\":\"/tag/%E8%B7%A8%E5%9F%9F/\",\"indexes\":[14]},\"webpack\":{\"path\":\"/tag/webpack/\",\"indexes\":[15,17,19]},\"vite\":{\"path\":\"/tag/vite/\",\"indexes\":[15]},\"Element-ui\":{\"path\":\"/tag/element-ui/\",\"indexes\":[16]},\"Echarts\":{\"path\":\"/tag/echarts/\",\"indexes\":[18]},\"ref\":{\"path\":\"/tag/ref/\",\"indexes\":[20]},\"reactive\":{\"path\":\"/tag/reactive/\",\"indexes\":[20]},\"computed\":{\"path\":\"/tag/computed/\",\"indexes\":[20]},\"script setup\":{\"path\":\"/tag/script-setup/\",\"indexes\":[21,22,23,24]},\"vue2\":{\"path\":\"/tag/vue2/\",\"indexes\":[27,28]}}}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

