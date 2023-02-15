<script setup>
import { useRoute, useRouter } from "vue-router";
import { useFavoritosStore } from '@/stores/favoritos'
import { storeToRefs } from 'pinia'
import { useGetData } from '@/composables/getData'

const route = useRoute();
const router = useRouter();
const useFavoritos = useFavoritosStore();

const { add, findPoke } = useFavoritos;

const { data, error, loading, getData } = useGetData();

const back = () => {
  router.push("/Pokemons")
}

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
</script>

<template>
  <div  class="container-pokemon">
    <p class="loading" v-if="loading">Loading...</p>
    <p class="alert alert-danger" v-if="error">{{ error }}</p>
    <div v-if="data" class="container-stats">
      <button @click="back">Retrocede</button>
      <img :src="data.sprites?.front_default" alt="">
      <h1>Poke name: {{ $route.params.name }}</h1>
      <button @click="add(data)" :disabled="findPoke(data.name)">Añadir Favoritos</button>
    </div>
    <div v-else class="container-stats">No existe el Pokemon</div>
  </div>

</template>


<style>

</style>