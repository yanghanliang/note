<template>
    <div class="echarts">
        <slot name="title">
            <div class="title clearfix">
                <div class="fl label">在下标题</div>
                <div class="fr">
                    <my-date></my-date>
                </div>
            </div>
        </slot>
        <div class="content" ref="echartsContent"></div>
    </div>
</template>

<script>
import echarts from 'echarts'
import myDate from '~/components/public/date/index'
import * as themeColor from '~/assets/js/themeColor.js'

export default {
    props: {
        option: {
            type: Object,
            default: function() {
                return {
                    color: themeColor.color,
                    tooltip : {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                    legend: {
                        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            boundaryGap : false,
                            data : ['周一','周二','周三','周四','周五','周六','周日']
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'邮件营销',
                            type:'line',
                            stack: '总量',
                            areaStyle: {},
                            data:[120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name:'联盟广告',
                            type:'line',
                            stack: '总量',
                            areaStyle: {},
                            data:[220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name:'视频广告',
                            type:'line',
                            stack: '总量',
                            areaStyle: {},
                            data:[150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                            name:'直接访问',
                            type:'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data:[320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            name:'搜索引擎',
                            type:'line',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top'
                                }
                            },
                            areaStyle: {normal: {}},
                            data:[820, 932, 901, 934, 1290, 1330, 1320]
                        }
                    ]
                }
            }
        }
    },
    components: {
        myDate
    },
	mounted() {
		this.init()
	},
    data() {
        return {
            
        }
    },
    methods: {
		init() {
			// 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(this.$refs.echartsContent)
            // 修改配置项
            this.editOption()
			// 绘制图表
			myChart.setOption(this.option)
        },
        // 修改配置项
        editOption() {
            // 修改颜色
            this.option.color = themeColor.color
        },
    },
}
</script>

<style lang='scss' scoped>
@import '~/assets/scss/color/index.scss';

.echarts {
    height: 4.3rem;
    border: 1px solid $border-color;

    .content {
        height: calc(100% - 0.6rem - 0.4rem);
        padding: 20px 0;
    }

    .title {
        height: 0.6rem;
        line-height: 0.6rem;
        position: relative;
        border-bottom: 1px solid $border-color;

        &::before {
            content: "";
            width: 2px;
            height: 100%;
            position: absolute;
            display: inline-block;
            background-color: $theme-color;
        }

        .label {
            font-size:20px;
            margin-left: 22px;
            color: $main-font;
        }

        .my-date {
            margin-top: 7px;
            margin-right: 10px;
        }
    }
}
</style>

<style lang="scss">
/*
 * 当 echarts 图出现 >= 2 时，给父元素添加 .multiple .clearfix 类，即可
 * 当 echarts 图出现 = 1 时，会继承父元素的宽
 */
.multiple {
    width: 100%;

    .echarts {
       width: 48%;
       float: left;
       margin-bottom: .4rem;

        &:nth-child(odd) {
            margin-right: 2%;
        }
    }
}
</style>