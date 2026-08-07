<template>

  <Navbar />

  <main class="catalogo">


    <section class="encabezado">

      <div class="container">

        <h1>Catálogo de productos</h1>

        <p>
          Encuentra todo lo que necesitas para tu hogar.
        </p>

      </div>

    </section>


    <section class="container filtros">

      <div class="row g-3">


        <div class="col-md-8">

          <div class="input-group">

            <span class="input-group-text">
              <i class="bi bi-search"></i>
            </span>

            <input
              type="text"
              class="form-control"
              placeholder="Buscar producto..."
              v-model="busqueda"
            >

          </div>

        </div>


        <div class="col-md-4">

          <select
            class="form-select"
            v-model="categoriaSeleccionada"
          >

            <option value="Todas">
              Todas las categorías
            </option>

            <option
              v-for="categoria in categorias"
              :key="categoria"
              :value="categoria"
            >
              {{ categoria }}
            </option>

          </select>

        </div>

      </div>

    </section>


    <section class="container productos">

      <div class="row g-4">

        <div
          v-for="producto in productosFiltrados"
          :key="producto.id"
          class="col-12 col-sm-6 col-lg-3"
        >

          <ProductoCard
            :producto="producto"
          />

        </div>

      </div>


      <div
        v-if="productosFiltrados.length === 0"
        class="sin-resultados"
      >

        <i class="bi bi-search"></i>

        <h3>No encontramos productos</h3>

        <p>
          Intenta buscar otro producto o categoría.
        </p>

      </div>

    </section>

  </main>

  <Footer />

</template>


<script setup>

import { ref, computed } from 'vue'

import Navbar from '../components/Navbar.vue'

import Footer from '../components/Footer.vue'

import ProductoCard from '../components/ProductoCard.vue'



const busqueda = ref('')


const categoriaSeleccionada = ref('Todas')


const categorias = [

  'Cocina',

  'Decoración',

  'Organización',

  'Limpieza',

  'Regalos'

]


const productos = ref([

  {
    id: 1,
    nombre: 'Juego de Platos',
    categoria: 'Cocina',
    precio: 25.00,
    stock: 15,
    imagen: '/imagenes/platos.jpg',
    destacado: true
  },

  {
    id: 2,
    nombre: 'Bandeja Decorativa',
    categoria: 'Decoración',
    precio: 18.00,
    stock: 8,
    imagen: '/imagenes/bandeja.jpg',
    destacado: true
  },

  {
    id: 3,
    nombre: 'Organizador Multiuso',
    categoria: 'Organización',
    precio: 12.50,
    stock: 20,
    imagen: '/imagenes/organizador.jpg',
    destacado: false
  },

  {
    id: 4,
    nombre: 'Vajilla',
    categoria: 'Cocina',
    precio: 15.00,
    stock: 10,
    imagen: '/imagenes/vajilla.jpg',
    destacado: false
  },

  {
    id: 5,
    nombre: 'Canasta Decorativa',
    categoria: 'Decoración',
    precio: 22.00,
    stock: 7,
    imagen: '/imagenes/canasta.jpg',
    destacado: true
  },

  {
    id: 6,
    nombre: 'Taza de Cerámica',
    categoria: 'Cocina',
    precio: 16.00,
    stock: 25,
    imagen: '/imagenes/taza.jpg',
    destacado: false
  },

  {
    id: 7,
    nombre: 'Cuenco Multiusos',
    categoria: 'Organización',
    precio: 14.00,
    stock: 12,
    imagen: '/imagenes/cuenco.jpg',
    destacado: false
  },

  {
    id: 8,
    nombre: 'Set de Saleros',
    categoria: 'Regalos',
    precio: 30.00,
    stock: 5,
    imagen: '/imagenes/saleros.jpg',
    destacado: true
  }

])


const productosFiltrados = computed(() => {

  return productos.value.filter(producto => {

    const coincideBusqueda =
      producto.nombre
        .toLowerCase()
        .includes(busqueda.value.toLowerCase())


    const coincideCategoria =
      categoriaSeleccionada.value === 'Todas' ||
      producto.categoria === categoriaSeleccionada.value


    return coincideBusqueda && coincideCategoria

  })

})

</script>


<style scoped>

.catalogo {

  background: #f8f9fa;

  min-height: 100vh;

}

.encabezado {

  background: linear-gradient(
    135deg,
    #7E57C2,
    #9575CD
  );

  color: white;

  text-align: center;

  padding: 70px 20px;

}

.encabezado h1 {

  font-size: 45px;

  font-weight: bold;

}


.filtros {

  margin-top: 40px;

  margin-bottom: 40px;

}


.productos {

  padding-bottom: 70px;

}

.sin-resultados {

  text-align: center;

  padding: 80px 20px;

  color: #777;

}

.sin-resultados i {

  font-size: 60px;

}

</style>