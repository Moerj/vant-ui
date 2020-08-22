<style lang="scss" scoped>
    .ui-loading-global{
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
</style>
<template>
    <div v-if="isLoading" class="ui-loading-global" @touchmove.prevent>
        <div class="loading-item">
            <van-loading color="white" />
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    export default {
        name:'ui-loading-global',
        beforeCreate(){
            // 挂载this.$loading方法在当前页面实例 
            // 注意: this是当前ui-main实例, this.$parent才是页面实例.
            const _this = this
            Object.defineProperty(Vue.prototype, '$loading', {
                value: {
                    open(){
                        _this.loadingCount++
                    },
                    close(){
                        if(_this.loadingCount>0){
                            _this.loadingCount--
                        }
                    }
                }
            })
        },
        data(){
            return {
                isLoading: false,
                loadingCount:0,
            }
        },
        watch:{
            loadingCount(v){
                const B = Boolean(v)
                this.isLoading = B //开关loading层
            }
        }
    }
</script>