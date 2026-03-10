// 1. Seleccionar elementos
const cartCountElement = document.querySelector('#cart-count');
const addButtons = document.querySelectorAll('.btn-add');

// 2. Estado inicial (intentar cargar de localStorage)
let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
cartCountElement.innerText = cartCount;

// 3. Función para agregar
addButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartCountElement.innerText = cartCount;
        
        // Guardar en el navegador (opcional pero suma puntos)
        localStorage.setItem('cartCount', cartCount);
        
        alert("¡Producto agregado con éxito!");
    });
});

const productos = [
    { id: 1, nombre: "Sensor MAF", precio: 45000, imagen: "https://via.placeholder.com/300?text=Sensor+MAF" },
    { id: 2, nombre: "Pastillas de Freno", precio: 32000, imagen: "https://via.placeholder.com/300?text=Frenos" },
    { id: 3, nombre: "Filtro de Aceite", precio: 8500, imagen: "https://via.placeholder.com/300?text=Filtro" },
    { id: 4, nombre: "Bujías Iridium", precio: 12000, imagen: "https://via.placeholder.com/300?text=Bujias" },
    { id: 5, nombre: "Amortiguador Delantero", precio: 55000, imagen: "https://via.placeholder.com/300?text=Amortiguador" },
    { id: 6, nombre: "Kit de Distribución", precio: 89000, imagen: "https://via.placeholder.com/300?text=Distribucion" }
];

const grid = document.querySelector('#product-grid');

function cargarProductos() {
    productos.forEach(prod => {
        const html = `
            <article class="col-12 col-md-6 col-lg-4 mb-4">
                <div class="card h-100">
                    <img src="${prod.imagen}" class="card-img-top" alt="${prod.nombre}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${prod.nombre}</h5>
                        <p class="card-text text-success fw-bold">$${prod.precio.toLocaleString('es-CL')}</p>
                        <div class="mt-auto">
                            <a href="detalle.html?id=${prod.id}" class="btn btn-outline-secondary w-100 mb-2">Ver detalle</a>
                            <button class="btn btn-primary w-100 btn-add" onclick="agregarAlCarrito()">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </article>
        `;
        grid.innerHTML += html;
    });
}

cargarProductos();

let contador = parseInt(localStorage.getItem('cartCount')) || 0;
const badge = document.querySelector('#cart-count');
badge.innerText = contador;

function agregarAlCarrito() {
    contador++;
    badge.innerText = contador;
    localStorage.setItem('cartCount', contador);
}