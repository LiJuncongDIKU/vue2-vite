import path from "path";
import { defineConfig, loadEnv } from "vite";
import legacy from "@vitejs/plugin-legacy";
import { createVuePlugin } from "vite-plugin-vue2";
import viteCompression from "vite-plugin-compression";
import globalStyle from "@originjs/vite-plugin-global-style";
import vitePluginImp from "vite-plugin-imp"; // 关键插件
import { EsLinter, linterPlugin } from "vite-plugin-linter";

import pkg from "./package.json";

const REPLACEMENT = `${path.resolve(__dirname, "./src")}/`;
const {version} = pkg;
const projectName = pkg.name;

export default defineConfig((configEnv) => {
  const isDev = configEnv.mode === "dev";
  /**
   * 根据cdn来设置base  这个base对静态文件生效
   * worker 需要内联方式 否则跨域异常
   * axios 请求请根据 window.location.origin 设置base 否则cookie不共享
   */
  const base = `${isDev ? "/" : "https://cdn.chunyamap.com/"}`;
  return {
    base,
    envDir: 'env', // 如果需要用到环境变量 请放到一个文件夹中
    resolve: {
      alias: [
        {
          find: '@/',
          replacement: REPLACEMENT,
        },
      ],
    },
    define: {
      // 全局变量
      __APP_VERSION__: JSON.stringify(version),
      __BUILD_TIME__: JSON.stringify(new Date().toLocaleString()),
      __PROJECT_NAME__: JSON.stringify(projectName),
    },
    build: {
      target: ['es2015'],
      brotliSize: false,
      rollupOptions: {},
    },
    plugins: [
      createVuePlugin(),
      legacy({
        targets: ['ie >= 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      }),
      viteCompression({
        disable: true, // 关闭gz压缩
      }),
      globalStyle({
        // assets/scss 文件夹下以 global 开头的文件将被自动引入
        sourcePath: path.resolve(__dirname, './src/assets/scss/'),
      }),
      vitePluginImp({
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk',
      }),
      linterPlugin({
        include: ['./src/**/*.js', './src/**/*.vue'],
        linters: [new EsLinter({ configEnv })],
        build: {
          includeMode: 'filesInFolder',
          disable: true,
        },
      }),
    ],
    server: {
      proxy: {
        '/api': {
          target: 'https://dev.indoormap.huatugz.com',
          changeOrigin: true,
        },
      },
    },
  };
});
