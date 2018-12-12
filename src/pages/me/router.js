export default [
    {
        path:'/me',
        name:'我的',
        meta:{root:true},
        component:()=>import('./index.vue')
    }
]