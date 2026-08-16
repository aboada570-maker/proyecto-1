<template>

<div class="card categoria">

<div class="card-body">

<div class="icono">

{{ icono }}

</div>

<h4>

{{ nombre }}

</h4>

<p>

{{ descripcion }}

</p>

<router-link
:to="{ path: '/catalogo', query: { categoria: nombre } }"
class="btn btn-outline-primary">

Ver más

</router-link>

</div>

</div>

</template>

<script setup>

const { nombre } = defineProps({

nombre:String,

descripcion:String,

icono:String

})

</script>

<style scoped>

.categoria{

border:none;

transition:.3s;

border-radius:15px;

}

.categoria:hover{

transform:translateY(-10px);

box-shadow:0 10px 20px rgba(0,0,0,.2);

}

.icono{

font-size:60px;

}

</style>