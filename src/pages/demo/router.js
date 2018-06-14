export default [
    {
        path:'/demo',
        component: () => import('./index')
    },
    {
        path:'/demo-style',
        component: () => import('./style')
    },
    {
        path:'/demo-img',
        component: () => import('./img')
    },
    {
        path:'/demo-page',
        component: () => import('./page')
    },
]