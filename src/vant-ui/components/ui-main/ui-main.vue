<style lang="scss">
    .ui-main{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        .ui-main-content{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
        }
        .ui-main-header{
            z-index: 1;
        }
        .ui-main-scroll{
            overflow: hidden;
            flex:1;
            height: 100%;
        }
        .ui-main-popup{// 模态窗
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            z-index: 3001;
        }
        .ui-main-footer{
            z-index: 1;
        }
        .ui-main-router{//二级路由
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
        }

    }

</style>
<template>
    <div class="ui-main">

        <div class="ui-main-content" ref="content">
            <!--header 可选-->
            <div class="ui-main-header">
                <slot name="header"></slot>
            </div>
            
            <!-- body -->
            <div class="ui-main-scroll" :class="{'scroll-y':scrollActive}" ref="scroll-box">
                <slot></slot>
            </div>

            <!-- footer 可选 -->
            <div class="ui-main-footer">
                <slot name="footer"></slot>
            </div>

            <!--popup 弹出层 可选-->
            <div class="ui-main-popup">
                <slot name="popup"></slot>
            </div>

            
        </div>

        <router-view class="ui-main-router"></router-view>
    </div>
</template>
<script>
    export default {
        name: 'ui-main',
        version: '2.0.5',
        data () {
            return {
                parentUiMainContent:null,
                scrollActive: true,
                
            }
        },
        mounted () {
            this.$eventHub.$on('ui-main-scroll',this.toggleScroll)
            this.$nextTick(() => {
                //获取父级ui-main 如果有的话
                let parentUiMain = this.$el.parentElement
                if (parentUiMain && parentUiMain.classList.contains('ui-main')) {
                    this.parentUiMainContent = parentUiMain.querySelector('.ui-main-content')
                }

                this.hideParentContent()

            })
        },
        beforeDestroy () {
            this.$eventHub.$off('ui-main-scroll',this.toggleScroll)
            this.ShowParentContent()
        },
        methods: {
             hideParentContent(){// 子路由激活,隐藏父级ui-main-content
                if(this.parentUiMainContent) {
                    // 使用占位隐藏,防止组件渲染错误 (例如el-table组件display:none会触发重绘)
                    this.parentUiMainContent.style.visibility = 'hidden'
                }
            },
            ShowParentContent(){// 子路由销毁,显示父级ui-main-content
                if(this.parentUiMainContent) {
                    this.parentUiMainContent.style.visibility = ''
                }
            },
            toggleScroll(lock){
                this.scrollActive = lock
            },
        },
        
    }
</script>