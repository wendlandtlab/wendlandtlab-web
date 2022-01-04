import { createApp } from 'vue';
import App from './App.vue';
import '@purge-icons/generated';
import { createI18n } from 'vue-i18n';

import './styles/base.css';

// Router
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'

// i18n
import messages from '@intlify/vite-plugin-vue-i18n/messages';

// WindiCSS
import 'virtual:windi.css';
import 'virtual:windi-devtools';

const app = createApp(App);

//
const i18n = createI18n({
  locale: 'en',
  messages,
});

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(i18n);

app.use(router);

app.mount('#app');
