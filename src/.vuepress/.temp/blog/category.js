export const categoriesMap = JSON.parse("{\"category\":{\"/\":{\"path\":\"/category/\",\"map\":{\"使用指南\":{\"path\":\"/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/\",\"indexes\":[0]},\"TypeScript\":{\"path\":\"/category/typescript/\",\"indexes\":[1,2,3,4]},\"学习记录\":{\"path\":\"/category/%E5%AD%A6%E4%B9%A0%E8%AE%B0%E5%BD%95/\",\"indexes\":[5]},\"Vue3\":{\"path\":\"/category/vue3/\",\"indexes\":[2,3,4]},\"Element-Plus\":{\"path\":\"/category/element-plus/\",\"indexes\":[2,3,4]}}}},\"tag\":{\"/\":{\"path\":\"/tag/\",\"map\":{\"vue2\":{\"path\":\"/tag/vue2/\",\"indexes\":[5]}}}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

