<script setup>
import { ref, computed } from "vue";
defineProps(["texto"])
// const counter = ref(0);

</script>

<template>
  <button class="btn btn-contador" @click="$emit('changeCounter')">{{ texto }}</button>
</template>