import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('user', () => {
  const count = ref(0);
  function increment() {
    count.value++;
  }

  return { count, increment };
});
