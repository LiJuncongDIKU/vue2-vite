import Vue from "vue";

import App from "@/App.vue";
import store from "@/store";
import router from "@/router";
import "@/plugins/elementUI";
import apis from "@/service/apis";

Vue.config.productionTip = false;
Vue.prototype.$apis = apis;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

// 打印打包信息
/* global __APP_VERSION__, __BUILD_TIME__ */
const ENV = import.meta.env;
// eslint-disable-next-line no-console
console.log(`
  ------------------------------------------------------------
  |
  |  打包模式：${ENV.MODE}
  |  打包版本：${__APP_VERSION__}
  |  打包时间：${__BUILD_TIME__}
  |
  ------------------------------------------------------------
`);
