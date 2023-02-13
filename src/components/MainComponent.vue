<script setup>
  import { ref, computed, onMounted } from "vue";

  window.addEventListener("load",function() {
    document.getElementById("loader").classList.toggle("closed-loader");
  })

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

  // fetch("https://pokeapi.co/api/v2/pokemon/")
  // .then((res) => res.json())
  // .then((data) =>{
  //   let arrayNombres = [];
  //   data.results.forEach((element) => {
  //     arrayNombres.push(element.name);
  //   })
  //   console.log(arrayNombres);
  // })
  // .catch(e => console.error(e))


  const pokemones = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/")
      const data = await res.json()
      // console.log(data.results)
      // const arrayNombres = data.results.map(pokemon => pokemon.name);
      const arrayNombres = data.results.filter(pokemon => pokemon.name === "charizard")
      console.log(arrayNombres)
    } catch (e) { console.error(e) }
  }

  pokemones();

</script>
<template>
  <div class="main-container">
    <main>
      Las propiedades computadas "computed" nos sirven para generar calculos en nuestros componentes,
      por ejemplo no se recomienda colocar demasiada lógica en nuestras plantillas HTML,
      ya que dificulta la interpretación de nuestros componentes.<br>
      ref es una referencia reactiva, en nuestro ejemplo necesitamos un entero que sea "rastreable",
      por ende utilizaremos ref, una forma de trabajar con la reactividad de Vue 3.<br>

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
    <div class="lds-roller loader" id="loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
  
</template>
<style scoped>

  .lds-roller div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
  }
  .lds-roller div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #cef;
    margin: -4px 0 0 -4px;
  }
  .lds-roller div:nth-child(1) {
    animation-delay: -0.036s;
  }
  .lds-roller div:nth-child(1):after {
    top: 63px;
    left: 63px;
  }
  .lds-roller div:nth-child(2) {
    animation-delay: -0.072s;
  }
  .lds-roller div:nth-child(2):after {
    top: 68px;
    left: 56px;
  }
  .lds-roller div:nth-child(3) {
    animation-delay: -0.108s;
  }
  .lds-roller div:nth-child(3):after {
    top: 71px;
    left: 48px;
  }
  .lds-roller div:nth-child(4) {
    animation-delay: -0.144s;
  }
  .lds-roller div:nth-child(4):after {
    top: 72px;
    left: 40px;
  }
  .lds-roller div:nth-child(5) {
    animation-delay: -0.18s;
  }
  .lds-roller div:nth-child(5):after {
    top: 71px;
    left: 32px;
  }
  .lds-roller div:nth-child(6) {
    animation-delay: -0.216s;
  }
  .lds-roller div:nth-child(6):after {
    top: 68px;
    left: 24px;
  }
  .lds-roller div:nth-child(7) {
    animation-delay: -0.252s;
  }
  .lds-roller div:nth-child(7):after {
    top: 63px;
    left: 17px;
  }
  .lds-roller div:nth-child(8) {
    animation-delay: -0.288s;
  }
  .lds-roller div:nth-child(8):after {
    top: 56px;
    left: 12px;
  }

  .loader {
    background: rgb(74, 2, 116);
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    clip-path: circle(200% at 100% 0);
    transition: clip-path 5s ease-in-out;
  }

  .closed-loader {
    clip-path: circle(0.0% at 100% 0);
  }
  .main-container {
    /* width: 100%; */
    /* height: 100vh; */
    padding: 20px;
    display: flex;
    /* flex: wrap; */
    /* justify-content: center; */
  }
  .container-contador {
    display: flex;
    /* align-items: center; */
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
    width: 10rem;
  }

  button.btn-contador {
    border: none;
    cursor: pointer;
    color: white;
    background: rgb(8, 172, 90);
  }
  button.btn-contador:hover {
    background: rgb(3, 145, 150);
  }

  button.btn-contador:active {
    background: rgb(1, 34, 97);
  }

  button.btn-contador:disabled {
    background: rgb(1, 34, 97);
    cursor:default;
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
    border-radius: 50%;
  }
  .positive {
    background:royalblue
  }
  .negative {
    background: orangered;
  }

  @keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>