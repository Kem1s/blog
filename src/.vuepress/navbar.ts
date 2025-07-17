import { navbar } from "vuepress-theme-hope"

// 顶部导航 + 下拉菜单 配置
export default navbar([
    "/",
    "/demojs/", // 前端相关 (方式1:只会生成顶部导航,没有子菜单,顶部菜单名称和图标在目录下README.md中设置)
    {
        text: "其他",
        icon: "book",
        prefix: "/demoOther/",
        children: [
            "typescript",
            {
                text: "ts应用",
                prefix: "TS应用/",
                children: ["1", "2", "3"],
            },
            {
                text: "面试题相关",
                prefix: "待整理/",
                children: ["1", "2", "3", "4"],
            },
        ],
    }, // 其他 (方式2:对象式配置,显示顶部导航+子菜单,prefix匹配目录,children可以是完整配置或者文件名)
    // "/demo/", // 官方功能配置演示
    // {
    //     text: "博文",
    //     icon: "pen-to-square",
    //     prefix: "/posts/",
    //     children: [
    //         {
    //             text: "苹果",
    //             icon: "pen-to-square",
    //             prefix: "apple/",
    //             children: [{ text: "苹果1", icon: "pen-to-square", link: "1" }, { text: "苹果2", icon: "pen-to-square", link: "2" }, "3", "4"],
    //         },
    //         {
    //             text: "香蕉",
    //             icon: "pen-to-square",
    //             prefix: "banana/",
    //             children: [
    //                 {
    //                     text: "香蕉 1",
    //                     icon: "pen-to-square",
    //                     link: "1",
    //                 },
    //                 {
    //                     text: "香蕉 2",
    //                     icon: "pen-to-square",
    //                     link: "2",
    //                 },
    //                 "3",
    //                 "4",
    //             ],
    //         },
    //         { text: "樱桃", icon: "pen-to-square", link: "cherry" },
    //         { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
    //         "tomato",
    //         "strawberry",
    //     ],
    // },
    // {
    //     text: "V2 文档",
    //     icon: "book",
    //     link: "https://theme-hope.vuejs.press/zh/",
    // },
])
