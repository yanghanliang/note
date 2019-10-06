<template>
    <div class="content clearfix">
        <i class="iconfont iconyuanchuang">123</i>

            <div class="content_right">
                <div class="synopsis">
                    <!-- s_bg 背景 -->
                    <img class="s_bg" src="" alt="背景墙的图片">
                    <img class="s_head_portrait" src="" alt="头像">
                    <div class="s_content">
                        <h2>fdsfzffdf</h2>
                        <h3>- sadasdsadsa -</h3>
                        <p>dsadsadasd</p>
                    </div>
                </div>
            </div>
            <div class="content_left" ref="content_left">
                <div class="cl_box">
                    <div class="clb_top clearfix">
                        <img src="" alt="">
                        <div class="clbt_right">
                            <h2>35656</h2>
                            <p>
                                dsadsad
                            </p>
                        </div>
                    </div>
                    <div class="clb_bottom clearfix">
                        <div class="clbb_left">
                            <i class="iconfont icon-pinglun2"></i>
                            <span>dasdasd</span>
                            &nbsp;
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-shengri-copy"></use>
                            </svg>
                            <span>dsadsadsad</span>
                            &nbsp;
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-liulan"></use>
                            </svg>
                            <a>浏览（<span>dasdsadasdsad</span>）</a>
                        </div>
                        <span @click="clickRead(data.id)">阅读全文</span>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        components: {},
        data() {
            return {

            }
        },
        computed: {},
        created() {},
        methods: {

        },
    }
</script>
<style lang='scss' scoped>
.cl_box {

}
</style>

<style scoped>
/* content-start */
.content {
  width: 12rem;
  margin: 0 auto;
}

/* content_left-start */
.content_left {
  float: left;
  width: 8.4rem;
  /* min-height: 10rem; */
  height: 7rem;
  overflow-y: scroll;
}

.content_left::-webkit-scrollbar {
  display: none;
}

/* cl_box-start */
.content_left .cl_box {
  width: 8rem;
  height: 2rem;
  padding: 0.2rem;
  margin-bottom: 0.1rem;
  border-radius: 0.05rem;
  background-color: #fff;
}

/* clb_top-start */
.content_left .cl_box .clb_top {
  width: 100%;
  height: 1.6rem;
  margin-bottom: 0.2rem;
}

.cl_box .clb_top>img {
  float: left;
  width: 2.4rem;
  height: 1.6rem;
  border-radius: 0.05rem;
}

.cl_box .clb_top .clbt_right {
  float: right;
  width: 5rem;
  height: 100%;
}

.clb_top .clbt_right p {
  color: #888;
  margin-bottom: 0.1rem;
}
/* clb_top-end */

/* clb_bottom-start */
.cl_box .clb_bottom .clbb_left {
  float: left;
}

.cl_box .clb_bottom .clbb_left span {
  color: #096;
}

/* .cl_box .clb_bottom>a {
    float: right;
} */
.cl_box .clb_bottom>span {
  float: right;
  color: #096;
  cursor: pointer;
}
/* clb_bottom-end */
/* cl_box-end */
.content_left .tips {
  padding: 0.1rem;
  color: #26b3ae;
  text-align: center;
  border-radius: 0.05rem;
  background-color: #e6e6e6;
}
/* content_left-end */

/* content_right-start */
.content_right {
  float: right;
  width: 3.36rem;
}

/* synopsis-start */
.content_right .synopsis {
  position: relative;
  background-color: #ffffff;
}

.content_right .synopsis .s_bg {
  width: 100%;
  margin-bottom: 0.3rem;
}

.content_right .synopsis .s_head_portrait {
  left: 50%;
  width: 1.03rem;
  height: 1.03rem;
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -92%);
}

.content_right .synopsis .s_content {
  text-align: center;
}

.synopsis .s_content h3 {
  font-weight: normal;
  text-shadow: -0.01rem -0.01rem white, 0.01rem 0.01rem #333;
}

.synopsis .s_content p {
  color: #888;
  line-height: 0.26rem;
  padding: 0.1rem 0.3rem;
}
/* synopsis-end */
/* content_right-end */
/* content-end */
</style>
