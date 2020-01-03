import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { routes } from './routes.js';
import axios from 'axios';
import { store } from './store/store';
import Vuex from 'vuex';
import Chartkick from 'vue-chartkick';
import Chart from 'chart.js'

require('./store/subscriber');

axios.defaults.baseURL = 'https://80.211.134.4/api'



import VueRouter from 'vue-router'

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Chartkick.use(Chart))

const router = new VueRouter({
  routes,
  store,
  mode: 'history'
})


Vue.config.productionTip = false

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
  new Vue({
    render: h => h(App),
    router,
    store,
  }).$mount('#app')
})


