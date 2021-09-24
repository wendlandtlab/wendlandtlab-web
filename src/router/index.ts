import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('/@/pages/Index.vue'),
  },
  {
    path: '/People',
    component: () => import('/@/pages/People.vue'),
  },
  {
    path: '/People/Hayden',
    component: () => import('/@/pages/people/Hayden.vue'),
  },
  {
    path: '/Research',
    component: () => import('/@/pages/Research.vue'),
  },
  {
    path: '/Publications',
    component: () => import('/@/pages/Publications.vue'),
  },
];

export const Router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHistory(),
  routes,
});
