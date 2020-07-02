```install

npm install swiper vue-awesome-swiper --save

# or
yarn add swiper vue-awesome-swiper

```

```html

<swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide>
        <img src="../assets/images/views/introductionPage/logo-17b2c-pc.png" alt="">
    </swiper-slide>
    <swiper-slide>
        <img src="../assets/images/views/introductionPage/logo-518dmf-pc.png" alt="">
    </swiper-slide>
    <swiper-slide>
        <img src="../assets/images/views/introductionPage/logo-amz123-pc.png" alt="">
    </swiper-slide>
    <swiper-slide>
        <img src="../assets/images/views/introductionPage/logo-chuanglan-pc.png" alt="">
    </swiper-slide>
    <swiper-slide>
        <img src="../assets/images/views/introductionPage/logo-datartery-pc.png" alt="">
    </swiper-slide>
    <swiper-slide>
        <img src="../assets/images/views/introductionPage/logo-lingshouyi-pc.png" alt="">
    </swiper-slide>
    <swiper-slide>
        <img src="../assets/images/views/introductionPage/logo-maijiaguan-pc.png" alt="">
    </swiper-slide>
    <swiper-slide>
        <img src="../assets/images/views/introductionPage/logo-malllib-pc.png" alt="">
    </swiper-slide>
    <swiper-slide>
        <img src="../assets/images/views/introductionPage/logo-sellergrowth-pc.png" alt="">
    </swiper-slide>
    <swiper-slide>
        <img src="../assets/images/views/introductionPage/logo-yuguowang-pc.png" alt="">
    </swiper-slide>
    <swiper-slide>
        <img src="../assets/images/views/introductionPage/yayi.png" alt="">
    </swiper-slide>
    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
</swiper>

```


```js

import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css';

export default {
    components: {
        Swiper,
        SwiperSlide
    },
    directives: {
        swiper: directive
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    data () {
        swiperOptions: {
            slidesPerView: 6,
            spaceBetween: 30,
            // pagination: {
            //     el: '.swiper-pagination',
            //     clickable: true,
            // },
            loop: true, // 循环模式选项
            autoplay: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // Some Swiper option/callback...
        },
    }
}

```


```scss

.swiper-container {
    width: 80%;
    height: 190px;
    display: block;
    padding-left: 45px;
    --swiper-navigation-color: #cbcbcb;/* 单独设置按钮颜色 */
    --swiper-navigation-size: 30px;/* 设置按钮大小 */

    img {
        margin: 30px auto 0;
    }
}

```