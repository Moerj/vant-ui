<style lang="scss" scoped>
    .ui-tab{
        width: 100%;
        position: relative;
        background-color: #fff;
        box-shadow: 0 2px 3px rgba($color: black, $alpha: .1);
        white-space: nowrap;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;
        display: flex;
    }
    @mixin linear-background() {
        $bg: rgba(#26a2ff,.9);
        background: linear-gradient(to left, darken($bg,10%) , lighten($bg,10%));
    }
    .ui-tab-line{
        height: 3px;
        position: absolute;
        bottom: 0;
        left:0;
        transition: .4s;
        @include linear-background;

    }
    
</style>
<template>
    <div class="ui-tab" :style="tabStyle">
        <slot></slot>
        <i class="ui-tab-line" :style="subscriptStyle" ref="subscript"></i>
    </div>
</template>
<script>
    export default {
        name:'ui-tab',
        props:{
            value:'',
        },
        data(){
            return {
                subscriptStyle:{},
            }
        },
        computed:{
            tabStyle(){
                let o = {}
                if (this.scroll) {
                    o['overflow-x']='auto'
                    o['display']='block'
                }
                return o
            }
        },
        mounted(){
            this.$on('tab-click',(label) => {
                this.$emit('input', label)
            })

            this.moveSubscript()
        },
        methods:{
            moveSubscript(){//下标定位
                this.$nextTick(() => {
                    
                    const items = this.$el.children
                    for (let i = 0; i < items.length; i++) {
                        const item = items[i]
                        if (item.classList.contains('item-active')) {
                            let $label = item.querySelector('.item-label')
                            this.subscriptStyle = {
                                opacity: 1,
                                width: $label.clientWidth + 'px',
                                transform: `translate3d(${$label.offsetLeft}px,0,0)`
                            }
                            break
                        }
                    }
                })
            }
        },
        watch:{
            value(v){
                if (v) {
                    this.moveSubscript()
                }else{
                    this.subscriptStyle.opacity = 0
                }
            }
        },
    }
</script>