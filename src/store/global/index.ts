/*
 * @Description: Global模块主入口文件
 * @Author: QingTong
 * @Date: 2019-01-24 10:29:54
 * @Last Modified by: qingtong
 * @Last Modified time: 2019-02-12 20:54:48
 */

import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';
import { GlobalState } from './types';
import { RootState } from '../types';

/**
 * state
 */
export const state: GlobalState = {
  version: '1.0.0',
  token: '',
};

/**
 * getters
 */
export const getters: GetterTree<GlobalState, RootState> = {
  getVersion(state: GlobalState): string {
    return state.version;
  },
  getToken(state: GlobalState): string {
    return state.token;
  }
};

/**
 * mutations
 */
export const mutations: MutationTree<GlobalState> = {
  setVersion(state: GlobalState, payload: string) {
    state.version = payload;
  },
  // 修改Token
  updateToken: (state, payload: string) => {
    state.token = payload;
  }
};

/**
 * actions
 */
export const actions: ActionTree<GlobalState, RootState> = {
  Version({ commit }, payload: string) {
    commit('setVersion', payload);
  },
  // 退出清除token
  logout({ commit }) {
    commit('updateToken', '');
  },
  setToken({ commit }, payload: string) {
    commit('updateToken', payload);
  }
};

const namespaced: boolean = true;

export const global: Module<GlobalState, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
  actions,
};


