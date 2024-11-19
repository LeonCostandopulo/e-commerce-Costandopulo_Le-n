const cardSection = document.querySelector("#cart #cards");
const totalElement = document.querySelector("#total"); 

// *** Por si no hay nada en el carrito, que no aparezca vacío ***
function getCard(cards) {
    if (!cards || cards.length === 0) {
        cardSection.innerHTML = `<p>El carrito está vacío</p>`;
        totalElement.textContent = "$0.00"; 
        return;
    }

// *** Render de las cards del carrito ***
    const list = cards.map(card => {
        const { image, name, price, quantity } = card; 
        const total = (price * quantity).toFixed(2); 
        return `
<div class="card border shadow-none">
    <div class="card-body">
        <div class="d-flex align-items-start border-bottom pb-3">
            <div class="me-4">
                <img
                    src="${image}"
                    alt="${name}"
                    class="avatar-lg rounded"
                />
            </div>
            <div class="flex-grow-1 overflow-hidden">
                <h5 class="text-truncate font-size-18">${name}</h5>
                <div class="row">
                    <div class="col-md-4">
                        <div class="mt-3">
                            <p class="text-muted mb-2">Precio</p>
                            <h5 class="mb-0 mt-2">$${price.toFixed(2)}</h5>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="mt-3">
                            <p class="text-muted mb-2">Cantidad</p>
                            <h5 class="mb-0 mt-2">${quantity}</h5>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="mt-3">
                            <p class="text-muted mb-2">Total</p>
                            <h5 class="mb-0 mt-2">$${(price * quantity).toFixed(2)}</h5>
                        </div>
                    </div>
                </div>
                <button class="btn btn-danger mt-3" onclick="removeFromCart(${card.id})">Eliminar</button>
            </div>
        </div>
    </div>
</div>`;
    });

    const totalPrice = cards.reduce((sum, card) => sum + card.price * card.quantity, 0).toFixed(2);

    cardSection.innerHTML = list.join("");

    totalElement.textContent = `$${totalPrice}`;
}

const cartData = localStorage.getItem("cart");
if (cartData) { 
    try {
        const cart = JSON.parse(cartData);
        getCard(cart);
    } catch (error) {
        console.error("Errorrrr render cart ", error);
    }
} else {
    getCard([]); 
}

// *** Botón Comprar ***
const email = localStorage.getItem("email");

if (email === null) {
    document.querySelector("#btn-checkout").innerHTML = "Iniciar Sesión para comprar"; 
    document.querySelector("#checkout-link").href = "../login/login.html";
}

// *** Boton Vaciar carrito *** 
const btnClearCart = document.querySelector("#btn-clear");
btnClearCart.addEventListener("click", () => {
    if(email !== null) { //por si no hay usuario, que no se cree en cart
        localStorage.setItem("cart", "[]");
        localStorage.setItem("quantity", "0");
        location.href = "../index/index.html";
    }
});
