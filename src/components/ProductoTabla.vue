<script setup>
defineProps({
    productos: {
        type: Array,
        required: true
    },
    cargando: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(["editar", "eliminar"]);
</script>

<template>
    <div class="card shadow-sm">
        <div class="card-header bg-dark text-white">
            <h5 class="mb-0">Listado de productos</h5>
        </div>

        <div class="card-body">
            <div v-if="cargando" class="text-center py-4">
                <div class="spinner-border text-primary"></div>

                <p class="mt-2">Cargando productos...</p>
            </div>

            <div
                v-else-if="productos.length === 0"
                class="alert alert-info"
            >
                No existen productos registrados.
            </div>

            <div v-else class="table-responsive">
                <table class="table table-striped table-hover align-middle">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Categoría</th>
                            <th>Precio</th>
                            <th>Stock</th>
                            <th>Destacado</th>
                            <th class="text-center">Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr
                            v-for="(producto, indice) in productos"
                            :key="producto._id"
                        >
                            <td>{{ indice + 1 }}</td>

                            <td>{{ producto.nombre }}</td>

                            <td>{{ producto.categoria }}</td>

                            <td>
                                ${{ Number(producto.precio).toFixed(2) }}
                            </td>

                            <td>{{ producto.stock }}</td>

                            <td>
                                <span
                                    class="badge"
                                    :class="producto.destacado ? 'bg-warning text-dark' : 'bg-secondary'"
                                >
                                    {{ producto.destacado ? 'Sí' : 'No' }}
                                </span>
                            </td>

                            <td class="text-center">
                                <button
                                    class="btn btn-warning btn-sm me-2"
                                    @click="emit('editar', producto)"
                                >
                                    Editar
                                </button>

                                <button
                                    class="btn btn-danger btn-sm"
                                    @click="emit('eliminar', producto)"
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
