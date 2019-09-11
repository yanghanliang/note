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

/**
 * 实例化
 */
var my = new My()
