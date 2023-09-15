import type { App } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Home from '@/views/Home/index.vue';
import Login from '@/views/Login/index.vue';
import Application from '@/views/Application/index.vue';
import NotFound from '@/views/NotFound/index.vue';

import WeChat from '@/views/Application/WeChat/index.vue';
import Douyin from '@/views/Application/Douyin/index.vue';
import QQ from '@/views/Application/QQ/index.vue';

// 应用子路由
const apps = [
  {
    name: 'WeChat',
    path: '/application/WeChat',
    component: WeChat,
  },
  {
    name: 'Douyin',
    path: '/application/douyin',
    component: Douyin,
  },
  {
    name: 'QQ',
    path: '/application/QQ',
    component: QQ,
  },
  { path: '', redirect: '/application/WeChat' },
];

// 主要路由
export const routes: Array<RouteRecordRaw> = [
  {
    name: 'login',
    path: '/login',
    component: Login,
  },
  {
    name: 'home',
    path: '/home',
    component: Home,
  },
  {
    name: '404',
    path: '/404',
    component: NotFound,
  },
  {
    name: 'application',
    path: '/application',
    component: Application,
    children: apps,
  },
  { path: '/', redirect: '/home' },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404',
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from) => {
  if (!'isAuthenticated' && to.name !== 'Login') return { name: 'Login' };
});

export const setupRouter = (app: App<Element>) => {
  app.use(router);
};
