<script setup>
const handleClick = (msg) => {
  console.log("cliky", msg);
}
</script>
<template>
  <div class="btn-container">
    <button @click.right.prevent="handleClick('d')" >Presione boton derecho</button>
    <button @click="handleClick('i')" >Presione boton izquierdo</button>
    <button @click.middle="handleClick('m')" >Presione boton medio</button>
  </div>
</template>