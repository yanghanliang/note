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
 * @returns {number} value - min 到 max 之间的值
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


/**
 * 实例化
 */
var my = new My()
