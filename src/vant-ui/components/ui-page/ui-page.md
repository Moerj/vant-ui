## page
弹出层页面,可实现无限级相互叠加


```html
<ui-page title="页面标题">
    页面内容...
</ui-page>
```

### 参数

参数名      |  说明     |  type    | default  
------------|-----------|----------|----------
title       |  页面标题,会生成顶部区域,并附带一个返回按钮,若需自定义顶部区域时请忽略此参数 | String   | ''       
redraw      |  每次开启和关闭是否重绘其中内容               | Boolean  | false    
transition  |  页面动画效果, 相关动画见vue-transition.scss  | String   | right    


插槽        |  说明
------------|----------
default     |  主区域,自带滚动条
header      |  顶部区域
footer      |  底部区域


方法        |  说明
------------|----------
open        |  打开页面 $refs.page.open()
close       |  关闭页面

