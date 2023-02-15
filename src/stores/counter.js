import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})


// export const useCounterStore = defineStore("counter", {
//   // data reactiva
//   state: () => ({
//       count: 0,
//   }),
//   // methods
//   actions: {
//       increment() {
//           this.count++;
//       },
//   },
//   // computed
//   getters: {
//       doubleCount: (state) => state.count * 2,
//   },
// });