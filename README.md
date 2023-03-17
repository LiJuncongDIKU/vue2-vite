# 起步

包管理 yarn 或 npm

命令查看 package.json

# 关于 eslint 和 prettier
请使用 `VSCode` 安装以下插件
+ Prettier - Code formatter
+ ESLint
+ Formatting Toggle (推荐 可不使用)
+ Code Spell Checker (推荐 可不使用)

> 不可在 `.gitignore` 中添加 `.vscode`
> 因为编辑器的 `prettier` 采用了覆盖路径的方式

# vue2-vite

vue2 + vite + ElementUI 按需引入 + vuex + vueRouter

相信适合大多数项目的起步所用

- vite-plugin-vue2 是 vue2 必备插件 按 loader 理解
- 使用 vite-plugin-imp 插件引入 ElementUI
- 使用 @vitejs/plugin-legacy 做兼容，默认到 IE11 （只有打包后才兼容）
- 使用 @originjs/vite-plugin-global-style 设置全局样式和变量，默认 SASS
- 路由的懒加载异步组件插件
- 自动导入 module 的 vuex
