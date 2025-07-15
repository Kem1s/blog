import { sidebar } from "vuepress-theme-hope"
// 左侧菜单设置
export default sidebar({
    "/": [
        "",
        {
            text: "前端相关", // 标题
            icon: "book", // 图标
            prefix: "demojs/", // 自动生成目录
            link: "demojs/", // 点击左侧标题,默认打开的页面
            children: "structure",
        },
        {
            text: "其他",
            icon: "book",
            prefix: "demoOther/",
            children: "structure",
        },
        "intro", // 个人介绍页
        // {
        //     text: "文章",
        //     icon: "book",
        //     prefix: "posts/",
        //     children: "structure",
        // },
        // {
        //     text: "如何使用",
        //     icon: "laptop-code",
        //     prefix: "demo/",
        //     link: "demo/",
        //     children: "structure",
        // },
        // {
        //     text: "幻灯片",
        //     icon: "person-chalkboard",
        //     link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
        // },
    ],
})
