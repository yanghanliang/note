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
