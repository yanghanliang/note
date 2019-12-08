<template>
    <div class="components-demo">
        <div class="cd-left"></div>
        <div class="cd-right"></div>
        <my-progress></my-progress>
    </div>
</template>

<script>
import myProgress from '@/components/progress/index'

export default {
    components: {
        myProgress
    },
    created() {
        console.log('123')
    },
}
</script>

<style lang="scss">
.components-demo {

    .cd-left {
        width: 4rem;
        height: 500px;
        background-color: #fff;
    }

    .cd-right {
        height: 500px;
        float: left;
        margin-left: 4rem;
    }
}
</style>
