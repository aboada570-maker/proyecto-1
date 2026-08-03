<template>

<nav class="navbar">

    <div class="logo">

        🏠 La Casa de Matico

    </div>

    <ul>

        <li>Inicio</li>

        <li>Productos</li>

        <li>Nosotros</li>

        <li>Sucursales</li>

        <li>Contacto</li>

        <li>Carrito 🛒</li>

    </ul>

</nav>

</template>

<style scoped>

.navbar{

    display:flex;

    justify-content:space-between;

    align-items:center;

    background:#8e44ad;

    color:white;

    padding:18px 40px;

}

ul{

    display:flex;

    list-style:none;

    gap:30px;

}

li{

    cursor:pointer;

}

.logo{

    font-size:24px;

    font-weight:bold;

}

</style>