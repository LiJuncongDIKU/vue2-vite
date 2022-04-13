import Vue from 'vue';
import VueRouter from 'vue-router';
import Loading from '@/components/views/Loading.vue';
import LoadingError from '@/components/views/LoadingError.vue';

Vue.use(VueRouter);

// 异步加载的提示
function lazyLoadView(AsyncView) {
  const AsyncHandler = () => ({
    component: AsyncView, // 需要加载的组件 (应该是一个 `Promise` 对象)
    loading: Loading, // 异步组件加载时使用的组件
    error: LoadingError, // 加载失败时使用的组件
    delay: 0,
  });
  return Promise.resolve({
    functional: true,
    render(h, { data, children }) {
      return h(AsyncHandler, data, children);
    },
  });
}

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
