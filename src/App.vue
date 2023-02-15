<script setup>
import MainFetchingPosts from './components/MainFetchingPosts.vue';
import MainComponent from './components/MainComponent.vue';
import MainCounter from './components/MainCounter.vue';
import ClickExample from './components/ClickExample.vue';
</script>
<template>
<div class="principal">
  <header>
    <nav>
      <RouterLink to="/"> Home</RouterLink> |
      <RouterLink to="/Pokemons"> Pokemons</RouterLink> |
      <RouterLink to="/Favoritos"> Favs</RouterLink> |
      <RouterLink to="/About"> About</RouterLink>
    </nav>
  </header>
  <RouterView />
  <MainFetchingPosts />
  Inicio
  <MainCounter />
  <MainComponent />
  <ClickExample />
  Final
</div>
</template>
<style scoped>
  a {
    color: white;
  }
  a[aria-current='page'] {
    color: #f3ef02;
  }
</style>