import Vue from 'vue'

import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import useElementUI from '@/plugins/elementUI';
import apis from '@/service/apis';

useElementUI();
Vue.config.productionTip = false
Vue.prototype.$apis = apis;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")

// 打印打包信息
const ENV = import.meta.env;
console.log(`
  ------------------------------------------------------------
  |
  |  打包模式：${ENV.MODE}
  |  打包版本：${__APP_VERSION__}
  |  打包时间：${__BUILD_TIME__}
  |
  ------------------------------------------------------------
`);