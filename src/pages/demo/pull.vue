<template>
    <ui-main>
        <template v-slot:header>
            <van-nav-bar :title="$route.path.replace('/demo-','')" left-arrow @click-left="$router.replace('/demo')"/>
            <ui-card>
                <template v-slot:title>
                    <div class="flex row-between">
                        <span >ui-pull</span>
                        <a href="https://github.com/mescroll/mescroll" target="_blank" class="f07 c-orange">文档地址</a>
                    </div>
                </template>
                <ol>
                    <li>@load="下拉/上拉统一回调" </li>
                    <li>回调参数中isDownScrolling代表下拉</li>
                    <li>获取实例 this.$refs[实例名称]</li>
                    <li>完成后记得调用 this.$refs[实例名称].endSuccess() </li>
                </ol>
            </ui-card>
        </template>

        <ui-pull @load="loadData" v-model="dataList" :total="total" :num.sync="pageNumber" ref="uiPull">
            <van-cell v-for="(item,i) in dataList" :key="i" :title="'单元格' + i" value="内容" label="描述信息" />
        </ui-pull>
    </ui-main>
</template>
<script>
    export default {
        data(){
            return {
                dataList:[],
                total:60,//总数据量
                pageSize:20,//每页多少条数据
                pageNumber:1,//当前页
            }
        },
        methods:{
            loadData({isDownScrolling}){
                if (isDownScrolling) {//下拉刷新
                    setTimeout(() => {
                        // 重新请求数据
                        let arr=[]
                        for (let i = 0; i < this.pageSize; i++) {
                            arr.push({ title:'标题' })
                        }
                        this.dataList=arr
                        this.loadSuccess()
                    }, 1000);
                    
                }else{
                    setTimeout(() => {
                        for (let i = 0; i < this.pageSize; i++) {
                            this.dataList.push({ title:'标题' })
                        }
                        this.loadSuccess()
                    }, 1000);
                }
            },
            loadSuccess(){//标记刷新或加载完成
                this.$refs.uiPull.endSuccess()
            }
        },
    }
</script>