import Vue from 'vue'
import App from './App'
import router from './router'

import Vuex from 'vuex'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import { Message } from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import ElementUI from 'element-ui'

import './assets/scss/index.scss'
import 'swiper/swiper-bundle.css'
import 'font-awesome/css/font-awesome.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Vuex)
Vue.use(VueCookie);
Vue.use(VueLazyLoad);
Vue.use(VueAwesomeSwiper);
Vue.use(ElementUI);

Vue.prototype.$axios = axios;
Vue.prototype.$message = Message;
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})