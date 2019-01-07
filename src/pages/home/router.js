export default [
    {
        path:'/home',
        component: ()=>import('./home.vue'),
        meta:{root:true}
    }
]