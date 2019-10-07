<template>
    <div class="search">
        <logo class="logo"></logo>
        <el-input v-model="input" clearable placeholder="请输入内容">
            <i slot="suffix" class="el-icon-search cursor"></i>
        </el-input>
    </div>
</template>

<script>
import logo from '~/components/public/logo/index.vue'

export default {
    components: {
        logo
    },
    data() {
        return {
            input: ''
        }
    },
    computed: {},
    created() {},

    methods: {

    },
}
</script>

<style lang='scss' scoped>
.search {
    width: 5rem;
    margin: 0 auto;
    line-height: 1.5rem;
    position: relative;

    .logo {
        top: -0.6rem;
        left: -0.8rem;
        position: absolute;
        transform: scale(0.3);
    }
}
</style>
