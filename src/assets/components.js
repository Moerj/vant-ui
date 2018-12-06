import requireAll from './_requireAll'

const components = requireAll(require.context("@/components", true, /^\.\/.*\.vue$/));

export default {
    install: function (Vue) {
        for (let i = 0; i < components.length; i++) {

            // cover js exports to component config
            if (components[i].name===undefined && components[i].default) {
                components[i] = components[i].default
            }

            // regist components on Vue
            if (components[i].name) {
                Vue.component(components[i].name, components[i])
            }else if(components[i].install){
                Vue.use(components[i])
            }
        }
    }
}
