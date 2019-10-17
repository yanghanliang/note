### 可点击下载为图片

```js

option = {
    toolbox: {
        feature: {
            saveAsImage: {} // 可点击下载为图片
            dataView: {readOnly: false}, // 数据视图
            restore: {}, // 刷新的按钮
        }
    },
}

```

### 重绘

let myChart = echarts.init(this.$refs.lineChart)

// myChart.clear()

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option, true)


###

```js

/**
 * 数据格式处理
 * 时间
 * 转化率: 0%
 * 点击数: 0%
 * 阅读率: 0%
 */
formatProcessing(option) {
    if (!option.tooltip) {
        option.tooltip = {
            show: true,
            trigger: 'item'
        };
    }
    option.tooltip.formatter = function(params){
        let returnValue = ''
        for(let i = 0, length = params.length; i < length; i++) {
            let obj = params[i]
            let name = obj.seriesName
            let content = obj.seriesName + ': '

            if(name === '点击率' || name === '转化率' || name === '阅读率') {
                returnValue += content  + money(obj.value, 1) + '%</br>'
            } else {
                returnValue += content  + money(obj.value, 1) + '</br>'
            }
        }
        // 返回值是：  html代码||字符串
        return returnValue
    };
    return option
},

```

