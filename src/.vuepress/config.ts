import { defineUserConfig } from "vuepress"

import theme from "./theme.js"

export default defineUserConfig({
    base: "/blog/", // 这个对应github的pages地址

    lang: "zh-CN",
    title: "小铭同学",
    description: "小铭同学的博客",

    theme,

    // 和 PWA 一起启用
    // shouldPrefetch: false,
})
