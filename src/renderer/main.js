import Vue from 'vue';
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import App from './App.vue';
import router from './router/router.js';

Vue.use(Vuetify);
Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
})