<template>
    <ui-main>
        <template v-slot:header>
            <van-nav-bar :title="$route.path.replace('/demo-','')" left-arrow @click-left="$router.replace('/demo')"/>
        </template>

        <ui-card>
            <template v-slot:title>
                <span>ui-page</span>
            </template>
            与ui-main嵌套子路由不同，子页面可以直接与父页面进行交互。
            <span class="c-red f07">
                需要注意的是，页面刷新后子页面不会保留状态。
            </span>
        </ui-card>

        <van-button size="large" @click="$refs.page.open()" type="primary">列表数: {{list.length}}</van-button>

        <ui-page ref="page" title="这是新页面">
            <!-- 若要自定义header部分, 则去掉title参数 -->
            <!-- <template v-slot:title>
                <van-nav-bar title="自定义header" left-arrow @click-left="$router.replace('/demo')"/>
            </template> -->
            

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