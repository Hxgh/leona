import type { App } from 'vue';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import 'element-plus/dist/index.css';

export const setupElementPlus = (app: App<Element>) => {
  app.use(ElementPlus, {
    locale: zhCn,
  });
};
