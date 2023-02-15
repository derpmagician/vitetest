<script setup>
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
import TheWelcome from '../components/TheWelcome.vue'

const useCounter = useCounterStore();
const { increment } = useCounter;
const { count, doubleCount } = storeToRefs(useCounter);
</script>

<template>
  <main>
    <p>Home Counter: {{ count }}</p>
    <p>Double Counter: {{ doubleCount }}</p>
    <button @click="increment">Incrementar</button>
    <TheWelcome />
  </main>
</template>
