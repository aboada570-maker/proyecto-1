let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarCarrito(nombre, precio) {

    carrito.push({
        nombre: nombre,
        precio: precio
    });

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    alert("Producto agregado al carrito");
}

function mostrarCarrito() {

    let lista = document.getElementById("lista-carrito");

    let total = 0;

    if (!lista) return;

    lista.innerHTML = "";

    carrito.forEach(producto => {

        let li = document.createElement("li");

        li.textContent =
            producto.nombre +
            " - $" +
            producto.precio;

        lista.appendChild(li);

        total += producto.precio;
    });

    document.getElementById("total").textContent =
        "Total: $" + total;
}

function vaciarCarrito() {

    localStorage.removeItem("carrito");

    carrito = [];

    mostrarCarrito();
}

mostrarCarrito();