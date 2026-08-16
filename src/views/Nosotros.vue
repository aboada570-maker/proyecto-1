<template>

  <Navbar />

  <main class="nosotros">

    <section class="banner">
      <div class="container">
        <h1>Sobre nosotros</h1>
        <p>Llevamos calidez y estilo a los hogares desde hace más de 8 años.</p>
      </div>
    </section>

    <section class="container historia">
      <div class="row align-items-center g-5">

        <div class="col-md-6">
          <img src="/imagenes/vajilla.jpg" alt="Nuestra tienda" class="foto-historia">
        </div>

        <div class="col-md-6">
          <h2 class="seccion-titulo">Nuestra historia</h2>
          <p>
            La Casa de Matico nació como un pequeño emprendimiento familiar con la idea
            de acercar productos de cocina, decoración y organización de calidad a
            precios justos. Con el tiempo, ese pequeño local se convirtió en una tienda
            en línea que hoy llega a cientos de hogares.
          </p>
          <p>
            Seguimos creyendo en lo mismo que el primer día: cada rincón de tu casa
            merece un detalle especial.
          </p>
        </div>

      </div>
    </section>

    <section class="valores">
      <div class="container">

        <h2 class="seccion-titulo text-center mb-5">Nuestros valores</h2>

        <div class="row g-4 text-center">

          <div class="col-6 col-md-3">
            <div class="valor">
              <i class="bi bi-heart"></i>
              <h5>Cercanía</h5>
              <p>Atención personalizada en cada compra.</p>
            </div>
          </div>

          <div class="col-6 col-md-3">
            <div class="valor">
              <i class="bi bi-gem"></i>
              <h5>Calidad</h5>
              <p>Seleccionamos cada producto con cuidado.</p>
            </div>
          </div>

          <div class="col-6 col-md-3">
            <div class="valor">
              <i class="bi bi-piggy-bank"></i>
              <h5>Precio justo</h5>
              <p>Los mejores precios sin sacrificar calidad.</p>
            </div>
          </div>

          <div class="col-6 col-md-3">
            <div class="valor">
              <i class="bi bi-tree"></i>
              <h5>Compromiso</h5>
              <p>Con nuestros clientes y con el planeta.</p>
            </div>
          </div>

        </div>

      </div>
    </section>

    <section class="estadisticas">
      <div class="container">
        <div class="row text-center g-4">

          <div class="col-6 col-md-3">
            <div class="stat">
              <span class="numero">8+</span>
              <span class="etiqueta">Años de experiencia</span>
            </div>
          </div>

          <div class="col-6 col-md-3">
            <div class="stat">
              <span class="numero">500+</span>
              <span class="etiqueta">Clientes felices</span>
            </div>
          </div>

          <div class="col-6 col-md-3">
            <div class="stat">
              <span class="numero">100+</span>
              <span class="etiqueta">Productos</span>
            </div>
          </div>

          <div class="col-6 col-md-3">
            <div class="stat">
              <span class="numero">4.8★</span>
              <span class="etiqueta">Calificación promedio</span>
            </div>
          </div>

        </div>
      </div>
    </section>

  </main>

  <Footer />

</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
</script>

<style scoped>

.nosotros{
  background:#f8f9fa;
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

.historia{
  padding:70px 0;
}

.foto-historia{
  width:100%;
  border-radius:16px;
  box-shadow:0 10px 25px rgba(0,0,0,.1);
}

.historia p{
  color:#555;
  font-size:17px;
  line-height:1.7;
}

.valores{
  background:white;
  padding:70px 0;
}

.valor i{
  font-size:36px;
  color:#7E57C2;
}

.valor h5{
  font-weight:700;
  margin:12px 0 4px;
}

.valor p{
  color:#6c757d;
  font-size:14px;
}

.estadisticas{
  background:#2f2140;
  color:white;
  padding:60px 0;
}

.stat{
  display:flex;
  flex-direction:column;
}

.numero{
  font-size:36px;
  font-weight:800;
  color:#FFD54F;
}

.etiqueta{
  color:#d9d2e8;
  font-size:14px;
  margin-top:4px;
}

</style>
