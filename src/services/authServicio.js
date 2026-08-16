import api from './api'

async function login(credenciales) {
  const { data } = await api.post('/auth/login', credenciales)
  return data
}

async function registrar(datos) {
  const { data } = await api.post('/auth/registro', datos)
  return data
}

export default { login, registrar }
