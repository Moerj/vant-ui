## 局部区域loading

### 全局调用
当前页面的最外层必须使用 [**ui-main**](http://moerj.com/vant-ui/#/demo-markdown?nav=main)
```js
this.$loading.open() //开启
this.$loading.close() //关闭
```
>在有多个异步请求同时调时,你不需要理会互相之间的逻辑.因为组件内部会进行计数排序,你只需要正确操作每个请求loading的开与关.

### 局部调用
```html
<ui-loading title="加载中..." background="rgba(255,255,255,0.8)"></ui-loading>
```

### 参数

props       |    说明        |  type    | default                 
------------|----------------|----------|-------------------------
title       |  标题          | String   |                      
background  |  背景蒙层颜色  | String   | rgba(255,255,255,0.8)