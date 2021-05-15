import Vue from 'vue'
import App from './App'
import router from './router'
// 引入ElementUI
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import md5 from 'js-md5'

import { ajax } from '@/utils/tools'

import './assets/css/global.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import Directives from './utils/directives'
import common from './common'

Vue.use(Directives)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
Vue.prototype.$common = common
Vue.prototype.$md5 = md5
Vue.prototype.$ajax = ajax
Vue.use(Element)
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
