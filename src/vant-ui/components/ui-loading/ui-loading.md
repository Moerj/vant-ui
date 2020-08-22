## 加载loading

### 全局调用
一个全局附带不可见蒙层的loading
```js
this.$loading.open() //开启
this.$loading.close() //关闭
```
>在有多个异步请求同时调时, 确保每个请求前调用一次open, 每个请求完成后调用一次close, 这样程序会自动计数以确保最后一次请求结束后再关闭loading

### 局部调用
```html
<ui-loading title="加载中..." background="rgba(255,255,255,0.8)"></ui-loading>
```

### 参数

props       |    说明        |  type    | default                 
------------|----------------|----------|-------------------------
title       |  标题          | String   |                      
background  |  背景蒙层颜色  | String   | rgba(255,255,255,0.8)