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
    export default {
        data() {
            let array = []
            let i = 1
            for (let i = 1; i <= 11; i++) {
                array.push({src: require(`./img/lightbox/${i}.jpg`)})
            }

            return {
                imgList: array
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