<template>
    <ui-main>
        <van-search placeholder="可搜索姓名、职务、部门" v-model="searchVal" />
        <!-- list -->
        <ui-pull @load="getListData" v-model="listData" :total="total" ref="pull">
            <div class="ui-content ui-border-bottom" v-for="item in listData" @click="openDetails(item)">
                <div class="flex col-center">
                    <ui-img src="https://p9.pstatp.com/list/190x124/da76000168f782723b65" size="50px"></ui-img>
                    <div class="flex-1 ml10">
                        <div class="flex col-center row-between mb10">
                            <span>
                                <icon v-if="true" name="venus" style="color:pink"></icon>
                                <icon v-else name="mars" style="color:pink"></icon>
                                <b>{{item.name}}</b>
                            </span>

                            <span>
                                <van-tag plain type="primary" class="ml10">在职</van-tag>
                                <van-tag plain color="#f2826a" class="ml10">业务员</van-tag>
                            </span>
                        </div>
                        <div class="flex row-between col-center f10">
                            <span>职务: 其他</span>
                            <a href="tel:10000" class="flex col-center f-color-blue">
                                <icon name="phone" class="mr3"></icon> 123456789
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </ui-pull>


        <ui-page title="员工档案详情" ref="details">
            <detilas :data="detailsData"></detilas>
        </ui-page>
    </ui-main>
</template>
<script>
    export default {
        components:{
            detilas: ()=>import('./员工档案-详情.vue')
        },
        data() {
            return{
                listData: [],
                total: 60, //来至接口的列表总数,滚动加载根据它来判断是否加载完所有列表,最终显示 END 标示
                searchVal:'',
                detailsData:{}
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
                            name: '土鳖的馬叔叔'+this.listData.length
                        })
                    }
                    this.$refs.pull.endSuccess()
                }, 500);
            },
            openDetails(item){
                this.detailsData = item
                this.$refs.details.open()
            }
        },
        mounted(){
            this.getListData()
        },
    }

</script>
