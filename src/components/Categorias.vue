<template>

<section class="container my-5">

<h2 class="text-center mb-5">

Categorías

</h2>

<div class="row">

<div class="col-md-3">

<CategoriaCard

icono="🍽"

nombre="Cocina"

descripcion="Todo para cocinar."

/>

</div>

<div class="col-md-3">

<CategoriaCard

icono="🛋"

nombre="Decoración"

descripcion="Haz tu hogar más bonito."

/>

</div>

<div class="col-md-3">

<CategoriaCard

icono="🧺"

nombre="Organización"

descripcion="Ordena cada espacio."

/>

</div>

<div class="col-md-3">

<CategoriaCard

icono="🎁"

nombre="Regalos"

descripcion="Sorprende a quien más quieres."

/>

</div>

</div>

</section>

</template>

<script setup>

import CategoriaCard from './CategoriaCard.vue'

</script>