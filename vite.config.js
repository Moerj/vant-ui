import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue2'
import path from 'path'

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


export default defineConfig({
    base: './',
    server: {
        port: 9000,
    },
    build: {
        sourcemap: false,
    },
    plugins: [Vue()],
    resolve: {
        alias: [
            {
                find: /^~/,
                replacement: ''
            },
            {
                find: '@',
                replacement: path.resolve(__dirname, 'src')
            }
        ],
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    define: {
        // 将构建时间作为版本号，常用于判断代码是否更新
        __APP_VERSION__: getFullDate()
    }

})