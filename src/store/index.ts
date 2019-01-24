/*
 * @Description: vuex入口文件
 * @Author: QingTong
 * @Date: 2019-01-24 10:27:30
 * @Last Modified by: QingTong
 * @Last Modified time: 2019-01-24 11:44:28
 */

import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { global } from './global';

Vue.use(Vuex);
const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0',
  },
  modules: {
    global,
  }
};
export default new Vuex.Store<RootState>(store);
