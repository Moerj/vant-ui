## 多级菜单
顶部主菜单,用于切换到子页面


```html
<ui-menu :options="items" v-model="activeMenu"></ui-menu>
```

```js
data(){
    return{
        activeMenu: '', //当前激活的页面
        items: [{
            // 导航名称
            text: '企业基础信息',
            // 该导航下所有的可选项
            children: [{
                    // 名称
                    text: '安全生产基础信息',
                    // id，作为匹配选中状态的标识
                    id: 'safeInfo',
                },
                {
                    text: '企业基础信息',
                    id: 'enterpriseInfo'
                },
                {
                    text: '员工档案',
                    id: 'employeeProfile'
                },
            ]
        }]
    }
}
```

参数名      |  说明         |   type    | default  
------------|---------------|----------|----------
v-model     |  选中项的id   | String   |          
options     |  数据源       | Array    |         

