import Vue from 'vue';
import VueRouter from 'vue-router';
import { lazyLoadView } from 'ljc-lazy-view';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/login' },
  {
    name: 'login',
    path: '/login',
    component: () => lazyLoadView(import('@/views/Login.vue')),
  },
  {
    name: 'home',
    path: '/home',
    component: () => lazyLoadView(import('@/views/Home.vue')),
  },
];

/**
 * 请查看 vite 文档中关于环境变量的章节
 * https://vitejs.cn/guide/env-and-mode.html#env-variables
 */
const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes,
});

export default router;
