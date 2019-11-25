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
import typeOption from './typeOption.js'

export default {
    props: {
        option: {
            type: Object,
            default: function () {
                return {
                }
            }
        },
        server: {
            type: Function,
            default: null
        },
        type: {
            type: String,
            default: 'pie' // bar || line
        }
    },
    components: {
        myDate
    },
    mounted() {
        this.init(this.date)
    },
    data() {
        return {
            date: [moment().subtract(7, 'day').format('YYYY-MM-DD'), moment().format('YYYY-MM-DD')]
        }
    },
    methods: {
        async init(date) {
            let option = null

            // 基于准备好的dom，初始化echarts实例
            let myChart = echarts.init(this.$refs.echartsContent)

            // 如果传入 option,则使用option替换 defaultOption
            if (this.option) {
                option = this.option
            }

            // 如果传入方法获取数据则使用方法
            if (this.server) {
                console.log(date, 'date')
                const data = await this.getServerData(date)
                option = {
                    legend: {
                        data: ['浏览量', '点赞数', '评论数', '注册数', '用户量']
                    },
                    series: [{
                        data: [
                            {
                                value: data.read,
                                name: '浏览量'
                            },
                            {
                                value: data.praise,
                                name: '点赞数'
                            },
                            {
                                value: data.comment,
                                name: '评论数'
                            },
                            {
                                value: data.user,
                                name: '注册数'
                            },
                            {
                                value: data.user,
                                name: '用户量'
                            }
                        ]
                    }]
                }
            }

            // 修改配置项
            option = this.editOption({
                params: option,
                defaultValue: typeOption[this.type]
            })

            // 绘制图表
            myChart.setOption(option)
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
        async getServerData(date) {
            try {
                const data = await this.server(date)
                console.log(data, '?????')
                return data
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
        height: 0.5rem;
        line-height: 0.5rem;
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
            margin-top: 4px;
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
    // width: 100%;

    .echarts {
        width: 48%;
        margin-bottom: .4rem;

        &:nth-child(odd) {
            float: left;
        }

        &:nth-child(even) {
            float: right;
        }
    }
}
</style>