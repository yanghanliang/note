<template>
	<div class="w1">
		<my-header></my-header>
		<nuxt/>
	</div>
</template>

<script>
import myHeader from '~/components/public/myHeader/index.vue'

export default {
	components: {
		myHeader
	}
}
</script>

<style lang="scss" scope="scoped">
.w1 {
	padding: 0 30px;
	background-color: #fff;
}
</style>
