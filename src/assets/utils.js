export default {
    /**
     * 对象为空。
     *
     * @param o 对象
     * @return 是否为空：
     * <ol>
     *    <li>true-为空；</li>
     *    <li>false-不为空。</li>
     * </ol>
     */
    isNull: function (o) {
        try {
            if ((typeof o === "undefined") || (o == null)) {
                return true;
            }

            return false;
        } catch (e) {
            return true;
        }
    },

    /**
     * 对象不为空。
     *
     * @param o 对象
     * @return 是否为空：
     * <ol>
     *    <li>true-不为空；</li>
     *    <li>false-为空。</li>
     * </ol>
     */
    isNotNull: function (o) {
        var _this = this;

        return !_this.isNull(o);
    },

    /**
     * 字符串为空。
     *
     * @param str 字符串
     * @return 是否为空：
     * <ol>
     *    <li>true-为空；</li>
     *    <li>false-不为空。</li>
     * </ol>
     */
    isBlank: function (str) {
        var _this = this;

        try {
            if ((typeof str === "undefined") || (str == null)) {
                return true;
            } else if ((typeof str === "number") || (typeof str === "boolean")) {
                return false;
            } else if (typeof str === "string") {
                str = str.replace(/(^\s*)|(\s*$)/g, "");

                if (str.length === 0) {
                    return true;
                } else {
                    return false;
                }
            }

            return true;
        } catch (e) {
            return true;
        }
    },

    /**
     * 字符串不为空。
     *
     * @param str 字符串
     * @return 是否为空：
     * <ol>
     *    <li>true-不为空；</li>
     *    <li>false-为空。</li>
     * </ol>
     */
    isNotBlank: function (str) {
        var _this = this;

        return !_this.isBlank(str);
    },

    /**
     * 判断非空变量是否为原生对象。
     *
     * @param o 变量
     * @return 是否为原生对象：
     * <ol>
     *    <li>true-是；</li>
     *    <li>false-否。</li>
     * </ol>
     */
    isObject: function (o) {
        var _this = this;

        try {
            return _this.isNotNull(o);
        } catch (e) {
            return false;
        }
    },

    /**
     * 判断变量是否为数字。
     *
     * @param num 变量
     * @return 是否为数字：
     * <ol>
     *    <li>true-是；</li>
     *    <li>false-否。</li>
     * </ol>
     */
    isNumber: function (num) {
        var _this = this;

        try {
            var numStr = String(num);

            if (_this.numberRE.test(numStr)) {
                return true;
            } else {
                return false;
            }
        } catch (e) {
            return false;
        }
    },

    /**
     * 判断变量是否为数组。
     *
     * @param arr 数组
     * @return 是否为数组：
     * <ol>
     *    <li>true-是；</li>
     *    <li>false-否。</li>
     * </ol>
     */
    isArray: function (arr) {
        var _this = this;

        try {
            return (_this.isNotNull(arr) && (arr instanceof Array));
        } catch (e) {
            return false;
        }
    },

    /**
     * 判断变量是否为布尔值。
     *
     * @param bl 变量
     * @return 是否为布尔值：
     * <ol>
     *    <li>true-是；</li>
     *    <li>false-否。</li>
     * </ol>
     */
    isBoolean: function (bl) {
        try {
            var blStr = String(bl);

            if ((blStr === "true") || (blStr === "false")) {
                return true;
            } else {
                return false;
            }
        } catch (e) {
            return false;
        }
    },

    /**
     * 判断变量是否为函数。
     *
     * @param fn 变量
     * @return 是否为函数：
     * <ol>
     *    <li>true-是；</li>
     *    <li>false-否。</li>
     * </ol>
     */
    isFunction: function (fn) {
        try {
            return (typeof fn === "function");
        } catch (e) {
            return false;
        }
    },

    /**
     * 剔除字符串前后空格。
     *
     * @return 剔除字符串前后空格
     */
    trim: function (str) {
        var _this = this;

        if (typeof str === "string") {
            return str.replace(/(^\s*)|(\s*$)/g, '');
        } else {
            return str;
        }
    },

    /**
     * 获取安全的字符串。
     *
     * @param str 字符串
     * @return {string} 安全的字符串
     */
    getString: function (str) {
        var _this = this;

        return (_this.isBlank(str) ? "" : _this.trim(String(str)));
    },

    /**
     * 获取安全的数字。
     *
     * @param num 数字
     * @return {number} 安全的数字
     */
    getNumber: function (num) {
        var _this = this;

        return (_this.isNumber(num) ? Number(num) : 0);
    },

    /**
     * 获取安全的布尔。
     *
     * @param str 布尔字符串
     * @return 安全的布尔
     */
    getBoolean: function (str) {
        try {
            var blStr = String(str);

            if (blStr === "true") {
                return true;
            } else {
                return false;
            }
        } catch (e) {
            return false;
        }
    },

    /**
     * 字符串换行处理。
     *
     * @param str 字符串
     * @param splitCount 每隔多个字符
     * @return {string} 换行后的字符串
     */
    newlineStr: function (str, splitCount) {
        var _this = this;
        // 换行后的字符串
        var newlineStr = "";

        if (_this.isBlank(str) || !_this.isNumber(splitCount)) {
            return "";
        }

        splitCount = Number(splitCount);

        if ((splitCount <= 0) || (str.length <= splitCount)) {
            return str;
        } else {
            var split = (str.length / splitCount);

            for (var i = 0; i < split; i++) {
                if (i === 0) {
                    newlineStr += str.substring((i * splitCount), ((i + 1) * splitCount));
                } else {
                    newlineStr += ("\n" + str.substring((i * splitCount), ((i + 1) * splitCount)));
                }
            }

            // 非整除
            if ((str.length % splitCount) !== 0) {
                newlineStr += ("\n" + str.substring((split * splitCount)));
            }
        }

        return newlineStr;
    },

    /**
     * 数组求和。
     *
     * @param arr 数字数组
     * @return {number} 和
     */
    sumArray: function (arr) {
        var _this = this;
        var sum = 0;

        if (_this.isArray(arr)) {
            for (var i = 0; i < arr.length; i++) {
                sum += _this.getNumber(arr[i]);
            }
        }

        return sum;
    },

    /**
     * 给对象数组中对象的某个字段求和。
     *
     * @param objArr 对象数组
     * @param objField 对象字段
     * @return {number} 和
     */
    sumObjArray: function (objArr, objField) {
        var _this = this;
        var sum = 0;

        if (_this.isArray(objArr) && _this.isNotBlank(objField) && !_this.isNumber(objField)) {
            for (var i = 0; i < objArr.length; i++) {
                var e = objArr[i];

                if (_this.isObject(e)) {
                    var value = e[objField];

                    if (_this.isNumber(value)) {
                        sum += _this.getNumber(value);
                    }
                }
            }
        }

        return sum;
    },

    /**
     * 判断 str 是否以 startsStr 开始。
     *
     * @param str 字符串
     * @param startsStr 开始的字符串
     * @return
     * <ol>
     *    <li>true-是；</li>
     *    <li>false-否。</li>
     * </ol>
     */
    startsWithStr: function (str, startsStr) {
        var _this = this;

        if (_this.isBlank(str) || _this.isBlank(startsStr)) {
            return false;
        }

        if (str.indexOf(startsStr) === 0) {
            return true
        } else {
            return false;
        }
    },

    /**
     * 判断 str 是否以 endsStr 结束。
     *
     * @param str 字符串
     * @param endsStr 结束的字符串
     * @return
     * <ol>
     *    <li>true-是；</li>
     *    <li>false-否。</li>
     * </ol>
     */
    endsWithStr: function (str, endsStr) {
        if (_this.isBlank(str) || _this.isBlank(endsStr)) {
            return false;
        }

        if ((str.lastIndexOf(endsStr) + endsStr.length) === str.length) {
            return true
        } else {
            return false;
        }
    },

    /**
     * 给基本类型数组排序。
     *
     * @param arr 数组
     * @param sortBy 排序方式：
     * <ol>
     *    <li>asc-升序；</li>
     *    <li>desc-降序。</li>
     * </ol>
     *
     * @return 排序后的数组
     */
    sortArray: function (arr, sortBy) {
        var _this = this;

        if (!_this.isArray(arr)) {
            return new Array();
        }

        if (_this.isBlank(sortBy)) {
            return arr;
        }

        sortBy = String(sortBy).toLowerCase();

        if (("asc" !== sortBy) && ("desc" !== sortBy)) {
            return arr;
        }

        // 比较器
        var compare = function (v1, v2) {
            // v1 和 v2 其中一个为空，禁止排序
            if (_this.isBlank(v1) || _this.isBlank(v2)) {
                return 0;
            }

            // 升序
            if (sortBy === "asc") {
                if (v1 > v2) {
                    return 1;
                } else if (v1 < v2) {
                    return -1;
                } else {
                    return 0;
                }

                // 降序
            } else if (sortBy === "desc") {
                if (v1 > v2) {
                    return -1;
                } else if (v1 < v2) {
                    return 1;
                } else {
                    return 0;
                }

                // 什么玩意？
            } else {
                return 0;
            }
        }

        return arr.sort(compare);
    },

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
     * @return 排序后的数组
     */
    sortObjArray: function (objArr, sortField, sortBy) {
        var _this = this;

        if (!_this.isArray(objArr)) {
            return new Array();
        }

        if (_this.isBlank(sortField) || _this.isNumber(sortField) || _this.isBlank(sortBy)) {
            return objArr;
        }

        sortField = String(sortField);
        sortBy = String(sortBy).toLowerCase();

        if (("asc" !== sortBy) && ("desc" !== sortBy)) {
            return objArr;
        }

        // 比较器
        var compare = function (o1, o2) {
            // o1 和 o2 其中一个不为对象，禁止排序
            if (!_this.isObject(o1) || !_this.isObject(o2)) {
                return 0;
            }

            var v1 = (_this.isNumber(o1[sortField]) ? Number(o1[sortField]) : 0);
            var v2 = (_this.isNumber(o2[sortField]) ? Number(o2[sortField]) : 0);

            // 升序
            if (sortBy === "asc") {
                if (v1 > v2) {
                    return 1;
                } else if (v1 < v2) {
                    return -1;
                } else {
                    return 0;
                }

                // 降序
            } else if (sortBy === "desc") {
                if (v1 > v2) {
                    return -1;
                } else if (v1 < v2) {
                    return 1;
                } else {
                    return 0;
                }

                // 什么玩意？
            } else {
                return 0;
            }
        }

        return objArr.sort(compare);
    },

    /**
     * 根据 fieldKey 在 field 上从 objArr 中查找对象。
     *
     * @param objArr 对象数组
     * @param field 字段
     * @param fieldKey 字段键，即查找对象的字段值，在 objArr 中需要保证它是唯一的才有意义
     * @return key 对应的对象
     */
    getObjFromObjArr: function (objArr, field, fieldKey) {
        var _this = this;
        var obj = null;

        if (_this.isArray(objArr) && _this.isNotBlank(field) && !_this.isNumber(field) && _this.isNotBlank(fieldKey)) {
            for (var i = 0; i < objArr.length; i++) {
                var e = objArr[i];

                if (_this.isObject(e)) {
                    if (e[field] == fieldKey) {
                        obj = e;

                        // 终止循环
                        break;
                    }
                }
            }
        }

        return obj;
    },

    /**
     * 校验身份证号。
     *
     * @param idNumber 身份证号
     * @return
     * <ol>
     *    <li>true-正确；</li>
     *    <li>false-不正确。</li>
     * </ol>
     */
    checkIdNumber: function (idNumber) {
        var city = {
            11: "北京",
            12: "天津",
            13: "河北",
            14: "山西",
            15: "内蒙古",
            21: "辽宁",
            22: "吉林",
            23: "黑龙江 ",
            31: "上海",
            32: "江苏",
            33: "浙江",
            34: "安徽",
            35: "福建",
            36: "江西",
            37: "山东",
            41: "河南",
            42: "湖北 ",
            43: "湖南",
            44: "广东",
            45: "广西",
            46: "海南",
            50: "重庆",
            51: "四川",
            52: "贵州",
            53: "云南",
            54: "西藏 ",
            61: "陕西",
            62: "甘肃",
            63: "青海",
            64: "宁夏",
            65: "新疆",
            71: "台湾",
            81: "香港",
            82: "澳门",
            91: "国外 "
        };
        var msg = "";
        var pass = true;

        if (!idNumber || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(idNumber)) {
            msg = "身份证号格式错误";
            pass = false;
        } else if (!city[idNumber.substr(0, 2)]) {
            msg = "地址编码错误";
            pass = false;
        } else {
            //18位身份证需要验证最后一位校验位
            if (idNumber.length == 18) {
                idNumber = idNumber.split('');
                //∑(ai×Wi)(mod 11)
                //加权因子
                var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
                //校验位
                var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
                var sum = 0;
                var ai = 0;
                var wi = 0;

                for (var i = 0; i < 17; i++) {
                    ai = idNumber[i];
                    wi = factor[i];
                    sum += ai * wi;
                }

                var last = parity[sum % 11];

                if (parity[sum % 11] != idNumber[17]) {
                    msg = "校验位错误";
                    pass = false;
                }
            }
        }

        return pass;
    }
}
