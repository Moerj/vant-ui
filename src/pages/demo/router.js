export default [
    {
        path:'/demo',
        component: () => import(/* webpackChunkName: "demo" */ './index')
    },
    {
        path:'/demo-style',
        component: () => import(/* webpackChunkName: "demo" */ './style')
    },
    {
        path:'/demo-img',
        component: () => import(/* webpackChunkName: "demo" */ './img')
    },
    {
        path:'/demo-page',
        component: () => import(/* webpackChunkName: "demo" */ './page')
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
        path:'/demo-dropdown',
        component: () => import(/* webpackChunkName: "demo" */ './dropdown')
    },
    {
        path:'/demo-pull',
        component: () => import(/* webpackChunkName: "demo" */ './pull')
    },
]