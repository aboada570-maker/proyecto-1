<template>

<section class="destacados">

  <div class="container">

    <div class="encabezado-seccion">
      <h2 class="seccion-titulo">Productos destacados</h2>
      <p class="seccion-subtitulo">Los favoritos de nuestros clientes</p>
    </div>

    <div class="row g-4">

      <div
        v-for="producto in destacados"
        :key="producto.id"
        class="col-12 col-sm-6 col-lg-3"
      >

        <ProductoCard :producto="producto" />

      </div>

    </div>

    <div class="text-center mt-4">
      <router-link to="/catalogo" class="btn btn-outline-primary btn-lg">
        Ver todo el catálogo
      </router-link>
    </div>

  </div>

</section>

</template>

<script setup>
import ProductoCard from './ProductoCard.vue'
import { obtenerDestacados } from '../data/productos'

const destacados = obtenerDestacados(4)
</script>

<style scoped>

.destacados{
  padding:60px 0;
}

.encabezado-seccion{
  text-align:center;
  margin-bottom:40px;
}

.encabezado-seccion h2{
  font-size:32px;
}

</style>
