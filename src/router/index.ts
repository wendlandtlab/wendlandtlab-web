import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('/@/pages/Index.vue'),
  },
  {
    path: '/people',
    component: () => import('/@/pages/People.vue'),
  },
  {
    path: '/people/hayden',
    component: () => import('/@/pages/people/Hayden.vue'),
  },
  {
    path: '/people/aaron',
    component: () => import('/@/pages/people/Aaron.vue'),
  },
  {
    path: '/people/alex',
    component: () => import('/@/pages/people/Alex.vue'),
  },
  {
    path: '/people/gino',
    component: () => import('/@/pages/people/Gino.vue'),
  },
  {
    path: '/people/vignesh',
    component: () => import('/@/pages/people/Vignesh.vue'),
  },
  {
    path: '/people/xin',
    component: () => import('/@/pages/people/Xin.vue'),
  },
  {
    path: '/people/yuan',
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
