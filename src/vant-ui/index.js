// 主框架 vant-ui
import 'vant/lib/index.css'; //导入全部样式
import Vant from 'vant';
import $ from 'jqlite'
window.$ = $

const components = import.meta.glob("./components/**/*.vue", { eager: true });

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