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


      <div class="row g-5">


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

import Navbar from '../components/Navbar.vue'

import Footer from '../components/Footer.vue'


const route = useRoute()


const productos = [

  {
    id: 1,
    nombre: 'Juego de Platos',
    categoria: 'Cocina',
    precio: 25.00,
    stock: 15,
    imagen: '/imagenes/platos.jpg',
    opiniones: 12,
    descripcion:
      'Hermoso juego de platos ideal para complementar tu mesa y disfrutar momentos especiales en familia.'
  },

  {
    id: 2,
    nombre: 'Bandeja Decorativa',
    categoria: 'Decoración',
    precio: 18.00,
    stock: 8,
    imagen: '/imagenes/bandeja.jpg',
    opiniones: 8,
    descripcion:
      'Bandeja decorativa ideal para darle un toque elegante y especial a cualquier espacio de tu hogar.'
  },

  {
    id: 3,
    nombre: 'Organizador Multiuso',
    categoria: 'Organización',
    precio: 12.50,
    stock: 20,
    imagen: '/imagenes/organizador.jpg',
    opiniones: 15,
    descripcion:
      'Práctico organizador para mantener tus espacios ordenados y aprovechar mejor cada lugar.'
  },

  {
    id: 4,
    nombre: 'Vajilla',
    categoria: 'Cocina',
    precio: 15.00,
    stock: 10,
    imagen: '/imagenes/vajilla.jpg',
    opiniones: 6,
    descripcion:
      'Set de vajilla elegante y funcional, perfecto para tus comidas diarias o para ocasiones especiales.'
  }

]


const producto = productos.find(

  p => p.id === Number(route.params.id)

)


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

  alert(
    `${cantidad.value} unidad(es) de ${producto.nombre} agregada(s) al carrito 🛒`
  )

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