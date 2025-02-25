import Page from './ui-page.vue'

Page.install = function(Vue) {
	Vue.component(Page.name, Page)
}

export default Page