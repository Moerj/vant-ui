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
                    { src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4129624088,1274782233&fm=26&gp=0.jpg', },
                    { src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=927747843,353555255&fm=26&gp=0.jpg', },
                    { src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3755841181,3217444165&fm=26&gp=0.jpg', },
                    { src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2754825801,773274927&fm=26&gp=0.jpg', },
                    { src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2761763315,1123663049&fm=26&gp=0.jpg', },
                    { src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3622184301,1106551337&fm=15&gp=0.jpg', },
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