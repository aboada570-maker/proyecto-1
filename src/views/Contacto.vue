<template>

  <Navbar />

  <main class="contacto">

    <section class="banner">
      <div class="container">
        <h1>Contáctanos</h1>
        <p>¿Tienes dudas o sugerencias? Escríbenos, con gusto te ayudamos.</p>
      </div>
    </section>

    <section class="container cuerpo">

      <div class="row g-5">

        <div class="col-md-5">

          <h2 class="seccion-titulo">Información de contacto</h2>

          <div class="dato">
            <i class="bi bi-geo-alt"></i>
            <div>
              <strong>Dirección</strong>
              <p>Quito, Ecuador</p>
            </div>
          </div>

          <div class="dato">
            <i class="bi bi-telephone"></i>
            <div>
              <strong>Teléfono</strong>
              <p><a href="tel:+593995244740">+593 995244740</a></p>
            </div>
          </div>

          <div class="dato">
            <i class="bi bi-envelope"></i>
            <div>
              <strong>Correo</strong>
              <p><a href="mailto:contacto@lacasadematico.com">contacto@lacasadematico.com</a></p>
            </div>
          </div>

          <div class="dato">
            <i class="bi bi-clock"></i>
            <div>
              <strong>Horario de atención</strong>
              <p>Lunes a sábado, 9:00 a 18:00</p>
            </div>
          </div>

        </div>

        <div class="col-md-7">

          <div class="formulario-card">

            <h2 class="seccion-titulo">Envíanos un mensaje</h2>

            <form @submit.prevent="enviar">

              <div class="mb-3">
                <label class="form-label">Nombre</label>
                <input v-model="form.nombre" type="text" class="form-control" required>
              </div>

              <div class="mb-3">
                <label class="form-label">Correo electrónico</label>
                <input v-model="form.email" type="email" class="form-control" required>
              </div>

              <div class="mb-3">
                <label class="form-label">Mensaje</label>
                <textarea
                  v-model="form.mensaje"
                  class="form-control"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" class="btn btn-primary">
                <i class="bi bi-send"></i> Enviar mensaje
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>

  </main>

  <Footer />

</template>

<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

const form = reactive({
  nombre: '',
  email: '',
  mensaje: ''
})

function enviar() {
  Swal.fire({
    icon: 'success',
    title: '¡Mensaje enviado!',
    text: 'Gracias por escribirnos, te responderemos pronto.'
  })

  form.nombre = ''
  form.email = ''
  form.mensaje = ''
}
</script>

<style scoped>

.contacto{
  background:#f8f9fa;
  min-height:100vh;
}

.banner{
  background:linear-gradient(135deg, #7E57C2, #9575CD);
  color:white;
  text-align:center;
  padding:70px 20px;
}

.banner h1{
  font-size:45px;
  font-weight:bold;
}

.cuerpo{
  padding:70px 0;
}

.dato{
  display:flex;
  gap:15px;
  margin-bottom:25px;
}

.dato i{
  font-size:24px;
  color:#7E57C2;
  margin-top:3px;
}

.dato strong{
  display:block;
  margin-bottom:2px;
}

.dato p{
  margin:0;
  color:#6c757d;
}

.dato a{
  color:#6c757d;
  text-decoration:none;
}

.dato a:hover{
  color:#7E57C2;
}

.formulario-card{
  background:white;
  border-radius:16px;
  padding:35px;
  box-shadow:0 5px 20px rgba(0,0,0,.08);
}

</style>
