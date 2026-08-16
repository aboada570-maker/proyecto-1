import express from 'express'
import cors from 'cors'
import authRoutes from './routes/auth.routes.js'
import productosRoutes from './routes/productos.routes.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/productos', productosRoutes)

app.use((req, res) => {
  res.status(404).json({ mensaje: 'Ruta no encontrada' })
})

app.use((err, req, res, next) => {
  console.error(err)

  if (err.name === 'CastError') {
    return res.status(400).json({ mensaje: 'Identificador inválido' })
  }

  if (err.code === 11000) {
    return res.status(409).json({ mensaje: 'El recurso ya existe' })
  }

  if (err.name === 'ValidationError') {
    return res.status(400).json({ mensaje: err.message })
  }

  res.status(err.status || 500).json({ mensaje: err.message || 'Error del servidor' })
})

export default app
