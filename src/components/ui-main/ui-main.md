#主容器布局

##调用方式

```html
    <ui-main>
        <div slot="header"></div>

        <div>
            自动带滚动的主内容区域
        </div>

        <div slot="footer"></div>
    </ui-main>
```

参数名      |  type    | default       |  说明
------------|----------|---------------|----------
stack       | Boolean  |     false     |  子路由是否以堆叠方式加载,堆叠模式将不会控制css隐藏父页面
