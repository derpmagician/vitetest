<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const poke = ref({});

const back = () => {
  router.push("/Pokemons")
}

const getData = async () => {
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
    console.log(data)
    poke.value = data;
  } catch(e) {
    poke.value = null;
    console.error(e);
  }
}
getData();
</script>

<template>
  <div  class="container-pokemon">
    <div v-if="poke" class="container-stats">
      <button @click="back">Retrocede</button>
      <img :src="poke.sprites?.front_default" alt="">
      <h1>Poke name: {{ $route.params.name }}</h1>
    </div>
    <div v-else class="container-stats">No existe el Pokemon</div>
  </div>

</template>


<style>

</style>