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