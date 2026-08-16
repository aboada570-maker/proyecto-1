<template>

  <div class="card producto h-100">

    <div class="imagen-container">

      <img
        :src="producto.imagen"
        :alt="producto.nombre"
        class="card-img-top"
      >

      <span
        v-if="producto.destacado"
        class="badge destacado"
      >

        ⭐ Destacado

      </span>

      <span
        v-if="producto.precioAnterior"
        class="badge descuento"
      >

        -{{ porcentajeDescuento }}%

      </span>

    </div>

    <div class="card-body d-flex flex-column">

      <small class="categoria">

        {{ producto.categoria }}

      </small>

      <h5 class="card-title">

        {{ producto.nombre }}

      </h5>

      <div class="estrellas" v-if="producto.rating">
        <i
          v-for="n in 5"
          :key="n"
          class="bi"
          :class="n <= producto.rating ? 'bi-star-fill' : 'bi-star'"
        ></i>
        <span v-if="producto.opiniones">({{ producto.opiniones }})</span>
      </div>

      <div class="precio">

        ${{ producto.precio.toFixed(2) }}
        <span v-if="producto.precioAnterior" class="precio-anterior">
          ${{ producto.precioAnterior.toFixed(2) }}
        </span>

      </div>


      <p class="stock">

        <i class="bi bi-box-seam"></i>

        {{ producto.stock }} disponibles

      </p>


      <button
        class="btn btn-carrito mt-auto"
        @click="agregarAlCarrito"
      >

        <i class="bi bi-cart-plus"></i>

        Agregar al carrito

      </button>

      <div class="botones">

        <router-link
            :to="`/producto/${producto._id}`"
            class="btn btn-detalle"
        >

            <i class="bi bi-eye"></i>

            Ver producto

        </router-link>

        <button
            class="btn btn-carrito"
            @click="agregarAlCarrito"
        >

            <i class="bi bi-cart-plus"></i>

            Agregar

        </button>

        </div>
    </div>
</div>
</template>


<script setup>

import { computed } from 'vue'
import Swal from 'sweetalert2'
import { useCarrito } from '../store/carrito'

const props = defineProps({

  producto: {

    type: Object,

    required: true

  }

})

const { agregarItem } = useCarrito()

const porcentajeDescuento = computed(() => {
  if (!props.producto.precioAnterior) return 0
  return Math.round(
    ((props.producto.precioAnterior - props.producto.precio) / props.producto.precioAnterior) * 100
  )
})

function agregarAlCarrito() {

  agregarItem(props.producto)

  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'success',
    title: `${props.producto.nombre} agregado al carrito`,
    showConfirmButton: false,
    timer: 1800,
    timerProgressBar: true
  })

}

</script>


<style scoped>

.producto {

  border: none;

  border-radius: 15px;

  overflow: hidden;

  transition: all .3s ease;

  box-shadow: 0 4px 15px rgba(0,0,0,.08);

}


.producto:hover {

  transform: translateY(-8px);

  box-shadow: 0 10px 25px rgba(0,0,0,.15);

}


.imagen-container {

  height: 230px;

  position: relative;

  overflow: hidden;

}


.card-img-top {

  width: 100%;

  height: 100%;

  object-fit: cover;

  transition: transform .4s ease;

}


.producto:hover .card-img-top {

  transform: scale(1.08);

}


.destacado {

  position: absolute;

  top: 12px;

  left: 12px;

  background: #ffc107;

  color: #333;

}

.descuento {

  position: absolute;

  top: 12px;

  right: 12px;

  background: #dc3545;

  color: white;

}

.estrellas {

  color: #ffc107;

  font-size: 13px;

  margin: 4px 0;

}

.estrellas span {

  color: #6c757d;

  margin-left: 4px;

}

.precio-anterior {

  font-size: 15px;

  font-weight: normal;

  color: #999;

  text-decoration: line-through;

  margin-left: 6px;

}

.categoria {

  color: #7E57C2;

  font-weight: bold;

}


.precio {

  font-size: 25px;

  font-weight: bold;

  color: #5E35B1;

  margin: 10px 0;

}


.stock {

  color: #6c757d;

  font-size: 14px;

}


.btn-carrito {

  background: #7E57C2;

  color: white;

  border: none;

  padding: 10px;

  border-radius: 8px;

}

.btn-carrito:hover {

  background: #5E35B1;

  color: white;

}


.botones {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.btn-detalle {
  border: 1px solid #7E57C2;
  color: #7E57C2;
}

.btn-detalle:hover {
  background: #7E57C2;
  color: white;
}


</style>