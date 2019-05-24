<template>
    <ui-main>
        <template v-slot:header>
            <van-nav-bar :title="$route.path.replace('/demo-','')" left-arrow @click-left="$router.go(-1)"/>
        </template>


        <ui-card>
            <template v-slot:title>
                <span>子路由</span>
            </template>
            在路由表中用children构建子路由后,可以构建起两个ui-main之间的层级关系.
            通常用于处理页面返回后的数据和状态保持

            多个ui-main之前的$loading状态是隔离的,互不影响.
            
            <van-button @click="testLoading" size="small" type="primary">测试loading</van-button>
        </ui-card>

    </ui-main>
</template>
<script>
    export default {
        methods:{
            testLoading(){
                this.$loading.open()
                setTimeout(() => {
                    this.$loading.close()
                }, 3000);
            }
        },
    }
</script>