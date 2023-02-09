<script setup>
  import { ref, computed } from "vue";
  const name = "dinamico";
  const micolor = "color: yellow; background: hotpink";
  const arrayColores = ["orange", "peru", "green"];
  const arrayFrutas = [
    {
      nombre: "manzana",
      precio: "$1.00",
      emote: "🍎",
      stock: "8",
    },{
      nombre: "platano",
      precio: "$2.00",
      emote: "🍌",
      stock: "0",
    },{
      nombre: "sandia",
      precio: "$3.00",
      emote: "🍉",
      stock: "1",
    },{
      nombre: "fresa",
      precio: "$1.50",
      emote: "🍓",
      stock: "0"
    },{
      nombre: "ciruela",
      precio: "$1.50",
      emote: "🍒",
      stock: "5"
    },
  ];
  const objetoFruta = {
      nombre: "manzana",
      precio: "$1.00",
      emote: "🍎",
      stock: "8"
  }

  const activo = true;
  const handleClick = (msg) => {
    console.log("cliky", msg);
  }

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
  <div class="main-container">
    <main>
      <div class="container-contador">
        <div class="container-contador-botones">
          <button class="btn btn-contador" @click="increment()">Aumentar</button>
          <button class="btn btn-contador" @click="decrement()">Disminuir</button>
          <button class="btn btn-contador" @click="reset()">Resetear</button>
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

      <button @click.right.prevent="handleClick('d')" >Presione boton derecho</button>
      <button @click="handleClick('i')" >Presione boton izquierdo</button>
      <button @click.middle="handleClick('m')" >Presione boton medio</button>


      <h1 :style="micolor" >esto es amarillo</h1>
      <h3 :style="`color: ${arrayColores[1]}`" >{{ arrayColores }}</h3>
      <h4>{{ activo ? "esto es verdad" : "esto es falso" }}</h4>
      <p v-if="activo===true" > activo true</p>
      <p v-else-if="activo===false" > activo false</p>
      <p v-else>indeciso</p>
      <h5 v-show="activo">"activo con show"</h5>
      <ul>
        <li v-for="(fruta, index) in arrayFrutas" :key="fruta.name">{{ fruta.emote }} {{ fruta.nombre.toLocaleUpperCase() }} esta en la posicion {{ index }}</li>
      </ul>
      <div class="frutas">{{ objetoFruta }}</div>
      <ul>
        <li v-for="(value, propiedad) in objetoFruta" :key="value">{{ propiedad }}=> {{ value }} </li>
      </ul>
      <div class="container">
        Aqui se muestran las frutas con stock:
        <ul>
          <template v-for="(fruta) in arrayFrutas" >
            <li  v-if="fruta.stock > 0" :key="fruta.name">
              <span >{{ fruta.nombre }}: {{ fruta.precio }}</span>
            </li>
          </template>
        </ul>
      </div>
    </main>
  </div>
  
</template>
<style scoped>
  .main-container {
    width: 100%;
    height: 100vh;
    padding: 20px;
    display: flex;
    justify-content: center;
    /* align-items: center; */
  }
  .container-contador {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex: wrap;
  }
  .container-contador-pantalla {
    padding: 1rem 2rem;
    background: gray;
    color: wheat;
    text-align: center;
    border-radius: 50%;
    margin-left: auto;
  }
  .container-contador-botones {
    display: flex;
    flex-wrap: wrap;
  }
  .container-favs ul {
    min-width: 5rem;
  }
  .container-favs ul li {
    display: inline;
    font-size: 1.25rem;
    padding: 0.25rem 0.3rem;
    background: rgb(8, 158, 138);
    color: yellow;
    
  }

  button {
    padding: 0.5rem 1rem;
    margin: 0.25rem;
    border: none;
    cursor: pointer;
    color: white;
    background: rgb(8, 172, 90);
  }
  button:hover {
    background: rgb(3, 145, 150);
  }

  .btn-contador {
    width: 10rem;
  }
  ol, ul {
	list-style: none;
}
  h1 {
    color:greenyellow;
  }
  
  .contador {
    font-weight: bold;
    font-size: 1.75rem;
    padding: 0.25rem;
  }
  .positive {
    background:royalblue
  }
  .negative {
    background: orangered;
  }
</style>