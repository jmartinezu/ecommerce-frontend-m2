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