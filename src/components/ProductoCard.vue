<template>

<div class="producto">

<img :src="imagen">

<h3>{{ nombre }}</h3>

<p>${{ precio }}</p>

<button>

Agregar al carrito

</button>

</div>

</template>

<script setup>

defineProps({

imagen:String,

nombre:String,

precio:Number

})

</script>

<style scoped>

.producto{

width:250px;

background:white;

border-radius:15px;

padding:20px;

text-align:center;

box-shadow:0px 5px 10px rgba(0,0,0,.2);

}

img{

width:100%;

height:220px;

object-fit:cover;

}

button{

margin-top:15px;

background:#8e44ad;

color:white;

padding:10px 20px;

border:none;

border-radius:8px;

cursor:pointer;

}

</style>