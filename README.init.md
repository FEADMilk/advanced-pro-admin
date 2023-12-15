# 项目初始化流程

## 前置环境

- node 版本 18.15.0
- pnpm 版本 8.3.0 (终端命令：`corepack prepare pnpm@8.3.0 --active`更新pnpm版本到对应版本)

## 初始化步骤

1. 终端命令：`npm init vite@latest` 初始化项目
  ```powershell
  Need to install the following packages:
    create-vite@5.1.0
  Ok to proceed? (y) y

  √ Select a framework: » Vue
  √ Select a variant: » Customize with create-vue ↗

  Need to install the following packages:
    create-vue@3.9.0
  Ok to proceed? (y) y

  Vue.js - The Progressive JavaScript Framework

  √ 是否使用 TypeScript 语法？ ... 否 / [是]
  √ 是否启用 JSX 支持？ ... 否 / [是]
  √ 是否引入 Vue Router 进行单页面应用开发？ ... 否 / [是]
  √ 是否引入 Pinia 用于状态管理？ ... 否 / [是]
  √ 是否引入 Vitest 用于单元测试？ ... 否 / [是]
  √ 是否要引入一款端到端（End to End）测试工具？ » Cypress
  √ 是否引入 ESLint 用于代码质量检测？ ... 否 / [是]
  √ 是否引入 Prettier 用于代码格式化？ ... 否 / [是]

  正在构建项目 D:\Web_development_file\2024\FrontEndLearning\advanced-pro-admin\advanced-pro-admin...

  项目构建完成，可执行以下命令：

  npm install
  npm run format
  npm run dev
  ```
2. 终端命令：`pnpm install` 下载依赖
    > 注意：如果下载完依赖后，项目中有依赖引入报错-ts，则使用`reload window`重启编辑器即可
3. 如果未连接远程仓库，可以使用`git init`初始化git，然后进行首次git提交
4. 删除项目中不需要的内容，留下简洁的模板
5. git提交初始化模板
6. 选择css样式框架sass，使用`pnpm i -D sass`安装sass依赖包，安装完成后`pnpm run dev`重启vite服务，即可使用scss语法编写样式
7. 选择全局的初始化样式方案：[reset-css](https://www.npmjs.com/package/reset-css)(除此之外还有[normalcss](https://www.npmjs.com/package/normalcss)方案，更多npm包的可在[npmjs.com](https://www.npmjs.com/)官网进行查看)，reset-css会将所有的默认样式初始化为0，使用`pnpm i reset-css`下载依赖包，下载完成后，直接在main.ts中引入依赖即可