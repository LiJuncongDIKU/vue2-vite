<template>
  <div class="abs-center">
    {{ loginInfo }}
    <div class="center login-wrap">
      欢迎登陆
      <el-input
        v-model="account"
        placeholder="账户"
      />
      <el-input
        v-model="password"
        placeholder="密码"
        type="password"
      />
      <el-button
        type="primary"
        @click="login"
      >
        登录
      </el-button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'LoginPage',
  data() {
    return {
      account: 'test',
      password: '123456',
    };
  },
  computed: {
    ...mapState('profile', ['loginInfo']),
  },
  methods: {
    login() {
      this.$router.push({ name: 'home' });
    },
  },
};
</script>

<style lang="scss" scoped>
.login-wrap {
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px #ccc;
  padding: 50px 20px;
}
</style>
