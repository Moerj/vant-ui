#主容器布局

```html
    <ui-main>
        <template v-slot:header>
            固定的顶部区域
        </template>

        <div>
            自动带滚动的主内容区域
        </div>

        <template v-slot:footer>
            固定的底部区域
        </template>
    </ui-main>
```