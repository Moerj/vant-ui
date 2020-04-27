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
                    { src: 'http://wx3.sinaimg.cn/large/006NJCErly1g3ofda622gj30j60ssq5x.jpg', },
                    { src: 'http://wx2.sinaimg.cn/large/006NJCErly1g3ojogk8qnj30j60uugpj.jpg', },
                    { src: 'http://wx2.sinaimg.cn/large/006WCzeoly1g3odc8iy6jj31400qo445.jpg', },
                    { src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587976714688&di=6d8ec177c35e201ae5d5e0d5199632a1&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fb597965516a3068eb3141cfc97010d6dccf985da.jpg', },
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