<template>
	<div class="index w1">
		<my-heaader></my-heaader>
		<section class="content clearfix">
			<logo class="logo"></logo>
			<div class="search">
				<el-input v-model="input" clearable placeholder="请输入内容">
					<i slot="suffix" class="el-icon-search cursor"></i>
				</el-input>
			</div>
		</section>
		<nuxt-link to="/abc">首页</nuxt-link>
		<nuxt/>
	</div>
</template>

<script>
import myHeaader from '~/components/public/myHeader/index.vue'
import logo from '~/components/public/logo/index.vue'

export default {
	data() {
		return {
			input: ''
		}
	},
	components: {
		logo,
		myHeaader
	},
	methods: {

	}
}
</script>

<style src="../assets/scss/index.scss" lang="scss" scoped></style>
<style lang="scss">
	html, body {
		height: 100%;
	}

	body {
		background-image: url("../assets/images/banner/banner.jpg");
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
</style>