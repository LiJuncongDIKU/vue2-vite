# 起步

包管理 yarn 或 npm

命令查看 package.json

# 关于 eslint 和 prettier

请使用 `VSCode` 安装以下插件

- Prettier - Code formatter
- ESLint
- Formatting Toggle (推荐 可不使用)
- Code Spell Checker (推荐 可不使用)

> 不可在 `.gitignore` 中添加 `.vscode`
> 因为编辑器的 `prettier` 采用了覆盖路径的方式

## eslint使用
如果需要将拷贝过来的的文件手动进行全部格式化请执行以下命令  src为拷贝的文件夹路径 直接执行则格式化全局
```
yarn eslint --fix --ext .js,.vue src
```
## prettier 使用
```
yarn prettier src -w
```
## !!!注意!!!
为了防止冲突 `prettier` 和 `eslint` 均设置为
+ 单引号格式
+ 全部多行带尾逗号
+ HTML模板属性强制单行
以上规则均出于主流和使得git对比视图更清晰考虑

# vue2-vite

vue2 + vite + ElementUI 按需引入 + vuex + vueRouter

相信适合大多数项目的起步所用

- vite-plugin-vue2 是 vue2 必备插件 按 loader 理解
- 使用 vite-plugin-imp 插件引入 ElementUI
- 使用 @vitejs/plugin-legacy 做兼容，默认到 IE11 （只有打包后才兼容）
- 使用 @originjs/vite-plugin-global-style 设置全局样式和变量，默认 SASS
- 路由的懒加载异步组件插件
- 自动导入 module 的 vuex
