import { defineConfig } from 'vite';
import { resolve } from 'path'
import path from 'path';
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import Components from 'unplugin-vue-components/vite'
import PurgeIcons from 'vite-plugin-purge-icons';
import svgLoader from 'vite-svg-loader';
import Unfonts from 'unplugin-fonts/vite'
import VueRouter from 'unplugin-vue-router/vite'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000,
  },
  resolve: {
    alias: {
      '/@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    VueRouter({
      /* options */
      routesFolder: 'src/pages',
      extensions: ['.vue'],
    }),
    vue(),
    Components({ /* options */ }),
    // https://github.com/jpkleemans/vite-svg-loader
    svgLoader(),

    // vhttps://github.com/stafyniaksacha/vite-plugin-fonts#readme
    Unfonts({ 
      google: {
        families: ['Open Sans', 'Montserrat', 'Fira Sans'],
      },
    }),

    // https://github.com/antfu/vite-plugin-windicss
    WindiCSS({
      safelist: 'prose prose-sm m-auto text-left',
    }),

    // https://github.com/antfu/purge-icons/tree/main/packages/vite-plugin-purge-icons
    PurgeIcons({
      /* PurgeIcons Options */
    }),

    // https://github.com/intlify/vite-plugin-vue-i18n
    VueI18nPlugin({
      include: [path.resolve(__dirname, './locales/**')],
    }),
  ],
  base: './',
});
