# Vant-ui
this is vant components extend  

这是vant组件库的扩展，其中包含vant原本所有组件以及本库的扩展组件。  
已支持最新的 <a href="https://youzan.github.io/vant" target="_blank">__vant 2.x__</a>

### <a href="http://moerj.com/vant-ui/#/demo-markdown" target="_blank">Online demo</a>

## 特性
- 更完善的组件库
- 高级选择器组件
- 图片画廊
- 多级菜单
- 支持无限层级页面

## 安装
```shell
npm i vant-ui
```

### 核心
1. vant-ui内部已自动安装vant,请勿重复安装vant
2. jqlite内部已自动安装, jquery的轻量库 (大小20k, gzip压缩5k)
```js
import vantUI from 'vant-ui';
Vue.use(vantUI);
```

### 样式
组件库是基于scss的，如果报错请安装scss依赖  
```shell
npm i sass-loader node-sass
```

选装, 如果你想使用组件库提供的样式
```js
import 'vant-ui/scss/base.scss'
```

## 浏览器支持
现代浏览器以及 Android 4.0+, iOS 6+


<br/><br/>

## vant-ui 移动端框架
如果你使用本脚手架搭建项目, 按以下操作

### 修改组件为远程仓库
```js
// main.js
import vantUI from 'vant-ui'; //npm库
// import vantUI from './vant-ui'; //本地库
```

### 删除新项目不需要的文件
- 删除本地组件库 src/vant-ui
- 删除 src/pages/demo