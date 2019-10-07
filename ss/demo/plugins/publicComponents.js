import Vue from 'vue'

// 引入自己的面包屑组件
import myCrumbs from '@/components/public/myCrumbs'

// 引入自己的字体图片组件
import myIcon from '@/components/public/myIcon'

// 调用自己的面包屑组件
Vue.component(myCrumbs.name, myCrumbs)

// 调用自己的字体图标组件
Vue.component(myIcon.name, myIcon)

