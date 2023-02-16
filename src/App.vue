<script setup>
import MainComponent from './components/MainComponent.vue';

</script>
<template>
<div class="principal">
  <header>
    <nav>
      <RouterLink to="/"> Home</RouterLink> |
      <RouterLink to="/Pokemons"> Pokemons</RouterLink> |
      <RouterLink to="/Favoritos"> Favs</RouterLink> |
      <RouterLink to="/Random"> Random</RouterLink> |
      <RouterLink to="/About"> About</RouterLink>
    </nav>
  </header>
  <RouterView />
  

</div>
</template>
<style>
  a {
    color: white;
  }
  a[aria-current='page'] {
    color: #f3ef02;
  }
  button {
    padding: 0.25rem 0.5rem;
  }
</style>