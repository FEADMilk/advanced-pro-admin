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

        - 附1:交互式面板样式
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

        - 附2:如果在更新依赖包的时候出现了问题的解决思路
          > 首先排查可能报错的依赖包,然后使用自定义更新,将包更改会旧的版本,重启编辑器及服务,如果未出现报错,则说明就是这个依赖包的更新出了较大的更新差异。然后去对应依赖包的官网/GitHub仓库/npm网站查看是否有版本更新日志说明,然后看对应版本以及相关依赖包的更新说明

3. git平台bot——配置自动化的脚本
    - [Dependabot](https://github.com/dependabot)
    - [Renovatebot/tutorial](https://github.com/renovatebot/tutorial)

## 自动路由/手动路由的选择

- 手动路由：传统的vue-router配置模式
- 自动路由：
    - [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)
    - [unplugin-vue-router](https://github.com/posva/unplugin-vue-router)
      > 1. `pnpm i -D unplugin-vue-router`下载安装插件
      > 2. 修改`vite.config.js`文件:
      >   ```ts
      >     // vite.config.ts
      >     import VueRouter from 'unplugin-vue-router/vite'
      >     export default defineConfig({
      >     plugins: [
      >       VueRouter({
      >         /* options */
      >       }),
      >       // ⚠️ Vue must be placed after VueRouter()
      >       Vue(),
      >     ],
      >   })
      >   ```
      > 3. 修改`router/index.ts`文件
      >   ```ts
      >     // import { createRouter, createWebHistory } from 'vue-router'
      >     import { createRouter, createWebHistory } from 'vue-router/auto'
      >     
      >     createRouter({
      >       history: createWebHistory(),
      >       // You don't need to pass the routes anymore,
      >       // the plugin writes it for you 🤖
      >     })
      >   ```
      > 4. 添加`.vscode/settings.json`文件配置:
      >   ```json
      >       {
      >         "typescript.preferences.autoImportFileExcludePatterns": ["vue-router"]
      >       }
      >   ```
      >
      >    注意:这个配置并不会解决`router/index.ts`中关于ts对`'vue-router/auto'`引用的报错
      >
      > 5. 添加`typed-router.d.ts`的支持:在tsconfig.app.json中的选项中添加:`"include": ["env.d.ts", "src/**/*", "src/**/*.vue", "typed-router.d.ts"],`,然后保存重启编辑器,项目中会自动生成`typed-router.d.ts`文件。解决了4中提到的ts对该依赖包的检查错误提示 => 在tsconfig.app.json中添加`"moduleResolution": "node"`配置
      > 
      > 注意: 如果仍有第三方依赖库的报错问题,则可以去查看对应库的issues看看是否有相似的问题,或是:若库中有相关的examples,可以使用codespace在网页中运行其对应的代码,再看看其是否有相同报错,若没有则可以查看示例的相关配置,可以使用vscode设置命令:`compare active with...`命令进行文件对比
      >
      > 6.在解决了上述报错后，查看dev服务运行成功，再使用`npm run build`打包构建项目，生成dist文件夹后，使用live server打开dist/index.html时，发现服务启动路径为：`http://127.0.0.1:5500/dist/index.html`页面加载空白，解决方法：`.vscode/settings.json`添加配置：`"liveServer.settings.root": "./dist"`，重启live server服务器，访问`http://127.0.0.1:5500`成功

## CSS框架的选择

- [tailwindcss](https://tailwindcss.com/) 可开启JustInTime模式按需加载——偏稳定性场景
    > 集成操作记录：
    > 
    > 安装依赖包`pnpm install -D tailwindcss postcss autoprefixer`
    > 
    > 初始化tailwindcss配置`npx tailwindcss init -p`(自动生成`tailwind.config.js`和`postcss.config.js`)
    >
    > 修改`tailwind.config.js`配置文件
    >
    >   ```js
    >     /** @type {import('tailwindcss').Config} */
    >     export default {
    >       content: [
    >         "./index.html",
    >         "./src/**/*.{js,ts,jsx,tsx}",
    >       ],
    >       theme: {
    >         extend: {},
    >       },
    >       plugins: [],
    >     }
    >   ```
    > 添加基础样式:在`src\assets\main.css`中添加
    >
    >   ```css
    >     @tailwind base;
    >     @tailwind components;
    >     @tailwind utilities;
    >   ```
    > 重新启动服务即可使用tailwindcss语法编写css了
    >
    > 且tailwindcss中已经集成了resetcss的初始化样式,如果使用此css框架则可以移除原先的reset-css依赖包
- [windicss](https://windicss.org/)——待维护状态
- [unocss-GitHub](https://github.com/unocss/unocss) | [unocss-doc](https://unocss.dev/)按需加载特性——偏性能高偏体积小场景
    > 集成操作记录
    >
    > 安装依赖包`pnpm i -D unocss`
    >
    > 在`vite.config.ts`中添加插件配置
    >
    >   ```ts
    >     // vite.config.ts
    >     import UnoCSS from 'unocss/vite'
    >     import { defineConfig } from 'vite'
    >     
    >     export default defineConfig({
    >       plugins: [
    >         UnoCSS(),
    >       ],
    >     })
    >   ```
    >
    > 创建unocss的配置文件`uno.config.ts`
    >
    >   ```ts
    >     // uno.config.ts
    >     import { defineConfig } from 'unocss'
    >     
    >     export default defineConfig({
    >       // ...UnoCSS options
    >     })
    >   ```
    > 
    > 在主ts文件`main.ts`中添加引入`import 'virtual:uno.css'`
    > 
    > 安装unocss的初始化样式`pnpm add @unocss/reset`
    >
    > 安装完成后引入初始化样式`import '@unocss/reset/tailwind.css'`,引入后也可以移除之前安装的reset-css的依赖
    >
    > 重启服务后即可使用unocss语法编写css

    > 附: 通过unocss配置tailwindcss方案:implemented the whole Tailwind CSS compatible utilities within [a single preset](https://unocss.dev/presets/wind)
    >
    > 混合集成步骤:
    > 
    > 安装依赖`pnpm add -D @unocss/preset-wind`
    >
    > 修改unocss的配置文件`uno.config.ts`
    >
    >   ```ts
    >     // uno.config.ts
    >     import { defineConfig } from 'unocss'
    >     import presetWind from '@unocss/preset-wind'
    >     // 或者这样引入:
    >     // import { presetWind } from 'unocss'
    >     
    >     export default defineConfig({
    >       presets: [
    >         presetWind(),
    >       ],
    >     })
    >   ```
    > 自此即可使用tailwindcss语法写css样式了

## 自动导入方案:AutoImport+VueUse

- [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import) vue/react均可使用
    
    > 配置过程记录:
    >
    > 安装依赖包`pnpm i -D unplugin-auto-import`
    >
    > 在`vite.config.ts`中添加插件配置
    >
    >   ```ts
    >     // vite.config.ts
    >     import AutoImport from 'unplugin-auto-import/vite'
    >     import { defineConfig } from 'vite'
    >     
    >     export default defineConfig({
    >       plugins: [
    >         AutoImport({ /* options */ }),
    >       ],
    >     })
    >   ```
    >
    > 在`tsconfig.app.ts`中添加:`"include": ["env.d.ts", "src/**/*", "src/**/*.vue", "typed-router.d.ts", "auto-imports.d.ts"],`以保证可以识别`auto-imports.d.ts`文件
    >
    > 至此我们在文件中编写代码如`const msg = ref("测试 unplugin-auto-import 插件");`时,再无需像传统编写方式那般引入`import {ref} from 'vue';`
    >
    > 因为我们的路由使用了`unplugin-vue-router`,所以我们还需要修改一下路由自动引入的相关配置,详情可以查看[unplugin-vue-router => Auto Imports](https://github.com/posva/unplugin-vue-router)部分
    >
    > 在`vite.config.ts`中添加并修改配置
    >
    >   ```ts
    >     // vite.config.ts
    >     import AutoImport from 'unplugin-auto-import/vite'
    >     import { defineConfig } from 'vite'
    >     import { VueRouterAutoImports } from 'unplugin-vue-router'
    >     
    >     export default defineConfig({
    >       plugins: [
    >         AutoImport({
    >           imports: [
    >              // 'vue-router',
    >              VueRouterAutoImports,
    >           ],
    >         }),
    >       ],
    >     })
    >   ```
    >
    > 重新启动服务,即可将原有的路由自动引入源由`vue-router`修改为`vue-router/auto`

## 组合式工具类utils库集成

- [VueUse英文文档](https://vueuse.org/)
- [VueUse中文文档](https://www.vueusejs.com/)

> 集成步骤记录:
>
> 安装依赖`pnpm i @vueuse/core`
>
> 在`vite.config.ts`的`AutoImport`的`imports`选项中添加`"@vueuse/core"`即可在项目中以自动引入的方式使用VueUse,非自动引入方式就以传统的按需引入即可

## 自定义组件自动引入插件方案集成

- [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components)其会自动在`src/components`中自动查找组件并自动在页面中引入,无需再以传统方式手动按需引入

> 集成步骤记录
>
> 安装依赖`pnpm i unplugin-vue-components -D`
>
> 在`vite.config.ts`中添加插件配置
>
>   ```ts
>     // vite.config.ts
>     import Components from 'unplugin-vue-components/vite'
>     import { defineConfig } from 'vite'
>     
>     export default defineConfig({
>       plugins: [
>         Components({ /* options */ }),
>       ],
>     })
>   ```
>
> 同样的在`tsconfig.app.json`中添加配置`"include": ["env.d.ts", "src/**/*", "src/**/*.vue", "typed-router.d.ts", "auto-imports.d.ts","components.d.ts"],`
>
> 其余配置项,如多层文件夹中命名相同的组件的冲突配置
>
> 第三方UI库的配置集成使用
>
> 第三方库 [ELement-plus](https://element-plus.org/zh-CN/) 配合集成步骤
>
> 安装库依赖包`pnpm install element-plus`
>
> 在`vite.config.ts`中添加插件的resolver配置
>
>   ```ts
>     // vite.config.ts
>     import Components from 'unplugin-vue-components/vite'
>     import { defineConfig } from 'vite'
>     import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
>     
>     export default defineConfig({
>       plugins: [
>         Components({ 
>           resolvers: [
>             ElementPlusResolver()
>           ],
>         }),
>       ],
>     })
>   ```

## 图标插件集成

- [unplugin-icons](https://github.com/unplugin/unplugin-icons)

> 集成步骤记录
>
> 安装依赖包`pnpm i -D unplugin-icons`
>
> 在`vite.config.ts`中添加插件配置
>
>   ```ts
>     // vite.config.ts
>     import Icons from 'unplugin-icons/vite'
>     import { defineConfig } from 'vite'
>     
>     export default defineConfig({
>       plugins: [
>         Icons({ /* options */ }),
>       ],
>     })
>   ```

- [iconify](https://iconify.design/)

## 页面布局插件库的集成 => 解决不同层级页面拥有相同布局时的跳转切换

- [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)

> 集成步骤记录
>
> 下载依赖包`pnpm install -D vite-plugin-vue-layouts`
>
> 在`vite.config.ts`中添加插件配置
>
>   ```ts
>     // vite.config.ts
>     import Layouts from 'vite-plugin-vue-layouts';
>     import { defineConfig } from 'vite'
>     
>     export default defineConfig({
>       plugins: [
>         Layouts({ /* options */ }),
>       ],
>     })
>   ```
>
> 修改`router/index.ts`文件
> ```ts
>   import { createRouter } from 'vue-router/auto'
>   import { setupLayouts } from 'virtual:generated-layouts'
>
>   const router = createRouter({
>     // ...
>     extendRoutes: (routes) => setupLayouts(routes),
>   })
> ```
>
> 此时ts将会报错找不到`virtual:generated-layouts`,下面添加ts配置来解决此报错:
>
> 未解决的情况:按官网配置在`tsconfig.app.json`中添加配置`"types": ["vite-plugin-vue-layouts/client"]`,重启浏览器后未解决报错问题
>
> 最终解决报错方法:在`env.d.ts`文件中添加`/// <reference types="vite-plugin-vue-layouts/client" />`配置

***两者配置的区别***
```
在 tsconfig.app.json 中添加 types 配置项：

这种方式是在 TypeScript 的配置文件中直接指定了一个全局可用的类型定义集。
当你添加 "types": ["vite-plugin-vue-layouts/client"] 到 tsconfig.app.json 中，TypeScript 编译器会自动包含这些类型定义，并在整个项目中使它们可用。
这意味着在项目中的任何文件里，你都可以直接使用 vite-plugin-vue-layouts/client 提供的类型，而无需额外的导入或引用。
这种方法适用于那些你希望在整个项目中普遍可用的类型定义。
在 env.d.ts 文件中使用 /// <reference types="..." />：

这种方法是通过 TypeScript 的三斜线指令来直接引用类型定义文件。
当你在 env.d.ts 文件（或任何 .d.ts 文件）中添加 /// <reference types="vite-plugin-vue-layouts/client" />，它会告诉 TypeScript 编译器在编译过程中包含这些类型定义。
这种方式通常用于当你需要在特定的文件或模块中引入额外的类型定义，而不是在整个项目中。
它适用于那些只在特定情境下需要的类型定义，或者当你不希望这些类型定义影响到项目的其他部分时。
```

## 宏和语法糖库的集成配置 --- vue3.3已内置,可放弃配置

- [Vue Macros](https://vue-macros.dev/) 是一个库，用于实现尚未被 Vue 正式实现的提案或想法。这意味着它将探索更多宏和语法糖到 Vue 中。

> 集成步骤记录
>
> 下载依赖包`pnpm i -D unplugin-vue-macros`
>
> 修改`vite.config.ts`的配置(在插件中,使用`VueMacros`将`vue()`和`vueJsx()`包裹起来)
> ```ts
>   // vite.config.ts
>   import VueMacros from 'unplugin-vue-macros/>  vite'
>   import Vue from '@vitejs/plugin-vue'
>   // import VueJsx from '@vitejs/plugin-vue-jsx'
>   
>   export default defineConfig({
>     plugins: [
>       VueMacros({
>         plugins: {
>           vue: Vue(),
>           // vueJsx: VueJsx(), // 如果需要
>         },
>       }),
>     ],
>   })
> ```
>
> **注意**:若出现ts一直报错无法找到`'unplugin-vue-macros/vite'`模块的话,此处可以有两种解决思路:(新版本已修复此问题)
>
> - 将引入改为:`import VueMacros from 'unplugin-vue-macros/vite';`,然后使用时改为:`VueMacros.vite({})`
> - 将引入改为:`import VueMacros from 'unplugin-vue-macros/dist/vite';`,以其构建包来引入
>
> > ***如果以后别的第三方库的包引入也出现类似问题,也可尝试以此方法解决***
>
> 添加ts配置,在`env.t.ts`中添加:`/// <reference types="unplugin-vue-macros/macros-global" />`
>
> 添加vscode扩展`Volar`支持:下载依赖包`pnpm i -D @vue-macros/volar`,然后在tsconfig.json中添加配置
> ```json
>   // tsconfig.json
>   {
>     "vueCompilerOptions": {
>       "plugins": [
>         "@vue-macros/volar/define-options",
>         "@vue-macros/volar/define-models",
>         "@vue-macros/volar/define-props",
>         "@vue-macros/volar/define-props-refs",
>         "@vue-macros/volar/short-vmodel",
>         "@vue-macros/volar/define-slots",
>         "@vue-macros/volar/jsx-directive",
>         "@vue-macros/volar/setup-jsdoc"
>   
>         // 选择以下其中一个
>         // "@vue-macros/volar/export-expose",
>         // "@vue-macros/volar/export-props",
>         // "@vue-macros/volar/export-render",
>       ]
>       // ...
>     }
>   }
> ```

> ***PS:***在使用自定义组件的自动引入时,两个组件之间容易出现ts类型不一致却被ts忽略检查的情况,可以通过以下方法来解决:
>
> 在根目录下新建`.npmrc`的文件,添加`shamefully-hoist=true`配置,然后使用`pnpm i`重新安装所有的依赖包,其作用是:会自动调整依赖包的排列顺序,将各依赖包的公共依赖包层级提升,并缩小整个包的体积

## PWA应用的集成

- [PWA](https://web.dev/learn/pwa/)是一种可以是页面变为可以下载\更新\离线访问等的应用的技术
- [PWA集成插件:vite-plugin-pwa](https://github.com/vite-pwa/vite-plugin-pwa)

> 插件集成步骤
>
> 安装依赖`pnpm add vite-plugin-pwa -D`