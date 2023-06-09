import { defineConfig } from "vuepress/config"

export default defineConfig({
    title: "Moa.js",
    description:
        "基于Typescript装饰器的声明式Node后端框架，提供一系列新特性如声明式路由、控制反转、依赖注入",
    themeConfig: {
        nav: [
            { text: "首页", link: "/" },
            { text: "文档", link: "/docs/introduce/intro.html" },
        ],
        sidebar: {
            "/docs/": [
                {
                    title: "指南",
                    collapsable: false,
                    children: ["/docs/introduce/intro.html"],
                },
                {
                    title: "基础",
                    collapsable: false,
                    children: [
                        "/docs/base/start.html",
                        "/docs/base/controller.html",
                        "/docs/base/param.html",
                        "/docs/base/container.html"
                    ],
                },
                {
                    title: "框架原理",
                    collapsable: false,
                    children: [
                        "/docs/principle/decorator.html",
                        "/docs/principle/design.html"
                    ],
                },
            ],
        },
    },
})
