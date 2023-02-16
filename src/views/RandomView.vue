<script setup>
import ClickExample from '../components/ClickExample.vue';
import MainCounter from '../components/MainCounter.vue';
import CounterStore from '../components/CounterStore.vue';
// import MainComponent from '../components/MainComponent.vue';
</script>
<template>
  <div class="about">
    <p>Ejemplo con los eventos de los botones del mouse</p>
    <ClickExample />
    <p>Conrador sin store</p>
    <MainCounter />
    <p>Conrador con store</p>
    <CounterStore />
    <!-- <MainComponent /> -->
  </div>
</template>

<style>

</style>