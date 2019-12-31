### Observer: 设置的是数组，返回的却是 `Observer` 对象，我需要的是数组长度

> 解决办法

```vue

computed: {
    imageLength() { // Observer 特殊处理
        let value = this.selfAdplace[this.label].image_path // 数组（目标值
        // 需要注意的是当目标数组只有一个值时，arr是对象。而当目标数组的值大于1时，arr是数组
        // 正常情况下，对象是没有 length 属性的
        let arr = JSON.parse(JSON.stringify(value))
        let length = arr.length
        if(length) {
            return length
        } else {
            return 1
        }
    },
}

```