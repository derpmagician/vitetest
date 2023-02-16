<script setup>
import { ref, computed, onMounted } from "vue";
import BlogPost from "./BlogPost.vue";
import PaginatePost from "./PaginatePost.vue";
const favorito = ref("");
const cambiarFavorito = ((title) => {
  favorito.value = title;
})
const maxLength = computed(() => posts.value.length);
const posts = ref([]);
const postXPage = ref(10);
const inicio = ref(0);
const fin = ref(postXPage.value);
const next = (() => {
  inicio.value += postXPage.value;
  fin.value += postXPage.value;
});
const prev = (() => {
  inicio.value -= postXPage.value;
  fin.value -= postXPage.value;
})
onMounted(async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    posts.value = await res.json();
  } catch(e) {
    console.error(e);
  }
  // fetch("https://jsonplaceholder.typicode.com/posts")
  // .then(res => res.json())
  // .then(data => {
  //   posts.value = data;
  // })
  // .catch((e) => console.error(e))
})
</script>
<template>
  <div class="posts">
    <h2>Mi Post Favorito: {{ favorito || "Sin Favorito" }}</h2>
    <PaginatePost @prev="prev" @next="next"
      :inicio="inicio" :fin="fin" :maxLength="maxLength" />
    <BlogPost v-for="post in posts.slice(inicio,fin)" :key="post.id"
      :title=post.title :id=post.id
      :body=post.body
      @cambiarFavorito="cambiarFavorito"
    />
  </div>
</template>