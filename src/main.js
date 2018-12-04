// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// js兼容性处理
import './assets/compatibility'

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
    withCredentials: true,//启用跨域支持
    baseURL: "/api",//用代理解决跨域,这里配置了后端接口要以/api开头,如: http://106.14.39.87:8886/api/backstage/pieces/find
    timeout: 20000,
});

// vue字体库
import 'vue-awesome/icons'; //总图标库,如果不关心打包体积时一次引入全部图标
import Icon from 'vue-awesome/components/Icon'; //核心组件
Vue.component('icon', Icon);

// 主框架 vant-ui
import 'vant/lib/index.css';//导入全部样式
// import 'vant/packages/vant-css/src/index.css'// postcss定制样式,引入所有组件目前不支持定制主题 https://github.com/youzan/vant/issues/1663
import Vant from 'vant';
Vue.use(Vant);

// 公共事件监听器
import eventHub from './assets/eventHub';
Vue.use(eventHub);

// 手势
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})

// 自定义全局组件,请放到components/ 并以ui-开头命名
import components from './assets/components';
Vue.use(components);

// 自定义全局样式
import '@/scss/base.scss'; //基础布局样式
import '@/scss/ui.scss'; //ui样式,必须以 "ui-" 开头,例如: ui-block, ui-color
import '@/scss/rewrite.scss'; //重构的样式,对原本框架进行修改
import '@/scss/vue-transition.scss'; //vue的过渡动画




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
