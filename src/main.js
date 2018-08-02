// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// The introduction of router
import router from './router'

// config
import './module/config'

// The introduction of router
// import './components/commons/conmmons'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 配置所有组件都有router的东西
  components: { App },
  template: '<App/>'
})
