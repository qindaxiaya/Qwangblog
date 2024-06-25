module.exports = [
  { text: "首页", link: "/" },
  {
    text: "电子专栏",
    link: "/column/", //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
			{ text: "《JavaScript教程》", link: "/note/javascript/" },
			{ text: "《ES6 教程》", link: "/note/es6/" },
			{ text: "《Vue》", link: "/note/vue/" },
			{ text: "《React》", link: "/note/react/" },
			{
				text: "《TypeScript 从零实现 axios》",
				link: "/note/typescript-axios/",
			},
			{
				text: "《Git》",
				link: "/note/git/",
			},
		],
  },
	
  {
    text: "前端相关",
    link: "/web/",
    items: [
      { text: "JS", link: "/pages/a61298/" },
      { text: "CSS", link: "/pages/3e8935/" },
      { text: "Vue", link: "/pages/6b451a/" },
    ],
  },
  {
    text: "技术文章",
    link: "/technology/",
    items: [
      { text: "相关技术", link: "/pages/9a7ee40fc232253e/" },
      { text: "GitHub技巧", link: "/pages/4c778760be26d8b3/" },
      { text: "博客搭建", link: "/pages/a5f73af5185fdf0a/" },
    ],
  },
  {
    text: "其他",
    link: "/more/",
    items: [
      { text: "学习", link: "/pages/f2a556/" },
      { text: "面试", link: "/pages/aea6571b7a8bae86/" },
      { text: "实用技巧", link: "/pages/baaa02/" },
    ],
  },
  { text: "关于", link: "/about/" },
  {
    text: "收藏",
    link: "/pages/beb6c0bd8a66cea6/",
    // items: [
    //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
    //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
    //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
    // ],
  },
  {
    text: "索引",
    link: "/archives/",
    items: [
      { text: "分类", link: "/categories/" },
      { text: "标签", link: "/tags/" },
      { text: "归档", link: "/archives/" },
    ],
  },
];
