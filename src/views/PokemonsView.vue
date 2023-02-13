<script setup>
import { ref } from "vue";
import axios from "axios";
import { RouterLink } from "vue-router";

const pokemons = ref([]);
const getData = async () => {
  try {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/")
    console.log(data.results)
    pokemons.value = data.results;
  } catch(e) {
    console.error(e);
  }
}
getData();

</script>
<template>
  <div class="main-pokemons">
    <h1>Pokemons</h1>
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.name">
        <router-link :to="`/pokemons/${pokemon.name}`">{{pokemon.name}}</router-link>
      </li>
    </ul>
  </div>
</template>
<style>
  a {
    color: rgb(18, 221, 221);
  }
</style>