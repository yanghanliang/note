<template>
    <div :class="['video-box', {show: showIcon}]">
        <video src="https://www.w3school.com.cn/i/movie.ogg" ref="video" :controls="controls"></video>
        <i class="icon-video" @click="clickPlay"></i>
    </div>
</template>

<script>
export default {
    data() {
        return {
            controls: false,
            showIcon: true,
        }
    },
    methods: {
        clickPlay() {
            this.controls = true
            let ele = this.$refs.video

            if(ele.paused) {
                // 播放
                ele.play()
                this.showIcon = false
            } else {
                // 暂停
                ele.pause()
            }
        }
    },
}
</script>
