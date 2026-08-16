<template>

<div class="topbar d-none d-md-block">
  <div class="container d-flex justify-content-between align-items-center">
    <span><i class="bi bi-truck"></i> Envío gratis en compras mayores a $50</span>
    <span class="topbar-links">
      <a href="tel:+593995244740"><i class="bi bi-telephone"></i> +593 995244740</a>
      <a href="mailto:contacto@lacasadematico.com"><i class="bi bi-envelope"></i> contacto@lacasadematico.com</a>
    </span>
  </div>
</div>

<nav class="navbar navbar-expand-lg navbar-dark fondo sticky-top">

<div class="container">

<router-link class="navbar-brand fw-bold fs-3" to="/">
🏠 La Casa de Matico
</router-link>

<button
class="navbar-toggler"
type="button"
data-bs-toggle="collapse"
data-bs-target="#menu">

<span class="navbar-toggler-icon"></span>

</button>

<div
class="collapse navbar-collapse"
id="menu">

<ul class="navbar-nav me-auto">

<li class="nav-item">
<router-link
class="nav-link"
to="/">
Inicio
</router-link>
</li>

<li class="nav-item">
<router-link
class="nav-link"
to="/catalogo">
Productos
</router-link>
</li>

<li class="nav-item">
<router-link
class="nav-link"
to="/nosotros">
Nosotros
</router-link>
</li>

<li class="nav-item">
<router-link
class="nav-link"
to="/contacto">
Contacto
</router-link>
</li>

</ul>

<form class="buscador d-none d-lg-flex" @submit.prevent="buscar">
  <input
    v-model="terminoBusqueda"
    type="search"
    class="form-control"
    placeholder="Buscar productos..."
  >
  <button type="submit" class="btn">
    <i class="bi bi-search"></i>
  </button>
</form>

<ul class="navbar-nav acciones align-items-lg-center">

<li class="nav-item dropdown" v-if="estaAutenticado">

<a
class="nav-link icono-accion dropdown-toggle"
href="#"
role="button"
data-bs-toggle="dropdown"
title="Mi cuenta">

<i class="bi bi-person-check"></i>

</a>

<ul class="dropdown-menu dropdown-menu-end">
  <li><span class="dropdown-item-text">Hola, {{ usuario?.nombre }}</span></li>
  <li v-if="esAdmin">
    <router-link class="dropdown-item" to="/admin/productos">
      <i class="bi bi-speedometer2"></i> Panel admin
    </router-link>
  </li>
  <li><hr class="dropdown-divider"></li>
  <li>
    <button class="dropdown-item" @click="salir">
      <i class="bi bi-box-arrow-right"></i> Cerrar sesión
    </button>
  </li>
</ul>

</li>

<li class="nav-item" v-else>

<router-link
class="nav-link icono-accion"
to="/login"
title="Iniciar sesión">

<i class="bi bi-person"></i>

</router-link>

</li>

<li class="nav-item">

<router-link
class="nav-link icono-accion carrito"
to="/carrito"
title="Carrito">

<i class="bi bi-cart3"></i>
<span v-if="totalUnidades > 0" class="badge-carrito">{{ totalUnidades }}</span>

</router-link>

</li>

</ul>

</div>

</div>

</nav>

</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCarrito } from '../store/carrito'
import { useAuth } from '../store/auth'

const { totalUnidades } = useCarrito()
const { usuario, estaAutenticado, esAdmin, cerrarSesion } = useAuth()

const terminoBusqueda = ref('')
const router = useRouter()

function buscar() {
  router.push({ path: '/catalogo', query: terminoBusqueda.value ? { q: terminoBusqueda.value } : {} })
}

function salir() {
  cerrarSesion()
  router.push('/')
}
</script>

<style scoped>

.topbar{
  background:#4a2f8a;
  color:#e6dcfb;
  font-size:13px;
  padding:6px 0;
}

.topbar-links a{
  color:#e6dcfb;
  text-decoration:none;
  margin-left:20px;
}

.topbar-links a:hover{
  color:#FFD54F;
}

.fondo{
  background:#7E57C2;
  box-shadow:0 2px 10px rgba(0,0,0,.15);
  padding-top:12px;
  padding-bottom:12px;
}

.navbar-brand{
  letter-spacing:.3px;
}

.nav-link{
  font-size:16px;
  margin-left:15px;
  font-weight:500;
}

.nav-link:hover{
  color:#FFD54F !important;
}

.buscador{
  margin-left:25px;
  flex:1;
  max-width:340px;
}

.buscador input{
  border-radius:8px 0 0 8px;
  border:none;
}

.buscador button{
  background:#5E35B1;
  color:white;
  border-radius:0 8px 8px 0;
  border:none;
  padding:0 16px;
}

.acciones{
  margin-left:20px;
  gap:5px;
}

.icono-accion{
  font-size:22px;
  padding:6px 12px !important;
  position:relative;
}

.carrito{
  display:flex;
  align-items:center;
}

.badge-carrito{
  position:absolute;
  top:-2px;
  right:2px;
  background:#FFC107;
  color:#2f2b36;
  font-size:11px;
  font-weight:700;
  min-width:18px;
  height:18px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:0 4px;
}

</style>
