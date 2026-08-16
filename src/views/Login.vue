<template>

  <Navbar />

  <main class="auth-vista">

    <div class="container">

      <div class="auth-card">

        <h1>Iniciar sesión</h1>
        <p class="subtitulo">Ingresa a tu cuenta de La Casa de Matico</p>

        <form @submit.prevent="enviar">

          <div class="mb-3">
            <label class="form-label">Correo electrónico</label>
            <input
              v-model="form.email"
              type="email"
              class="form-control"
              placeholder="tucorreo@ejemplo.com"
              required
            >
          </div>

          <div class="mb-3">
            <label class="form-label">Contraseña</label>
            <input
              v-model="form.password"
              type="password"
              class="form-control"
              placeholder="••••••••"
              required
            >
          </div>

          <button type="submit" class="btn btn-primary w-100" :disabled="cargando">
            {{ cargando ? 'Ingresando...' : 'Ingresar' }}
          </button>

        </form>

        <p class="pie">
          ¿No tienes cuenta?
          <router-link to="/registro">Regístrate aquí</router-link>
        </p>

      </div>

    </div>

  </main>

  <Footer />

</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import { useAuth } from '../store/auth'

const route = useRoute()
const router = useRouter()
const { iniciarSesion, esAdmin } = useAuth()

const form = reactive({
  email: '',
  password: ''
})

const cargando = ref(false)

async function enviar() {
  cargando.value = true

  try {
    await iniciarSesion({ email: form.email, password: form.password })

    const destino = route.query.redirect || (esAdmin.value ? '/admin/productos' : '/')
    router.push(destino)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'No se pudo iniciar sesión',
      text: error.response?.data?.mensaje || 'Verifica tus credenciales e intenta de nuevo.'
    })
  } finally {
    cargando.value = false
  }
}
</script>

<style scoped>

.auth-vista{
  background:#f8f9fa;
  min-height:80vh;
  padding:60px 0;
  display:flex;
  align-items:center;
}

.auth-card{
  max-width:420px;
  margin:0 auto;
  background:white;
  border-radius:16px;
  padding:40px;
  box-shadow:0 5px 20px rgba(0,0,0,.08);
}

.auth-card h1{
  font-size:28px;
  font-weight:800;
  text-align:center;
  margin-bottom:6px;
}

.subtitulo{
  text-align:center;
  color:#6c757d;
  margin-bottom:25px;
}

.pie{
  text-align:center;
  margin:20px 0 0;
  color:#555;
}

.pie a{
  color:#7E57C2;
  font-weight:600;
  text-decoration:none;
}

.pie a:hover{
  text-decoration:underline;
}

</style>
