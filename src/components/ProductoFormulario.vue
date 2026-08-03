<script setup>
import { reactive, watch } from "vue";
 
const props = defineProps({
    productoEditar: {
        type: Object,
        default: null
    }
});
 
const emit = defineEmits(["guardar", "cancelar"]);
 
const formulario = reactive({
    nombre: "",
    precio: "",
    cantidad: ""
});

/*
Primero declaramos limpiarFormulario, antes de utilizarla dentro del watch.
*/
const limpiarFormulario = () => {
  formulario.nombre = "";
  formulario.precio = "";
  formulario.cantidad = "";
};
 
watch(
    () => props.productoEditar,
    (producto) => {
        if (producto) {
            formulario.nombre = producto.nombre;
            formulario.precio = producto.precio;
            formulario.cantidad = producto.cantidad;
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
        formulario.cantidad === ""
    ) {
        return;
    }
 
    emit("guardar", {
        nombre: formulario.nombre.trim(),
        precio: Number(formulario.precio),
        cantidad: Number(formulario.cantidad)
    });

// Solo limpiamos cuando se está registrando un producto nuevo
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
                    <div class="col-md-5 mb-3">
                        <label class="form-label">Nombre</label>

                        <input
                            v-model="formulario.nombre"
                            type="text"
                            class="form-control"
                            placeholder="Ejemplo: Laptop Lenovo"
                            required
                        />
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
 
                    <div class="col-md-2 mb-3">
                        <label class="form-label">Cantidad</label>

                        <input
                            v-model="formulario.cantidad"
                            type="number"
                            min="0"
                            class="form-control"
                            placeholder="0"
                            required
                        />
                    </div>
 
                    <div class="col-md-2 d-flex align-items-end mb-3">
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