<style lang="scss">
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
            touch-action: none; //触摸滑动时候不产生默认行为
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
<script>
    import Vue from 'vue'
    let loadingCount=0
    const $loading = `<div class="ui-loading-global">
                    <div class="loading-item">
                        <span class="van-loading__spinner van-loading__spinner--circular" style="color: white;">
                            <svg viewBox="25 25 50 50" class="van-loading__circular">
                                <circle cx="50" cy="50" r="20" fill="none"></circle>
                            </svg>
                        </span>
                    </div>
                </div>`
            
    // 挂载this.$loading方法在当前页面实例 
    if (!Vue.prototype.$loading) {
        Object.defineProperty(Vue.prototype, '$loading', {
            value: {
                open(){
                    loadingCount++
                    if (loadingCount==1) {
                        $('body').append($loading)
                    }
                },
                close(){
                    loadingCount--
                    if (loadingCount<=0) {
                        $('body > .ui-loading-global').remove()
                    }
                }
            }
        })
    }

    export default {
        name:'ui-loading-global',
    }
</script>