document.addEventListener('DOMContentLoaded', () => {
    // 1. Nuestra "Base de Datos" (debe ser igual a la de scrips.js)
    const productos = [
        { id: 1, nombre: "Sensor MAF", precio: 45000, img: "https://cdn-icons-png.flaticon.com/512/2555/2555572.png", desc: "Sensor de flujo de masa de aire de alta precisión. Ideal para motores turbo." },
        { id: 2, nombre: "Pastillas de Freno", precio: 32000, img: "https://cdn-icons-png.flaticon.com/512/806/806143.png", desc: "Compuesto cerámico de larga duración. No genera ruidos ni polvo negro." },
        { id: 3, nombre: "Filtro de Aceite", precio: 8500, img: "https://cdn-icons-png.flaticon.com/512/3062/3062400.png", desc: "Filtrado sintético avanzado que protege tu motor hasta por 10.000 km." },
        { id: 4, nombre: "Bujía Iridium", precio: 12000, img: "https://cdn-icons-png.flaticon.com/512/3062/3062325.png", desc: "Punta de iridium para una chispa más potente y mejor ahorro de combustible." },
        { id: 5, nombre: "Kit Distribución", precio: 110000, img: "https://cdn-icons-png.flaticon.com/512/3062/3062426.png", desc: "Incluye correa, tensores y bomba de agua. Calidad original certificada." },
        { id: 6, nombre: "Amortiguador", precio: 58000, img: "https://cdn-icons-png.flaticon.com/512/3062/3062351.png", desc: "Presión a gas para una conducción suave y estable en todo tipo de terreno." }
    ];

    // 2. Obtener el ID desde la URL (?id=1)
    const params = new URLSearchParams(window.location.search);
    const idProducto = parseInt(params.get('id'));

    // 3. Buscar el producto
    const producto = productos.find(p => p.id === idProducto);
    const contenedor = document.querySelector('#detalle-producto');

    // 4. Mostrarlo en el HTML
    if (producto) {
        contenedor.innerHTML = `
            <div class="col-md-6 text-center">
                <img src="${producto.img}" class="img-fluid rounded shadow-sm p-4 bg-white" alt="${producto.nombre}">
            </div>
            <div class="col-md-6">
                <h1 class="display-5 fw-bold">${producto.nombre}</h1>
                <p class="text-muted">Código de producto: #000${producto.id}</p>
                <hr>
                <h3 class="text-danger fw-bold">$${producto.precio.toLocaleString('es-CL')}</h3>
                <p class="mt-4 lead">${producto.desc}</p>
                <div class="d-grid gap-2 mt-5">
                    <button class="btn btn-dark btn-lg" onclick="alert('¡Agregado!')">Añadir al carrito</button>
                    <a href="index.html" class="btn btn-outline-secondary">Seguir comprando</a>
                </div>
            </div>
        `;
    } else {
        contenedor.innerHTML = `<h2 class="text-center">Producto no encontrado</h2>`;
    }
});