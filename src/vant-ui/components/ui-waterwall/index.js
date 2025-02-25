import Waterwall from './index.vue'

Waterwall.install = function(Vue) {
	Vue.component(Waterwall.name, Waterwall)
}

export default Waterwall