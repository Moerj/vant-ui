# 复选框

>此组件即将废弃, 请使用 <a href="https://youzan.github.io/vant/1.x/#/zh-CN/checkbox">van-checkbox</a>

## 调用方式

```html
<ui-checkbox v-model="checked" name="inputName" label="labelString"></ui-checkbox>
```

## 参数

props       |  type    | default  |  说明
------------|----------|----------|----------
v-model     | Boolean  | false    |  初始是否选中
name        | String   | ''       |  input原生name属性
label       | String   | ''       |  标题
color       | String   |          |  选项框的颜色值
disabled    | Boolean  | false    |  禁用状态
default     | Boolean  |          |  初始值(优先级高于v-model)