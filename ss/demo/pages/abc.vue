<template>
    <div>
        123
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
        </ul>
    </div>
</template>

<script>
export default {
    layout: 'blog',
    created() {
        this.$message.error('hh')
    }
}
</script>

<style lang="scss" scoped>
    div {
        ul {
            li {
                color: red;
            }
        }
    }
</style>