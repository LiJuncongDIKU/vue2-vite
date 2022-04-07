import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: () => ({
  }),
  getters: {},
  mutations: {
  },
  actions: {},
});

// 动态注册 vuex 模块
const modules = import.meta.globEager('./*.store.js');
Object.keys(modules).forEach(key => {
  const name = key.replace(/\.store\.js$/, '').replace(/^\.\//, '');
  store.registerModule(name, modules[key].default);
});

export default store;
