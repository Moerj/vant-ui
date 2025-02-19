const isDev = process.env.NODE_ENV === 'development'
const routerArry = [
    // 基础框架
    {
        path:'/demo',
        component: () => import('./index')
    },
    {
        path:'/demo-markdown',
        component: () => import('./markdown')
    },
    {
        path:'/demo-style',
        component: () => import('./style')
    },

    // 扩展
    {
        path:'/demo-main',
        component: () => import('./main'),
        name:'主容器',
        children:[
            {
                path:'/demo-main-child',
                component: () => import('./main-child')
            }
        ]
    },
    {
        path:'/demo-page',
        name:'子页面',
        component: () => import('./page')
    },
    {
        path:'/demo-card',
        name:'卡片',
        component: () => import('./card')
    },
    {
        path:'/demo-img',
        name:'图片',
        component: () => import('./img')
    },
    {
        path:'/demo-timeline',
        name:'时间线',
        component: () => import('./timeline')
    },
    {
        path:'/demo-loading',
        name:'加载等待',
        component: () => import('./loading')
    },
    {
        path:'/demo-pull',
        name:'上拉加载/下拉刷新',
        component: () => import('./pull')
    },
    {
        path:'/demo-picker',
        name:'单选器',
        component: () => import('./picker')
    },
    {
        path:'/demo-select',
        name:'高级选择器',
        component: () => import('./select')
    },
    {
        path:'/demo-datetime',
        name:'日期时间',
        component: () => import('./datetime')
    },
    {
        path:'/demo-menu',
        name:'多级菜单',
        component: () => import('./menu')
    },
    {
        path:'/demo-lightbox',
        name:'图片画廊',
        component: () => import('./lightbox')
    },
    {
        path:'/demo-waterwall',
        name:'防水墙',
        component: () => import('./waterwall')
    },
]
export default isDev ? routerArry : null