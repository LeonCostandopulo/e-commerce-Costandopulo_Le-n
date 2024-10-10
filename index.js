function envolver () {
    document.querySelector(".cards .card-title").textContent = "Mouse Gamer";
document.querySelector(".cards .card-description").textContent = "Un increible mouse que...";

document.querySelector("#card-title2").textContent = "Teclado Gamer";
document.querySelector("#card-description2").textContent = "Un fantástico teclado que...";

document.querySelector("#card-title3").textContent = "Auriculares Gamer";
document.querySelector("#card-description3").textContent = "Unos auriculares que...";

let cards = document.querySelectorAll(".cards");

for (let i = 0; i < cards.length; i++) {
    cards[i].style.borderColor = "yellow"; 
}
let container = document.querySelector(".container");

let data = [
    { id: "img1", title: "Card 1", description: "Descripción de la primera card" },
    { id: "img2", title: "Card 2", description: "Descripción de la segunda card" },
    { id: "img3", title: "Card 3", description: "Descripción de la tercera card" },
];

for (let i = 0; i < data.length; i++) {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("cards");

    let imgDiv = document.createElement("div");
    imgDiv.classList.add("imagen");
    imgDiv.setAttribute("id", data[i].id);

    let titleDiv = document.createElement("div");
    titleDiv.classList.add("card-title");
    titleDiv.textContent = data[i].title;

    let descDiv = document.createElement("div");
    descDiv.classList.add("card-description");
    descDiv.textContent = data[i].description;

    cardDiv.appendChild(imgDiv);
    cardDiv.appendChild(titleDiv);
    cardDiv.appendChild(descDiv);

    container.appendChild(cardDiv);
}

}
envolver();