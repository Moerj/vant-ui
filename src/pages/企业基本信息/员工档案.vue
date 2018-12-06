<template>
    <ui-main>
        <van-search placeholder="可搜索姓名、职务、部门" v-model="searchVal" />
        <!-- list -->
        <ui-pull @load="getListData" v-model="listData" :total="total" ref="pull">
            <div class="ui-content ui-border-bottom" v-for="item in listData">
                <div class="flex col-center">
                    <ui-img src="https://wx2.sinaimg.cn/thumb180/67dd74e0gy1fxv2qhi9okj20j60j6js7.jpg" size="50px"
                        class="mr10"></ui-img>
                    <div class="flex-1">
                        <div class="flex col-center mb5">
                            <icon v-if="true" name="venus" style="color:pink"></icon>
                            <icon v-else name="mars" style="color:pink"></icon>
                            <b>{{item.name}}</b>

                            <van-tag plain type="primary" class="ml10">在职</van-tag>
                            <van-tag plain color="#f2826a" class="ml10">业务员</van-tag>
                        </div>
                        <div class="flex row-between col-center f10">
                            <span>职务: 其他</span>
                            <span>
                                <icon name="phone" class="f-color-blue"></icon> 123456789
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </ui-pull>
    </ui-main>
</template>
<script>
    export default {
        data() {
            return{
                listData: [],
                total: 60, //来至接口的列表总数,滚动加载根据它来判断是否加载完所有列表,最终显示 END 标示
                searchVal:''
            }
        },
        methods: {
            getListData(params) {
                setTimeout(() => {
                    if (params && params.isDownScrolling) {
                        this.listData = []
                    }
                    for (let i = 0; i < 20; i++) {
                        this.listData.push({
                            name: '小咪咪'+this.listData.length
                        })
                    }
                    this.$refs.pull.endSuccess()
                }, 500);
            }
        },
        mounted(){
            this.getListData()
        },
    }

</script>
