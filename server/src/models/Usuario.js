import mongoose from 'mongoose'

const usuarioSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    passwordHash: { type: String, required: true },
    rol: { type: String, enum: ['admin', 'cliente'], default: 'cliente' }
  },
  { timestamps: true }
)

usuarioSchema.set('toJSON', {
  transform: (_doc, ret) => {
    delete ret.passwordHash
    delete ret.__v
    return ret
  }
})

export default mongoose.model('Usuario', usuarioSchema)
