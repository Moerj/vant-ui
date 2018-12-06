#图片

##调用方式

```html
    <ui-img src="http://img.png" size="2">图片的标题</ui-img>
```

##参数

props       |  type    | default  |  说明
------------|----------|----------|----------
src         | String   |          |  图片url地址
size        | String   | ''       |  同时设置宽高尺寸,单位rem
circle      | Boolean  | false    |  图片为圆形

slots       |  说明
------------|----------|
title       | 标题或操作按钮,浮动在图片底部