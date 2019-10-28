import Vue from 'vue'

/*监听input状态，屏幕滚动到input，上下居中
 *在安卓手机上屏幕尺寸变化会产生resize事件。所以监听resize事件。
 *然后定位到input框。
 */
if (/Android/gi.test(navigator.userAgent)) {
    window.addEventListener('resize', function () {
        if (document.activeElement.tagName == 'INPUT' || document.activeElement.tagName == 'TEXTAREA') {
            setTimeout(function () {
                document.activeElement.scrollIntoViewIfNeeded();
            }, 0);
        }
    })
}

// forEach低版本浏览器兼容
if (!Array.prototype.forEach) {
    Object.defineProperty(Array.prototype, 'forEach', {
        value: function (forEachCallback) {
            for (let i = 0; i < this.length; i++) {
                forEachCallback(this[i], i, this)
            }
        }
    })
}

// 安卓物理返回按钮, app需自行调用此方法
window.APP_BACK = function(){
    // 带蒙层的模态窗出现时,返回为点击模态窗
    // vant弹出层
    let modal = document.querySelector('.van-overlay')
    if (modal && modal.style.display!=='none') {
        modal.click()
        return true
    }

    // 根据class获取所有页面上的返回按钮
    const backButtons = document.querySelectorAll('.van-nav-bar__left')
    // 获取一个倒序排列的按钮组,触发返回点击将从最后一个开始
    const group = Array.from(backButtons).reverse()
    for (let i = 0; i < group.length; i++) {
        let button = group[i]
        let isHiddren = false
        let parent = button.parentNode 
        // 递归检查父元素状态,来判断按钮是否隐藏
        while (!isHiddren && parent.tagName !== 'BODY') {
            if (parent.style.display === 'none') {
                isHiddren=true
            }
            parent = parent.parentNode
        }
        // 确保此返回按钮可见后,触发点击
        if (!isHiddren) {
            button.click()
            return true
        }
    }

    // 根节点页面,不再返回
    return false
}
