<template>
    <div class="echarts">
        <slot name="title">
            <div class="title clearfix">
                <div class="fl label">在下标题</div>
                <div class="fr">
                    <my-date :date="date" @dateChange="init"></my-date>
                </div>
            </div>
        </slot>
        <div class="content" ref="echartsContent"></div>
    </div>
</template>

<script>
    import echarts from 'echarts'
    import moment from 'moment'
    import myDate from '~/components/public/date/index'
    import defaultOption from './defaultOption.js'

    export default {
        props: {
            option: {
                type: Object,
                default: function () {
                    return {
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross',
                                label: {
                                    backgroundColor: '#6a7985'
                                }
                            }
                        },
                        legend: {
                            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
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
                        xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                        }],
                        yAxis: [
                        {
                            type: 'value'
                        }],
                        series: [
                        {
                            name: '邮件营销',
                            type: 'line',
                            stack: '总量',
                            areaStyle: {},
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: '联盟广告',
                            type: 'line',
                            stack: '总量',
                            areaStyle: {},
                            data: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name: '视频广告',
                            type: 'line',
                            stack: '总量',
                            areaStyle: {},
                            data: [150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                            name: '直接访问',
                            type: 'line',
                            stack: '总量',
                            areaStyle: { normal: {} },
                            data: [320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            name: '搜索引擎',
                            type: 'line',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top'
                                }
                            },
                            areaStyle: { normal: {} },
                            data: [820, 932, 901, 934, 1290, 1330, 1320]
                        }]
                    }
                }
            },
            server: {
                type: Function,
                default: null
            }
        },
        components: {
            myDate
        },
        mounted() {
            // console.log(themeColor, 'themeColor????')
            this.init()
        },
        data() {
            return {
                defaultOption: defaultOption,
                date: [moment().subtract(7, 'day').format('YYYY-MM-DD'), moment().format('YYYY-MM-DD')]
            }
        },
        methods: {
            async init(date) {
                console.log(date, '??')
                let option = null

                // 基于准备好的dom，初始化echarts实例
                let myChart = echarts.init(this.$refs.echartsContent)

                // 如果传入 option,则使用option替换 defaultOption
                if (this.option) {
                    console.log('zli', this.option)
                    option = this.option
                }

                console.log(this.server)
                // 如果传入方法获取数据则使用方法
                if (this.server) {
                    option = await this.getServerData()
                    console.log(option, 'server')
                }

                // 修改配置项
                this.defaultOption = this.editOption({
                    params: option,
                    defaultValue: this.defaultOption
                })

                console.log(this.defaultOption, 'this.defaultOption')

                // 绘制图表
                myChart.setOption(this.defaultOption)
            },
            /*
             * 修改配置项
             * 参数继承-如果传入的参数存在则替换掉默认值
             * 现在只支持对象的参数
             * @param {object}          params
             * @param {object}          params.params - 传入的参数
             * @param {object}          params.defaultValue - 默认值 不存在默认值时，默认为 0
             * @return {object}         param 继承默认值后的参数
             */
            editOption(params) {
                let recursion = function (param, defaultValue) {
                    // 循环默认值
                    for (let key in defaultValue) {
                        // 判断参数中是否存在默认值
                        let type = typeof param[key]
                        if (type === 'object') {
                            recursion(param[key], defaultValue[key])
                        } else {
                            if (!param[key]) {
                                if (type === 'object') {
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
            },
            // 获取方法中的数据
            async getServerData() {
                try {
                    const data = await this.server(this.date)
                    return data
                    console.log(data, 'data-echarts')
                } catch (e) {
                    console.log(e, 'e')
                }
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
                font-size: 20px;
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