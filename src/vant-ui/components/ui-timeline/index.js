import Timeline from './ui-timeline.vue'

Timeline.install = function(Vue) {
	Vue.component(Timeline.name, Timeline)
}

export default Timeline