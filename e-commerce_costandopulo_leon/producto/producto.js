// *** Definición de los productos ***
const productos = [
    { id: 1, nombre: "Laptop Gaming", precio: 1299.99, stock: 15, imagen: "https://i5.walmartimages.com/seo/ASUS-ROG-Strix-15-6-R9-RTX-3060-Gaming-Laptop-FHD-AMD-Ryzen-9-5900HX-NVIDIA-GeForce-3060-16GB-RAM-1TB-SSD-Eclipse-Gray-Windows-10-Home-G513QM-WS96_8ca98551-8e80-431a-a0bf-2ae037b9e571.74a18e3919f93a362f7367ac2d157d84.jpeg" },
    { id: 2, nombre: "Mouse Inalámbrico", precio: 49.99, stock: 150, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnga6yZ4sBu-KIc0EoPhi8vqN-MYAHlfEYA&s" },
    { id: 3, nombre: "Teclado Mecánico", precio: 89.99, stock: 75, imagen: "https://http2.mlstatic.com/D_NQ_NP_861690-MLA73209231353_122023-O.webp" },
    { id: 4, nombre: "Monitor 24\"", precio: 199.99, stock: 30, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV0aSVGRYriG_vZES3VM8gb7qIMkO22K4yPg&s" },
    { id: 5, nombre: "Auriculares Bluetooth", precio: 79.99, stock: 100, imagen: "https://www.gmpromociones.com.ar/wp-content/uploads/2024/07/alt__promocional_publicitario_auriculares_EC745_perfil_der_.jpg" },
    { id: 6, nombre: "Silla Gamer", precio: 249.99, stock: 20, imagen: "https://www.perozzi.com.ar/46727-large_default/daihatsu-silla-gamer-d-ga20rd.jpg" },
    { id: 7, nombre: "Webcam HD", precio: 59.99, stock: 50, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3bPovP6CwIojM3a1BZbTjKGc8oyxyGnCN8w&s" },
    { id: 8, nombre: "Mouse Gamer", precio: 99.99, stock: 40, imagen: "https://www.heavenimagenes.com/heavencommerce/2c39c04b-1d55-4d49-81c9-0ed39463cdd8/images/v2/SOUL/10959_medium.jpg" },
    { id: 9, nombre: "Teclado Gamer", precio: 15.99, stock: 200, imagen: "https://static.nb.com.ar/img/0199451ceb774fe539867fd9a2276f00.jpeg" },
    { id: 10, nombre: "Auriculares Gamer", precio: 25.99, stock: 120, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvoy8jfooyfQg5tj6K-4UIZWHIAuKQk6klKw&s" }
];

const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('prod'));

const producto = productos.find(prod => prod.id === productId);

// Validación de que el producto exista
if (producto) {
    document.getElementById('product-name').textContent = producto.nombre;
    document.getElementById('product-price').textContent = `Precio: $${producto.precio}`;
    document.getElementById('product-stock').textContent = `Stock: ${producto.stock}`;
    document.getElementById('product-image').style.backgroundImage = `url(${producto.imagen})`;
} else {
    document.body.innerHTML = "<h1>Producto no encontrado</h1>";
}

// *** Validación de que el usuario esté logueado para comprar ***
let email = localStorage.getItem("email");
let botonComprar = document.querySelector("#comprar");
let comprarLink = document.querySelector("#comprar-link");

if (email === null) {
    botonComprar.innerHTML = "Iniciar Sesión para comprar"; 
    comprarLink.href = "../login/login.html";
} else {
    botonComprar.innerHTML = "Comprar";
    botonComprar.href = "ACÁ VA EL LINK CUANDO HAYA PÁGINA PARA COMPRAR O AÑADIR AL CARRITO";
}

// *** Contador ***
const counter = document.querySelector(".input-group input"); 

function increaseItem() {
    if (counter.value >= producto.stock) {
        return;
    }
    counter.value = Number(counter.value) + 1;
};

function decreaseItem() {
    if (counter.value <= 1) {
        return;
    }
    counter.value = Number(counter.value) - 1;
};

// *** Agregar al carrito ***
function addItems() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const idProduct = productId;
    const productoSeleccionado = productos.find(p => p.id === idProduct);

    if (!productoSeleccionado) {
        console.error("Producto no encontrado al agregar al carrito.");
        return;
    }

    const ProductIDExistente = cart.findIndex(item => item.id === idProduct);
    if (ProductIDExistente !== -1) {
        // Si el producto ya existe, actualiza la cantidad
        cart[ProductIDExistente].quantity =
            Number(cart[ProductIDExistente].quantity) + Number(counter.value);
    } else {
        // Agrega el producto con todos los datos necesarios
        cart.push({
            id: idProduct,
            name: productoSeleccionado.nombre,
            price: productoSeleccionado.precio,
            image: productoSeleccionado.imagen,
            quantity: Number(counter.value),
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // Actualiza la cantidad total en el carrito
    let quantity = cart.reduce((acumulado, actual) => acumulado + Number(actual.quantity), 0);
    localStorage.setItem("quantity", quantity);

    const quantityTag = document.getElementById("cart-quantity");
    if (quantityTag) {
        quantityTag.innerHTML = quantity;
    }

    // Resetea el contador y actualiza el stock
    productoSeleccionado.stock -= Number(counter.value);
    document.querySelector("#product-stock").innerHTML = `Stock: ${productoSeleccionado.stock}`;
    counter.value = 1;
}
