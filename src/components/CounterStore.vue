<script setup>
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
const useCounter = useCounterStore();
const { increment } = useCounter;
const { count, doubleCount } = storeToRefs(useCounter);
</script>
<template>
    Simple ejercicio con store
    <p>Home Counter: {{ count }}</p>
    <p>Double Counter: {{ doubleCount }}</p>
    <button @click="increment">Incrementar</button>
</template>
<style>

</style>