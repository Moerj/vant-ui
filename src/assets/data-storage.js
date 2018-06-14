/**
 * vue-data-storage
 * 数据保持
 * 
 * @author Moer
 * @version 0.0.4
 */

//@ts-check
export default {
    install(Vue) {

        function init(storageType) {
            return function sync(key, {
                scope = this.$route.fullPath,
                type = this.$data[key].constructor, //默认获取data原本类型
            }) {
                const vm = this
                const storage = window[storageType]
                if (vm.$data === undefined) {
                    console.error(vm, `Componet data no ready yelt. Don't use ${storageType} in beforeCreate hook. Please use in created or mounted`);
                    return
                }

                // Save key: /routerUrl?dataKey
                scope = scope + '?' + key

                // 页面初始化, data获取Storage
                let hisData = storage.getItem(scope)
                if (hisData) {
                    if (type === Object || type === Array) {
                        vm.$data[key] = JSON.parse(hisData)
                    } else if (type === Number) {
                        vm.$data[key] = Number(hisData) //区分历史数字与字符串类型
                    } else {
                        vm.$data[key] = hisData //作为字符串
                    }
                }

                // Storage同步data变化
                vm.$watch(key, function(newVal) {
                    if (type && newVal.constructor !== type) {
                        console.error(`[${storageType} error] ${key} expected ${type.name}. But got ${newVal.constructor.name}`, newVal);
                        return
                    }

                    let dataStr = typeof newVal === 'object' ? JSON.stringify(newVal) : newVal

                    storage.setItem(scope, dataStr)
                }, { deep: true })

            }
        }


        // this.$seeionStorage() \ this.$localStorage()
        Object.defineProperty(Vue.prototype, '$sessionStorage', {
            value: init('sessionStorage')
        });
        Object.defineProperty(Vue.prototype, '$localStorage', {
            value: init('localStorage')
        });


        // exprot default option
        // 使用配置方式来调用基本功能, 语法更简洁
        function optionHandler(vm, storageType) {
            const opt = vm.$options[storageType]
            const storage = (key, config) => {
                return vm['$' + storageType](key, config)
            }
            if (opt.constructor == Array) {
                opt.forEach((key) => {
                    storage(key, {})
                })

            } else if (typeof opt === 'string') {
                storage(opt, {})

            } else {
                for (let key in opt) {
                    storage(key, opt[key])
                }
            }
        }
        Vue.mixin({
            created() {
                this.$options.sessionStorage && optionHandler(this, 'sessionStorage')
                this.$options.localStorage && optionHandler(this, 'localStorage')

            }
        })

    }
}