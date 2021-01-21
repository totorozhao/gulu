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
                collapsable: false, // 可选的, 默认值是 true,
                children: [
                    '/install/',
                    '/get-started/'
                ]
            },
            {
                title: '组件',
                children: [
                    '/components/input-demo-1',
                    '/components/'
                ],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            }
        ]
    }
}