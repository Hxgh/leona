import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const modifyVars = {
  '@primary-color': '#2B7489',
};

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars,
      },
    },
  },
  resolve: {
    alias: {
      '~': '/',
      '@': '/src/',
    },
  },
  server: {
    open: true,
    host: true,
    port: 2025,
  },
});
