// 主框架 vant-ui
import 'vant/lib/index.css'; //导入全部样式
import Vant from 'vant';
import $ from 'jqlite'
window.$ = $

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

const components = requireAll(require.context("./components", true, /^\.\/.*\.vue$/));

export default {
    install: function (Vue) {
        
        Vue.use(Vant);

        for (let i = 0; i < components.length; i++) {

            // 兼容 import export 和 require module.export 两种规范
            if (components[i].name === undefined && components[i].default) {
                components[i] = components[i].default
            }

            // 注册或安装组件
            if (components[i].name) {
                Vue.component(components[i].name, components[i])
            } else if (components[i].install) {
                Vue.use(components[i])
            }
        }
    }
}