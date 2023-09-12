import { createApp } from 'vue';
import App from './App.vue';
import '@purge-icons/generated';
import { createI18n } from 'vue-i18n';
import 'unfonts.css'
import './styles/base.css';

// Router
import { createRouter, createWebHistory } from 'vue-router/auto'

// i18n
import messages from '@intlify/unplugin-vue-i18n/messages';

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
})

app.use(i18n);

app.use(router);

app.mount('#app');
