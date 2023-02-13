<script setup>
const props = defineProps(["inicio", "fin", "maxLength"])
const emit = defineEmits(["prev", "next"])
</script>
<template>
<div class="btn-group">
  <button @click="emit('prev')" class="btn btn-primary" :disabled="inicio <= 0" >Previous {{ inicio }}</button>
  <button @click="emit('next')" class="btn btn-primary" :disabled="fin >= maxLength">Next {{ fin }}</button>
</div>
</template>