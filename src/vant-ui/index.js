//导入全部样式
import 'vant/lib/index.css'; 

// 主框架 vant-ui
import Vant from 'vant';

//引入并挂载jqlite，用于操作dom
import $ from 'jqlite'
window.$ = $

// 2.2.4+更新支持vite脚手架，若遇到这里报错请升级vant-ui版本
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