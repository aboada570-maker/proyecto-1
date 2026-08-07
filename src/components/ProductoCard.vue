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

    </div>

    <div class="card-body d-flex flex-column">

      <small class="categoria">

        {{ producto.categoria }}

      </small>

      <h5 class="card-title">

        {{ producto.nombre }}

      </h5>


      <div class="precio">

        ${{ producto.precio.toFixed(2) }}

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
            :to="`/producto/${producto.id}`"
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

const props = defineProps({

  producto: {

    type: Object,

    required: true

  }

})


function agregarAlCarrito() {

  alert(
    `${props.producto.nombre} fue agregado al carrito 🛒`
  )

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