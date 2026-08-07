import { createRouter, createWebHistory } from 'vue-router'

import Inicio from '../views/Inicio.vue'
import Catalogo from '../views/Catalogo.vue'
import ProductoDetalle from '../views/ProductoDetalle.vue'

const routes = [
    {
        path: '/',
        name: 'Inicio',
        component: Inicio
    },
    {
        path: '/catalogo',
        name: 'Catalogo',
        component: Catalogo
    },
    {
        path: '/producto/:id',
        name: 'ProductoDetalle',
        component: ProductoDetalle
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router