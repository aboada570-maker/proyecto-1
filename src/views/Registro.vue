<template>

  <Navbar />

  <main class="auth-vista">

    <div class="container">

      <div class="auth-card">

        <h1>Crear cuenta</h1>
        <p class="subtitulo">Regístrate para comprar en La Casa de Matico</p>

        <form @submit.prevent="enviar">

          <div class="mb-3">
            <label class="form-label">Nombre completo</label>
            <input
              v-model="form.nombre"
              type="text"
              class="form-control"
              placeholder="Tu nombre"
              required
            >
          </div>

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
              placeholder="Mínimo 6 caracteres"
              minlength="6"
              required
            >
          </div>

          <div class="mb-3">
            <label class="form-label">Confirmar contraseña</label>
            <input
              v-model="form.confirmar"
              type="password"
              class="form-control"
              placeholder="Repite tu contraseña"
              minlength="6"
              required
            >
          </div>

          <button type="submit" class="btn btn-primary w-100" :disabled="cargando">
            {{ cargando ? 'Creando cuenta...' : 'Crear cuenta' }}
          </button>

        </form>

        <p class="pie">
          ¿Ya tienes cuenta?
          <router-link to="/login">Inicia sesión</router-link>
        </p>

      </div>

    </div>

  </main>

  <Footer />

</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import { useAuth } from '../store/auth'

const router = useRouter()
const { registrarse } = useAuth()

const form = reactive({
  nombre: '',
  email: '',
  password: '',
  confirmar: ''
})

const cargando = ref(false)

async function enviar() {
  if (form.password !== form.confirmar) {
    Swal.fire({
      icon: 'warning',
      title: 'Las contraseñas no coinciden',
      text: 'Verifica que ambas contraseñas sean iguales.'
    })
    return
  }

  cargando.value = true

  try {
    await registrarse({
      nombre: form.nombre,
      email: form.email,
      password: form.password
    })

    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: '¡Cuenta creada! Bienvenido/a',
      showConfirmButton: false,
      timer: 1800
    })

    router.push('/')
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'No se pudo crear la cuenta',
      text: error.response?.data?.mensaje || 'Intenta de nuevo en unos minutos.'
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
