<template>
    <div class="index">
		<search></search>
		<section class="multiple clearfix">
			<my-echarts :server="getData"></my-echarts>
			<my-echarts type="line" :server="getData"></my-echarts>
			<my-echarts type="bar" :server="getData"></my-echarts>
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
		}
	},
	created() {
		// vueObj.$on('dateChange', (date, that) => {
		// 	console.log(this, that)
		// 	this.date = date
		// })

		// this.getData(['2018-21-10', '2018-23-02'])
	},
	methods: {
		async getData(date) {
			try {
				const { data } = await this.$http.get('/view', { params: {date: date}})
				return data.data
			} catch(e) {
				console.log(e, 'e')
			}
		}
	},

}
</script>
