import type { App } from 'vue';

import HelloWorld from './HelloWorld.vue';

export const setupGlobalComponent = (app: App<Element>) => {
  app.component('MyComponent', HelloWorld);
};
