module.exports = {
    title: 'UI 轮子',
    description: '一个好用的轮子',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/guide/' },
            { text: '交流', link: 'https://google.com' },
        ],
        sidebar: [{
                title: '入门', // 必要的
                // collapsable: false, // 可选的, 默认值是 true,
                children: [
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                title: '组件',
                collapsable: false,
                children: [
                    '/components/button',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/toast',
                    '/components/tabs',
                    '/components/popover',
                ],
            },

        ]
    }
}

// const path = require('path')
// module.exports = {
//     base: '/gulu/',
//     title: '轱辘UI',
//     description: '一个好用的UI框架',
//     themeConfig: {
//         nav: [
//             { text: '主页', link: '/' },
//             { text: '文档', link: '/guide/' },
//             { text: '交流', link: 'https://google.com' },
//         ],
//         sidebar: [{
//                 title: '入门',
//                 collapsable: false,
//                 children: [
//                     '/install/',
//                     '/get-started/',
//                 ]
//             },
//             {
//                 title: '组件',
//                 collapsable: false,
//                 children: [
//                     '/components/button',
//                     '/components/tabs',
//                     '/components/input',
//                     '/components/grid',
//                     '/components/layout',
//                     '/components/toast',
//                     '/components/popover',
//                     '/components/slides',
//                 ]
//             },

//         ]
//     },
// }