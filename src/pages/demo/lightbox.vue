<!--
 * @Author: yilong
 * @Date: 2025-03-03 11:13:51
 * @LastEditors: yilong
 * @LastEditTime: 2025-03-03 11:18:05
 * @Descripttion: 
-->
<style lang="scss" scoped>
    .img-item{
        width: 30%;
        height: 120px;
        margin: 0 5px 10px 5px;
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>
<template>
    <ui-main>
        <template v-slot:header>
            <van-nav-bar :title="$route.path.replace('/demo-','')" left-arrow @click-left="$router.replace('/demo')" />
        </template>

        <ui-card>
            <template v-slot:title>
                <span>lightbox</span>
            </template>
            画廊是一个独立的弹窗组件, 通常配合图片列表进行展示
        </ui-card>

        <!-- img list -->
        <div class="flex flex-wrap">
            <div @click="openLightbox(i)" v-for="(item,i) in imgList" :style="`background-image: url(${item.src});`" class="img-item"></div>
        </div>

        <!-- 类似弹出层的调用方式 -->
        <ui-lightbox :items="imgList" ref="lightbox"></ui-lightbox>

    </ui-main>
</template>
<script>
		import Img1 from './img/lightbox/1.jpg'
		import Img2 from './img/lightbox/2.jpg'
		import Img3 from './img/lightbox/3.jpg'
		import Img4 from './img/lightbox/4.jpg'
		import Img5 from './img/lightbox/5.jpg'
		import Img6 from './img/lightbox/6.jpg'
		import Img7 from './img/lightbox/7.jpg'
		import Img8 from './img/lightbox/8.jpg'
		import Img9 from './img/lightbox/9.jpg'
		import Img10 from './img/lightbox/10.jpg'
		import Img11 from './img/lightbox/11.jpg'
    export default {
        data() {
            

            return {
                imgList: [
									{ src: Img1 },
									{ src: Img2 },
									{ src: Img3 },
									{ src: Img4 },
									{ src: Img5 },
									{ src: Img6 },
									{ src: Img7 },
									{ src: Img8 },
									{ src: Img9 },
									{ src: Img10 },
									{ src: Img11 }
								]
            }
        },
        methods: {
            openLightbox(index = 0) {
                // 画廊组件开启,index可指定初始图片
                this.$refs.lightbox.open(index)
            }
        }
    }
</script>