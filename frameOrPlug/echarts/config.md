### 可点击下载为图片

```js

option = {
    toolbox: {
        feature: {
            saveAsImage: {}, // 可点击下载为图片
            dataView: {readOnly: false}, // 数据视图
            restore: {}, // 刷新的按钮
            magicType: { // 切换为堆叠
                type: ['stack', 'tiled']
            },
        },
        axisPointer: { type: 'none' }, // 去掉鼠标悬浮时的中线 - 这可能是记错了
        formatter: '￥{c}', // 修改悬浮时的提示内容
    },
    axisPointer: { show: false }, // 去掉鼠标悬浮时的中线
    title: {
        itemGap: 10, // 主副标题距离
    },
    polar: {
        center: ['50%', '50%'],
        radius: '120%' // 图形大小
    },
    grid: {
        // 组件离容器的距离（边距）
        left: 30,
        top: 30,
        bottom: 30,
        right: 15,
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

