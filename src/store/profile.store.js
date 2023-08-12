import Apis from '@/service/apis';

const store = {
  namespaced: true,
  state: () => ({
    loginInfo: {},
  }),
  getters: {},
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
  },
  actions: {
    // 用于刷新时获取当前登录信息
    fetchLoginInfo({ state }) {
      Apis.getLoginInfo().then((res) => {
        state.loginInfo = res.data;
      });
    },
  },
};

export default store;
