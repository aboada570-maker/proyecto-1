<template>

<div id="bannerPrincipal" class="carousel slide" data-bs-ride="carousel">

<div class="carousel-inner">

<div class="carousel-item active">

<img src="/imagenes/bannerhogar.png"
class="d-block w-100 banner">

<div class="carousel-caption">

<h1>Todo para tu hogar</h1>

<p>Calidad, variedad y los mejores precios.</p>

<router-link
to="/catalogo"
class="btn btn-warning">

Ver Catálogo

</router-link>

</div>

</div>

<div class="carousel-item">

<img src="/imagenes/imgvaca.jpg"
class="d-block w-100 banner">

<div class="carousel-caption">

<h1>Decoración para cada espacio</h1>

</div>

</div>

<div class="carousel-item">

<img src="/imagenes/imgtazav.jpg"
class="d-block w-100 banner">

<div class="carousel-caption">

<h1>Los mejores productos para tu hogar</h1>

</div>

</div>

</div>

    <button
    class="carousel-control-prev"
    type="button"
    data-bs-target="#bannerPrincipal"
    data-bs-slide="prev">

    <span class="carousel-control-prev-icon"></span>

    </button>

    <button
    class="carousel-control-next"
    type="button"
    data-bs-target="#bannerPrincipal"
    data-bs-slide="next">

    <span class="carousel-control-next-icon"></span>

    </button>

</div>

</template>

<style scoped>

.banner{

height:550px;

object-fit:cover;

filter:brightness(.6);

}

.carousel-caption{

bottom:30%;

}

h1{

font-size:60px;

font-weight:bold;

}

</style>