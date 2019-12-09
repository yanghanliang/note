<template>
   <nav>
        <nuxt-link to="/">首页</nuxt-link>
        <a href="#">目录</a>
		<nuxt-link to="/view/article">文章</nuxt-link>
		<nuxt-link to="/view/demo/ss">尝试</nuxt-link>
		<nuxt-link to="/view/components/demo">组件</nuxt-link>
   </nav>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/color/index.scss';
nav {
    padding: 20px;

    a {
        color: $main-font;
        opacity: 0.8;
        margin-right: 30px;
    }
    
    a:hover {
        opacity: 1;
    }
}
</style>
