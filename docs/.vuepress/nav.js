module.exports = [
    { text: '首页', link: '/' },
    {
        text: '前端文章',
        link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [ // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
            {
                text: '学习教程',
                items: [
                    { text: '《JavaScript教程》', link: '/note/javascript/' },
                    { text: '《ES6 教程》', link: '/note/es6/' },
                    { text: '《Vue》', link: '/note/vue/' },
                    { text: '《React》', link: '/note/react/' },
                    { text: '《TypeScript 从零实现 axios》', link: '/note/typescript-axios/'},
                    { text: '《Git》', link: '/note/git/' },
                ],
            },

            {
                text: '技术文章',
                link: '/technology/',
                items: [
                    { text: 'JavaScript', link: '/pages/8143cc480faf9a11/' },
                    { text: 'TypeScript', link: '/pages/51afd6/' },
                    { text: 'HTML', link: '/pages/8309a5b876fc95e3/' },
                    { text: 'CSS', link: '/pages/0a83b083bdf257cb/' },
                    { text: 'JS设计模式总结',link: '/pages/4643cd/' },
                    { text: '常用工具', link: '/pages/9a7ee40fc232253e/' },
                    { text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/' },
                    { text: 'Nodejs', link: '/pages/117708e0af7f0bd9/' },
                    { text: '博客搭建', link: '/pages/41f87d890d0a02af/' },
                ],
            },
        ],
    },
    {
        text: '工作总结',
        link: '/learn/',
        items: [
            { text: '学习规划', link: '/pages/beb6c0bd8a66cea6/' },
            { text: '学习总结', link: '/pages/beb6c0bd8a66cea6/' },
        ],
    },
    {
        text: '随笔',
        link: '/life/',
        items: [
            { text: '读书笔记', link: '/pages/beb6c0bd8a66cea6/' },
            { text: '生活随笔', link: '/pages/beb6c0bd8a66cea6/' },
            { text: '吐槽大会', link: '/pages/beb6c0bd8a66cea6/' },
        ],
    },
    {
        text: '面试',
        link: '/interview/',
        items: [
            { text: '前端八股文', link: '/pages/beb6c0bd8a66cea6/' },
            { text: '重难点总结', link: '/pages/beb6c0bd8a66cea6/' },
        ],
    },
    {
        text: '宝藏网站',
        link: '/pages/beb6c0bd8a66cea6/',
    },
    {
        text: '文章检索',
        link: '/archives/',
        items: [
            { text: '分类', link: '/categories/' },
            { text: '标签', link: '/tags/' },
            { text: '归档', link: '/archives/' },
        ],
    },
    {
        text: '其他',
        link: '/more/',
        items: [
            { text: '关于本站', link: '/about/' },
            { text: '更新日志', link: '/about/' },
            { text: '友情链接', link: '/about/' },
        ],
    },
]
