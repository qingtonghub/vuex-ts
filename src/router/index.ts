/*
 * @Description: router配置文件
 * @Author: QingTong
 * @Date: 2019-01-25 11:23:55
 * @Last Modified by: QingTong
 * @Last Modified time: 2019-01-31 14:40:49
 */

import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';
Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes,
  // scrollBehavior(to, from, savedPosition) {
  //   // return 期望滚动到哪个的位置
  //   return { x: 0, y: 0 };
  // }
});

export default router;

