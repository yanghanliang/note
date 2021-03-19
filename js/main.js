/**
 * 创建构造函数
 * @author yanghanliang
 */
var My = function () {

}

/**
 * 获取属性值
 * @param {object} ele  - DOM 对象
 * @param {string} attr - 属性
 * @returns {number} value 属性值
 *
 */
My.prototype.getStyle = function (ele, attr) {
    if (window.getComputedStyle) {
        let value = window.getComputedStyle(ele, null)[attr]
        let index = value.indexOf('px')
        return Number(value.slice(0, index))
    } else {
        // console.log('老铁！解决下兼容')
        return ele.currentStyle;
    }
}

/**
 * 获取某个范围的随机数
 * @param {object}      params
 * @param {object}      params.symbol 
 * @param {string}      params.symbol.min 默认: 'contain' - 'contain' 标识包含 'not' 标识不包含
 * @param {string}      params.symbol.max 默认: 'contain' - 'contain' 标识包含 'not' 标识不包含
 * @param {number}      params.min 最小值
 * @param {number}      params.max 最大值
 * @returns {number} value 默认情况下: min 到 max 之间的值 - 包含最大值和最小值
 */
My.prototype.random = function (params) {
    // 需要传递的参数
    let postData = {
        params: params,
        defaultValue: {
            symbol: {
                min: 'contain',
                max: 'contain'
            }
        }
    }
    params = this.paramsInherit(postData)
    let symbol = params.symbol
    let random = Math.random()
    let max = params.max
    let min = params.min

    if(symbol.min === 'contain' && symbol.max === 'contain') {
        // console.log('[0-5]')
        return Math.floor(random * (max - min + 1)) + min
    } else if(symbol.min === 'not' && symbol.max === 'contain') {
        // console.log('(0-5]')
        return Math.ceil(random * (max - min) + 1) + min - 1
    } else if(symbol.min === 'contain' && symbol.max === 'not') {
        // console.log('[0-5)')
        return Math.floor(random * (max - min)) + min
    } else if(symbol.min === 'not' && symbol.max === 'not') {
        // console.log('(0-5)')
        let temp = Math.floor(random * (max - min) + 1) + min
        return temp >= max ? temp - 1 : temp
    }
}

/**
 * 参数继承-如果传入的参数存在则替换掉默认值
 * 现在只支持对象的参数
 * @param {object}          params
 * @param {object}          params.params - 传入的参数
 * @param {object}          params.defaultValue - 默认值 不存在默认值时，默认为 0
 * @return {object}         param 继承默认值后的参数
 */
My.prototype.paramsInherit = function(params) {
    let recursion = function (param, defaultValue) {
        // 循环默认值
        for(let key in defaultValue) {
            // 判断参数中是否存在默认值
            let type = typeof param[key]
            if(type === 'object') {
                recursion(param[key], defaultValue[key])
            } else { 
                if(!param[key]) {
                    if(type === 'object') {
                        recursion(param[key], defaultValue[key])
                    } else {
                        // 不存在，则给参数补充上
                        param[key] = defaultValue[key]
                    }
                }
            }
        }
    }

    recursion(params.params, params.defaultValue)
    return params.params
}

/**
 * 深拷贝
 * @author                  yanghanliang
 * @created                 2019-09-27
 * @lastEditDate            2019-09-27
 * @param {object,array}    data
 * @return {object,array}   dataCopy
 */
My.prototype.forEach = function (data) {
    let type = this.isType(data)
    if (type === 'array') {
        let arr = []
        for (let i = 0, length = data.length; i < length; i++) {
            let item = data[i]
            let itemType = this.isType(item)
            if (itemType === 'object' || itemType === 'array') {
                let value = this.forEach(item)
                arr.push(value)
            } else {
                arr.push(item)
            }
        }
        return arr
    } else if (type === 'object') {
        let obj = {}
        for (let key in data) {
            let item = data[key]
            let itemType = this.isType(item)
            if (itemType === 'object' || itemType === 'array') {
                let value = this.forEach(item)
                obj[key] = value
            } else {
                obj[key] = item
            }
        }
        return obj
    }
}

/**
 * 判断数据类型
 * @author                  yanghanliang
 * @created                 2019-09-27
 * @lastEditDate            2019-09-27
 * @param {*}               value
 * @return {string} type    DataType
 */
My.prototype.isType = function (value) {
    // number boolean string array undefined null
    var type = typeof value
    if (type === 'object') {
        if (value.length) {
            return 'array'
        } else {
            return 'object'
        }
    } else {
        // 不考虑 null, undefined
        return 'string'
    }
}

/**
 * 获取最大值
 * @param {object} params
 * @param {array} params.data
 * @param {string} params.field
 * @return {number} 最大值
 */
My.prototype.getMaxValue = function (params) {
    // [1, 2]
    // [{val: 1}, {val: 2}]
    let data = params.data
    let one = data[0]
    let type = typeof one
    let template = null
    let length = data.length

    if (type === 'object') {
        for (let i = 1; i < length; i++) {
            let item = data[i]
            if (item[field] > template[field]) {
                template = item
            }
        }
        return template[field]
    } else {
        for (let i = 1; i < length; i++) {
            let item = data[i]
            if (item > template) {
                template = item
            }
        }
        return template
    }
}

/**
 * 获取某段范围内的随机不重复数据（坐标）
 * 适用范围是 number 比较大，且 range 比较大 例如 - number 10 range 300
 * @param {object}                          params
 * @param {object}  params.range            范围
 * @param {array}   params.range.min        最小值 - 默认为 0
 * @param {array}   params.range.max        最大值
 * @param {number}  params.number           个数 - 有默认值： 可用范围内的 2%
 * @return {array}  较为均匀的随机值
 */
My.prototype.randomCoordinate = function(params) {
    params.range.min = params.range.min ? params.range.min : 0

    let random = Math.ceil((params.range.max - params.range.min) * 0.02)
    random = random < 0 ? 1 : random

    let defaultValue = {
        number: random,
    }
    params = this.paramsInherit({
        params: params,
        defaultValue: defaultValue
    })

    let range = params.range.max - params.range.min
    let average = Math.floor(range / params.number)
    let temp = params.range.min
    let data = [] // 从小到大的值
    
    for(let i = 0; i < params.number; i++) {
        let value = temp + average
        let random = this.random({
            min: temp,
            max: value,
        })
        data.push(random)
        temp = value
    }
    return data
}

/**
 * 获取某段范围内的随机不重复数据（坐标）
 * 适用范围是 number 比较大，且 range 比较小 例如 - number: 10 range: 10
 * @param {object}  params
 * @param {object}  params.range            范围
 * @param {array}  params.range.min         最小值
 * @param {array}  params.range.max         最大值
 * @param {number}  params.number           个数
 * @return {array}  完全随机的随机值
 */
My.prototype.randomCoordinates = function(params) {
    let that = this
    let data = []
    let recursion = function() {
        let item = that.random({
            min: params.range.min,
            max: params.range.max
        })

        if(!data.includes(item)) {
            data.push(item)
        }

        if(data.length < params.number) {
            recursion()
        }
    }

    recursion()

    return data
}

/**
 * 去掉数组中差距小于或大于某值的数
 * @param {object}      params
 * @param {array}       params.data 排序好的数字数组
 * @param {number}      params.difference 差额（小圆的 width
 * @param {string}      params.symbol 符号 > < = 运算符
 */
My.prototype.arrExclude = function(params) {
    let data = params.data

    for(let i = 0; i < data.length - 1; i++) {
        let previous = data[i] // 1
        let latter = data[i + 1] // 2
        let value = Math.round(Math.abs(previous - latter)) // 1
        let str = value + params.symbol + params.difference // 1 > 3

        if(!eval(str)) { // true
            data.splice(i + 1, 1) // [1, 3, 4, 5, 6]
            --i
        }
    }

    return data
    // {
    //     data: [1, 2, 3, 4, 5, 6],
    //     difference: 2,
    //     symbol: '>'
    // }
    // 去掉这个数组中 差距大于 2 的数据
}

/**
 * 打乱数组
 * @param {object}           params
 * @param {array}            params.data
 * @return {array}           打乱后的数组
 */
My.prototype.disruptedArr = function(params) {
    return params.data.sort(function() {
        return Math.random() > 0.5 ? -1 : 1
    })
}

/**
 * 数组排序
 * @param {object}           params
 * @param {array}            params.data
 * @param {string}           params.symbol 符号 > < = 运算符
 * @return {array}           排序好之后的数组
 */
My.prototype.sort = function(params) {
    return params.data.sort(function(a, b) {
        return eval(a + params.symbol + b) ? 1 : -1
    })
}

/**
 * 数组对象排序
 * @param {object}           params
 * @param {array}            params.data 数组对象 [{value: 50}]
 * @param {string}           params.key  已对象中的 key 为判断对象 value
 * @param {string,boolean}   param.sort  升序或降序 默认降序 可选值 true 'desc'
 * @return {array}           排序好之后的数组
 */
My.prototype.sortAO = function(params) {
    const data = params.data
    const key = params.key ? params.key : 'value' // 默认 value
    const sort = params.sort ? '>' : '<' // 默认是降序

    for (let i = 0, length = data.length; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            let rule = eval(data[j][key] + sort + data[j + 1][key])
            if (rule) {
                let temp = Object.assign({}, data[j])
                data[j] = data[j + 1]
                data[j + 1] = temp
            }
        }
    }
    return data
}

/**
 * 获取元素
 * 和 jQuery 获取元素一致
 * @param {object}           params
 * @param {string}           params.select
 */
My.prototype.$ = function(select) {
    return document.querySelector(select)
}

/**
 * 去掉对象中的空数据
 * @param {object}           params
 * @return {object}          params 处理后的对象
 */
My.prototype.removeEmptyObjects = function() {
    for(let key in params) {
        if(!params[key]) {
            delete params[key]
        }
    }
    return params
}

/**
 * 字符串转为数组
 * @param {object}           params
 * @param {string}           params.str // 需要转为数组的字符串
 * @param {number}           params.step // 步数，按它的值进行截取
 * @return {array}           转成数组后的数据
 */
My.prototype.strsub =function(params) {
    let arr = []
    let length = params.str.length

    if (length <= params.step) {
        return [params.str]
    } else {
        let recursion = function(start, end, step) {
            let value = params.str.slice(start, end)
            arr.push(value)
            if (length - end > step) {
                recursion(end, end + step, step)
            } else {
                let last = params.str.slice(end)
                arr.push(last)
            }
        }

        recursion(0, params.step, params.step)
    }
    return arr
}

/**
 * 无限极分类
 * 菜单导航常用
 * @param {array}            data // [{id: 1, pid: 0, name: 'a'}, {id: 2, pid: 1, name: 'b'}, {id: 3, pid: 2, name: 'c'}, {id: 4, pid: 0, name: 'd'}...]
 * @return {array}           处理后的数据: [{id: 1, pid: 0, children[{id: 2, pid: 1, name: 'b', children: [{id: 3, pid: 2, name: 'c'}]}]}, {id: 4, pid: 0, name: 'd'}...]
 */
My.prototype.InfinitePoleClassification = function(data) {
    let arr = []
    let ipc = function(obj) {
        for(let i = 0, length = data.length; i < length; i++) {
            let item = data[i]
            if (item.pid === obj.id) {
                ipc(item)
                if (obj.children) {
                    obj.children.push(item)
                } else {
                    obj.children = [item]
                }
            }
        }
        return obj
    }

    for(let i = 0, length = data.length; i < length; i++) {
        let item = data[i]
        if (item.pid === 0) {
            arr.push(ipc(item))
        }
    }

    return arr
}

/**
 * 金额转换
 * @param {number|string}           value 金额
 * @param {object}                  params
 * @param {string}					params.conversion 转换：up||down; up 分转元 100 => 1, down 元转分 1 =>100
 * @param {string}					params.symbol 千分位符号: , .
 * @param {boolean}					params.decimal 是否保留两位小数: true||false
 */
My.prototype.money = function (value, params) {
    if (params && params.conversion) {
        // 为了避免小数点做运算的问题： 201 * 0.01 = 2.0100000000000002
        if (params.conversion === 'up') {
            value = value / 100
        } else if (params.conversion === 'down') {
            value = value * 100
        }
    }

    // 千分位符号
    if (params && params.symbol) {
        const arr = String(value).split('.')

        /**
         * 从后往前截取字符串
         * @param {object}           params
         * @param {string}           params.str
         * @param {number}           params.step
         */
        const newArr = []
        const recursion = function (params) {
            if (params.str.length > params.step) {
                const item = params.str.slice(-params.step)
                newArr.unshift(item)
                recursion({
                    str: params.str.slice(0, -params.step),
                    step: params.step
                })
            } else {
                if (params.str) {
                    newArr.unshift(params.str)
                }
            }
        }
        recursion({
            str: String(arr[0]),
            step: 3
        })

        const str = newArr.join(params.symbol)

        if (arr.length > 1) {
            if (String(arr[1]).length === 1 && params.decimal) {
                return str + '.' + arr[1] + '0'
            } else {
                return str + '.' + arr[1]
            }
        } else {
            if (params.decimal) {
                return str + '.00'
            } else {
                return str
            }
        }
    }

    // 保留小数点
    if (params && params.decimal) {
        let temp = String(value)
        console.log(temp.indexOf('.'), temp.slice(temp.indexOf('.')).length, '????')
        if (!temp.includes('.')) {
            console.log(0)
            return value + '.00'
        } else if (temp.slice(temp.indexOf('.')).length === 1) {
            // 小数点只有一位时走这
            console.log(1)
            return value + '0'
        }
    }
    return value
}

// 判断类型
My.prototype.checkType = function (value, type) {
    const rules = {
        int: v => /^[\d]+$/.test(v),
        float: v => /^[\d]+[.]{1}[\d]+$/.test(v),
        string: v => /[\S]+/.test(v),
        version: v => /^[\d]+[.]{1}[\d]+[.]{1}[\d]+$/.test(v),
    };

    return rules[type](value);
}

/**
 * 
 * @param {string} str 
 * @description 驼峰转换：将驼峰命名的变量转换成下划线的字母
 * @returns {string}
 */
My.prototype.humpConversion = function (str) {
    return str.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
}

/**
 * 实例化
 */
window.my = new My()
