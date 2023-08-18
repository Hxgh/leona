import { createApp } from 'vue';
import { createPinia } from 'pinia';

import '@/styles/theme.less';
import '@/styles/global.less';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount('#app');
