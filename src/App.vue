<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import eventBus from "@/plugins/eventBus";

export default {
  name: "App",
  created() {
    // 处理由 apis.js 抛出的问题
    eventBus.$on("request-error", (opt) => {
      this.$alert(opt.content, {
        confirmButtonText: "知道了",
        showCancelButton: false,
        showClose: true,
        type: "error",
        ...opt,
      });
    });

    this.$store.dispatch("profile/fetchLoginInfo");
  },
};
</script>

<style lang="scss">
#app,
html,
body {
  margin: 0;
}
#app {
  width: 100vw;
  height: 100vh;
}
</style>
