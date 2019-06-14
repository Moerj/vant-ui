<template>
    <ui-main class="bg-white">
        <template v-slot:header>
            <van-nav-bar :title="$route.path.replace('/demo-','')" left-arrow @click-left="$router.replace('/demo')"/>
        </template>

        <ui-card>
            <template v-slot:title>
                <span>$loading 全局遮罩</span>
            </template>
            在ui-main组件创建一个全屏遮罩层,锁定所有滚动条
            

            <van-button @click="openLoading" type="primary" size="small">开启</van-button>
            <div class="c-orange">$loading.open()开启,$loading.close()关闭</div>
        </ui-card>

        
        <ui-card>
            <template v-slot:title>
                <span>ui-loading 局部遮罩</span>
            </template>
            用html标签创建一块loading区域, 遮罩覆盖在该区域上方。
            可以自定义组件的加载标题和背景色。
            
            <div class="p05 c-orange">用 <van-button @click="isLoading=!isLoading" type="primary" size="small">v-if</van-button> 来控制loading的开启关闭</div>
        </ui-card>


        <div>
            <ui-loading v-if="isLoading" title="加载中..." background="rgba(222, 230, 247, 0.8)"></ui-loading>
            <img src="~./img/loading-bg.jpg" class="w-100" style="display: inherit;">
        </div>

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