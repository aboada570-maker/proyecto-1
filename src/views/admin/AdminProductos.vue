<template>

  <Navbar />

  <main class="admin-productos">

    <div class="container">

      <div class="encabezado">
        <h1>Panel de administración</h1>
        <p>Gestiona el catálogo de productos de la tienda.</p>
      </div>

      <ProductoFormulario
        :producto-editar="productoEditar"
        @guardar="guardarProducto"
        @cancelar="productoEditar = null"
      />

      <ProductoTabla
        :productos="productos"
        :cargando="cargando"
        @editar="editarProducto"
        @eliminar="confirmarEliminar"
      />

    </div>

  </main>

  <Footer />

</template>

<script setup>
import { ref, onMounted } from 'vue'
import Swal from 'sweetalert2'
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'
import ProductoFormulario from '../../components/ProductoFormulario.vue'
import ProductoTabla from '../../components/ProductoTabla.vue'
import productosServicios from '../../services/productosServicios'

const productos = ref([])
const cargando = ref(true)
const productoEditar = ref(null)

async function cargarProductos() {
  cargando.value = true

  try {
    productos.value = await productosServicios.obtenerProductos()
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'No se pudieron cargar los productos',
      text: error.response?.data?.mensaje || 'Intenta de nuevo más tarde.'
    })
  } finally {
    cargando.value = false
  }
}

onMounted(cargarProductos)

function editarProducto(producto) {
  productoEditar.value = producto
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

async function guardarProducto(datos) {
  try {
    if (productoEditar.value) {
      await productosServicios.actualizarProducto(productoEditar.value._id, datos)
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'Producto actualizado',
        showConfirmButton: false,
        timer: 1600
      })
      productoEditar.value = null
    } else {
      await productosServicios.crearProducto(datos)
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'Producto creado',
        showConfirmButton: false,
        timer: 1600
      })
    }

    await cargarProductos()
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'No se pudo guardar el producto',
      text: error.response?.data?.mensaje || 'Revisa los datos e intenta de nuevo.'
    })
  }
}

async function confirmarEliminar(producto) {
  const resultado = await Swal.fire({
    icon: 'warning',
    title: `¿Eliminar "${producto.nombre}"?`,
    text: 'Esta acción no se puede deshacer.',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar',
    confirmButtonColor: '#dc3545'
  })

  if (!resultado.isConfirmed) return

  try {
    await productosServicios.eliminarProducto(producto._id)
    await cargarProductos()

    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Producto eliminado',
      showConfirmButton: false,
      timer: 1600
    })
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'No se pudo eliminar el producto',
      text: error.response?.data?.mensaje || 'Intenta de nuevo más tarde.'
    })
  }
}
</script>

<style scoped>

.admin-productos{
  background:#f8f9fa;
  min-height:100vh;
  padding:40px 0 80px;
}

.encabezado{
  margin-bottom:25px;
}

.encabezado h1{
  font-size:32px;
  font-weight:800;
  margin-bottom:4px;
}

.encabezado p{
  color:#6c757d;
}

</style>
