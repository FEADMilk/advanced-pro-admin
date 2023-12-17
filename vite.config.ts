import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import VueRouter from 'unplugin-vue-router/vite'; // 自动路由
import UnoCSS from 'unocss/vite'; // css框架库
import AutoImport from 'unplugin-auto-import/vite'; // 自动导入插件
import { VueRouterAutoImports } from 'unplugin-vue-router'; // 自动导入路由配置
import Components from 'unplugin-vue-components/vite'; // 自动导入自定义组件配置
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'; // 自动导入第三方库组件resolver混合配置
import Icons from 'unplugin-icons/vite'; // icon库集成
import IconsResolver from 'unplugin-icons/resolver'; // 自动导入icon组件
import Layouts from 'vite-plugin-vue-layouts'; // 多层级页面切换布局插件配置

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      /* options */
    }),
    // ⚠️ Vue must be placed after VueRouter()
    vue(),
    vueJsx(),
    UnoCSS(),
    AutoImport({
      /* options */
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],

      // global imports to register
      imports: [
        // presets
        'vue',
        // 'vue-router'
        VueRouterAutoImports,
        '@vueuse/core'
      ]
    }),
    Components({
      directoryAsNamespace: true, // 开启文件夹作为命名空间加到组件名称的前缀
      collapseSamePrefixes: true, // 开启同名组件自动合并,文件夹名称与组件名的前缀相同时则自动合并
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          // 自动导入配置
          prefix: 'icon' // 设置icon组件的前缀,页面中使用:<icon-mdi-account />(前缀-图标集-图标名称)
        })
      ]
    }),
    Icons(),
    Layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'default'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
