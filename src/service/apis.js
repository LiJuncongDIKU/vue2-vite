/**
 * 这是一个 axios 二封方案，用着还行
 * 
 * https://www.npmjs.com/package/ljc-axios
 */
import { createGroup } from 'ljc-axios';
import eventBus from '@/plugins/eventBus';

const server = createGroup('/api/xxxxxxxx');

// 定义的组都写在数组中，通用的过滤器使用
const groups = [server];

export default {
  fetchUser: server.getRequest('/user/'), // 获取用户信息
}

// 通用过滤器
groups.forEach((axiosInstance) => {
  // 响应过滤
  axiosInstance.interceptors.response.use((res) => {
    const data = res.data;
    if (!data) {
      return res;
    }
    const { code, message } = data;
    if (!code || code === '000') {
      return data;
    }
    eventBus.$emit('request-error', { content: message, title: '请求错误' });
    return data;
  }, (e) => {
    if (e instanceof Error) { // 判断是网络问题还是取消请求
      eventBus.$emit('request-error', { content: '网络异常，无法连接到服务器', title: '网络异常' });
    }
  });

  // GET 请求去掉undefined和空字符串
  axiosInstance.interceptors.request.use((req) => {
    // 清空 param 中的 undefined 和空字符串
    Object.keys(req.params || {}).forEach((key) => {
      const val = req.params[key];
      if (val === undefined || val === '') {
        delete req.params[key]
      }
    });
    return req;
  });
});