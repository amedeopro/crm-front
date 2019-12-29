import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { routes } from './routes.js';
import axios from 'axios';
import { store } from './store/store';
import Vuex from 'vuex'

axios.defaults.baseURL = 'http://80.211.134.4/api'

import VueRouter from 'vue-router'

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
  routes,
  store,
  mode: 'history'
})


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
