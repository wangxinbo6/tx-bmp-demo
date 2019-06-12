// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style/reset.css'
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './components/comment/switch'
import Mock from 'mockjs'
import axios from 'axios'
Vue.prototype.$http=axios

Vue.use(ElementUI) 
Vue.use(Vuex) 
Vue.use(Mock) 
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
