<template>
    <ui-main>
        <van-nav-bar slot="header" :title="$route.path.replace('/demo-','')" left-arrow @click-left="$router.replace('/demo')"/>

        <div class="text-center">

            <ui-card>
                <span slot="title">ui-img</span>
                创建带自适应尺寸的图片
            </ui-card>

            <ui-img :src="imgUrl" title="高清无码大图" style="width:100%;height:170px"></ui-img>
            <ui-card class="mb30">
                宽度100%  高度固定
            </ui-card>


            <ui-img :src="imgUrl" circle size="3"></ui-img>
            <ui-card class="mb30">
                宽高3rem，circle圆形，size属性可带单位，默认rem
            </ui-card>


            <ui-img :src="imgUrl" style="width:80px;height:50px"></ui-img>
            <ui-card class="mb30">
                宽80px 高50px
            </ui-card>
        </div>
    </ui-main>
</template>
<script>
    export default {
        data(){
            return {
                imgUrl:'//wx4.sinaimg.cn/orj360/8d65f675gy1ffv2lovprqj21kw11ykjo.jpg'
            }
        },
    }
</script>