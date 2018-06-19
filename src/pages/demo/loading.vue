<template>
    <ui-main class="bg-white">
        <van-nav-bar slot="header" :title="$route.path.replace('/demo-','')" left-arrow @click-left="$router.replace('/demo')"/>

        <ui-card>
            <span slot="title">ui-loading 局部遮罩</span>
            用html标签创建一块loading区域, 遮罩覆盖在该区域上方。
            可以自定义组件的加载标题和背景色。
            
            <div class="p05 f-color-orange">用 <van-button @click="isLoading=!isLoading" type="primary" size="small">v-if</van-button> 来控制loading的开启关闭</div>
        </ui-card>


        <div>
            <ui-loading v-if="isLoading" title="加载中..." background="rgba(222, 230, 247, 0.8)"></ui-loading>
            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=286787381,2726460676&fm=27&gp=0.jpg" class="w-100" style="display: inherit;">
        </div>

        <ui-card>
            <span slot="title">$loading 全局遮罩</span>
            在ui-main组件创建一个全屏遮罩层,锁定所有滚动条
            

            <van-button @click="openLoading" type="primary" size="small">开启</van-button>
            <div class="f-color-orange">$loading.open()开启,$loading.close()关闭</div>
        </ui-card>
    </ui-main>
</template>
<script>
    export default {
        data(){
            return {
                isLoading:true
            }
        },
        methods:{
            openLoading(){
                this.$loading.open()
                setTimeout(() => {
                    this.$loading.close()
                }, 2000);
            }
        },
    }
</script>