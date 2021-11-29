import { createRouter, createWebHashHistory } from 'vue-router';

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
    path: '/People/Aaron',
    component: () => import('/@/pages/people/Aaron.vue'),
  },
  {
    path: '/People/Alex',
    component: () => import('/@/pages/people/Alex.vue'),
  },
  {
    path: '/People/Gino',
    component: () => import('/@/pages/people/Gino.vue'),
  },
  {
    path: '/People/Vignesh',
    component: () => import('/@/pages/people/Vignesh.vue'),
  },
  {
    path: '/People/Xin',
    component: () => import('/@/pages/people/Xin.vue'),
  },
  {
    path: '/People/Yuan',
    component: () => import('/@/pages/people/Yuan.vue'),
  },
  {
    path: '/People/Alison',
    component: () => import('/@/pages/people/Alison.vue'),
  },
  {
    path: '/Research',
    component: () => import('/@/pages/Research.vue'),
  },
  {
    path: '/Publications',
    component: () => import('/@/pages/Publications.vue'),
  },
  {
    path: '/Publications/all-pubs',
    component: () => import('/@/pages/AllCitations.vue'),
  },
];

export const Router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHashHistory(),
  routes,
});
