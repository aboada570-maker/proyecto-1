import jwt from 'jsonwebtoken'

export function verificarToken(req, res, next) {
  const header = req.headers.authorization

  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ mensaje: 'Token no proporcionado' })
  }

  try {
    const payload = jwt.verify(header.slice(7), process.env.JWT_SECRET)
    req.usuario = payload
    next()
  } catch {
    return res.status(401).json({ mensaje: 'Token inválido o expirado' })
  }
}

export function requiereAdmin(req, res, next) {
  if (req.usuario?.rol !== 'admin') {
    return res.status(403).json({ mensaje: 'Acceso solo para administradores' })
  }
  next()
}
