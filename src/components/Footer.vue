<template>

<footer>

  <div class="container">

    <div class="row gy-4">

      <div class="col-6 col-lg-3">
        <h5>🏠 La Casa de Matico</h5>
        <p class="descripcion">
          Todo para tu hogar: cocina, decoración y organización con calidad y los mejores precios.
        </p>
        <div class="redes">
          <a href="#" title="Facebook"><i class="bi bi-facebook"></i></a>
          <a href="#" title="Instagram"><i class="bi bi-instagram"></i></a>
          <a href="#" title="TikTok"><i class="bi bi-tiktok"></i></a>
        </div>
      </div>

      <div class="col-6 col-lg-3">
        <h6>Tienda</h6>
        <ul>
          <li><router-link to="/catalogo">Catálogo</router-link></li>
          <li><router-link to="/carrito">Carrito</router-link></li>
          <li><router-link to="/">Inicio</router-link></li>
        </ul>
      </div>

      <div class="col-6 col-lg-3">
        <h6>Ayuda</h6>
        <ul>
          <li><a href="#">Preguntas frecuentes</a></li>
          <li><a href="#">Envíos y entregas</a></li>
          <li><a href="#">Cambios y devoluciones</a></li>
        </ul>
      </div>

      <div class="col-6 col-lg-3">
        <h6>Contacto</h6>
        <ul>
          <li><i class="bi bi-geo-alt"></i> Quito</li>
          <li><i class="bi bi-telephone"></i> +593 995244740</li>
          <li><i class="bi bi-envelope"></i> contacto@lacasadematico.com</li>
        </ul>
      </div>

    </div>

    <hr>

    <div class="inferior">
      <p>© 2026 La Casa de Matico. Todos los derechos reservados.</p>
      <div class="pagos">
        <i class="bi bi-credit-card"></i>
        <i class="bi bi-paypal"></i>
        <i class="bi bi-wallet2"></i>
      </div>
    </div>

  </div>

</footer>

</template>

<style scoped>

footer{

    background:#2f2140;

    color:#d9d2e8;

    padding:50px 0 20px;

    margin-top:50px;

}

footer h5{
  color:white;
  font-weight:800;
  margin-bottom:12px;
}

footer h6{
  color:white;
  font-weight:700;
  margin-bottom:15px;
  font-size:15px;
}

.descripcion{
  font-size:14px;
  line-height:1.6;
}

.redes{
  margin-top:15px;
}

.redes a{
  color:#d9d2e8;
  font-size:20px;
  margin-right:14px;
}

.redes a:hover{
  color:#FFD54F;
}

footer ul{
  list-style:none;
  padding:0;
  margin:0;
}

footer ul li{
  margin-bottom:10px;
  font-size:14px;
}

footer a{
  color:#d9d2e8;
  text-decoration:none;
}

footer a:hover{
  color:#FFD54F;
}

footer hr{
  border-color:rgba(255,255,255,.15);
  margin:30px 0 20px;
}

.inferior{
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-wrap:wrap;
  gap:10px;
  font-size:13px;
}

.inferior p{
  margin:0;
}

.pagos i{
  font-size:22px;
  margin-left:12px;
  color:#d9d2e8;
}

</style>
