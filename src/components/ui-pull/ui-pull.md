```html
    <ui-pull @load="getListData" v-model="listData" :total="total" ref="pull">
        <!-- for循环的列表... -->
    </ui-pull>
```

```js
export default {
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
            // 更直接.load()的区别在于reload带有loading效果
            this.$refs.pull.reload()
        }
    }
}
```

参数      |      类型       |      说明                                                      | 默认值
----------|-----------------|----------------------------------------------------------------|---------
@load     |    Funtion      | 上拉/下拉的回调,根据参数{isDownScrolling}来区分                |
v-model   |    Array        | 数据列表                                                       |
total     |    Number       |   总数据长度,用于上拉加载,必传                                 |   0
page-size |    Number       |   每次分页加载的条数,分页数低于默认值时必传                    |  10
