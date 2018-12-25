// 全局方法
const STORAGE_KEY = 'user'
export default {
    install: function (Vue) {
        /** 时间格式化
         * @param date 待格式化的 时间字符串 或 Date对象
         * @param fmt {String} 时间格式 如 yyyy-MM-dd
         */
        Object.defineProperty(Vue.prototype, '$date', {
            value: function dateFtt(date,fmt='yyyy-MM-dd hh:mm:ss') { //author: meizz
                if (!date) {
                    return ''
                }
                if (typeof date ==='string') {
                    date = date.replace(/\-/g,'/')//手机端浏览器需将 - 替换为 /
                }
                //兼容字符串模式和时间戳,字符格式如: 2018-08-01
                if (typeof date !== 'object') {
                    date = new Date(date)
                }

                let o = {
                    "M+": date.getMonth() + 1, //月份
                    "d+": date.getDate(), //日
                    "h+": date.getHours(), //小时
                    "m+": date.getMinutes(), //分
                    "s+": date.getSeconds(), //秒
                    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
                    "S": date.getMilliseconds() //毫秒
                };
                if (/(y+)/.test(fmt))
                    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
                for (let k in o)
                    if (new RegExp("(" + k + ")").test(fmt))
                        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                return fmt;
            }
        });

        // 用户信息
        Object.defineProperty(Vue.prototype, '$user', {
            get() {
                let ls = sessionStorage.getItem(STORAGE_KEY) || localStorage.getItem(STORAGE_KEY)
                if (ls === '') {
                    return undefined
                }
                return JSON.parse(ls)
            },
            set(newValue) {
                sessionStorage.setItem(STORAGE_KEY,JSON.stringify(newValue))
            },
        })

        // 保存用户信息到本地
        Object.defineProperty(Vue.prototype, '$userSave', {
            value:function(data){
                localStorage.setItem(STORAGE_KEY,JSON.stringify(data))
            }
        })

        // 安全获取用户信息下的指定字段
        Object.defineProperty(Vue.prototype, '$userInfo', {
            value:function(infoKey){
                if (infoKey===undefined) {
                    throw new Error('$userInfo必须传入一个key参数')
                }
                let ls = sessionStorage.getItem(STORAGE_KEY) || localStorage.getItem(STORAGE_KEY)
                if (ls) {
                    let json = JSON.parse(ls)
                    for (const key in json) {
                        if (key===infoKey) {
                            return json[key]
                        }
                    }
                }
                return ''
            }
        })

    }
}

