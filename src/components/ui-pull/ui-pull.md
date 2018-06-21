```html
    <ui-pull @load="getListData" v-model="listData" :total="total" ref="pull">
        <!-- 滚动层一定要有 -->
        <div class="scroll-y">
            <!-- for循环的列表... -->
        </div>
    </ui-pull>
```

```js
export default {
    data(){
        return:{
            listData:[],
            total:0,
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