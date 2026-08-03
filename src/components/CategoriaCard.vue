<template>

<div class="categoria">

    <div class="icono">

        {{ icono }}

    </div>

    <h3>{{ nombre }}</h3>

</div>

</template>

<script setup>

defineProps({

nombre:String,

icono:String

})

</script>

<style scoped>

.categoria{

    width:180px;

    background:white;

    padding:20px;

    border-radius:15px;

    text-align:center;

    box-shadow:0px 5px 10px rgba(0,0,0,.2);

}

.icono{

    font-size:50px;

}

</style>