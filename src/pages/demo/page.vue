<template>
    <ui-main>
        <van-nav-bar slot="header" :title="$route.path.replace('/demo-','')" left-arrow @click-left="$router.replace('/demo')"/>

        <ui-card>
            <span slot="title">ui-page</span>
            与ui-main嵌套子路由不同，子页面可以直接与父页面进行交互。
            <span class="f-color-red f07">
                需要注意的是，页面刷新后子页面不会保留状态。
            </span>

            <div class="mt2">
                <span class="mr1">父页面的计数: {{count}}</span>
                <van-button @click="$refs.newPage.open()" type="primary" size="small">点我尝试</van-button>
            </div>
        </ui-card>

        <ui-page ref="newPage" title="这是新页面">
            <div class="p15">
                <p>当前父页面计数+ {{count}}</p>
                <van-button @click="count++">增加计数</van-button>
            </div>
        </ui-page>
    </ui-main>
</template>
<script>
    export default {
        data(){
            return {
                showPage:false,
                count:0
            }
        },
    }
</script>