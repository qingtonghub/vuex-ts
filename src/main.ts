import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Axios from './plugins/axios';
import VueAxios from 'vue-axios';

Vue.config.productionTip = false;

Vue.use(VueAxios, Axios);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
