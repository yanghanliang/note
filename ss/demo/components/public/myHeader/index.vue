<template>
   <nav>
        <a href="#">文章</a>
        <a href="#">目录</a>
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
    nav {
        padding-top: 20px;

        a {
            color: #fff;
            opacity: 0.8;
            margin-right: 30px;
        }

        a:hover {
            opacity: 1;
        }
    }
</style>
