<template>

<nav class="navbar navbar-expand-lg navbar-dark fondo">

<div class="container">

<a class="navbar-brand fw-bold fs-3" href="#">

🏠 La Casa de Matico

</a>

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

<ul class="navbar-nav ms-auto">

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

<li class="nav-item">

<router-link
class="nav-link"
to="/login">

👤

</router-link>

</li>

<li class="nav-item">

<router-link
class="nav-link"
to="/carrito">

🛒

</router-link>

</li>

</ul>

</div>

</div>

</nav>

</template>

<style scoped>

.fondo{

background:#7E57C2;

}

.nav-link{

font-size:18px;

margin-left:15px;

}

.nav-link:hover{

color:#FFD54F !important;

}

</style>