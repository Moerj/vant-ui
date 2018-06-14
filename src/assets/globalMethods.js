// 全局方法
const STORAGE_KEY = 'user'
export default {
    install: function (Vue) {
        // pc端域名,用于获取二维码
        Object.defineProperty(Vue.prototype, '$serverUrl', {
            value: process.env.NODE_ENV === 'development'?'/zl-web':'http://49.4.64.239:9090/zl-web'
        });

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

        // 获取用户信息下的指定字段
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

        //----------[增加常用方法]----------//
        /**
         * 判断变量是否为字符串。
         *
         * @param o 变量
         * @returns {Boolean} 是否为字符串：
         * <ol>
         *    <li>true-是；</li>
         *    <li>false-否。</li>
         * </ol>
         */
        Object.defineProperty(Vue.prototype, '$isString', {
            value: (o) => {
                try {
                    return (Object.prototype.toString.call(o) === '[object String]');
                } catch (e) {
                    console.error(e.message);

                    return false;
                }
            }
        });

        /**
         * 判断变量是否为对象。
         *
         * @param o 变量
         * @returns {Boolean} 是否为对象：
         * <ol>
         *    <li>true-是；</li>
         *    <li>false-否。</li>
         * </ol>
         */
        Object.defineProperty(Vue.prototype, '$isObject', {
            value: (o) => {
                try {
                    return (Object.prototype.toString.call(o) === '[object Object]');
                } catch (e) {
                    console.error(e.message);

                    return false;
                }
            }
        });

        /**
         * 判断变量是否为数字。
         *
         * @param o 变量
         * @returns {Boolean} 是否为数字：
         * <ol>
         *    <li>true-是；</li>
         *    <li>false-否。</li>
         * </ol>
         */
        Object.defineProperty(Vue.prototype, '$isNumber', {
            value: (o) => {
                try {
                    return (Object.prototype.toString.call(o) === '[object Number]');
                } catch (e) {
                    console.error(e.message);

                    return false;
                }
            }
        });

        /**
         * 判断变量是否为数字字符串。
         *
         * @param o 变量
         * @returns {Boolean} 是否为数字字符串：
         * <ol>
         *    <li>true-是；</li>
         *    <li>false-否。</li>
         * </ol>
         */
        Object.defineProperty(Vue.prototype, '$isNumberStr', {
            value: (o) => {
                try {
                    let numReg = /^[0-9]+(\.[0-9]+)?$/;

                    return numReg.test(Vue.prototype.$getString(o));
                } catch (e) {
                    console.error(e.message);

                    return false;
                }
            }
        });

        /**
         * 判断变量是否为布尔值。
         *
         * @param o 变量
         * @returns {Boolean} 是否为布尔值：
         * <ol>
         *    <li>true-是；</li>
         *    <li>false-否。</li>
         * </ol>
         */
        Object.defineProperty(Vue.prototype, '$isBoolean', {
            value: (o) => {
                try {
                    return (Object.prototype.toString.call(o) === '[object Boolean]');
                } catch (e) {
                    console.error(e.message);

                    return false;
                }
            }
        });

        /**
         * 判断变量是否为数组。
         *
         * @param o 变量
         * @returns {Boolean} 是否为数组：
         * <ol>
         *    <li>true-是；</li>
         *    <li>false-否。</li>
         * </ol>
         */
        Object.defineProperty(Vue.prototype, '$isArray', {
            value: (o) => {
                try {
                    return (Object.prototype.toString.call(o) === '[object Array]');
                } catch (e) {
                    console.error(e.message);

                    return false;
                }
            }
        });

        /**
         * 判断变量是否为函数。
         *
         * @param o 变量
         * @returns {Boolean} 是否为函数：
         * <ol>
         *    <li>true-是；</li>
         *    <li>false-否。</li>
         * </ol>
         */
        Object.defineProperty(Vue.prototype, '$isFunction', {
            value: (o) => {
                try {
                    return (Object.prototype.toString.call(o) === '[object Function]');
                } catch (e) {
                    console.error(e.message);

                    return false;
                }
            }
        });

        /**
         * 判断变量是否为日期。
         *
         * @param o 变量
         * @returns {Boolean} 是否为日期：
         * <ol>
         *    <li>true-是；</li>
         *    <li>false-否。</li>
         * </ol>
         */
        Object.defineProperty(Vue.prototype, '$isDate', {
            value: (o) => {
                try {
                    return (Object.prototype.toString.call(o) === '[object Date]');
                } catch (e) {
                    console.error(e.message);

                    return false;
                }
            }
        });

        /**
         * 判断变量是否为异常。
         *
         * @param o 变量
         * @returns {Boolean} 是否为异常：
         * <ol>
         *    <li>true-是；</li>
         *    <li>false-否。</li>
         * </ol>
         */
        Object.defineProperty(Vue.prototype, '$isError', {
            value: (o) => {
                try {
                    return (Object.prototype.toString.call(o) === '[object Error]');
                } catch (e) {
                    console.error(e.message);

                    return false;
                }
            }
        });

        /**
         * 判断对象是否为空。
         *
         * @param o 对象
         * @returns {Boolean} 是否为空：
         * <ol>
         *    <li>true-为空；</li>
         *    <li>false-不为空。</li>
         * </ol>
         */
        Object.defineProperty(Vue.prototype, '$isNull', {
            value: (o) => {
                try {
                    return ((Object.prototype.toString.call(o) === '[object Undefined]') || (Object.prototype.toString.call(o) === '[object Null]'));
                } catch (e) {
                    console.error(e.message);

                    return true;
                }
            }
        });

        /**
         * 判断对象是否不为空。
         *
         * @param o 对象
         * @returns {Boolean} 是否不为空：
         * <ol>
         *    <li>true-不为空；</li>
         *    <li>false-为空。</li>
         * </ol>
         */
        Object.defineProperty(Vue.prototype, '$isNotNull', {
            value: (o) => {
                return !Vue.prototype.$isNull(o);
            }
        });

        /**
         * 字符串为空。
         *
         * @param str 字符串
         * @returns {Boolean} 是否为空：
         * <ol>
         *    <li>true-为空；</li>
         *    <li>false-不为空。</li>
         * </ol>
         */
        Object.defineProperty(Vue.prototype, '$isBlank', {
            value: (str) => {
                try {
                    if (Vue.prototype.$isNull(str)) {
                        return true;
                    } else if (!Vue.prototype.$isString(str)) {
                        return false;
                    }

                    let trimReg = /(^\s*)|(\s*$)/g;
                    let str1 = str.replace(trimReg, '');

                    if (str1.length > 0) {
                        return false;
                    }

                    return true;
                } catch (e) {
                    console.error(e.message);

                    return true;
                }
            }
        });

        /**
         * 字符串不为空。
         *
         * @param str 字符串
         * @returns {Boolean} 是否不为空：
         * <ol>
         *    <li>true-不为空；</li>
         *    <li>false-为空。</li>
         * </ol>
         */
        Object.defineProperty(Vue.prototype, '$isNotBlank', {
            value: (str) => {
                return !Vue.prototype.$isBlank(str);
            }
        });

        /**
         * 获取安全的字符串。
         *
         * @param str 字符串
         * @return {String} 安全的字符串
         */
        Object.defineProperty(Vue.prototype, '$getString', {
            value: (str) => {
                let trimReg = /(^\s*)|(\s*$)/g;

                return (Vue.prototype.$isBlank(str) ? '' : String(str).replace(trimReg, ''));
            }
        });

        /**
         * 获取安全的数字。
         *
         * @param num 数字
         * @return {Number} 安全的数字
         */
        Object.defineProperty(Vue.prototype, '$getNumber', {
            value: (num) => {
                let numReg = /^[0-9]+(\.[0-9]+)?$/;

                return (Vue.prototype.$isNumber(num) ? num : (numReg.test(Vue.prototype.$getString(num)) ? Number(num) : 0));
            }
        });

        /**
         * 获取安全的布尔。
         *
         * @param bl 布尔
         * @return {Boolean} 安全的布尔
         */
        Object.defineProperty(Vue.prototype, '$getBoolean', {
            value: (bl) => {
                let flag = false;

                if (Vue.prototype.$isBoolean(bl)) {
                    flag = bl;
                } else {
                    let bl1 = Vue.prototype.$getString(bl);

                    if (bl1 === 'true') {
                        flag = true;
                    } else if (bl1 === 'false') {
                        flag = false;
                    }
                }

                return flag;
            }
        });

        /**
         * 剔除字符串的前后空格。
         *
         * @param str 字符串
         * @return {String} 剔除前后空格的字符串
         */
        Object.defineProperty(Vue.prototype, '$trim', {
            value: (str) => {
                return Vue.prototype.$getString(str);
            }
        });

        /**
         * 字符串换行处理。
         *
         * @param str 字符串
         * @param splitCount 每隔多个字符
         * @return {String} 换行后的字符串
         */
        Object.defineProperty(Vue.prototype, '$newlineStr', {
            value: (str, splitCount) => {
                // 换行后的字符串
                let newlineStr = '';
                let str1 = Vue.prototype.$getString(str);
                let splitCount1 = Vue.prototype.$getString(splitCount);

                if (Vue.prototype.$isBlank(str1) || !Vue.prototype.$isNumber(Vue.prototype.$getNumber(splitCount))) {
                    return '';
                }

                splitCount1 = Number(splitCount1);

                if ((splitCount1 <= 0) || (str1.length <= splitCount1)) {
                    return str1;
                }

                let split = (str1.length / splitCount1);

                for (let i = 0; i < split; i++) {
                    if (i === 0) {
                        newlineStr += str1.substring((i * splitCount1), ((i + 1) * splitCount1));
                    } else {
                        newlineStr += ('\n' + str1.substring((i * splitCount1), ((i + 1) * splitCount1)));
                    }
                }

                // 非整除
                if ((str1.length % splitCount1) !== 0) {
                    newlineStr += ('\n' + str1.substring((split * splitCount1)));
                }

                return newlineStr;
            }
        });

        /**
         * 数字数组求和。
         *
         * @param arr 数字数组
         * @return {Number} 和
         */
        Object.defineProperty(Vue.prototype, '$sumArray', {
            value: (arr) => {
                let sum = 0;

                if (Vue.prototype.$isArray(arr)) {
                    for (let i = 0; i < arr.length; i++) {
                        let e = arr[i];

                        if (Vue.prototype.$isNumber(e)) {
                            sum += e;
                        }
                    }
                }

                return sum;
            }
        });

        /**
         * 给对象数组中对象的某个字段求和。
         *
         * @param objArr 对象数组
         * @param objField 对象字段
         * @return {Number} 和
         */
        Object.defineProperty(Vue.prototype, '$sumObjArray', {
            value: (objArr, objField) => {
                let sum = 0;

                if (Vue.prototype.$isArray(objArr) && Vue.prototype.$isNotNull(objField)) {
                    for (let i = 0; i < objArr.length; i++) {
                        let e = objArr[i];

                        if (Vue.prototype.$isObject(e)) {
                            let value = e[objField];

                            if (Vue.prototype.$isNumber(value)) {
                                sum += value;
                            }
                        }
                    }
                }

                return sum;
            }
        });

        /**
         * 判断 str 是否以 startsStr 开始。
         *
         * @param str 字符串
         * @param startsStr 开始的字符串
         * @return {Boolean}
         * <ol>
         *    <li>true-是；</li>
         *    <li>false-否。</li>
         * </ol>
         */
        Object.defineProperty(Vue.prototype, '$startsWithStr', {
            value: (str, startsStr) => {
                let str1 = Vue.prototype.$getString(str);
                let startsStr1 = Vue.prototype.$getString(startsStr);

                if (Vue.prototype.$isNotBlank(str1) && Vue.prototype.$isNotBlank(startsStr1) && (str.indexOf(startsStr1) === 0)) {
                    return true;
                }

                return false;
            }
        });

        /**
         * 判断 str 是否以 endsStr 结束。
         *
         * @param str 字符串
         * @param endsStr 结束的字符串
         * @return {Boolean}
         * <ol>
         *    <li>true-是；</li>
         *    <li>false-否。</li>
         * </ol>
         */
        Object.defineProperty(Vue.prototype, '$endsWithStr', {
            value: (str, endsStr) => {
                let str1 = Vue.prototype.$getString(str);
                let endsStr1 = Vue.prototype.$getString(endsStr);

                if (Vue.prototype.$isNotBlank(str1) && Vue.prototype.$isNotBlank(endsStr1) && ((str.lastIndexOf(endsStr1) + endsStr1.length) === str1.length)) {
                    return true;
                }

                return false;
            }
        });

        /**
         * 给基本类型的数组排序。
         *
         * @param arr 基本类型的数组
         * @param sortBy 排序方式：
         * <ol>
         *    <li>asc-升序；</li>
         *    <li>desc-降序。</li>
         * </ol>
         *
         * @return {Array} 排序后的数组
         */
        Object.defineProperty(Vue.prototype, '$sortArray', {
            value: (arr, sortBy) => {
                let that = this;
                let sortBy1 = Vue.prototype.$getString(sortBy).toLowerCase();

                if (!Vue.prototype.$isArray(arr)) {
                    return [];
                }

                if (Vue.prototype.$isBlank(sortBy1) || ((sortBy1 !== 'asc') && (sortBy1 !== 'desc'))) {
                    return arr;
                }

                // 比较器
                let compare = function (v1, v2) {
                    // v1 和 v2 其中一个为空，禁止排序
                    if (that.isNull(v1) || that.isNull(v2)) {
                        return 0;
                    }

                    // 升序
                    if (sortBy === 'asc') {
                        if (v1 > v2) {
                            return 1;
                        } else if (v1 < v2) {
                            return -1;
                        }

                        return 0;

                        // 降序
                    } else if (sortBy === 'desc') {
                        if (v1 > v2) {
                            return -1;
                        } else if (v1 < v2) {
                            return 1;
                        }
                        return 0;
                    }

                    // 什么玩意？
                    return 0;
                };

                return arr.sort(compare);
            }
        });

        /**
         * 给对象数组排序。
         *
         * @param objArr 对象数组
         * @param sortField 排序字段
         * @param sortBy 排序方式：
         * <ol>
         *    <li>asc-升序；</li>
         *    <li>desc-降序。</li>
         * </ol>
         *
         * @return {Array} 排序后的数组
         */
        Object.defineProperty(Vue.prototype, '$sortObjArray', {
            value: (objArr, sortField, sortBy) => {
                let that = this;
                let sortBy1 = Vue.prototype.$getString(sortBy).toLowerCase();

                if (!Vue.prototype.$isArray(objArr)) {
                    return [];
                }

                if (Vue.prototype.$isNull(sortField) || Vue.prototype.$isBlank(sortBy1) || ((sortBy1 !== 'asc') && (sortBy1 !== 'desc'))) {
                    return objArr;
                }

                // 比较器
                let compare = function (o1, o2) {
                    // o1 和 o2 其中一个不为对象，禁止排序
                    if (!that.isObject(o1) || !that.isObject(o2)) {
                        return 0;
                    }

                    let v1 = o1[sortField];
                    let v2 = o2[sortField];

                    // v1 和 v2 其中一个为空，禁止排序
                    if (that.isNull(v1) || that.isNull(v2)) {
                        return 0;
                    }

                    // 升序
                    if (sortBy === 'asc') {
                        if (v1 > v2) {
                            return 1;
                        } else if (v1 < v2) {
                            return -1;
                        }

                        return 0;

                        // 降序
                    } else if (sortBy === 'desc') {
                        if (v1 > v2) {
                            return -1;
                        } else if (v1 < v2) {
                            return 1;
                        }

                        return 0;
                    }

                    // 什么玩意？
                    return 0;
                };

                return objArr.sort(compare);
            }
        });

        /**
         * 根据 fieldKey 在 field 上从 objArr 中查找对象。
         *
         * @param objArr 对象数组
         * @param field 字段
         * @param fieldValue 字段值，在 objArr 中需要保证它是唯一的才有意义
         * @return {Object} key 对应的对象
         */
        Object.defineProperty(Vue.prototype, '$getObjFromObjArray', {
            value: (objArr, field, fieldValue) => {
                let obj = null;

                if (Vue.prototype.$isArray(objArr) && Vue.prototype.$isNotNull(field)) {
                    for (let i = 0; i < objArr.length; i++) {
                        let e = objArr[i];

                        if (Vue.prototype.$isObject(e) && (e[field] === fieldValue)) {
                            obj = e;

                            // 终止循环
                            break;
                        }
                    }
                }

                return obj;
            }
        });

        /**
         * 根据 value 从 arr 中删除元素。
         *
         * @param arr 基本类型的数组
         * @param value 元素值
         * @return {Array} 被删除的元素
         */
        Object.defineProperty(Vue.prototype, '$deleteInArray', {
            value: (arr, value) => {
                // 被删除的元素
                let delArr = [];

                if (Vue.prototype.$isArray(arr)) {
                    let i = arr.length;

                    // 从后向前遍历，当 i = 0 时为 false
                    while (i) {
                        i--;

                        let e = arr[i];

                        if (e === value) {
                            delArr.push(e);

                            arr.splice(i, 1);
                        }
                    }
                }

                return delArr;
            }
        });

        /**
         * 从 objArr 中删除 field 值为 fieldValue 的对象。
         *
         * @param objArr 对象数组
         * @param field 字段
         * @param fieldValue 字段值
         * @return {Array} 被删除的元素
         */
        Object.defineProperty(Vue.prototype, '$deleteObjInObjArray', {
            value: (objArr, field, fieldValue) => {
                // 被删除的元素
                let delArr = [];

                if (Vue.prototype.$isArray(objArr) && Vue.prototype.$isNotNull(field)) {
                    let i = objArr.length;

                    // 从后向前遍历，当 i = 0 时为 false
                    while (i) {
                        i--;

                        let e = objArr[i];

                        if (Vue.prototype.$isObject(e) && (e[field] === fieldValue)) {
                            delArr.push(e);

                            objArr.splice(i, 1);
                        }
                    }
                }

                return delArr;
            }
        });

        /**
         * 将基本类型的数组转换为 split 拼接的字符串。
         *
         * @param arr 基本类型的数组
         * @param split 分隔符
         * @return {String} split 拼接的字符串
         */
        Object.defineProperty(Vue.prototype, '$parseArrayToStr', {
            value: (arr, split) => {
                let splitStr = '';
                let split1 = Vue.prototype.$getString(split);

                if (Vue.prototype.$isArray(arr)) {
                    splitStr = arr.join(split1);
                }

                return splitStr;
            }
        });

        /**
         * 根据 field 将对象数组转换为 split 拼接的字符串。
         *
         * @param objArr 对象数组
         * @param field 字段
         * @param split 分隔符
         * @return {String} split 拼接的字符串
         */
        Object.defineProperty(Vue.prototype, '$parseObjArrayToStr', {
            value: (objArr, field, split) => {
                let splitStr = '';
                let field1 = Vue.prototype.$getString(field);
                let split1 = Vue.prototype.$getString(split);

                if (Vue.prototype.$isArray(objArr) && Vue.prototype.$isNotBlank(field1)) {
                    for (let i = 0; i < objArr.length; i++) {
                        let e = objArr[i];

                        if (Vue.prototype.$isObject(e)) {
                            let fieldValue = Vue.prototype.$getString(e[field1]);

                            if (Vue.prototype.$isNotBlank(fieldValue)) {
                                splitStr += (fieldValue + split1);
                            }
                        }
                    }

                    if (Vue.prototype.$isNotBlank(splitStr) && Vue.prototype.$isNotBlank(split1)) {
                        splitStr = splitStr.substring(0, (splitStr.length - 1));
                    }
                }

                return splitStr;
            }
        });

        /**
         * JSON 转换为字符串。
         *
         * @param json JSON
         * @return {String} 字符串
         */
        Object.defineProperty(Vue.prototype, '$jsonToStr', {
            value: (json) => {
                let jsonStr = '';

                if (Vue.prototype.$isNotNull(json)) {
                    jsonStr = JSON.stringify(json);
                }

                return jsonStr;
            }
        });

        /**
         * 字符串转换为 JSON。
         * @param str 字符串
         * @return {Object} JSON
         */
        Object.defineProperty(Vue.prototype, '$strToJson', {
            value: (str) => {
                let json = null;

                let str1 = Vue.prototype.$getString(str);

                if (Vue.prototype.$isNotBlank(str1)) {
                    json = JSON.parse(str1);
                }

                return json;
            }
        });

        /**
         * 克隆对象。
         * @param obj 对象
         * @return {Object} 新的对象
         */
        Object.defineProperty(Vue.prototype, '$cloneObj', {
            value: (obj) => {
                let cloneObj = {};

                if (Vue.prototype.$isObject(obj)) {
                    for (let key in obj) {
                        cloneObj[key] = obj[key];
                    }
                }

                return cloneObj;
            }
        });

        /**
         * 将基本类型的数组剔除重复的元素。
         * @param arr 基本类型的数组
         * @return {Array} 剔除重复元素后的数组
         */
        Object.defineProperty(Vue.prototype, '$uniqueArray', {
            value: (arr) => {
                let arr1 = [];

                if (Vue.prototype.$isArray(arr)) {
                    for (let i = 0; i < arr.length; i++) {
                        let e = arr[i];
                        let count = 0;

                        for (let j = 0; j < arr1.length; j++) {
                            if (e !== arr1[j]) {
                                count++;
                            }
                        }

                        if (count === arr1.length) {
                            arr1.push(e);
                        }
                    }
                }

                return arr1;
            }
        });

        /**
         * 根据 field 将对象数组剔除重复的元素。
         * @param objArr 对象数组
         * @param field 字段
         * @return {Array} 剔除重复元素后的数组
         */
        Object.defineProperty(Vue.prototype, '$uniqueObjArray', {
            value: (objArr, field) => {
                let objArr1 = [];
                let field1 = Vue.prototype.$getString(field);

                if (Vue.prototype.$isArray(objArr) && Vue.prototype.$isNotBlank(field1)) {
                    for (let i = 0; i < objArr.length; i++) {
                        let e = objArr[i];
                        let count = 0;

                        for (let j = 0; j < objArr1.length; j++) {
                            if (Vue.prototype.$isNull(Vue.prototype.$getObjFromObjArray(objArr1, field1, e[field1]))) {
                                count++;
                            }
                        }

                        if (count === objArr1.length) {
                            objArr1.push(e);
                        }
                    }
                }

                return objArr1;
            }
        });

        /**
         * 转换周期描述，用于定期计划。
         *
         * @param planInterval 周期描述
         * @return {String} 转换后的周期描述
         */
        Object.defineProperty(Vue.prototype, '$parsePlanInterval', {
            value: (planInterval) => {
                let planIntervalStr = '';
                let planInterval1 = Vue.prototype.$getString(planInterval);

                if (Vue.prototype.$isNotBlank(planInterval1) && (planInterval1.length > 1)) {
                    // 每周
                    if (Vue.prototype.$startsWithStr(planInterval1, 'W')) {
                        let weekStr = '';
                        let weeks = planInterval1.replace(';', '').substr(1).split(',');

                        weeks.forEach(week => {
                            if (week === '7') {
                                weekStr += ('周日,');
                            } else {
                                weekStr += ('周' + week + ',');
                            }
                        });

                        planIntervalStr = ('每周/' + weekStr.substr(0, weekStr.length - 1));

                        // 每月
                    } else if (Vue.prototype.$startsWithStr(planInterval1, 'M')) {
                        let dayStr = '';
                        let days = planInterval1.replace(';', '').substr(1).split(',');

                        days.forEach(day => {
                            dayStr += (day + '日,');
                        });

                        planIntervalStr = ('每月/' + dayStr.substr(0, dayStr.length - 1));

                        // 每年
                    } else {
                        let strs = planInterval1.substr(1).split(';');
                        let monthStr = "";
                        let months = strs[0].split(",");

                        months.forEach(month => {
                            monthStr += (month + '月,');
                        });

                        planIntervalStr = ('每年/' + monthStr.substr(0, monthStr.length - 1));

                        let dayStr = "";

                        if (strs.length > 1) {
                            let days = strs[1].split(",");

                            days.forEach(day => {
                                dayStr += (day + '日,');
                            });

                            planIntervalStr += ('/' + dayStr.substr(0, dayStr.length - 1));
                        }
                    }
                }

                return planIntervalStr;
            }
        });
        //----------[/增加常用方法]----------//
    }
}
