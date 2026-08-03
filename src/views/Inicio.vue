<template>

<Navbar/>

<section class="banner">

<h1>La Casa de Matico</h1>

<p>

Todo lo que necesitas para tu hogar en un solo lugar.

</p>

<button>

Comprar ahora

</button>

</section>

<section>

<h2>

Categorías

</h2>

<div class="categorias">

<CategoriaCard
nombre="Cocina"
icono="🍽"
/>

<CategoriaCard
nombre="Decoración"
icono="🛋"
/>

<CategoriaCard
nombre="Limpieza"
icono="🧹"
/>

<CategoriaCard
nombre="Hogar"
icono="🏠"
/>

</div>

</section>

<section>

<h2>

Productos Destacados

</h2>

<div class="productos">

<ProductoCard

imagen="https://picsum.photos/300/250?1"

nombre="Juego de Platos"

:precio="25"

/>

<ProductoCard

imagen="https://picsum.photos/300/250?2"

nombre="Florero"

:precio="18"

/>

<ProductoCard

imagen="https://picsum.photos/300/250?3"

nombre="Canasta"

:precio="12"

/>

</div>

</section>

<Footer/>

</template>

<script setup>

import Navbar from '../components/Navbar.vue'

import Footer from '../components/Footer.vue'

import CategoriaCard from '../components/CategoriaCard.vue'

import ProductoCard from '../components/ProductoCard.vue'

</script>

<style scoped>

.banner{

background:linear-gradient(90deg,#8e44ad,#c86dd7);

color:white;

padding:100px;

text-align:center;

}

.banner button{

margin-top:20px;

padding:15px 35px;

border:none;

border-radius:10px;

background:white;

color:#8e44ad;

font-weight:bold;

}

.categorias{

display:flex;

justify-content:center;

gap:25px;

margin:40px;

flex-wrap:wrap;

}

.productos{

display:flex;

justify-content:center;

gap:30px;

margin:40px;

flex-wrap:wrap;

}

h2{

text-align:center;

margin-top:50px;

}

</style>