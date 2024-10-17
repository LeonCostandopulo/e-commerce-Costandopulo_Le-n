
const productos = [
    { id: 1, nombre: "Laptop Gaming", precio: 1299.99, stock: 15, imagen: "https://example.com/laptop-gaming.jpg" },
    { id: 2, nombre: "Mouse Inalámbrico", precio: 49.99, stock: 150, imagen: "https://example.com/mouse-inalambrico.jpg" },
    { id: 3, nombre: "Teclado Mecánico", precio: 89.99, stock: 75, imagen: "https://example.com/teclado-mecanico.jpg" },
    { id: 4, nombre: "Monitor 24\"", precio: 199.99, stock: 30, imagen: "https://example.com/monitor-24.jpg" },
    { id: 5, nombre: "Auriculares Bluetooth", precio: 79.99, stock: 100, imagen: "https://example.com/auriculares-bluetooth.jpg" },
    { id: 6, nombre: "Silla Gamer", precio: 249.99, stock: 20, imagen: "https://example.com/silla-gamer.jpg" },
    { id: 7, nombre: "Webcam HD", precio: 59.99, stock: 50, imagen: "https://example.com/webcam-hd.jpg" },
    { id: 8, nombre: "Mouse Gamer", precio: 99.99, stock: 40, imagen: "https://example.com/ssd-1tb.jpg" },
    { id: 9, nombre: "Teclado Gamer", precio: 15.99, stock: 200, imagen: "https://example.com/usb-32gb.jpg" },
    { id: 10, nombre: "Auriculares Gamer", precio: 25.99, stock: 120, imagen: "https://example.com/mouse-pad-xxl.jpg" }
];

const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('prod'));

const producto = productos.find(prod => prod.id === productId);

if (producto) {
    document.getElementById('product-name').textContent = producto.nombre;
    document.getElementById('product-price').textContent = `Precio: $${producto.precio}`;
    document.getElementById('product-stock').textContent = `Stock: ${producto.stock}`;
    document.getElementById('product-image').style.backgroundImage = `url(${producto.imagen})`;
} else {
    document.body.innerHTML = "<h1>Producto no encontrado</h1>";
}