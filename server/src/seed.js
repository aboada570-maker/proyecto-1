import 'dotenv/config'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import { conectarDB } from './db.js'
import Usuario from './models/Usuario.js'
import Producto from './models/Producto.js'

const productosIniciales = [
  {
    nombre: 'Juego de Platos',
    categoria: 'Cocina',
    precio: 25.0,
    precioAnterior: 32.0,
    stock: 15,
    imagen: '/imagenes/platos.jpg',
    destacado: true,
    opiniones: 12,
    rating: 5,
    descripcion:
      'Hermoso juego de platos ideal para complementar tu mesa y disfrutar momentos especiales en familia.'
  },
  {
    nombre: 'Bandeja Decorativa',
    categoria: 'Decoración',
    precio: 18.0,
    stock: 8,
    imagen: '/imagenes/bandeja.jpg',
    destacado: true,
    opiniones: 8,
    rating: 4,
    descripcion:
      'Bandeja decorativa ideal para darle un toque elegante y especial a cualquier espacio de tu hogar.'
  },
  {
    nombre: 'Organizador Multiuso',
    categoria: 'Organización',
    precio: 12.5,
    stock: 20,
    imagen: '/imagenes/organizador.jpg',
    destacado: false,
    opiniones: 15,
    rating: 4,
    descripcion:
      'Práctico organizador para mantener tus espacios ordenados y aprovechar mejor cada lugar.'
  },
  {
    nombre: 'Vajilla',
    categoria: 'Cocina',
    precio: 15.0,
    stock: 10,
    imagen: '/imagenes/vajilla.jpg',
    destacado: false,
    opiniones: 6,
    rating: 5,
    descripcion:
      'Set de vajilla elegante y funcional, perfecto para tus comidas diarias o para ocasiones especiales.'
  },
  {
    nombre: 'Canasta Decorativa',
    categoria: 'Decoración',
    precio: 22.0,
    stock: 7,
    imagen: '/imagenes/canasta.jpg',
    destacado: true,
    opiniones: 9,
    rating: 4,
    descripcion:
      'Canasta decorativa tejida a mano, perfecta para organizar y decorar cualquier rincón de tu hogar.'
  },
  {
    nombre: 'Taza de Cerámica',
    categoria: 'Cocina',
    precio: 16.0,
    stock: 25,
    imagen: '/imagenes/taza.jpg',
    destacado: false,
    opiniones: 20,
    rating: 5,
    descripcion:
      'Taza de cerámica artesanal, ideal para disfrutar tu café o té favorito con estilo.'
  },
  {
    nombre: 'Cuenco Multiusos',
    categoria: 'Organización',
    precio: 14.0,
    stock: 12,
    imagen: '/imagenes/cuenco.jpg',
    destacado: false,
    opiniones: 5,
    rating: 4,
    descripcion:
      'Cuenco versátil para cocina u organización, resistente y de acabado elegante.'
  },
  {
    nombre: 'Set de Saleros',
    categoria: 'Regalos',
    precio: 30.0,
    stock: 5,
    imagen: '/imagenes/saleros.jpg',
    destacado: true,
    opiniones: 11,
    rating: 5,
    descripcion:
      'Set de saleros con diseño exclusivo, un regalo perfecto para los amantes de la cocina.'
  }
]

async function seed() {
  await conectarDB()

  const {
    ADMIN_NOMBRE = 'Administrador',
    ADMIN_EMAIL,
    ADMIN_PASSWORD
  } = process.env

  if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
    throw new Error('Define ADMIN_EMAIL y ADMIN_PASSWORD en server/.env antes de sembrar datos')
  }

  const existeAdmin = await Usuario.findOne({ email: ADMIN_EMAIL.toLowerCase() })

  if (!existeAdmin) {
    const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 10)
    await Usuario.create({
      nombre: ADMIN_NOMBRE,
      email: ADMIN_EMAIL,
      passwordHash,
      rol: 'admin'
    })
    console.log('Usuario admin creado:', ADMIN_EMAIL)
  } else {
    console.log('El usuario admin ya existía, no se modificó')
  }

  const totalProductos = await Producto.countDocuments()

  if (totalProductos === 0) {
    await Producto.insertMany(productosIniciales)
    console.log(`${productosIniciales.length} productos sembrados`)
  } else {
    console.log('Ya existen productos en la base de datos, no se sembraron datos nuevos')
  }

  await mongoose.disconnect()
}

seed().catch((err) => {
  console.error('Error al sembrar datos:', err.message)
  process.exit(1)
})
