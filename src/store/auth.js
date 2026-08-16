import { reactive, computed } from 'vue'
import authServicio from '../services/authServicio'

const TOKEN_KEY = 'lcm_token'
const USUARIO_KEY = 'lcm_usuario'

function leerUsuarioGuardado() {
  try {
    return JSON.parse(localStorage.getItem(USUARIO_KEY) || 'null')
  } catch {
    return null
  }
}

const estado = reactive({
  usuario: leerUsuarioGuardado(),
  token: localStorage.getItem(TOKEN_KEY) || null
})

function guardarSesion(token, usuario) {
  estado.token = token
  estado.usuario = usuario
  localStorage.setItem(TOKEN_KEY, token)
  localStorage.setItem(USUARIO_KEY, JSON.stringify(usuario))
}

function limpiarSesion() {
  estado.token = null
  estado.usuario = null
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(USUARIO_KEY)
}

async function iniciarSesion(credenciales) {
  const { token, usuario } = await authServicio.login(credenciales)
  guardarSesion(token, usuario)
}

async function registrarse(datos) {
  const { token, usuario } = await authServicio.registrar(datos)
  guardarSesion(token, usuario)
}

function cerrarSesion() {
  limpiarSesion()
}

const usuario = computed(() => estado.usuario)
const estaAutenticado = computed(() => !!estado.token)
const esAdmin = computed(() => estado.usuario?.rol === 'admin')

export function useAuth() {
  return {
    usuario,
    estaAutenticado,
    esAdmin,
    iniciarSesion,
    registrarse,
    cerrarSesion
  }
}
