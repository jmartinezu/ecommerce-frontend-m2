// 1. Datos de los productos (puedes añadir más aquí)
const productos = [
    { id: 1, nombre: "Sensor MAF", precio: 45000, img: "https://cdn-icons-png.flaticon.com/512/2555/2555572.png" },
    { id: 2, nombre: "Pastillas de Freno", precio: 32000, img: "https://cdn-icons-png.flaticon.com/512/806/806143.png" },
    { id: 3, nombre: "Filtro de Aceite", precio: 8500, img: "https://cdn-icons-png.flaticon.com/512/3062/3062400.png" },
    { id: 4, nombre: "Bujía Iridium", precio: 12000, img: "https://cdn-icons-png.flaticon.com/512/3062/3062325.png" },
    { id: 5, nombre: "Kit Distribución", precio: 110000, img: "https://cdn-icons-png.flaticon.com/512/3062/3062426.png" },
    { id: 6, nombre: "Amortiguador", precio: 58000, img: "https://cdn-icons-png.flaticon.com/512/3062/3062351.png" }
];

// 2. Elementos del DOM
const grid = document.querySelector('#product-grid');
const cartBadge = document.querySelector('#cart-count');

// 3. Estado del carrito
let count = parseInt(localStorage.getItem('cartCount')) || 0;
cartBadge.innerText = count;

// 4. Función para renderizar cards
function displayProducts() {
    productos.forEach(p => {
        grid.innerHTML += `
            <article class="col-12 col-md-6 col-lg-4 mb-4">
                <div class="card h-100 shadow-sm">
                    <img src="${p.img}" class="card-img-top" alt="${p.nombre}">
                    <div class="card-body d-flex flex-column text-center">
                        <h5 class="card-title">${p.nombre}</h5>
                        <p class="card-text fs-4 fw-bold text-danger">$${p.precio.toLocaleString('es-CL')}</p>
                        <div class="mt-auto">
                            <button onclick="addToCart()" class="btn btn-dark w-100 mb-2">Agregar al carrito</button>
                            <a href="detalle.html?id=${p.id}" class="btn btn-link text-decoration-none">Ver más detalles</a>
                        </div>
                    </div>
                </div>
            </article>
        `;
    });
}

// 5. Lógica del carrito
function addToCart() {
    count++;
    cartBadge.innerText = count;
    localStorage.setItem('cartCount', count);
}

// Inicializar
displayProducts();