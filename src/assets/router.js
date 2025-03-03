// 动态导入所有路由配置
import RouteDemo from '../pages/demo/router.js'
import RouteHome from '../pages/home/router.js'
import RouteLogin from '../pages/login/router.js'
import RouteMe from '../pages/me/router.js'
let routes = [
	...RouteDemo,
	...RouteHome,
	...RouteMe,
	RouteLogin,
];

export default [
    {
        path: '/',
        redirect: '/demo-markdown', // 重定向
    },
    ...routes
];