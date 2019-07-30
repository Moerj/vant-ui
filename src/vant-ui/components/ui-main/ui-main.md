## 主容器

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

### 路由页面
使用路由页面必须保证父页和路由页都使用了 **ui-main**

```js
// route.js
export default [
    {
        path:'/parent',
        name:'父页',
        component: () => import('parent.vue'),
        children:[
            {
                path:'/child',
                name:'路由页',
                component: () => import('child.vue'),
            }
        ]
    }
]
```

### 页面加载等待
参考 [**loading**](http://moerj.com/vant-ui/#/demo-markdown?nav=loading)