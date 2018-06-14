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
            // z-index: 20;
        }

        .ui-main-loading{
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: 99999;
            display: flex;
            justify-content: center;
            align-items: center;
            >.loading-item{
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 1rem;
                background-color: rgba(black,.5);
                border-radius: 4px;
            }
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

            <div v-if="isLoading" class="ui-main-loading">
                <div class="loading-item">
                    <icon name="brands/react" scale="1.5" spin class="f-color-white"></icon>
                </div>
            </div>
        </div>

        <transition name="fade">
            <router-view class="ui-main-router"></router-view>
        </transition>
    </div>
</template>
<script>
    // 全局loading功能
    import Vue from 'vue'
    Object.defineProperty(Vue.prototype, '$loading', {
        value: {
            open(){
                Vue.prototype.$eventHub.$emit('$loading',true)
            },
            close(){
                Vue.prototype.$eventHub.$emit('$loading',false)
            }
        }
    })
    export default {
        name: 'ui-main',
        version: '0.3.3',
        data () {
            return {
                parentUiMainContent:null,
                scrollActive: true,
                isLoading: false,
            }
        },
        mounted () {
            this.$eventHub.$on('$loading',this.toggleLoading)
            this.$eventHub.$on('ui-main-scroll',this.toggleScroll)
            this.$nextTick(() => {
                //获取父级ui-main 如果有的话
                let parentUiMain = this.$el.parentElement
                if (parentUiMain && parentUiMain.classList.contains('ui-main')) {
                    this.parentUiMainContent = parentUiMain.querySelector('.ui-main-content')
                }

                this.hideParentContent()

                // 阻止滚动露底,会挂载多个手势监听,慎用
                // this._preventScrollOver()
            })
        },
        beforeDestroy () {
            this.$eventHub.$off('$loading',this.toggleLoading)
            this.$eventHub.$off('ui-main-scroll',this.toggleScroll)
            this.ShowParentContent()
        },
        methods: {
            hideParentContent(){// 子路由激活,隐藏父级ui-main-content
                if(this.parentUiMainContent){
                    this.parentUiMainContent.style.display = 'none'
                }
            },
            ShowParentContent(){// 子路由销毁,显示父级ui-main-content
                if(this.parentUiMainContent){
                    this.parentUiMainContent.style.display = ''
                }
            },
            _preventScrollOver(){//防止移动端滚动露底
                let content = this.$refs['content']

                // 防止内容区域滚到底后引起页面整体的滚动
                let startY;

                this.$refs['scroll-box'].addEventListener('touchstart', function (e) {
                    startY = e.touches[0].clientY;
                });

                this.$refs['scroll-box'].addEventListener('touchmove', function (e) {
                    // 当前容器已被隐藏则不动作
                    if (content.style.display === 'none') {
                        return
                    }

                    // 高位表示向上滚动
                    // 底位表示向下滚动
                    // 1容许 0禁止
                    let status = '11';
                    let ele = this;

                    let currentY = e.touches[0].clientY;

                    if (ele.scrollTop === 0) {
                        // 如果内容小于容器则同时禁止上下滚动
                        status = ele.offsetHeight >= ele.scrollHeight ? '00' : '01';
                    } else if (ele.scrollTop + ele.offsetHeight >= ele.scrollHeight) {
                        // 已经滚到底部了只能向上滚动
                        status = '10';
                    }

                    if (status != '11') {
                        // 判断当前的滚动方向
                        let direction = currentY - startY > 0 ? '10' : '01';
                        // 操作方向和当前允许状态求与运算，运算结果为0，就说明不允许该方向滚动，则禁止默认事件，阻止滚动
                        if (!(parseInt(status, 2) & parseInt(direction, 2))) {
                            e.preventDefault()
                        }
                    }
                });
            },
            toggleLoading(v){
                this.isLoading = v //开关loading层
                this.toggleScroll(!v)
            },
            toggleScroll(lock){
                this.scrollActive = lock
            },
        }
    }
</script>