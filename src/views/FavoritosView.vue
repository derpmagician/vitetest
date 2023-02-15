<script setup>
import { useFavoritosStore } from '@/stores/favoritos';
import { storeToRefs } from 'pinia';
import { RouterLink } from 'vue-router'

const useFavoritos = useFavoritosStore();

const { favoritos } = storeToRefs(useFavoritos);
const { remove } = useFavoritos;
</script>

<template>
  <h2>Favs</h2>
  <p v-if="favoritos.length === 0">Sin favoritos</p>
  <ul v-else>
    <li v-for="poke in favoritos" :key="poke.id">
      {{ poke.name }}
      <router-link :to="`/pokemons/${poke.name}`">Mas Info</router-link>
      <button @click="remove(poke.id)">Elminar Favoritos</button>
    </li>
  </ul>
</template>