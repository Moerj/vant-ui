let ip,activeIP=''
try {
    ip = require('./ip')
    activeIP = ip[ip.active]
    console.log(`当前ip代理: [${ip.active}]`, activeIP);
} catch (error) {
    console.log('\x1B[33m 尚未配置ip代理,请解压 config/ip.zip \x1b[0m:');
}

module.exports = {
    devServer: {
        port: 9300,
        proxy: {
            '/api': { //跨域配置标示
                target: `${activeIP}/api`, //所有访问标示的都被代理到这个地址,例如 http://后端域名/api
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            },
        }
    },
}