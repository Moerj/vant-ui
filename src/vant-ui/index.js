// 2.2.4+更新支持vite脚手架

import 'vant/lib/index.css'; 
import Vant from 'vant';

import Card from './components/ui-card/index.js'
import Datetime from './components/ui-datetime/index.js'
import Img from './components/ui-img/index.js'
import Lightbox from './components/ui-lightbox/index.js'
import { Loading, LoadingGlobal } from './components/ui-loading/index.js'
import Main from './components/ui-main/index.js'
import Menu from './components/ui-menu/index.js'
import Page from './components/ui-page/index.js'
import Picker from './components/ui-picker/index.js'
import Pull from './components/ui-pull/index.js'
import Select from './components/ui-select/index.js'
import Timeline from './components/ui-timeline/index.js'
import Waterwall from './components/ui-waterwall/index.js'

const components = [
	Card,
	Datetime,
	Img,
	Lightbox,
	Loading,
	LoadingGlobal,
	Main,
	Menu,
	Page,
	Picker,
	Pull,
	Select,
	Timeline,
	Waterwall
]

export default {
	install: function (Vue) {

		Vue.use(Vant);

		components.forEach(component => {
			Vue.component(component.name, component)
		})
	}
}