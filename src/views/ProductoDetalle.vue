<template>

  <Navbar />

  <main class="detalle">

    <div class="container">


      <div class="volver">

        <router-link to="/catalogo">

          <i class="bi bi-arrow-left"></i>

          Volver al catálogo

        </router-link>

      </div>


      <div v-if="!producto" class="no-encontrado">
        <i class="bi bi-search"></i>
        <h3>Producto no encontrado</h3>
        <p>El producto que buscas no existe o ya no está disponible.</p>
        <router-link to="/catalogo" class="btn btn-primary">Volver al catálogo</router-link>
      </div>

      <div v-else class="row g-5">


        <div class="col-md-6">

          <div class="imagen-principal">

            <img
              :src="producto.imagen"
              :alt="producto.nombre"
            >

          </div>

        </div>


        <div class="col-md-6">

          <span class="categoria">

            {{ producto.categoria }}

          </span>


          <h1>

            {{ producto.nombre }}

          </h1>


          <div class="estrellas">

            ⭐⭐⭐⭐⭐

            <span>
              ({{ producto.opiniones }} opiniones)
            </span>

          </div>


          <div class="precio">

            ${{ producto.precio.toFixed(2) }}

          </div>


          <p class="descripcion">

            {{ producto.descripcion }}

          </p>


          <div class="stock">

            <i class="bi bi-box-seam"></i>

            {{ producto.stock }} unidades disponibles

          </div>


          <hr>


          <div class="cantidad">

            <label>

              Cantidad:

            </label>


            <div class="contador">

              <button
                @click="disminuir"
                :disabled="cantidad <= 1"
              >

                −

              </button>


              <span>

                {{ cantidad }}

              </span>


              <button
                @click="aumentar"
                :disabled="cantidad >= producto.stock"
              >

                +

              </button>

            </div>

          </div>


          <button
            class="btn btn-carrito"
            @click="agregarAlCarrito"
          >

            <i class="bi bi-cart-plus"></i>


          </button>


          <button
            class="btn btn-comprar"
          >

            Comprar ahora

          </button>

        </div>

      </div>

    </div>

  </main>

  <Footer />

</template>


<script setup>

import { ref } from 'vue'

import { useRoute } from 'vue-router'

import Swal from 'sweetalert2'

import Navbar from '../components/Navbar.vue'

import Footer from '../components/Footer.vue'

import { obtenerProductoPorId } from '../data/productos'

import { useCarrito } from '../store/carrito'


const route = useRoute()

const { agregarItem } = useCarrito()


const producto = obtenerProductoPorId(route.params.id)


const cantidad = ref(1)


function aumentar() {

  if (cantidad.value < producto.stock) {

    cantidad.value++

  }

}


function disminuir() {

  if (cantidad.value > 1) {

    cantidad.value--

  }

}


function agregarAlCarrito() {

  agregarItem(producto, cantidad.value)

  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'success',
    title: `${cantidad.value} unidad(es) de ${producto.nombre} agregadas al carrito`,
    showConfirmButton: false,
    timer: 1800,
    timerProgressBar: true
  })

}

</script>


<style scoped>

.detalle {

  background: #f8f9fa;

  min-height: 100vh;

  padding: 40px 0 80px;

}


.volver {

  margin-bottom: 40px;

}


.volver a {

  color: #7E57C2;

  text-decoration: none;

  font-weight: bold;

}


.no-encontrado {

  text-align: center;

  padding: 80px 20px;

  color: #777;

}


.no-encontrado i {

  font-size: 60px;

  color: #c7bce6;

}


.no-encontrado .btn {

  margin-top: 15px;

}


.imagen-principal {

  background: white;

  border-radius: 20px;

  padding: 30px;

  height: 500px;

  display: flex;

  align-items: center;

  justify-content: center;

  box-shadow: 0 5px 20px rgba(0,0,0,.08);

}


.imagen-principal img {

  width: 100%;

  height: 100%;

  object-fit: contain;

}


.categoria {

  color: #7E57C2;

  font-weight: bold;

}


h1 {

  font-size: 45px;

  font-weight: bold;

  margin-top: 10px;

}


.estrellas {

  margin: 15px 0;

  font-size: 18px;

}


.estrellas span {

  color: #777;

  font-size: 14px;

}


.precio {

  font-size: 40px;

  color: #5E35B1;

  font-weight: bold;

  margin: 20px 0;

}


.descripcion {

  font-size: 18px;

  color: #555;

  line-height: 1.7;

}


.stock {

  color: #198754;

  font-weight: bold;

  margin: 20px 0;

}


.cantidad {

  margin: 25px 0;

}


.contador {

  display: flex;

  align-items: center;

  margin-top: 10px;

}


.contador button {

  width: 45px;

  height: 45px;

  border: none;

  background: #7E57C2;

  color: white;

  font-size: 22px;

}


.contador span {

  width: 60px;

  height: 45px;

  display: flex;

  align-items: center;

  justify-content: center;

  background: white;

  border-top: 1px solid #ddd;

  border-bottom: 1px solid #ddd;

  font-weight: bold;

}


.btn-carrito,
.btn-comprar {

  width: 100%;

  padding: 14px;

  margin-top: 10px;

  font-size: 18px;

}


.btn-carrito {

  background: #7E57C2;

  color: white;

}


.btn-comprar {

  background: #ffc107;

  color: #333;

}

</style>