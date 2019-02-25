/*
 * @Description: router配置文件
 * @Author: QingTong
 * @Date: 2019-01-25 11:23:55
 * @Last Modified by: qingtong
 * @Last Modified time: 2019-02-12 21:04:22
 */

import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';
import store from '../store';
Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes,
  // scrollBehavior(to, from, savedPosition) {
  //   // return 期望滚动到哪个的位置
  //   return { x: 0, y: 0 };
  // }
});

router.beforeEach((to: any, from: any, next: any) => {
  if (to.meta.isAuth && !store.getters['global/getToken']) {
    next({ path: '/login' })
  } else {
    next();
  }
});

export default router;

