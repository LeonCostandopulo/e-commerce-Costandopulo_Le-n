function envolver() {
    const data = [
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

    let container = document.getElementById('products-container');

    const productosHTML = data.map(producto => `
        <div class="cards">
            <div class="imgcenter">
                <div class="imagen" style="background-image: url('${producto.imagen}');"></div>
            </div>
            <div class="card-title">${producto.nombre}</div>
            <div class="card-description">Precio: $${producto.precio}</div>
            <div class="card-description">Stock: ${producto.stock}</div>
            <a href="producto/producto.html?prod=${producto.id}" class="card-button">Ver más...</a>
        </div>
    `).join(''); 

    container.innerHTML = productosHTML;

    const searchButton = document.querySelector('.filtrar');
    const searchInput = document.querySelector('.finder');
    const deleteButton = document.querySelector('.borrar');

    function updateContainerContent(productsHTML) {
        container.innerHTML = productsHTML;
    }

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase();

        if (searchTerm === '') {
            updateContainerContent(productosHTML);
        } else {
            const filteredProducts = data.filter(producto => {
                const nombre = producto.nombre.toLowerCase();
                return nombre.includes(searchTerm);
            });

            const filteredProductsHTML = filteredProducts.map(producto => `
                <div class="cards">
                    <div class="imgcenter">
                        <div class="imagen" style="background-image: url('${producto.imagen}');"></div>
                    </div>
                    <div class="card-title">${producto.nombre}</div>
                    <div class="card-description">Precio: $${producto.precio}</div>
                    <div class="card-description">Stock: ${producto.stock}</div>
                    <a href="producto/producto.html?prod=${producto.id}" class="card-button">Ver más...</a>
                </div>
            `).join('');

            updateContainerContent(filteredProductsHTML);
        }
    });

    deleteButton.addEventListener('click', () => {
        searchInput.value = ''; 
        updateContainerContent(productosHTML); 
    });

    //*****************// 
    //****NAVBAR.JS****//
    //*****************//

    const arraySimple = ["Home", "Gamer", "Convencional"];

    let menu = `
    <ul class="nav">
        <li class="nav-item"><a class="nav-link" id="home-link" href="#">${arraySimple[0]}</a></li>
        <li class="nav-item"><a class="nav-link" id="gamer-link" href="#">${arraySimple[1]}</a></li>
        <li class="nav-item"><a class="nav-link" id="convencional-link" href="#">${arraySimple[2]}</a></li>
    </ul>
    `;

    document.getElementById('menu-container').innerHTML = menu;

    document.getElementById('home-link').addEventListener('click', () => {
        updateContainerContent(productosHTML);
    });

    document.getElementById('gamer-link').addEventListener('click', () => {
        const filteredGamer = data.filter(producto => 
            producto.nombre.toLowerCase().includes('gamer') || producto.nombre.toLowerCase().includes('gaming')
        );
        const filteredGamerHTML = filteredGamer.map(producto => `
            <div class="cards">
                <div class="imgcenter">
                    <div class="imagen" style="background-image: url('${producto.imagen}');"></div>
                </div>
                <div class="card-title">${producto.nombre}</div>
                <div class="card-description">Precio: $${producto.precio}</div>
                <div class="card-description">Stock: ${producto.stock}</div>
                <a href="producto/producto.html?prod=${producto.id}" class="card-button">Ver más...</a>
            </div>
        `).join('');
        updateContainerContent(filteredGamerHTML);
    });

    document.getElementById('convencional-link').addEventListener('click', () => {
        const filteredConvencional = data.filter(producto => 
            !producto.nombre.toLowerCase().includes('gamer') && !producto.nombre.toLowerCase().includes('gaming')
        );
        const filteredConvencionalHTML = filteredConvencional.map(producto => `
            <div class="cards">
                <div class="imgcenter">
                    <div class="imagen" style="background-image: url('${producto.imagen}');"></div>
                </div>
                <div class="card-title">${producto.nombre}</div>
                <div class="card-description">Precio: $${producto.precio}</div>
                <div class="card-description">Stock: ${producto.stock}</div>
                <a href="producto/producto.html?prod=${producto.id}" class="card-button">Ver más...</a>
            </div>
        `).join('');
        updateContainerContent(filteredConvencionalHTML);
    });
    // el filtrado del navbar decidí hacerlo con las palabras gamer o gaming, en vez de agregar una categoría nueva, espero que sea válido
}

envolver();
