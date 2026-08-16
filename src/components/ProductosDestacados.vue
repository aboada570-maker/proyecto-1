<template>

<section class="destacados">

  <div class="container">

    <div class="encabezado-seccion">
      <h2 class="seccion-titulo">Productos destacados</h2>
      <p class="seccion-subtitulo">Los favoritos de nuestros clientes</p>
    </div>

    <div v-if="cargando" class="text-center py-4">
      <div class="spinner-border text-primary"></div>
    </div>

    <div class="row g-4" v-else>

      <div
        v-for="producto in destacados"
        :key="producto._id"
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
import { ref, onMounted } from 'vue'
import ProductoCard from './ProductoCard.vue'
import productosServicios from '../services/productosServicios'

const destacados = ref([])
const cargando = ref(true)

onMounted(async () => {
  try {
    const productos = await productosServicios.obtenerProductos()
    destacados.value = productos.filter(p => p.destacado).slice(0, 4)
  } catch {
    destacados.value = []
  } finally {
    cargando.value = false
  }
})
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
