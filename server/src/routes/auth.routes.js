import { Router } from 'express'
import { registrar, login } from '../controllers/auth.controller.js'
import { catchAsync } from '../utils/catchAsync.js'

const router = Router()

router.post('/registro', catchAsync(registrar))
router.post('/login', catchAsync(login))

export default router
