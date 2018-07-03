const isDev = process.env.NODE_ENV === 'development'
const routerArry = [
    {
        path:'/demo',
        component: () => import(/* webpackChunkName: "demo" */ './index')
    },
    {
        path:'/demo-style',
        component: () => import(/* webpackChunkName: "demo" */ './style')
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
]
export default isDev ? routerArry : null