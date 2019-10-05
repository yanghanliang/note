<template>
	<div class="index w1">
		<!-- <my-heaader></my-heaader> -->
		<section class="content clearfix">
			<div class="search">
				<logo class="logo"></logo>
				<el-input v-model="input" clearable placeholder="请输入内容">
					<i slot="suffix" class="el-icon-search cursor"></i>
				</el-input>
			</div>
		</section>
		<section class="">
			<my-echarts></my-echarts>
		</section>
		<!-- <nuxt-link to="/abc">首页</nuxt-link> -->
		<nuxt/>
	</div>
</template>

<script>
import myHeaader from '~/components/public/myHeader/index.vue'
import logo from '~/components/public/logo/index.vue'
import myEcharts from '~/components/public/echarts/index.vue'

export default {
	data() {
		return {
			input: '',
		}
	},
	components: {
		logo,
		myHeaader,
		myEcharts
	},
	mounted() {
	},
	methods: {

	}
}
</script>

<style src="../assets/scss/index.scss" lang="scss" scoped></style>
