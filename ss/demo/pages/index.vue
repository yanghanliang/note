<template>
    <div class="index">
		<search></search>
		<section class="multiple clearfix">
			<!-- <my-echarts ref="echarts"></my-echarts>
			<my-echarts :option="option"></my-echarts> -->
			<my-echarts :option="option2"></my-echarts>
			<!-- <my-echarts :server="getData"></my-echarts> -->
		</section>
        <!-- <nuxt-link to="/abc">首页</nuxt-link> -->
    </div>
</template>

<script>
/*
 * 入口文件
 * @author      yanghanliang
 * @created     2019-09-24
 */
import moment from 'moment'
import myEcharts from '~/components/public/echarts/index.vue'
import search from '~/components/public/search/index.vue'
import vueObj from '~/components/public/vue.js'

export default {
	// layout: 'blog',
	components: {
		myEcharts,
		search
	},
	head () {
		return {
			title: this.title,
			meta: [
				{ hid: 'descriptiona', name: 'description', content: '????' }
			]
		}
	},
	data() {
		return {
			date: [moment().subtract(7, 'day').format('YYYY-MM-DD'), moment().format('YYYY-MM-DD')],
			input: '',
			option: {
				title : {
					text: '某地区蒸发量和降水量',
					subtext: '纯属虚构'
				},
				tooltip : {
					trigger: 'axis'
				},
				legend: {
					data:['蒸发量','降水量']
				},
				toolbox: {
					show : true,
					feature : {
						dataView : {show: true, readOnly: false},
						magicType : {show: true, type: ['line', 'bar']},
						restore : {show: true},
						saveAsImage : {show: true}
					}
				},
				calculable : true,
				xAxis : [
					{
						type : 'category',
						data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
					}
				],
				yAxis : [
					{
						type : 'value'
					}
				],
				series : [
					{
						name:'蒸发量',
						type:'bar',
						data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
						markPoint : {
							data : [
								{type : 'max', name: '最大值'},
								{type : 'min', name: '最小值'}
							]
						},
						markLine : {
							data : [
								{type : 'average', name: '平均值'}
							]
						}
					},
					{
						name:'降水量',
						type:'bar',
						data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
						markPoint : {
							data : [
								{name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
								{name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
							]
						},
						markLine : {
							data : [
								{type : 'average', name : '平均值'}
							]
						}
					}
				]
			},
			option2: {
				tooltip: {
					trigger: 'item',
					formatter: "{a} <br/>{b}: {c} ({d}%)"
				},
				legend: {
					orient: 'vertical',
					x: 'left',
					data:['浏览量','点赞数','评论数','注册数','用户量']
				},
				series: [
					{
						name:'访问来源',
						type:'pie',
						radius: ['50%', '70%'],
						avoidLabelOverlap: false,
						label: {
							normal: {
								show: false,
								position: 'center'
							},
							emphasis: {
								show: true,
								textStyle: {
									fontSize: '30',
									fontWeight: 'bold'
								}
							}
						},
						labelLine: {
							normal: {
								show: false
							}
						},
						data:[
							{value:335, name:'浏览量'},
							{value:310, name:'点赞数'},
							{value:234, name:'评论数'},
							{value:135, name:'注册数'},
							{value:1548, name:'用户量'}
						]
					}
				]
			}
		}
	},
	created() {
		vueObj.$on('dateChange', (date, that) => {
			console.log(this, that)
			this.date = date
		})
	},
	methods: {
		async getData(date) {
			console.log(date, 'date')
			try {
				const { data } = await this.$http.get('testData', {
					params: {
						start_date: '2019-05-01',
						end_date: '2019-05-01'
					}
				})
				console.log(data, 'data-page')
				return data.data
			} catch(e) {
				console.log(e, 'e')
			}
		}
	},

}
</script>
