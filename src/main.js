import Vue from 'vue'
import App from './App'

// js兼容性处理
import './assets/compatibility'

// 公共方法
import globalMethod from './assets/globalMethods'
Vue.use(globalMethod)

// 路由插件
import VueRouter from 'vue-router'
Vue.use(VueRouter);
// 路由集合
import routes from './assets/router';
const router = new VueRouter({
  routes
})

// http 模块
import axios from './assets/axios';
Vue.use(axios, {
    timeout: 20000,
    /** 跨域代理
     *  @填写代理地址 在ip.js中配置需要代理的域名, 比如 http://8.8.8.8
     *  @绑定代理 在vue.config.js中配置proxy选项, 比如 /api 开头的进行代理
     *  @页面中的请求 this.$http.post('/backstage/pieces/find')
     *  @实际代理路径 http://8.8.8.8/api/backstage/pieces/find
     */
    withCredentials: true,//启用跨域支持
    baseURL: "/api"
});


// 公共事件监听器
import eventHub from './assets/eventHub';
Vue.use(eventHub);

// 手势
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})

// 组件库
// import vantUI from 'vant-ui'; //npm库 - 正式项目请用这个
import vantUI from './vant-ui'; //本地库
Vue.use(vantUI);

// 框架样式
import '@/scss/index.scss';


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
