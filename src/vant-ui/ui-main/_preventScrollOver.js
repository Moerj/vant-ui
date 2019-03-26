/** 
 * 阻止滚动露底,会挂载多个手势监听,慎用
 * 使用方法:
 * 在ui-main中mixins直接引入
 */

export default {
    mounted(){
        this.$nextTick(() => {
            this._preventScrollOver()
        })
    },
    methods: {
        _preventScrollOver() { //防止移动端滚动露底
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
    },
}