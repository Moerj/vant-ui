<template>
    <ui-main>
        <van-nav-bar slot="header" :title="$route.path.replace('/demo-','')" left-arrow @click-left="$router.replace('/demo')"/>

        <ui-card>
            <span slot="title">ui-page</span>
            与ui-main嵌套子路由不同，子页面可以直接与父页面进行交互。
            <span class="f-color-red f07">
                需要注意的是，页面刷新后子页面不会保留状态。
            </span>

        </ui-card>

        <van-button size="large" @click="$refs.newPage.open()" type="primary">列表数: {{list.length}}</van-button>

        <ui-page ref="newPage" title="这是新页面">
            <van-pull-refresh v-model="reloading" @refresh="onRefresh">
                <van-list v-model="loading" :finished="finished" @load="onLoad">
                    <van-cell v-for="item in list" :key="item" :title="item + ''" />
                </van-list>
            </van-pull-refresh>
        </ui-page>
    </ui-main>
</template>
<script>
    export default {
        data(){
            return {
                loading:false,
                finished:false,
                list:[],
                reloading:false
            }
        },
        methods: {
            onLoad() {//滚动加载
                setTimeout(() => {
                    for (let i = 0; i < 20; i++) {
                        this.list.push(this.list.length + 1);
                    }
                    this.loading = false;

                    if (this.list.length >= 100) {
                        this.finished = true;
                    }
                }, 1000);
            },
            onRefresh(){//下拉刷新
                setTimeout(() => {
                    let arr=[]
                    for (let i = 0; i < 20; i++) {
                        arr.push(arr.length + 1);
                        this.reloading = false;
                    }
                    this.list = arr
                    this.finished = false;
                }, 500);
            }
        },
    }
</script>