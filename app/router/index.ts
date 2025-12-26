import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('~/pages/index.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('~/pages/about.vue'),
  },
  {
    path: '/features',
    name: 'features',
    component: () => import('~/pages/features.vue'),
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: () => import('~/pages/pricing.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('~/pages/contact.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        el: to.hash,
        bahavior: 'smooth',
      };
    }
    return { top: 0 };
  },
});

export default router;
