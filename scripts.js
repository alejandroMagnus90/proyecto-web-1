document.addEventListener('DOMContentLoaded', () => {
    const botonesAgregarCarrito = document.querySelectorAll('button');
    const carrito = [];

    botonesAgregarCarrito.forEach(boton => {
        boton.addEventListener('click', () => {
            const producto = boton.parentElement;
            const nombre = producto.querySelector('h3').textContent;
            const precio = producto.querySelector('p:nth-of-type(2)').textContent;

            carrito.push({ nombre, precio });
            console.log('Carrito:', carrito);
        });
    });
});
