<template>
    <div class="components-demo">
        <div class="cd-left">
            <ul class="left-nav">
                <li>
                    <h2>组件</h2>
                    <ul>
                        <h3>Basic</h3>
                        <li>
                            <nuxt-link to="/view/components/demo">Layout 布局</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/view/components/demo/a">Container 布局容器</nuxt-link>
                        </li>
                        <li>
                            <a href="#">Color 色彩</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="cd-right">
            <nuxt-child/>
        </div>
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
@import '~/assets/scss/color/index.scss'; // 使用方法

.components-demo {
    .cd-left {
        width: 4rem;
        height: 500px;
        float: left;
        background-color: #fff;
    }

    .cd-right {
        height: 500px;
        margin-left: 4.5rem;
    }
}

.left-nav {
    padding: 0.2rem;
    color: $main-font;

    a {
        display: block;
        line-height: 34px;
    }

    h2 {
        font-size: 16px;
    }

    h3 {
        font-size: 12px;
        color: $secondary;
        margin: 24px 0 4px 0;
        font-weight: normal;
    }
}
</style>
