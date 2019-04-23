<style lang="scss" scoped>
    .button-slot {//自定义按钮
        float: right;
        >* {
            width: 44px;
            height: 44px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
        }
    }

</style>
<template>
    <!-- Root element of PhotoSwipe. Must have class pswp. -->
    <div ref="pswp" class="pswp" tabindex="-1" role="dialog" aria-hidden="true">

        <!-- Background of PhotoSwipe. 
         It's a separate element as animating opacity is faster than rgba(). -->
        <div class="pswp__bg"></div>

        <!-- Slides wrapper with overflow:hidden. -->
        <div class="pswp__scroll-wrap">

            <!-- Container that holds slides. 
            PhotoSwipe keeps only 3 of them in the DOM to save memory.
            Don't modify these 3 pswp__item elements, data is added later on. -->
            <div class="pswp__container">
                <div class="pswp__item"></div>
                <div class="pswp__item"></div>
                <div class="pswp__item"></div>
            </div>

            <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
            <div class="pswp__ui pswp__ui--hidden">

                <div class="pswp__top-bar">

                    <!--  Controls are self-explanatory. Order can be changed. -->

                    <div class="pswp__counter"></div>

                    <a class="pswp__button pswp__button--close" title="Close (Esc)" @click="$emit('close')"></a>

                    <!-- <button class="pswp__button pswp__button--share" title="Share"></button> -->

                    <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

                    <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

                    <!-- 自定义按钮 -->
                    <div class="button-slot">
                        <slot name="button"></slot>
                    </div>

                    <!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->
                    <!-- element will get class pswp__preloader--active when preloader is running -->
                    <div class="pswp__preloader">
                        <div class="pswp__preloader__icn">
                            <div class="pswp__preloader__cut">
                                <div class="pswp__preloader__donut"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                    <div class="pswp__share-tooltip"></div>
                </div>

                <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
                </button>

                <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
                </button>

                <div class="pswp__caption">
                    <div class="pswp__caption__center"></div>
                </div>

            </div>

        </div>

    </div>
</template>
<script>
    import PhotoSwipe from 'photoswipe'
    import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default'
    import 'photoswipe/dist/photoswipe.css'
    import 'photoswipe/dist/default-skin/default-skin.css'
    export default {
        name:'ui-lightbox',
        props: {
            items: Array,
            options: Object
        },
        data() {
            return {
                gallery: null
            }
        },
        methods: {
            close() {
                this.gallery.destroy()
            },
            open(index = 0) {
                let opt = {
                    history: false, //不需要在query追加历史记录
                    index: index, //初始打开的图片索引
                }
                opt = Object.assign({}, opt, this.options)

                // Initializes and opens PhotoSwipe
                this.gallery = new PhotoSwipe(this.$refs.pswp, PhotoSwipeUI_Default, this.items, opt);

                this.gallery.init();
            },
            reinit(){//重新渲染
                if (this.gallery) {
                    this.gallery.invalidateCurrItems(); // reinit Items
                    this.gallery.updateSize(true); // reinit Items
                }
            },
            imgResize(){// 当图片尺寸为 0,开启本地动态计算
                if (!this.items.length) return;
                this.items.forEach((item)=>{
                    const autoSize = !item.w || !item.h
                    if (item.src && autoSize) {
                        const img = new Image(); 
                        img.onload = ()=>{
                            item.w = img.naturalWidth
                            item.h = img.naturalHeight
                            this.reinit()
                        }
                        img.src = item.src
                    }
                })
            }
        },
        mounted(){
            document.body.appendChild(this.$refs.pswp)
            if (this.items.length>0) {
                this.imgResize()
            }
        },
        beforeDestroy(){
            document.body.removeChild(this.$refs.pswp)
        },
        watch:{
            items(){
                this.imgResize()
            }
        },
    }

</script>
