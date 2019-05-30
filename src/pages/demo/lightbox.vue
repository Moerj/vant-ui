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
            return {
                imgList: [
                    { src: 'https://drscdn.500px.org/photo/307110551/q%3D80_h%3D450/v2?webp=true&sig=0324cc8dc8869ba3afcefa1389ec31b1e8e783c0a8a5b186b86d176535e5921d', },
                    { src: 'https://drscdn.500px.org/photo/306628861/q%3D80_h%3D600/v2?webp=true&sig=0af9941d352d9ccdc775d0ad8524bf85b68c6ae255033ce33beb079762950328', },
                    { src: 'https://drscdn.500px.org/photo/306650741/q%3D80_h%3D600/v2?webp=true&sig=3ef7de017a4f8566bf6cf0a45b1c62339c11d49f1e0f1417233e972f6138e440', },
                    { src: 'https://drscdn.500px.org/photo/306406027/q%3D80_h%3D600/v2?webp=true&sig=f97e91bbe7180b9b5961e68f202113127410877b5c8e9b49293348fa61e61aa1', },
                    { src: 'https://drscdn.500px.org/photo/298697005/q%3D80_h%3D600_k%3D1/v2?webp=true&sig=1f04c3ca1b1072985c317040c8460b05c0ac70f4ca0fde3710cbc1c20edae815', },
                    { src: 'https://drscdn.500px.org/photo/303543585/q%3D80_h%3D450/v2?webp=true&sig=40076e09e7a7740f44beda3e06658578d6252c6c759793fac10446770c2cb779', },
                    { src: 'https://wx3.sinaimg.cn/mw1024/006SSVT6gy1fv3g63tdy0j31kw11xqpb.jpg', },
                    { src: 'https://wx1.sinaimg.cn/mw1024/006SSVT6gy1fv3g63sfiej31kw11xqpu.jpg', },
                    { src: 'https://wx2.sinaimg.cn/mw1024/006SSVT6gy1fv3g63tep9j31kw11xhaw.jpg', },
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