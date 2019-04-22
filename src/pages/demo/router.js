const isDev = process.env.NODE_ENV === 'development'
const routerArry = [
    // 基础框架
    {
        path:'/demo',
        component: () => import(/* webpackChunkName: "demo" */ './index')
    },
    {
        path:'/demo-style',
        component: () => import(/* webpackChunkName: "demo" */ './style')
    },

    // 扩展
    {
        path:'/demo-main',
        component: () => import(/* webpackChunkName: "demo" */ './main'),
        children:[
            {
                path:'/demo-main-child',
                component: () => import(/* webpackChunkName: "demo" */ './main-child')
            }
        ]
    },
    {
        path:'/demo-page',
        component: () => import(/* webpackChunkName: "demo" */ './page')
    },
    {
        path:'/demo-card',
        component: () => import(/* webpackChunkName: "demo" */ './card')
    },
    {
        path:'/demo-img',
        component: () => import(/* webpackChunkName: "demo" */ './img')
    },
    {
        path:'/demo-checkbox',
        component: () => import(/* webpackChunkName: "demo" */ './checkbox')
    },
    {
        path:'/demo-timeline',
        component: () => import(/* webpackChunkName: "demo" */ './timeline')
    },
    {
        path:'/demo-loading',
        component: () => import(/* webpackChunkName: "demo" */ './loading')
    },
    {
        path:'/demo-upload',
        component: () => import(/* webpackChunkName: "demo" */ './upload')
    },
    {
        path:'/demo-pull',
        component: () => import(/* webpackChunkName: "demo" */ './pull')
    },
    {
        path:'/demo-tab',
        component: () => import(/* webpackChunkName: "demo" */ './tab')
    },
    {
        path:'/demo-picker',
        component: () => import(/* webpackChunkName: "demo" */ './picker')
    },
    {
        path:'/demo-select',
        component: () => import(/* webpackChunkName: "demo" */ './select')
    },
    {
        path:'/demo-datetime',
        component: () => import(/* webpackChunkName: "demo" */ './datetime')
    },
    {
        path:'/demo-menu',
        component: () => import(/* webpackChunkName: "demo" */ './menu')
    },
    {
        path:'/demo-lightbox',
        component: () => import(/* webpackChunkName: "demo" */ './lightbox')
    },
]
export default isDev ? routerArry : null