const isDev = process.env.NODE_ENV === 'development'
const routerArry = [
    // 基础框架
    {
        path:'/demo',
        component: () => import(/* webpackChunkName: "demo" */ './index')
    },
    {
        path:'/demo-markdown',
        component: () => import(/* webpackChunkName: "demo" */ './markdown')
    },
    {
        path:'/demo-style',
        component: () => import(/* webpackChunkName: "demo" */ './style')
    },

    // 扩展
    {
        path:'/demo-main',
        component: () => import(/* webpackChunkName: "demo" */ './main'),
        name:'主容器',
        children:[
            {
                path:'/demo-main-child',
                component: () => import(/* webpackChunkName: "demo" */ './main-child')
            }
        ]
    },
    {
        path:'/demo-page',
        name:'子页面',
        component: () => import(/* webpackChunkName: "demo" */ './page')
    },
    {
        path:'/demo-card',
        name:'卡片',
        component: () => import(/* webpackChunkName: "demo" */ './card')
    },
    {
        path:'/demo-img',
        name:'图片',
        component: () => import(/* webpackChunkName: "demo" */ './img')
    },
    {
        path:'/demo-timeline',
        name:'时间线',
        component: () => import(/* webpackChunkName: "demo" */ './timeline')
    },
    {
        path:'/demo-loading',
        name:'加载等待',
        component: () => import(/* webpackChunkName: "demo" */ './loading')
    },
    {
        path:'/demo-pull',
        name:'上拉加载/下拉刷新',
        component: () => import(/* webpackChunkName: "demo" */ './pull')
    },
    {
        path:'/demo-picker',
        name:'单选器',
        component: () => import(/* webpackChunkName: "demo" */ './picker')
    },
    {
        path:'/demo-select',
        name:'高级选择器',
        component: () => import(/* webpackChunkName: "demo" */ './select')
    },
    {
        path:'/demo-datetime',
        name:'日期时间',
        component: () => import(/* webpackChunkName: "demo" */ './datetime')
    },
    {
        path:'/demo-menu',
        name:'多级菜单',
        component: () => import(/* webpackChunkName: "demo" */ './menu')
    },
    {
        path:'/demo-lightbox',
        name:'图片画廊',
        component: () => import(/* webpackChunkName: "demo" */ './lightbox')
    },
]
export default isDev ? routerArry : null