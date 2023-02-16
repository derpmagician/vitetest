<script setup>
import { ref, computed } from "vue";
import ButtonCounter from "./ButtonCounter.vue";
const counter = ref(0);

const increment = () => {
  counter.value++;
}

const decrement = () => {
  counter.value--;
}
const reset = () => {
  counter.value = 0;
}

if (counter.value > 0) {
  document.querySelector.add
}
const classCounter = computed(() => {
  if (counter.value === 0) return 'zero';
  if (counter.value > 0) return 'positive';
  if (counter.value < 0) return 'negative';
})

const arrayFavs = ref([])
const addFav = () => {
  arrayFavs
  arrayFavs.value.push(counter.value)
}

const dissableButton = computed(() => {
  const nSearch = arrayFavs.value.find((num) => num === counter.value)
  console.log(arrayFavs.value)
  if (nSearch === 0) return true;
  return nSearch ? true : false;
})

</script>
<template>
  <div class="container-template">
    <div class="container-contador">
        <div class="container-contador-botones">
          <ButtonCounter texto="Aumentar" @changeCounter="increment" />
          <ButtonCounter texto="Disminuir" @changeCounter="decrement" />
          <ButtonCounter texto="Resetear" @changeCounter="reset" />

          <button class="btn btn-contador" @click="addFav()" :disabled="dissableButton">Añadir a lista</button>
        </div>

        <div class="container-contador-pantalla">
          <div class="contador" :class="classCounter">
            {{ counter }}
          </div>
        </div>

      </div>
      <div class="container-favs">
        {{ arrayFavs }}
        <ul>
          <li v-for="(fav) in arrayFavs" :key="fav" >
            {{ fav }}
          </li>
        </ul>
      </div>
  </div>
</template>