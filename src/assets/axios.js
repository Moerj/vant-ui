/**
 * axios-http
 * 基于Promise 的 HTTP 请求客户端
 * https://www.awesomes.cn/repo/mzabriskie/axios
 * 
 * @version 0.1.2
 * 
 * 使用:
 * http://www.jianshu.com/p/df464b26ae58
 */

import axios from 'axios';
import qs from 'qs'

export default {
    install: function (Vue, config) {

        config = Object.assign({
            // default config
            timeout: 10000,
        },config)

        if (config) {
            for (let key in config) {
                axios.defaults[key] = config[key]
            }
        }

        const instance = axios.create({

            headers: {
                'Content-Type':'application/x-www-form-urlencoded',//默认的请求头
            },
            
        });

        // request 请求拦截器
        instance.interceptors.request.use(config => {
            
            // 根据dataType获取headers
            const lib = {//dataType封装常用类型
                json: 'application/json',
                formData: 'multipart/form-data',
            }
            if (config.dataType) {
                for (const key in lib) {
                    if (config.dataType===key && lib.hasOwnProperty(key)) {
                        config.headers['Content-Type'] = lib[key]
                    }
                }
            }

            //处理post请求
            if (config.data) {
                const contentType = config.headers['Content-Type']

                // 发送json类型
                if (contentType.indexOf('application/json')>=0 && typeof config.data==='object') {
                    config.data = JSON.stringify(config.data)//转JSON字符串
                }

                // 发送form类型
                if(contentType.indexOf('application/x-www-form-urlencoded')>=0){
                    config.data = qs.stringify(config.data)//用qs处理data
                }
            }
            
            return config
        }, error => {
            // Do something with request error
            console.error(error) // for debug
            Promise.reject(error)
        })

        // response 响应拦截器
        instance.interceptors.response.use(res => {
            // 根据res的某项值来实现: 登录过期,请求权限等操作
            // if (!res) {//未登录
            //     window.location.href = window.location.origin + '#/login' //跳转到登录页面
            // }
            return res
        }, error => {
            // Do something with request error
            console.error(error) // for debug
            Promise.reject(error)
        })


        // 默认的调用 $axios 无基础配置
        Object.defineProperty(Vue.prototype, '$axios', {
            value: axios
        });


        // 封装$http方法, 包含配置, indicator:true开启加载指示器
        const ajax = (url, data, type) => {
            return new Promise(function (resolve, reject) {
                instance[type](url, data)
                    .then( res => {
                        resolve(res)
                    })
                    .catch( err => {
                        reject(err)
                    });
            })
        }
        
        const $http = function(config, data){
            if(typeof config === 'object'){
                return instance({
                    data: data,
                    ...config
                })
            }else if( typeof config === 'string'){
                // config is url
                return ajax(config, data, 'get')
            }
            throw new Error('$http must set first param: config or url')
        }

        $http.get = function(url, data){
            return ajax(url, data, 'get')
        }

        $http.post = function(url, data){
            return ajax(url, data, 'post')
        }

        Object.defineProperty(Vue.prototype, '$http', {
            value: $http
        })

        Object.defineProperty(Vue.prototype, '$httpDefaults', {
            /** $http 默认配置
             * this.$httpDefaults.baseURL = '/newBaseUrl' //修改baseUrl
             * this.$httpDefaults.timeout = 10000 //修改超时
             */
            value: instance.defaults
        })

    }
}
