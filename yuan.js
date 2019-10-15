import Vue from 'init'
// import _ from 'lodash'
import moment from 'moment'
// import $ from 'jquery'
import echarts from 'echarts'
import G2 from '@antv/g2'
import Swiper from 'swiper'
import 'report.all'
import 'mixin'
import picker_options from 'dll/libs/report/date_picker_options'
import order_form from '@dll/areadivide'
import funnel_box from 'dll/libs/funnelplot/index'
import {
    hopper_list,
    getAttributeData,
    customer_layered,
    num_customers,
    real_anonymity,
    add_customers_cost,
    report_attr_spread
} from '@/server/overview/index'
new Vue({
    el: '.section',
    props: {
        // 配置参数
        time: {
            type: [String, Number],
            default: function() {
                return '3'
            },
            validator: function(value) {
                // time: [1:今日|2:昨日|3:近七天|4:本月|5:上月|6:近七天（不包括今天）]
                return ['1', '2', '3', '4', '5', '6'].indexOf(String(value)) >= 0
            }
        },
    },
    components: {
        'order_form': order_form,
        'funnel_box': funnel_box
    },
    data: function() {
        return {
            name: '',
            person: 0,
            proportion: 0, // 比例
            form: {
                daterange: ''
            },
            topTime: {
                daterange: ''
            },
            topInfo: {
                customers: 0,
                new_customers: 0,
                new_customers_ring: 0,
                new_customers_to: 0,
                new_cost: 0,
                new_cost_ring: 0,
                new_cost_to: 0,
            },
            dateType: 'daterange',
            xda1: {},
            xda2: {},
            custom_info: [], // 漏斗
            rate_list: [], // 转化率
            customersNum: 0,
            customersMoney: 0,
            userType: '',
            list: [],
            checkNode: 0,
            showNode: true,
            showUser: true,
            show_index: true,
            showRight: false, // 是否显示右边活跃非活跃
            userList: [],
            userPageIndex: 0,
            distributionList: [],
            distributionListHead: {
                '-10': {
                    person: 0
                },
                '-11': {
                    person: 0
                },
                '-12': {
                    person: 0
                }
            },
            moveFlag: false,
        }
    },
    computed: {
        pickerOptions: function() {
            if (String(this.dateType) === 'daterange') {
                return picker_options(this.time)
            }
        },
    },
    created: function() {
        // 获取属性项数据
        this.getAttrData()
        this.init()
        this.get_report_attr_spread()
    },
    updated: function() {
        if (!this.moveFlag) {
            this.pageTurn()
        }
    },
    filters: {
        // 数据源分布
        personFilter(value) {
            if (value) {
                return value.person || 0
            } else {
                return 0
            }
        }
    },
    mounted() {
        // 设置默认七天选择日期
        let start = moment().subtract(6, 'days')
        let end = moment()
        this.form.daterange = [start.format('YYYY-MM-DD'), end.format('YYYY-MM-DD')]
        this.topTime.daterange = [moment().format('YYYY-MM') + '-01', end.format('YYYY-MM-DD')]
        this.timeChange()
        this.get_funnel()
        // this.get_customer_layered()
        this.get_real_anonymity()
        setTimeout(()=> {
            this.sourceTurn()
        }, 500)
        
    },
    methods: {
        // 漏斗中的扇形图
        funnelSector() {
            document.getElementById('mountNodes').innerHTML = ''
            let data_arr = [{
                value: 0,
                type: '实名'
            }, {
                value: 0,
                type: '匿名'
            }]
            let tmp = this.custom_info[this.checkNode] || {}
            let { son = [] } = tmp
            if (son.length >= 1) {
                son.map(item => {
                    let { customers = 0 } = item || {}
                    if (item.son_type === 3) {
                        data_arr[0].value = customers
                    }
                    if (item.son_type === 4) {
                        data_arr[1].value = customers
                    }
                })
            }
            var data = data_arr
            var chart = new G2.Chart({
                container: document.querySelector('#mountNodes'),
                forceFit: true,
                height: 340,
                padding: [40, 0]
            })
            
            chart.source(data)
            chart.coord('polar', {
                startAngle: Math.PI, // 起始角度
                endAngle: Math.PI * (3 / 2) // 结束角度
            })
            chart.interval().position('type*value').color('type', 'rgb(252,143,72)-rgb(255,215,135)')
                .label('value', {
                    offset: -15,
                    label: {
                        textAlign: 'center',
                        fill: '#fff'
                    }
                })
                .style({
                    lineWidth: 1,
                    stroke: '#fff'
                })
            chart.render()
        },
        formatProcessingCost(option) {
            option.series.map(item => {
                item.data.map((val, ind) => {
                    item.data[ind] = item.data[ind] / 100
                })
            })
            return option
        },
        async init() {
            // await def_layered()
            this.get_customer_layered()
        },
        // 获取实名匿名人群
        async get_real_anonymity() {
            let data = await real_anonymity()
            this.pie_chart(data)
        },
        // 获取数据源分布
        async get_report_attr_spread() {
            let data = await report_attr_spread()
            if (data.children) {
                this.distributionListHead = data.children
            }
            // let baseArray = data.data_origin
            // let len = baseArray.length
            // let n = 2 //假设每行显示2个
            // let lineNum = len % 2 === 0 ? len / 2 : Math.floor((len / 2) + 1)
            // let res = []
            // for (let i = 0; i < lineNum; i++) {
            //     // slice() 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。
            //     let temp = baseArray.slice(i * n, i * n + n)
            //     res.push(temp)
            // }
            this.distributionList = data.data_origin
        },
        // 获取新增客户趋势图
        get_data(option) {
            return this.get_add_customers_cost(option)
        },
        get_data2(option) {
            return this.get_add_customers_cost(option)
        },
        async get_add_customers_cost(time) {
            let data = await add_customers_cost(time)
            this.xda1 = {
                'new_customers': '全部客户'
            }
            this.xda2 = {
                'new_cost': '全部客户'
            }
            data.layered.map(item => {
                this.xda1['new_customers' + item.id] = item.crowd_name
                this.xda2['new_cost' + item.id] = item.crowd_name
            })
            return data.report
        },
        formatProcessing(option) {
            if (!option.tooltip) {
                option.tooltip = {
                    show: true,
                    trigger: 'item'
                }
            }
            option.series.map(item => {
                if (item.name === '全部客户') {
                    item.type = 'line'
                }
            })
            return option
        },
        // 获取总客户数值
        async get_num_customers() {
            let query = {
                start_date: this.topTime.daterange[0],
                end_date: this.topTime.daterange[1]
            }
            let data = await num_customers(query)
            this.topInfo = data
        },
        // 获取客户分层指标
        async get_customer_layered() {
            var day = new Date()
            day.setTime(day.getTime())
            var now = day.getFullYear() + '-' + (day.getMonth() + 1) + '-' + day.getDate()
            let query = {
                start_date: moment().format('YYYY-MM') + '-01',
                end_date: now
            }
            let data = await customer_layered(query)
            data.map(item => {
                item.time = [item.start_date, item.end_date]
            })
            let baseArray = data
            let len = baseArray.length
            let n = 4 //假设每行显示4个
            let lineNum = len % 4 === 0 ? len / 4 : Math.floor((len / 4) + 1)
            let res = []
            for (let i = 0; i < lineNum; i++) {
                // slice() 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。
                let temp = baseArray.slice(i * n, i * n + n)
                res.push(temp)
            }
            this.userList = res
        },
        async timeChangeCustomer(time, id, parInd, childInd) {
            this.moveFlag = true
            let query = {
                start_date: time[0],
                end_date: time[1],
                type: id
            }
            let data = await customer_layered(query)
            data.map(item => {
                item.time = [item.start_date, item.end_date]
            })
            this.userList[parInd][childInd] = data[0]
            this.showUser = false
            this.showUser = true
        },
        check(ind) {
            this.showNode = false
            this.checkNode = ind
            this.showNode = true
            this.customersNum = this.custom_info[this.checkNode].customers
            this.customersMoney = this.$money(this.custom_info[this.checkNode].cost)
            this.userType = this.custom_info[this.checkNode].crowd_name
            this.funnelSector()
            // this.right_pie()
            // this.left_pie()
        },
        // 获取初始化漏斗
        async get_funnel() {
            let data = await hopper_list()
            this.custom_info = data
            this.list = []
            this.rate_list = []
            // 判断没有数据的情况
            if (this.custom_info.length === 0) {
                this.list = [{
                    crowd_name: '普通客户',
                    customers: 0,
                    id: 0
                },
                {
                    crowd_name: '意向客户',
                    customers: 0,
                    cost: 0,
                    id: 0
                },
                {
                    crowd_name: '新客',
                    customers: 0,
                    cost: 0,
                    id: 0
                },
                {
                    crowd_name: '老客',
                    customers: 0,
                    cost: 0,
                    id: 0
                }
                ]
                this.rate_list = [0, 0, 0]
            }
            // this.right_pie()
            // this.left_pie()
            this.funnelSector()
            this.customersNum = this.custom_info[this.checkNode] ? this.custom_info[this.checkNode].customers : 0
            let cost = this.custom_info[this.checkNode] ? this.custom_info[this.checkNode].cost : 0
            this.customersMoney = this.$money(cost)
            this.userType = this.custom_info[this.checkNode] ? this.custom_info[this.checkNode].crowd_name : ''
            data.map((item, index) => {
                this.list.push({
                    name: item.crowd_name,
                    id: item.id,
                    customers: item.customers
                })
                if (index >= 1) {
                    this.rate_list.push(item)
                }
            })
            // this.list = [...this.list, ...this.list]
            // this.rate_list = [
            //     {
            //         conversion_rate: 0,
            //     },
            //     {
            //         conversion_rate: 1,
            //     },
            //     {
            //         conversion_rate: 2,
            //     },
            //     {
            //         conversion_rate: 3,
            //     },
            //     {
            //         conversion_rate: 4,
            //     },
            //     {
            //         conversion_rate: 5,
            //     },
            //     {
            //         conversion_rate: 6,
            //     },
            //     {
            //         conversion_rate: 7,
            //     }
            // ]
            // this.list.splice(0,6)
            setTimeout(() => {
                // this.funnel_chart()
                // this.right_pie()
                // this.left_pie()
            })
        },
        timeChange() {
            this.get_num_customers()
        },
        pie_chart(data) {
            if (data.length === 0) {
                data = [{
                    customers: 0
                }, {
                    customers: 0
                }]
            }
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter(info) {
                        return info.name + '<br/>' + '客户数：' + info.value + '<br/>' + '占比：' + info.percent + '%'
                    },
                },
                legend: {
                    x: 'center',
                    y: 'bottom',
                    data: ['实名客户', '匿名客户']
                },
                series: [{
                    type: 'pie',
                    radius: ['30%', '60%'],
                    center: ['50%', '50%'],
                    data: [{
                        value: data[0].customers,
                        name: '实名客户'
                    },
                    {
                        value: data[1].customers,
                        name: '匿名客户'
                    }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        normal: {
                            color: function(params) {
                                //自定义颜色
                                var colorList = [
                                    '#7F86E4', '#70CFA3'
                                ]
                                return colorList[params.dataIndex]
                            }
                        }
                    }
                }]
            }
            let pieDom = document.getElementById('pie-chart')
            if (pieDom) {
                var myChart1 = echarts.init(pieDom)
                myChart1.setOption(option)
            }

        },
        right_pie() {
            this.showRight = false
            var right_pie = echarts.init(document.getElementById('right-pie'))
            let data_arr = [{
                value: 0,
                name: '活跃'
            }, {
                value: 0,
                name: '非活跃'
            }]
            let tmp = this.custom_info[this.checkNode] || {}
            let { son = [] } = tmp
            if (son.length <= 2 || son === 0) {
                this.showRight = false
                return false
            } else {
                this.showRight = true
            }
            if (son.length >= 1) {
                son.map(item => {
                    let { customers = 0 } = item || {}
                    if (item.son_type === 1) {
                        data_arr[0].value = customers
                    }
                    if (item.son_type === 2) {
                        data_arr[1].value = customers
                    }
                })
            }
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                series: [{
                    name: '活跃非活跃客户占比',
                    type: 'pie',
                    // radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: data_arr,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        normal: {
                            color: function(params) {
                                //自定义颜色
                                var colorList = [
                                    '#7F86E4', '#70CFA3'
                                ]
                                return colorList[params.dataIndex]
                            }
                        }
                    }
                }]
            }
            right_pie.setOption(option)
        },
        left_pie() {
            var left_pie = echarts.init(document.getElementById('left-pie'))
            let data_arr = [{
                value: 0,
                name: '实名'
            }, {
                value: 0,
                name: '匿名'
            }]
            let tmp = this.custom_info[this.checkNode] || {}
            let { son = [] } = tmp
            if (son.length >= 1) {
                son.map(item => {
                    let { customers = 0 } = item || {}
                    if (item.son_type === 3) {
                        data_arr[0].value = customers
                    }
                    if (item.son_type === 4) {
                        data_arr[1].value = customers
                    }
                })
            }
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                series: [{
                    name: '实名匿名客户占比',
                    type: 'pie',
                    // radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: data_arr,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        normal: {
                            color: function(params) {
                                //自定义颜色
                                var colorList = [
                                    '#7F86E4', '#70CFA3'
                                ]
                                return colorList[params.dataIndex]
                            }
                        }
                    }
                }]
            }
            left_pie.setOption(option)
        },
        // 漏斗图
        // funnel_chart() {
        //     let array = []
        //     let size = _.size(this.custom_info)
        //     if (size < 4) {
        //         size = 4
        //     }
        //     for (let i = 1; i <= size; i++) {
        //         array.push(20 * i)
        //     }

        //     const color = [
        //         '#656DD4',
        //         '#737ADD',
        //         '#8188E6',
        //         '#8A91ED',
        //         '#989EF5',
        //         '#A5ABF8',
        //         '#B5B9FA',
        //         '#C5C8FC',
        //         '#D3D5FD',
        //         '#E4E5FE'
        //     ]
        //     let option = {
        //         color: color,
        //         calculable: true,
        //         series: [{
        //             type: 'funnel',
        //             left: '10%',
        //             top: 0,
        //             bottom: 0,
        //             right: '10%',
        //             // height: {totalHeight} - y - y2,
        //             min: 0,
        //             max: Math.max.apply(Math, array),
        //             minSize: '0%',
        //             maxSize: '100%',
        //             sort: 'descending',
        //             gap: 2,
        //             label: {
        //                 show: true,
        //                 position: 'inside'
        //             },
        //             labelLine: {
        //                 length: 10,
        //                 lineStyle: {
        //                     width: 1,
        //                     type: 'solid'
        //                 }
        //             },
        //             itemStyle: {
        //                 borderColor: '#fff',
        //                 borderWidth: 1
        //             },
        //             emphasis: {
        //                 label: {
        //                     fontSize: 20
        //                 }
        //             },
        //             data: array
        //         }]
        //     }
        //     const chart = echarts.init(document.getElementById('mountNode'))
        //     chart.setOption(option)
        // },
        /*
        funnel_chart() {

            var expectDataList = [{
                value: 220,
                name: '11'
            }, {
                value: 200,
                name: '10'
            }, {
                value: 180,
                name: '9'
            }, {
                value: 160,
                name: '8'
            }, {
                value: 140,
                name: '7'
            }, {
                value: 120,
                name: '6'
            }, {
                value: 100,
                name: '5'
            }, {
                value: 80,
                name: '4'
            }, {
                value: 60,
                name: '3'
            }, {
                value: 20,
                name: '2'
            }, {
                value: 10,
                name: '1'
            }]
            var actualDataList = [{
                value: 220,
                name: '11'
            }, {
                value: 180,
                name: '10'
            }, {
                value: 144,
                name: '9'
            }, {
                value: 112,
                name: '8'
            }, {
                value: 84,
                name: '7'
            }, {
                value: 60,
                name: '6'
            }, {
                value: 40,
                name: '5'
            }, {
                value: 24,
                name: '4'
            }, {
                value: 12,
                name: '3'
            }, {
                value: 2,
                name: '2'
            }, {
                value: 0.5,
                name: '1'
            }]
            var expectData = expectDataList.slice(-(this.list.length + 1))
            var actualData = actualDataList.slice(-(this.list.length + 1))
            actualData[0].value = expectData[0].value
            var chart = new G2.Chart({
                id: 'mountNode',
                forceFit: false,
                width: 560,
                height: expectData.length * 84,
            }) // create the chart object
            chart.coord('rect').transpose().scale(1, -1)
            chart.axis(false)
            chart.legend(false)
            chart.tooltip({
                showTitle: false,
                itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
            })
            var expectView = chart.createView()
            expectView.source(expectData)
            expectView.intervalSymmetric().position('name * value').color('name', ['#656DD4', '#737ADD', '#8188E6', '#8A91ED', '#989EF5', '#A5ABF8', '#B5B9FA', '#C5C8FC', '#D3D5FD', '#E4E5FE'])
                .shape('pyramid')
                .tooltip('name * value', function (name, value) {
                    return {
                        name: '预期' + name,
                        value: value
                    }
                })
                .opacity(0.65)
            var actualView = chart.createView()
            actualView.source(actualData)
            actualView.intervalSymmetric().position('name * value').color('name', ['#656DD4', '#737ADD', '#8188E6', '#8A91ED', '#989EF5', '#A5ABF8', '#B5B9FA', '#C5C8FC', '#D3D5FD', '#E4E5FE'])
                .shape('pyramid')
                .tooltip('name * value', function (name, value) {
                    return {
                        name: '实际' + name,
                        value: value
                    }
                })
                .opacity(1)
                .style({
                    lineWidth: 1,
                    stroke: '#fff'
                })
            chart.render()
        },
        */
        // 页面滚动
        pageTurn() {
            let that = this
            new Swiper('#swiper-page', {
                slidesPerView: 1,
                spaceBetween: 40,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                on: {
                    slideChangeTransitionStart: function() {
                        that.moveFlag = true
                    },
                    slideChangeTransitionEnd: function() {
                        that.userPageIndex = this.activeIndex
                    },
                },
            })
        },
        // 数据源滚动
        sourceTurn() {
            new Swiper('#swiper-source', {
                slidesPerView: 'auto',
                spaceBetween : 20,
                direction: 'horizontal',
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            })
        },
        // 获取属性项数据
        async getAttrData() {
            let data = await getAttributeData()
            if (data.length === 0) {
                this.name = 'UID'
                this.person = 0
            } else {
                let {
                    person = 0,
                    name = '',
                    children = []
                } = data[0] || {}
                this.person = person
                this.name = name
                this.grouping(children)
            }
        },
        // 将 dcid 和 属性分组
        grouping(data) {
            let dcid = []
            let attr = []

            for (let i = 0, length = data.length; i < length; i++) {
                let value = data[i] || {}
                if (value.attr_id === -12) { // 属性
                    attr = [].concat(value.children || [])
                } else if (value.attr_id === -10) { // DCID
                    dcid = [].concat(value.children || [])
                }
            }

            dcid = this.orderMax(dcid)
            attr = this.orderMax(attr)

            if (dcid.length > 0 && attr.length > 0) {
                let [dcidIem = {}] = dcid
                let [attrItem = {}] = attr
                if (dcidIem.person > attrItem.person) {
                    this.proportion = 50 / (dcidIem.person || 0)
                } else {
                    this.proportion = 50 / (attrItem.person || 0)
                }
            } else if (dcid.length > 0) {
                let [dcidIem = {}] = dcid
                this.proportion = 50 / (dcidIem.person || 0)
            } else {
                let [attrItem = {}] = attr
                this.proportion = 50 / (attrItem.person || 0)
            }

            this.distribution(dcid, attr)
        },
        // 分布
        distribution(dcid, attr) {
            /**
             * 获取属性值
             * @param {string} ele          盒子元素
             * @param {number} diameter     圆的直径
             * @param {number} x            在 x 轴能出现圆的个数
             * @param {number} y            在 y 轴能出现圆的个数
             * @param {number} data         数据
             * @param {number} proportion   比例
             *
             */
            let _this = this
            var My = function(param) {
                if (param.data.length === 0) {
                    return false
                }
                this.box = document.querySelector(param.ele) // 盒子元素
                this.width = this.getStyle(this.box, 'width')
                this.r = this.width / 2
                this.middle_limit = 100
                this.min_box = document.querySelector(param.offset)
                this.offsetDirection = param.offsetDirection ? param.offsetDirection : 0
                this.min_box_width = this.getStyle(this.min_box, 'width')
                this.proportion = param.proportion, // 比例
                // this.b_height = this.getStyle(this.box, 'height')
                // this.x = param.x ? param.x : 3
                // this.y = param.y ? param.y : 2
                this.diameter = 50 // 小圆的直径
                this.data = param.data
                this.margin = 10 // 边距
                this.number = this.data.length // 需要位置的个数
                this.coordinate = [] // 存储坐标
                this.init()
            }

            /**
             * 获取属性值
             * @return {number} value 属性值
             *
             */
            My.prototype.getStyle = function(ele, attrs) {
                if (window.getComputedStyle) {
                    let value = window.getComputedStyle(ele, null)[attrs]
                    let index = value.indexOf('px')
                    return Number(value.slice(0, index))
                } else {
                    return ele.currentStyle
                }
            }

            // 创建元素
            My.prototype.createElement = function(top, left, data) {
                var div = document.createElement('div')
                var whValue = data.person * this.proportion
                div.style.width = whValue + 'px'
                div.style.height = whValue + 'px'
                div.style.top = top + 'px'
                div.style.left = left + 'px'
                div.className = 'min-circular'
                this.box.appendChild(div)
                var content = document.createElement('div')
                content.className = 'mc-title'

                div.appendChild(content)
                var spanTitle = document.createElement('span')
                var spanValue = document.createElement('span')
                var rule = /[\u4e00-\u9fa5]/.test(data.name) // 判断title 是否是英文
                if (!rule) {
                    spanValue.className = 'title-english'
                }
                spanTitle.innerText = data.name + ' : '
                spanValue.innerText = _this.$formatNumber(data.person)
                content.appendChild(spanTitle)
                content.appendChild(spanValue)
            }

            // 设置元素位置
            My.prototype.init = function() {
                this.myFor()
                var coordinate = this.coordinate
                for (var i = 0, length = coordinate.length; i < length; i++) {
                    var item = coordinate[i]
                    var data = this.data[i]
                    this.createElement(item.y, item.x, data)
                }
            }

            // 获取范围内不重叠的随机数
            My.prototype.myFor = function() {
                var y_arr = [this.random(this.diameter / 2, this.r - this.middle_limit / 2 - this.diameter - this.margin), this.random(this.r + this.middle_limit / 2, this.width - this.diameter - this.diameter / 2)]
                // var y = this.random(this.diameter / 2, this.width - this.diameter - this.diameter / 2) // 获取随机的 y 轴坐标
                var y = y_arr[this.random(0, 1)]
                var start_x, end_x

                if (y < this.r) {
                    start_x = this.r - Math.sqrt(Math.pow(this.r, 2) - Math.pow(this.r - y, 2)) + this.diameter
                    end_x = this.r + Math.sqrt(Math.pow(this.r, 2) - Math.pow(this.r - y, 2)) - this.diameter - this.diameter
                } else {
                    start_x = this.r - Math.sqrt(Math.pow(this.r, 2) - Math.pow(y - this.r, 2)) + this.diameter
                    end_x = this.r + Math.sqrt(Math.pow(this.r, 2) - Math.pow(y - this.r, 2)) - this.diameter - this.diameter
                }

                if (this.offsetDirection === 'right') {
                    end_x = end_x - this.min_box_width / 2
                } else if (this.offsetDirection === 'left') {
                    start_x = start_x + this.min_box_width / 2
                }

                var x = this.random(start_x, end_x) // 获取随机的 x 轴坐标
                // var end_x = x + this.diameter + this.margin
                // var end_y = y + this.diameter + this.margin
                var lock = 0 // 判断是否存在重叠的位置
                var length = this.coordinate.length
                // this.createElement(y, x)
                for (var i = 0; i < length; i++) {
                    // console.log('?')
                    var item = this.coordinate[i]
                    // var start_x = item.x - this.diameter - this.margin
                    // var end_x = item.x + this.diameter + this.margin
                    // var start_y = item.y - this.diameter - this.margin
                    // var end_y = item.y + this.diameter + this.margin
                    var is_x = x > item.x + this.diameter + this.margin || x < item.x - this.diameter - this.margin
                    var is_y = y > item.y + this.diameter + this.margin || y < item.y - this.diameter - this.margin

                    // console.log(length, 'bie', is_x && is_y)
                    if (is_x || is_y) {
                        lock += 1
                    }

                    // console.log(lock)
                }

                // console.log(lock, length)
                if (lock === length) {
                    // console.log('jl')
                    this.coordinate.push({
                        x: x,
                        y: y
                    })
                }

                if (this.coordinate.length < this.number) {
                    return this.myFor()
                }
            }

            // 获取某个范围的随机数
            My.prototype.random = function(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min)
            }

            new My({
                ele: '#c-left',
                data: attr,
                offset: '.c-box',
                offsetDirection: 'right',
                proportion: this.proportion
            })

            new My({
                ele: '#c-right',
                data: dcid,
                offset: '.c-box',
                offsetDirection: 'left',
                proportion: this.proportion
            })
        },
        // 排序并取最大的前12位
        orderMax(data) {
            let arr = data
            for (var i = 0; i < arr.length - 1; i++) {
                for (var j = 0; j < arr.length - 1 - i; j++) {
                    if (arr[j].person < arr[j + 1].person) {
                        var temp = arr[j]
                        arr[j] = arr[j + 1]
                        arr[j + 1] = temp
                    }
                }
            }
            return arr.slice(0, 8)
        }
    }
})