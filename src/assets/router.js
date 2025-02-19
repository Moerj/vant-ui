// 动态导入所有路由配置
const modules = import.meta.glob('@/pages/**/router.js', { eager: true });
let routes = [];

for (const path in modules) {
    const module = modules[path];
    if (module.default) {
        if (Array.isArray(module.default)) {
            routes.push(...module.default);
        } else {
            routes.push(module.default);
        }
    }
}

export default [
    {
        path: '/',
        redirect: '/demo-markdown', // 重定向
    },
    ...routes
];