import { reactive, computed } from 'vue'

const estado = reactive({
  items: []
})

function agregarItem(producto, cantidad = 1) {
  const existente = estado.items.find(item => item.id === producto._id)

  if (existente) {
    existente.cantidad += cantidad
  } else {
    estado.items.push({
      id: producto._id,
      nombre: producto.nombre,
      precio: producto.precio,
      imagen: producto.imagen,
      cantidad
    })
  }
}

const totalUnidades = computed(() =>
  estado.items.reduce((total, item) => total + item.cantidad, 0)
)

const totalPrecio = computed(() =>
  estado.items.reduce((total, item) => total + item.cantidad * item.precio, 0)
)

export function useCarrito() {
  return {
    items: estado.items,
    agregarItem,
    totalUnidades,
    totalPrecio
  }
}
