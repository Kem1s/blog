export const categoriesMap = JSON.parse("{\"category\":{\"/\":{\"path\":\"/category/\",\"map\":{\"前端技术\":{\"path\":\"/category/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/\",\"indexes\":[0]},\"TypeScript\":{\"path\":\"/category/typescript/\",\"indexes\":[1,2,3,4]},\"学习记录\":{\"path\":\"/category/%E5%AD%A6%E4%B9%A0%E8%AE%B0%E5%BD%95/\",\"indexes\":[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]},\"Vue3\":{\"path\":\"/category/vue3/\",\"indexes\":[2,3,4]},\"Element-Plus\":{\"path\":\"/category/element-plus/\",\"indexes\":[2,3,4]},\"js面试题\":{\"path\":\"/category/js%E9%9D%A2%E8%AF%95%E9%A2%98/\",\"indexes\":[29]},\"vue3面试题\":{\"path\":\"/category/vue3%E9%9D%A2%E8%AF%95%E9%A2%98/\",\"indexes\":[30]},\"Promise\":{\"path\":\"/category/promise/\",\"indexes\":[31]}}}},\"tag\":{\"/\":{\"path\":\"/tag/\",\"map\":{\"vue2\":{\"path\":\"/tag/vue2/\",\"indexes\":[5,6]},\"vue3\":{\"path\":\"/tag/vue3/\",\"indexes\":[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]},\"Element-plus\":{\"path\":\"/tag/element-plus/\",\"indexes\":[7,18]},\"vue-router\":{\"path\":\"/tag/vue-router/\",\"indexes\":[7,8,9,28]},\"vuex\":{\"path\":\"/tag/vuex/\",\"indexes\":[7]},\"pinia\":{\"path\":\"/tag/pinia/\",\"indexes\":[7,27]},\"slot\":{\"path\":\"/tag/slot/\",\"indexes\":[10]},\"plugin\":{\"path\":\"/tag/plugin/\",\"indexes\":[11,12]},\"axios\":{\"path\":\"/tag/axios/\",\"indexes\":[13]},\"alova\":{\"path\":\"/tag/alova/\",\"indexes\":[13]},\"WebSocket\":{\"path\":\"/tag/websocket/\",\"indexes\":[14]},\"beforeEach\":{\"path\":\"/tag/beforeeach/\",\"indexes\":[15]},\"跨域\":{\"path\":\"/tag/%E8%B7%A8%E5%9F%9F/\",\"indexes\":[16]},\"webpack\":{\"path\":\"/tag/webpack/\",\"indexes\":[17,19,21]},\"vite\":{\"path\":\"/tag/vite/\",\"indexes\":[17]},\"Element-ui\":{\"path\":\"/tag/element-ui/\",\"indexes\":[18]},\"Echarts\":{\"path\":\"/tag/echarts/\",\"indexes\":[20]},\"ref\":{\"path\":\"/tag/ref/\",\"indexes\":[22]},\"reactive\":{\"path\":\"/tag/reactive/\",\"indexes\":[22]},\"computed\":{\"path\":\"/tag/computed/\",\"indexes\":[22]},\"script setup\":{\"path\":\"/tag/script-setup/\",\"indexes\":[23,24,25,26]}}}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

