<template>

  <Navbar />

  <main class="carrito-vista">

    <div class="container">

      <h1 class="mb-4">Tu carrito</h1>

      <div v-if="items.length === 0" class="vacio">
        <i class="bi bi-cart-x"></i>
        <h3>Tu carrito está vacío</h3>
        <p>Agrega productos desde el catálogo para verlos aquí.</p>
        <router-link to="/catalogo" class="btn btn-primary">
          Ir al catálogo
        </router-link>
      </div>

      <div v-else class="row g-4">

        <div class="col-lg-8">

          <div class="item" v-for="item in items" :key="item.id">
            <img :src="item.imagen" :alt="item.nombre">

            <div class="info">
              <h5>{{ item.nombre }}</h5>
              <p class="precio-unitario">${{ item.precio.toFixed(2) }} c/u</p>
            </div>

            <div class="cantidad">
              Cant: {{ item.cantidad }}
            </div>

            <div class="subtotal">
              ${{ (item.precio * item.cantidad).toFixed(2) }}
            </div>

          </div>

        </div>

        <div class="col-lg-4">

          <div class="resumen">
            <h5>Resumen del pedido</h5>

            <div class="linea">
              <span>Unidades</span>
              <span>{{ totalUnidades }}</span>
            </div>

            <div class="linea total">
              <span>Total</span>
              <span>${{ totalPrecio.toFixed(2) }}</span>
            </div>

            <button class="btn btn-comprar w-100">
              Proceder al pago
            </button>

            <router-link to="/catalogo" class="seguir">
              <i class="bi bi-arrow-left"></i> Seguir comprando
            </router-link>
          </div>

        </div>

      </div>

    </div>

  </main>

  <Footer />

</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import { useCarrito } from '../store/carrito'

const { items, totalUnidades, totalPrecio } = useCarrito()
</script>

<style scoped>

.carrito-vista{
  background:#f8f9fa;
  min-height:100vh;
  padding:50px 0 80px;
}

.vacio{
  text-align:center;
  padding:80px 20px;
  color:#777;
}

.vacio i{
  font-size:60px;
  color:#c7bce6;
}

.vacio .btn{
  margin-top:15px;
}

.item{
  background:white;
  border-radius:12px;
  padding:15px;
  display:flex;
  align-items:center;
  gap:15px;
  margin-bottom:15px;
  box-shadow:0 2px 10px rgba(0,0,0,.05);
}

.item img{
  width:80px;
  height:80px;
  object-fit:cover;
  border-radius:8px;
}

.info{
  flex:1;
}

.info h5{
  margin:0;
  font-weight:700;
}

.precio-unitario{
  color:#6c757d;
  margin:0;
  font-size:14px;
}

.cantidad{
  color:#555;
  min-width:80px;
}

.subtotal{
  font-weight:700;
  color:#5E35B1;
  min-width:80px;
  text-align:right;
}

.resumen{
  background:white;
  border-radius:12px;
  padding:25px;
  box-shadow:0 2px 10px rgba(0,0,0,.05);
}

.linea{
  display:flex;
  justify-content:space-between;
  padding:10px 0;
  color:#555;
}

.linea.total{
  border-top:1px solid #eee;
  margin-top:10px;
  font-weight:800;
  font-size:20px;
  color:#2f2b36;
}

.btn-comprar{
  background:#7E57C2;
  color:white;
  padding:12px;
  margin-top:15px;
}

.btn-comprar:hover{
  background:#5E35B1;
  color:white;
}

.seguir{
  display:block;
  text-align:center;
  margin-top:15px;
  color:#7E57C2;
  text-decoration:none;
  font-weight:600;
}

</style>
