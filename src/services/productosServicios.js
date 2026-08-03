import axios from "axios";
 
const API_URL = "http://localhost:3000/productos";
 
const obtenerProductos = async () => {
    const respuesta = await axios.get(API_URL);
    return respuesta.data;
};
 
const crearProducto = async (producto) => {
    const respuesta = await axios.post(API_URL, producto);
    return respuesta.data;
};
 
const actualizarProducto = async (id, producto) => {
    const respuesta = await axios.put(`${API_URL}/${id}`, producto);
    return respuesta.data;
};
 
const eliminarProducto = async (id) => {
    const respuesta = await axios.delete(`${API_URL}/${id}`);
    return respuesta.data;
};
 
export default {
    obtenerProductos,
    crearProducto,
    actualizarProducto,
    eliminarProducto
};