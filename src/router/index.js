import Vue from "vue";
import VueRouter from "vue-router";
import { lazyLoadView } from "ljc-lazy-view";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/login" },
  {
    name: "login",
    path: "/login",
    component: () => lazyLoadView(import("@/views/Login.vue")),
  },
  {
    name: "home",
    path: "/home",
    component: () => lazyLoadView(import("@/views/Home.vue")),
  },
];

/* global __PROJECT_NAME__ */
const router = new VueRouter({
  base: `/${__PROJECT_NAME__}/`,
  mode: "history",
  routes,
});

export default router;
