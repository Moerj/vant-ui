<template>
    <ui-main>
        <template v-slot:header>
            <van-nav-bar :title="$route.path.replace('/demo-','')" left-arrow @click-left="$router.replace('/demo')"/>
        </template>

        <div class="text-center">

            <ui-card>
                <template v-slot:title>
                    <span>ui-img</span>
                </template>
                创建带自适应尺寸的图片
            </ui-card>

            <ui-img :src="imgUrl" title="高清无码大图" style="width:100%;height:170px"></ui-img>
            <ui-card class="mb30">
                宽度100%  高度固定
            </ui-card>


            <ui-img :src="imgUrl" circle size="100"></ui-img>
            <ui-card class="mb30">
                宽高100px，circle圆形，size属性可带单位，默认px
            </ui-card>


            <ui-img :src="imgUrl" style="width:100px;height:80px"></ui-img>
            <ui-card class="mb30">
                宽100px 高80px
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