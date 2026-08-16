import mongoose from 'mongoose'

const productoSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, trim: true },
    categoria: { type: String, required: true },
    precio: { type: Number, required: true, min: 0 },
    precioAnterior: { type: Number, min: 0 },
    stock: { type: Number, required: true, min: 0, default: 0 },
    imagen: { type: String, required: true },
    destacado: { type: Boolean, default: false },
    descripcion: { type: String, default: '' },
    rating: { type: Number, default: 0, min: 0, max: 5 },
    opiniones: { type: Number, default: 0, min: 0 }
  },
  { timestamps: true }
)

productoSchema.set('toJSON', {
  transform: (_doc, ret) => {
    delete ret.__v
    return ret
  }
})

export default mongoose.model('Producto', productoSchema)
