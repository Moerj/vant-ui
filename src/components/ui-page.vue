<style lang="scss">
    @import '~@/scss/public.scss';
    .ui-page{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 10;
        transform: translate3d(0,0,0);
        display: flex;
        flex-direction: column;
        background-color: $ui-bg-grey;
        .mint-header{
            z-index: 1;
            .mint-button{
                width: 2rem;
                height: 2rem;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                .mintui-back{
                    font-size: 1rem;
                }
            }
        }
    }
    
</style>
<template>
    <!-- transition层不会生成dom -->
    <transition :name="transition">
        <div ref="el" class="ui-page" v-show="active">
            <van-nav-bar v-if="title" :title="title" left-arrow @click-left="close()"></van-nav-bar>
            <slot name="header" v-if="visited"></slot>
            <div class="flex-1 scroll-y" v-if="visited">
                <slot></slot>
            </div>
            <slot name="footer" v-if="visited"></slot>
        </div>
    </transition>
</template>
<script>
    export default {
        name:'ui-page',
        props:{
            title:String,
            transition:{
                type:String,
                default:'right'
            }
        },
        data () {
            return {
                active: false,
                visited: false,//是否激活访问过, 确保插槽中的组件生命周期完全执行
            }
        },
        methods:{
            close(){
                this.active = false
                this.$emit('close')
            },
            open(){//用于外部调用, 打开当前弹出层
                document.body.appendChild(this.$refs.el)//每次打开将当前page排列到最后,保证不会被之前的page遮挡
                this.active = true
                this.visited = true
            }
        },
        mounted(){
            // 创建前将主要内容插入到body, 页面嵌套的层级问题
            document.body.appendChild(this.$refs.el)
        },
        beforeDestroy(){
            // 销毁前还原主要内容,确保销毁dom
            const parent = this.$parent.$el || this.$parent
            parent.appendChild(this.$refs.el)
        },
    }
</script>