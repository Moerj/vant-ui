// 2.2.3以及以前版本，使用webpack打包时，可以使用这个文件

import 'vant/lib/index.css';
import Vant from 'vant';


function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}
const components = requireAll(require.context("./components", true, /^\.\/.*\.vue$/));

export default {
    install: function (Vue) {

        Vue.use(Vant);

        for (const k in components) {
            const component = components[k].default
            if (component.name) {
                Vue.component(component.name, component)
            } else if (component.install) {
                Vue.use(component)
            }
        }
    }
}