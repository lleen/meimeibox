import Vue from 'vue'
// axios
import axios from 'axios'

// 引入公共scss
import '../stylesheets/main.scss'

// 引入swiper css
import 'swiper/dist/css/swiper.min.css'
//引入awesome
import 'vue-awesome/icons'
// 引入fileter
import './filter'
import Icon from 'vue-awesome/components/Icon'

// rem
import computedRem from './rem'
computedRem()
Vue.component('icon', Icon)
// axios
Vue.prototype.$http = axios

Vue.config.productionTip = false
