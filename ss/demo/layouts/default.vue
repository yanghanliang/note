<template>
	<div class="index">
		<!-- <header>
			<ul class="clearfix">
				<li>多试</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
			</ul>
		</header> -->
		<section class="content">
			<canvas id="logo"></canvas>
			<div class="search">
				<logo></logo>
			</div>
			<el-input v-model="input" placeholder="请输入内容"></el-input>
		</section>
	</div>
</template>

<script>
import logo from '~/components/public/logo/index.vue'

export default {
	data() {
		return {
			input: ''
		}
	},
	components: {
		logo
	},
	methods: {

	}
}
</script>

<style lang="scss">
	html, body {
		height: 100%;
	}

	body {
		background: url("../assets/images/banner/banner.jpg") no-repeat center cover;
	}
</style>
<style src="../assets/scss/index.scss" lang="scss" scoped></style>
