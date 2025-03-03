# Vant-ui
这是vant2扩展库，其中包含vant2原本所有组件以及本库的扩展组件。  
<a href="https://youzan.github.io/vant" target="_blank">__vant 2.x__</a>

注意：该组件库对应Vue2， 如果使用Vue3则单独使用Vant4就行了。

### <a href="http://moerj.com/vant-ui/#/demo-markdown" target="_blank">在线demo</a>

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
vant-ui内部已自动安装vant2,请勿重复安装vant

```js
import vantUI from 'vant-ui'
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

## 部署demo
```
npm run build-demo
```
使用ftp 将dist目录中的内容，推送到到 /upload/vant-ui