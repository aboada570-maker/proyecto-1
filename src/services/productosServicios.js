import api from './api'

const obtenerProductos = async () => {
    const { data } = await api.get('/productos')
    return data
}

const obtenerProducto = async (id) => {
    const { data } = await api.get(`/productos/${id}`)
    return data
}

const crearProducto = async (producto) => {
    const { data } = await api.post('/productos', producto)
    return data
}

const actualizarProducto = async (id, producto) => {
    const { data } = await api.put(`/productos/${id}`, producto)
    return data
}

const eliminarProducto = async (id) => {
    const { data } = await api.delete(`/productos/${id}`)
    return data
}

export default {
    obtenerProductos,
    obtenerProducto,
    crearProducto,
    actualizarProducto,
    eliminarProducto
};
