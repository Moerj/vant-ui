const webpack = require('webpack')
const comporessionPlugin = require('compression-webpack-plugin')
const IP = require('./ip')

function getFullDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    return `"${year}-${month}-${day} ${hour}:${minute}:${second}"`
}

module.exports = {
    publicPath: './',
    devServer: {
        port: 9000,
        proxy: {
            '/api': { //跨域配置标示
                target: `${IP}/api`, //所有访问标示的都被代理到这个地址,例如 http://后端域名/api
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            },
        },
    },
    productionSourceMap: false,
    configureWebpack: config => {
        // all mode
        let Default = [
            new webpack.DefinePlugin({
                'process.env': {
                    APP_VERSION: getFullDate() // 生成发布版本号,调用 process.env.APP_VERSION
                }
            })
        ]

        // build mode
        let Build = []
        if (process.env.NODE_ENV === 'production' || process.env.VUE_APP_MODE === 'demo') {
            Build = [
                new comporessionPlugin({
                    test: /\.js$|\.html$|\.css/, //匹配文件名
                    threshold: 10240, //对超过10k的数据进行压缩
                    deleteOriginalAssets: false //是否删除原文件
                })
            ]
        }

        return { plugins: [...Default, ...Build] }
    }
}