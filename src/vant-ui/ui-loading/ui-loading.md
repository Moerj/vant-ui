# 局部区域loading

## 调用方式

### 全局效果
```js
this.$loading.open() //开启
this.$loading.close() //关闭
```
>在有多个异步请求同时调时,你不需要理会互相之间的逻辑.因为组件内部会进行计数排序,你只需要正确操作每个请求loading的开与关.

### 局部效果
```html
<ui-loading title="加载中..." background="rgba(255,255,255,0.8)"></ui-loading>
```

## 参数

props       |  type    | default  |  说明
------------|----------|----------|----------
title       | String   | ''       |  标题
background  | String   | rgba(255,255,255,0.8) |  背景蒙层颜色