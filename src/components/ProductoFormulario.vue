<script setup>
import { reactive, watch } from "vue";
import { categorias } from "../data/categorias";

const props = defineProps({
    productoEditar: {
        type: Object,
        default: null
    }
});

const emit = defineEmits(["guardar", "cancelar"]);

const formulario = reactive({
    nombre: "",
    categoria: categorias[0],
    precio: "",
    precioAnterior: "",
    stock: "",
    imagen: "",
    destacado: false,
    descripcion: ""
});

const limpiarFormulario = () => {
  formulario.nombre = "";
  formulario.categoria = categorias[0];
  formulario.precio = "";
  formulario.precioAnterior = "";
  formulario.stock = "";
  formulario.imagen = "";
  formulario.destacado = false;
  formulario.descripcion = "";
};

watch(
    () => props.productoEditar,
    (producto) => {
        if (producto) {
            formulario.nombre = producto.nombre;
            formulario.categoria = producto.categoria;
            formulario.precio = producto.precio;
            formulario.precioAnterior = producto.precioAnterior ?? "";
            formulario.stock = producto.stock;
            formulario.imagen = producto.imagen;
            formulario.destacado = producto.destacado ?? false;
            formulario.descripcion = producto.descripcion ?? "";
        } else {
            limpiarFormulario();
        }
    },
    { immediate: true }
);

const guardarProducto = () => {
    if (
        formulario.nombre.trim() === "" ||
        formulario.precio === "" ||
        formulario.stock === "" ||
        formulario.imagen.trim() === ""
    ) {
        return;
    }

    emit("guardar", {
        nombre: formulario.nombre.trim(),
        categoria: formulario.categoria,
        precio: Number(formulario.precio),
        precioAnterior: formulario.precioAnterior === "" ? undefined : Number(formulario.precioAnterior),
        stock: Number(formulario.stock),
        imagen: formulario.imagen.trim(),
        destacado: formulario.destacado,
        descripcion: formulario.descripcion.trim()
    });

    if (!props.productoEditar) {
        limpiarFormulario();
    }
};

const cancelarEdicion = () => {
    limpiarFormulario();
    emit("cancelar");
};
</script>

<template>
    <div class="card shadow-sm mb-4">
        <div class="card-header bg-primary text-white">
            <h5 class="mb-0">
                {{ productoEditar ? "Editar producto" : "Registrar producto" }}
            </h5>
        </div>

        <div class="card-body">
            <form @submit.prevent="guardarProducto">
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label class="form-label">Nombre</label>

                        <input
                            v-model="formulario.nombre"
                            type="text"
                            class="form-control"
                            placeholder="Ejemplo: Juego de Platos"
                            required
                        />
                    </div>

                    <div class="col-md-6 mb-3">
                        <label class="form-label">Categoría</label>

                        <select v-model="formulario.categoria" class="form-select" required>
                            <option v-for="categoria in categorias" :key="categoria" :value="categoria">
                                {{ categoria }}
                            </option>
                        </select>
                    </div>

                    <div class="col-md-3 mb-3">
                        <label class="form-label">Precio</label>

                        <input
                            v-model="formulario.precio"
                            type="number"
                            min="0"
                            step="0.01"
                            class="form-control"
                            placeholder="0.00"
                            required
                        />
                    </div>

                    <div class="col-md-3 mb-3">
                        <label class="form-label">Precio anterior (opcional)</label>

                        <input
                            v-model="formulario.precioAnterior"
                            type="number"
                            min="0"
                            step="0.01"
                            class="form-control"
                            placeholder="Para mostrar descuento"
                        />
                    </div>

                    <div class="col-md-3 mb-3">
                        <label class="form-label">Stock</label>

                        <input
                            v-model="formulario.stock"
                            type="number"
                            min="0"
                            class="form-control"
                            placeholder="0"
                            required
                        />
                    </div>

                    <div class="col-md-3 mb-3 d-flex align-items-end">
                        <div class="form-check">
                            <input
                                v-model="formulario.destacado"
                                class="form-check-input"
                                type="checkbox"
                                id="destacadoCheck"
                            />
                            <label class="form-check-label" for="destacadoCheck">
                                Producto destacado
                            </label>
                        </div>
                    </div>

                    <div class="col-md-12 mb-3">
                        <label class="form-label">Imagen (ruta o URL)</label>

                        <input
                            v-model="formulario.imagen"
                            type="text"
                            class="form-control"
                            placeholder="/imagenes/producto.jpg"
                            required
                        />
                    </div>

                    <div class="col-md-12 mb-3">
                        <label class="form-label">Descripción</label>

                        <textarea
                            v-model="formulario.descripcion"
                            class="form-control"
                            rows="3"
                            placeholder="Describe el producto..."
                        ></textarea>
                    </div>

                    <div class="col-md-3 mb-3">
                        <button type="submit" class="btn btn-success w-100">
                            {{ productoEditar ? "Actualizar" : "Guardar" }}
                        </button>
                    </div>
                </div>

                <button
                    v-if="productoEditar"
                    type="button"
                    class="btn btn-secondary"
                    @click="cancelarEdicion"
                >
                    Cancelar edición
                </button>
            </form>
        </div>
    </div>
</template>
