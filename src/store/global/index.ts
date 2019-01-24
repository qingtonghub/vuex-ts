/*
 * @Description: Global模块主入口文件
 * @Author: QingTong
 * @Date: 2019-01-24 10:29:54
 * @Last Modified by: QingTong
 * @Last Modified time: 2019-01-24 11:38:11
 */

import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';
import { GlobalState } from './types';
import { RootState } from '../types';

/**
 * state
 */
export const state: GlobalState = {
  version: '1.0.0',
};

/**
 * getters
 */
export const getters: GetterTree<GlobalState, RootState> = {
  version(state: GlobalState): string {
    return state.version;
  },
};

/**
 * mutations
 */
export const mutations: MutationTree<GlobalState> = {
  setVersion(state: GlobalState, payload: string) {
    state.version = payload;
  },
};

/**
 * actions
 */
export const actions: ActionTree<GlobalState, RootState> = {
  Version({ commit }, payload: string) {
    commit('setVersion', payload);
  },
};

const namespaced: boolean = true;

export const global: Module<GlobalState, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
  actions,
};


