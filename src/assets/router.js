import requireAll from './_requireAll'

// 引入所有路由配置
const routerObj = requireAll(require.context("@/pages", true, /router\.js$/));
let routes = [];
for(let i = 0, len = routerObj.length; i < len; i++){
    if (!routerObj[i].default) {
        continue
    }
    if (routerObj[i].default.length>0) {
        // 数组类型的路由
        for(let n = 0, le = routerObj[i].default.length; n < le; n++){
            routes.push(routerObj[i].default[n])
        }
    }else{
        routes.push(routerObj[i].default)
    }
}

export default [
    {
        path: '/',
        redirect: '/login', //重定向
    },

    ...routes
]