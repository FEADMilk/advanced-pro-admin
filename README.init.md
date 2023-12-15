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

## 更新npm依赖包的三种策略

1. 自定义更新`npm i 依赖包名称@版本号`
2. 借助npm工具
    - [npm-check](https://www.npmjs.com/package/npm-check)
      > **使用方法：**
      > 
      > 全局安装`npm i -g npm-check`
      > 
      > 使用`npm-check`命令检查,可以使用空格选中要更新的依赖包,然后回车开始更新
      > 
      > 其余更新命令详见文档
    - [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)
      > **使用方法：**
      > 
      > 全局安装`npm i -g npm-check-updates`
      > 
      > 使用`ncu`命令检查项目的依赖包(依据项目中的package.json进行检查)
      > 
      > 更新命令参考其对应文档
    - 使用`npm-check`进行更新实操记录:
        > 1. 全局安装`npm i -g npm-check`
        >
        > 2. 使用`npm-check`检查依赖包的版本更新情况
        >
        > 3. Use `npm-check -u` for interactive update.使用此命令进入交互式更新面板(空格选中,回车更新)
        > 
        > 4.解读更新面板:
        >
        >  > ***Patch Update(可更)*** : 此栏目中均为patch末尾版本号的更新,一般无重大更新,可以选
        >  >
        >  > ***Minor Update(可更)*** : 此栏目中均为minor中间版本号的更新,一般中间版本号的更新,大部分是加入一些新的特性api,所以一般也都可以全选进行更新
        >  >
        >  > ***Major Update(不更)*** : 此栏目中均为major主版本号的更新,一般涉及主版本更新的依赖包,我们选择不更新,如果出于某些原因不得不更新,则需要查看官网/GitHub仓库看两个版本中的更新差异,然后做出相应的解决方案

        - 附:交互式面板样式
        ```powershell
          ? Choose which packages to update. (Press <space> to select, <a> to toggle all, <i> to invert selection)
  
          Patch Update Backwards-compatible bug fixes.
          >( ) vue                        3.3.10  ❯  3.3.11  https://github.com/vuejs/core/tree/main/packages/vue#readme
          ( ) @vitejs/plugin-vue devDep  4.5.1   ❯  4.5.2   https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#readme
          ( ) vite devDep                5.0.5   ❯  5.0.9   https://vitejs.dev
          ( ) vitest devDep              1.0.1   ❯  1.0.4   https://github.com/vitest-dev/vitest#readme
  
          Minor Update New backwards-compatible features.
          ( ) @rushstack/eslint-patch devDep  1.3.3   ❯  1.6.1   https://rushstack.io
          ( ) eslint devDep                   8.49.0  ❯  8.55.0  https://eslint.org
          ( ) eslint-plugin-vue devDep        9.17.0  ❯  9.19.2  https://eslint.vuejs.org
          ( ) prettier devDep                 3.0.3   ❯  3.1.1   https://prettier.io
          ( ) typescript devDep               5.2.2   ❯  5.3.3   https://www.typescriptlang.org/

          Major Update Potentially breaking API changes. Use caution.
          ( ) @types/node devDep  18.19.2  ❯  20.10.4  https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/node
        ```
3. git平台bot