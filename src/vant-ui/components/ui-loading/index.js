import Loading from './ui-loading.vue'
import LoadingGlobal from './ui-loading-global.vue'

Loading.install = function(Vue) {
	Vue.component(Loading.name, Loading)
}

LoadingGlobal.install = function(Vue) {
	Vue.component(LoadingGlobal.name, LoadingGlobal)
}

export { Loading, LoadingGlobal }