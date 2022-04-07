import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import { createVuePlugin } from 'vite-plugin-vue2';
import viteCompression from 'vite-plugin-compression';
import globalStyle from '@originjs/vite-plugin-global-style';
import vitePluginImp from 'vite-plugin-imp'; // 关键插件

import path from 'path';
import pkg from './package.json';

const REPLACEMENT = `${path.resolve(__dirname, './src')}/`;
const version = pkg.version;

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@/',
        replacement: REPLACEMENT,
      },
    ],
  },
  define: { // 全局变量
    __APP_VERSION__: JSON.stringify(version),
    __BUILD_TIME__: JSON.stringify(new Date().toLocaleString()),
  },
  build: {
    target: ['es2015'],
    brotliSize: false,
    rollupOptions: {
    }
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
      "styleLibraryName": "theme-chalk",
    }),
  ],
});


