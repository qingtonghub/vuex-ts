import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Axios from './plugins/axios';
import VueAxios from 'vue-axios';
import ElementUI from 'element-ui';
import './assets/scss/element-variables.scss';
import SvgIcon from '@/components/base/SvgIcon.vue';

Vue.config.productionTip = false;

Vue.use(VueAxios, Axios);
// use ElementUI
Vue.use(ElementUI);
// 全局注册SvgIcon组件
Vue.component('svg-icon', SvgIcon);

// 引入所有svg资源
const requireAll = (requireContext: any) => requireContext.keys().map(requireContext);
const req: any = require.context('@/assets/svg-icons', false, /\.svg$/);
requireAll(req);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
