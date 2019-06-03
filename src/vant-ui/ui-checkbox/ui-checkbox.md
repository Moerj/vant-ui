## 复选框

>此组件即将废弃, 请使用 <a href="https://youzan.github.io/vant/1.x/#/zh-CN/checkbox">van-checkbox</a>

### 调用方式

```html
<ui-checkbox v-model="checked" name="inputName" label="labelString"></ui-checkbox>
```

### 参数

props         | 说明                        |  type    | default  |
--------------|-----------------------------|----------|----------|
v-model       | 初始是否选中                | Boolean  | false    |
name          | input原生name属性           | String   |          |
label         | 标题                        | String   |          |
color         | 选项框的颜色值              | String   |          |
disabled      | 禁用状态                    | Boolean  | false    |
default       | 初始值(优先级高于v-model)   | Boolean  |          |