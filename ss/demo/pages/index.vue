<template>
    <div class="index">
		<search></search>
		<section class="nav">
			<div class="nav-item">
				<div class="top">
					<div class="octagon">
						<div class="octagon2"></div>
					</div>
				</div>
				<div class="bottom"></div>
			</div>
		</section>
		<section class="multiple clearfix">
			<my-echarts></my-echarts>
			<my-echarts :option="option"></my-echarts>
			<my-echarts :option="option2"></my-echarts>
			<my-echarts></my-echarts>
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
import logo from '~/components/public/logo/index.vue'
import myEcharts from '~/components/public/echarts/index.vue'
import search from '~/components/public/search/index.vue'

export default {
	// layout: 'blog',
	components: {
		logo,
		myEcharts,
		search
	},
	data() {
		return {
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
					data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
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
							{value:335, name:'直接访问'},
							{value:310, name:'邮件营销'},
							{value:234, name:'联盟广告'},
							{value:135, name:'视频广告'},
							{value:1548, name:'搜索引擎'}
						]
					}
				]
			}
		}
	},

}
</script>

<style lang="scss">
	.octagon {
		width: 120px;
		height: 120px;
		position: relative;
		background-color: aquamarine;

		&::before {
			top: 0;
			width: 100%;
			content: "";
			display: block;
			position: absolute;
			box-sizing: border-box;
			border-bottom: 30px solid #7fffd4;
			border-left: 30px solid whitesmoke;
			border-right: 30px solid whitesmoke;
		}
		
		&::after {
			bottom: 0;
			width: 100%;
			content: "";
			display: block;
			position: absolute;
			box-sizing: border-box;
			border-top: 30px solid #7fffd4;
			border-left: 30px solid whitesmoke;
			border-right: 30px solid whitesmoke;
		}

		.octagon2 {
			width: 60%;
			height: 60%;
			background-color: red;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);

			&::before {
				top: 0;
				width: 100%;
				content: "";
				display: block;
				position: absolute;
				box-sizing: border-box;
				border-bottom: 30px solid red;
				border-left: 30px solid whitesmoke;
				border-right: 30px solid whitesmoke;
			}
			
			&::after {
				bottom: 0;
				width: 100%;
				content: "";
				display: block;
				position: absolute;
				box-sizing: border-box;
				border-top: 30px solid red;
				border-left: 30px solid whitesmoke;
				border-right: 30px solid whitesmoke;
			}
		}
	}
</style>
