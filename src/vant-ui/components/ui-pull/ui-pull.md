## 下拉刷新/上拉加载

```html
<ui-pull @load="getListData" v-model="listData" :total="total" ref="pull">
    <!-- for循环的列表... -->
</ui-pull>
```

```js
data(){
    return{
        listData:[],
        total:0,//来至接口的列表总数,滚动加载根据它来判断是否加载完所有列表,最终显示 END 标示
    }
},
method:{
    mounted(){
        // 开始不需要手动调用getListData方法了,初始化时组件的@load方法会自动执行
    },
    getListData(){//请求数据的方法
        this.$http.post({
            pageSize:20,
            pageNumber:1,
        }).then(({data})=>{
            this.listData = data.listData
            this.total = data.total //将后端返回的数据总数赋值给total

            // 结束下拉刷新或上拉加载功能
            this.$refs.pull.endSuccess()
        })
    },
    reload(){//用于点击tab,进行列表重新加载
        // reload带有loading效果
        this.$refs.pull.reload()
    }
}
```

参数              |      说明                                               |      类型       | 默认值
------------------|---------------------------------------------------------|-----------------|---------
@load             |   上拉/下拉的回调,根据参数{isDownScrolling}来区分       |    Funtion      |
v-model           |   数据列表                                              |    Array        |
total             |   总数据长度,用于上拉加载,必传                          |    Number       |   0
page-size         |   每次分页加载的条数,分页数低于默认值时必传             |    Number       |  10
immediateCheck    |   是否在初始化时立即执行滚动位置检查                    |    Boolean      |  true
@swipeleft        |   手势v-touch的滑动回调-左                              |    Function     |  
@swiperight       |   手势v-touch的滑动回调-右                              |    Function     |  
empty-text        |   数据为空时的文案                                      |    String       |  暂无相关数据~
empty-icon        |   数据为空时的图标                                      |    String       |  默认无图标


方法        |      说明                                           
------------|-------------------------------------------
reload      |   进行列表重新加载,带有loading效果                  
endSuccess  |   数据加载完成后调用,转变为加载完成状态      


插槽        |      说明                                           
------------|-------------------------------------------
default     |   用于防止列表                  
empty       |   此插槽会动态显示,只有在数据为空切非手势操作中显示                  