import Producto from '../models/Producto.js'

export async function listar(req, res) {
  const productos = await Producto.find().sort({ createdAt: -1 })
  res.json(productos)
}

export async function obtener(req, res) {
  const producto = await Producto.findById(req.params.id)

  if (!producto) {
    return res.status(404).json({ mensaje: 'Producto no encontrado' })
  }

  res.json(producto)
}

export async function crear(req, res) {
  const producto = await Producto.create(req.body)
  res.status(201).json(producto)
}

export async function actualizar(req, res) {
  const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })

  if (!producto) {
    return res.status(404).json({ mensaje: 'Producto no encontrado' })
  }

  res.json(producto)
}

export async function eliminar(req, res) {
  const producto = await Producto.findByIdAndDelete(req.params.id)

  if (!producto) {
    return res.status(404).json({ mensaje: 'Producto no encontrado' })
  }

  res.json({ mensaje: 'Producto eliminado' })
}
