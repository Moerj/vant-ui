// 2.2.4+更新支持vite脚手架

import 'vant/lib/index.css'; 
import Vant from 'vant';

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