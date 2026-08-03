<template>

<section class="hero">

    <div class="contenido">

        <h1>Todo para tu hogar en un solo lugar</h1>

        <p>

            Encuentra artículos de cocina, decoración,
            organización y mucho más.

        </p>

        <div class="botones">

            <button class="principal">
                Ver Catálogo
            </button>

            <button class="secundario">
                Promociones
            </button>

        </div>

    </div>

</section>

</template>

<style scoped>

.hero{

height:500px;

display:flex;

justify-content:center;

align-items:center;

text-align:center;

background:linear-gradient(135deg,#8e44ad,#d88be8);

color:white;

}

h1{

font-size:50px;

margin-bottom:20px;

}

p{

font-size:22px;

}

button{

margin:15px;

padding:15px 35px;

border:none;

border-radius:10px;

font-size:18px;

cursor:pointer;

}

.principal{

background:white;

color:#8e44ad;

}

.secundario{

background:transparent;

border:2px solid white;

color:white;

}

</style>