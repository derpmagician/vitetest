<script setup>
import { RouterLink } from "vue-router";
import { useGetData } from '@/composables/getData'

const { data, error, loading, getData } = useGetData();
getData("https://pokeapi.co/api/v2/pokemon");

</script>
<template>
  <div class="main-pokemons">
    <h1>Pokemons</h1>
    <p class="loading" v-if="loading">Loading...</p>
    <p class="alert alert-danger" v-if="error">{{ error }}</p>
    <div v-if="data">
      <ul>
        <li v-for="pokemon in data.results" :key="pokemon.name">
          <router-link :to="`/pokemons/${pokemon.name}`">{{pokemon.name}}</router-link>
        </li>
      </ul>
      <button @click="getData(data.previous)" :disabled="!data.previous">Prev</button>
      <button @click="getData(data.next)" :disabled="!data.next">Next</button>
    </div>
  </div>
</template>
<style>
  a {
    color: rgb(18, 221, 221);
  }
  .loading {
    background: yellow;
    color: black;
  }
</style>