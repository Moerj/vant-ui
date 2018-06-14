// 注册公共的事件监听器

export default {
    install: function (Vue) {

        Object.defineProperty(Vue.prototype, '$eventHub', {
            value: new Vue()
        });


    }
}
