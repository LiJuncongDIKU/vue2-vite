# vue2-vite

vue2 + vite + ElementUI 按需引入 + vuex + vueRouter

相信适合大多数项目的起步所用

使用命令行拷贝到自己项目

`npx degit https://github.com/LiJuncongDIKU/vue2-vite my-project`

+ vite-plugin-vue2 是 vue2 必备插件 按loader理解
+ 使用 vite-plugin-imp 插件引入 ElementUI
+ 使用 @vitejs/plugin-legacy 做兼容，默认到 IE11 （只有打包后才兼容）
+ 使用 @originjs/vite-plugin-global-style 设置全局样式和变量，默认 SASS
+ 路由的懒加载异步组件插件
+ 自动导入 module 的 vuex
+ 杂项：配置了路径别名；输出项目信息；