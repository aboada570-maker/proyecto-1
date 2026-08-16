import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '../store/auth'

import Inicio from '../views/Inicio.vue'
import Catalogo from '../views/Catalogo.vue'
import ProductoDetalle from '../views/ProductoDetalle.vue'
import Carrito from '../views/Carrito.vue'
import Login from '../views/Login.vue'
import Registro from '../views/Registro.vue'
import Nosotros from '../views/Nosotros.vue'
import Contacto from '../views/Contacto.vue'
import AdminProductos from '../views/admin/AdminProductos.vue'

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
    },
    {
        path: '/carrito',
        name: 'Carrito',
        component: Carrito
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/registro',
        name: 'Registro',
        component: Registro
    },
    {
        path: '/nosotros',
        name: 'Nosotros',
        component: Nosotros
    },
    {
        path: '/contacto',
        name: 'Contacto',
        component: Contacto
    },
    {
        path: '/admin/productos',
        name: 'AdminProductos',
        component: AdminProductos,
        meta: { requiereAdmin: true }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to) => {
    if (to.meta.requiereAdmin) {
        const { estaAutenticado, esAdmin } = useAuth()

        if (!estaAutenticado.value || !esAdmin.value) {
            return { path: '/login', query: { redirect: to.fullPath } }
        }
    }
})

export default router
