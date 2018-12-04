export default [
    {
        path:'/home',
        meta:{root:true},
        component: ()=>import('./index')
    },
    {
        path:'/workplace',
        meta:{root:true},
        component: ()=>import('./workplace')
    },
]