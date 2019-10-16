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
        return el.currentStyle;
    }
}

/**
 * 获取某个范围的随机数
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @returns {number} value - min 到 max 之间的值 - [] 包含最大值和最小值
 */
My.prototype.random = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

/*
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
            console.log(itemType, 'itemType')
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

/*
 * 判断数据类型
 * @author          yanghanliang
 * @created         2019-09-27
 * @lastEditDate    2019-09-27
 * @param {*}       value
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
    console.log(type, 'type')

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

/*
 * 获取某段范围内的随机不重复数据（坐标）
 * @author          yanghanliang
 * @created         2019-10-15
 * @lastEditDate    2019-10-15
 * @param {object}  params
 * @param {object}  params.range            范围
 * @param {array}  params.range.min         最小值
 * @param {array}  params.range.max         最大值
 * @param {number}  params.number           个数
 * @return {array}  随机值
 */
My.prototype.randomCoordinate = function(params) {
    let range = params.range.max - params.range.min
    let average = Math.floor(range / params.number)
    let temp = params.range.min
    let data = [] // 从小到大的值
    for(let i = 0; i < params.number; i++) {
        let value = temp + average
        let random = this.random(temp, value)
        data.push(random)
        temp = value
    }
    return data
}

/*
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

/*
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

/*
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

/*
 * 传如两个数组合成一个数组对象
 * @param {object}           params
 * @param {array}            params.arr
 * @param {array}            params.arrs
 * @param {number}           params.number
 */
// My.prototype.concatArr = function(params) {
//     let arr = params.arr
//     let arrs = params.arrs
//     let length = arr.length
//     let leng = arrs.length
//     let data = []

//     for(let i = 0; i < length; i++) {
//         for(let j = 0; j < leng; j++) {
//             let obj = {
//                 x: arr[i],
//                 y: arrs[j]
//             }

//             if(data.length < params.number) {
//                 data.push(obj)
//             } else {
//                 break
//             }
//         }
//     }

//     return data
// }


/**
 * 实例化
 */
// var my = new My()
