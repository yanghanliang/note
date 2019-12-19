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