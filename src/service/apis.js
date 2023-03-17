/**
 * 这是一个 axios 二封方案，用着还行
 *
 * https://www.npmjs.com/package/ljc-axios
 */
import { createAxios } from "ljc-axios";
import eventBus from "@/plugins/eventBus";

// 分组定义后台不同的服务  当后台停止服务或更新的时候有好处
const auth = createAxios({ host: "/api/auth" });

// 定义的组都写在数组中，通用的过滤器使用
const groups = [auth];

// 通用过滤器
groups.forEach((axiosInstance) => {
  axiosInstance.interceptors.response.use(
    (res) => {
      // 响应数据过滤
      const { data } = res;

      if (!data?.code) {
        // 不是常规类型的响应
        return res;
      }

      const { code, message } = data;
      if (code === "000") {
        return data;
      }
      eventBus.$emit("request-error", { content: message, title: "请求错误" });
      return res.data;
    },
    (e) => {
      if (e instanceof Error) {
        // 判断是网络问题还是取消请求
        eventBus.$emit("request-error", {
          content: "无法连接到服务器",
          title: "网络或服务器异常",
        });
      }
    }
  );
});

export default {
  getLoginInfo: auth.postRequest("/info"), // 获取用户信息
  login: auth.postRequest("/login"), // 登录信息
  logout: auth.postRequest("/logout"), // 注销登录
};
