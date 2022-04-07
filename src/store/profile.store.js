const store = {
  namespaced: true,
  state: () => ({
    profile: {
      accessToken: undefined,
      account: undefined,
      createTime: undefined,
      id: undefined,
      name: undefined,
      oauthConsumerKey: undefined,
      oauthConsumerSecret: undefined,
      oauthToken: undefined,
      oauthTokenSecret: undefined,
      refreshToken: undefined,
      roleId: undefined,
      roleName: undefined,
      status: undefined,
      typeCode: undefined,
    }
  }),
  getters: {},
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
      /**
       * 一般来说，我们会解决页面刷新后数据丢失的问题。
       * 你也可以按自己的想法用不一样的实现方式
       */
      // localStorage.setItem('profile', JSON.stringify(profile));
    },
    resetProfile(state) {
      Object.keys(state.profile).forEach(key => {
        state.profile[key] = undefined;
      });
    }
  },
  actions: {},
}

export default store;
