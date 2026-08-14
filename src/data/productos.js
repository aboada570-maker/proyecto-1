export const productos = [
  {
    id: 1,
    nombre: 'Juego de Platos',
    categoria: 'Cocina',
    precio: 25.00,
    precioAnterior: 32.00,
    stock: 15,
    imagen: '/imagenes/platos.jpg',
    destacado: true,
    opiniones: 12,
    rating: 5,
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
    destacado: true,
    opiniones: 8,
    rating: 4,
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
    destacado: false,
    opiniones: 15,
    rating: 4,
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
    destacado: false,
    opiniones: 6,
    rating: 5,
    descripcion:
      'Set de vajilla elegante y funcional, perfecto para tus comidas diarias o para ocasiones especiales.'
  },
  {
    id: 5,
    nombre: 'Canasta Decorativa',
    categoria: 'Decoración',
    precio: 22.00,
    stock: 7,
    imagen: '/imagenes/canasta.jpg',
    destacado: true,
    opiniones: 9,
    rating: 4,
    descripcion:
      'Canasta decorativa tejida a mano, perfecta para organizar y decorar cualquier rincón de tu hogar.'
  },
  {
    id: 6,
    nombre: 'Taza de Cerámica',
    categoria: 'Cocina',
    precio: 16.00,
    stock: 25,
    imagen: '/imagenes/taza.jpg',
    destacado: false,
    opiniones: 20,
    rating: 5,
    descripcion:
      'Taza de cerámica artesanal, ideal para disfrutar tu café o té favorito con estilo.'
  },
  {
    id: 7,
    nombre: 'Cuenco Multiusos',
    categoria: 'Organización',
    precio: 14.00,
    stock: 12,
    imagen: '/imagenes/cuenco.jpg',
    destacado: false,
    opiniones: 5,
    rating: 4,
    descripcion:
      'Cuenco versátil para cocina u organización, resistente y de acabado elegante.'
  },
  {
    id: 8,
    nombre: 'Set de Saleros',
    categoria: 'Regalos',
    precio: 30.00,
    stock: 5,
    imagen: '/imagenes/saleros.jpg',
    destacado: true,
    opiniones: 11,
    rating: 5,
    descripcion:
      'Set de saleros con diseño exclusivo, un regalo perfecto para los amantes de la cocina.'
  }
]

export function obtenerProductoPorId(id) {
  return productos.find(p => p.id === Number(id))
}

export function obtenerDestacados(limite = 4) {
  return productos.filter(p => p.destacado).slice(0, limite)
}
