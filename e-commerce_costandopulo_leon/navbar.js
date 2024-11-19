
// ***  NAVBAR  ***
let navbar = document.getElementById("navbar");
navbar.innerHTML = `        
        <header class="menu" id="menu-container"></header>
        <div>
            <input class="finder" placeholder="Buscar..."></input>
            <button class="borrar">X</button>
            <button class="filtrar">Buscar</button>
        </div>
        <a href="../cart/cart.html"><div id="cart">
            <div id="cart-quantity"></div>
        </div></a>
        <div class="session" id="session"></div>
        ` 

/***  BUSCADOR  ***/ 
const searchButton = document.querySelector('.filtrar');
const searchInput = document.querySelector('.finder');
const deleteButton = document.querySelector('.borrar');

if (searchButton && searchInput && deleteButton) {
    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredProducts = searchTerm
            ? data.filter(producto => producto.nombre.toLowerCase().includes(searchTerm))
            : data;
        console.log(filteredProducts);
        container.innerHTML = renderProducts(filteredProducts);
    });

    deleteButton.addEventListener('click', () => {
        searchInput.value = '';
        container.innerHTML = productosHTML;
    });
}


/***  FILTROS PREDEFINIDOS / PESTAÑAS DEL HOME  ***/ 
const menuContainer = document.getElementById('menu-container');
if (menuContainer) {
    menuContainer.innerHTML = `
        <ul class="nav">
            <li class="nav-item"><a class="nav-link" id="home-link" href="#">Home</a></li>
            <li class="nav-item"><a class="nav-link" id="gamer-link" href="#">Gamer</a></li>
            <li class="nav-item"><a class="nav-link" id="convencional-link" href="#">Convencional</a></li>
        </ul>
    `;

    document.getElementById('home-link').addEventListener('click', () => {
        container.innerHTML = productosHTML;
    });

    document.getElementById('gamer-link').addEventListener('click', () => {
        const gamerProducts = data.filter(producto => 
            producto.nombre.toLowerCase().includes('gamer') || producto.nombre.toLowerCase().includes('gaming')
        );
        container.innerHTML = renderProducts(gamerProducts);
    });

    document.getElementById('convencional-link').addEventListener('click', () => {
        const convencionalProducts = data.filter(producto => 
            !producto.nombre.toLowerCase().includes('gamer') && !producto.nombre.toLowerCase().includes('gaming')
        );
        container.innerHTML = renderProducts(convencionalProducts);
    });
}

/***  SESSION SECTION XD  ***/ 
const sessionElement = document.querySelector(".session");
if (sessionElement) {
        const email = localStorage.getItem("email");
        sessionElement.innerHTML = email
            ? `<span>${email}</span> | <span onclick="logout()">Cerrar sesión</span>`
            : `<a id="session" href='../login/login.html'><span>Iniciar sesión</span></a>`;

        window.logout = () => {
            localStorage.clear();
            location.href = "../login/login.html";
        };
    }

/***  CARRITO  ***/ 
if (localStorage.getItem("email") !== null) {
    const cart = document.querySelector(".navbar #cart");
    const cartQuantity = document.querySelector("#cart-quantity");

    cartQuantity.innerHTML = `${localStorage.getItem("quantity")}`;
    cart.classList.add("cart");
}