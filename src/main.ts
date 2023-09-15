import { createApp } from 'vue';
import { setupStore } from '@/store';
import { setupElementPlus } from '@/plugins/elementPlus';
import { setupRouter } from '@/router';
import { setupGlobalComponent } from '@/components';

import '@/styles/theme.less';
import '@/styles/global.less';

import App from './App.vue';

(async () => {
  const app = createApp(App);

  // 状态管理
  setupStore(app);

  // UI框架
  setupElementPlus(app);

  // 路由
  setupRouter(app);

  // 全局组件
  setupGlobalComponent(app);

  app.mount('#app');
})();
