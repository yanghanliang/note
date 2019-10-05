import Vue from 'vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import '~/assets/scss/resetUi/themeColor.scss' // 修改 element-ui 的主题色

Vue.use(Element, { locale })
