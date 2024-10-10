class Producto {
    constructor(titulo, detalles, precio, stock, imagen) {
        this.titulo = titulo;
        this.detalles = detalles;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }
}

const OBJETO = new Producto(
    "Mouse", 
    "Un mouse gamer increíble que te hace pegar todos los tiros en el counter", 
    1000, 
    3, 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7sXyh0EpGSjbMOAsBIFddHr2vvK_u1s4LTw&s"
);

function mostrarProducto(producto) {
    const contenedor = document.getElementById('producto-container');
    
    contenedor.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}">
            <div class="card-body">
                <h5 class="card-title">${producto.titulo}</h5>
                <p class="card-text">${producto.detalles}</p>
                <p class="card-text">Precio: $${producto.precio}</p>
                <p class="card-text">Stock disponible: ${producto.stock}</p>
            </div>
        </div>
    `;
}

mostrarProducto(OBJETO);
