import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import Usuario from '../models/Usuario.js'

function firmarToken(usuario) {
  return jwt.sign(
    { id: usuario._id, rol: usuario.rol, nombre: usuario.nombre },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  )
}

export async function registrar(req, res) {
  const { nombre, email, password } = req.body

  if (!nombre || !email || !password) {
    return res.status(400).json({ mensaje: 'Nombre, email y contraseña son obligatorios' })
  }

  if (password.length < 6) {
    return res.status(400).json({ mensaje: 'La contraseña debe tener al menos 6 caracteres' })
  }

  const existente = await Usuario.findOne({ email: email.toLowerCase() })

  if (existente) {
    return res.status(409).json({ mensaje: 'Ese correo ya está registrado' })
  }

  const passwordHash = await bcrypt.hash(password, 10)

  const usuario = await Usuario.create({
    nombre,
    email,
    passwordHash,
    rol: 'cliente'
  })

  const token = firmarToken(usuario)

  res.status(201).json({ token, usuario })
}

export async function login(req, res) {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ mensaje: 'Email y contraseña son obligatorios' })
  }

  const usuario = await Usuario.findOne({ email: email.toLowerCase() })

  if (!usuario) {
    return res.status(401).json({ mensaje: 'Credenciales inválidas' })
  }

  const coincide = await bcrypt.compare(password, usuario.passwordHash)

  if (!coincide) {
    return res.status(401).json({ mensaje: 'Credenciales inválidas' })
  }

  const token = firmarToken(usuario)

  res.json({ token, usuario })
}
