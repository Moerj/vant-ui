import requireAll from './_requireAll'

// 加载组件、指令、配置
// 参数(模块文件夹路径, 是否包含子目录, 文件匹配的正则)
const ds = requireAll(require.context("@/directive", true, /^\.\/.*\.js$/));

export default {
    install: function (Vue) {
        for (let i = 0; i < ds.length; i++) {
            let d = ds[i].default

            // regist directive on Vue
            if (d.name) {
                Vue.directive(d.name, d)
            }
        }
    }
}
