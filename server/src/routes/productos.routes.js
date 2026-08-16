import { Router } from 'express'
import {
  listar,
  obtener,
  crear,
  actualizar,
  eliminar
} from '../controllers/productos.controller.js'
import { verificarToken, requiereAdmin } from '../middleware/auth.js'
import { catchAsync } from '../utils/catchAsync.js'

const router = Router()

router.get('/', catchAsync(listar))
router.get('/:id', catchAsync(obtener))
router.post('/', verificarToken, requiereAdmin, catchAsync(crear))
router.put('/:id', verificarToken, requiereAdmin, catchAsync(actualizar))
router.delete('/:id', verificarToken, requiereAdmin, catchAsync(eliminar))

export default router
