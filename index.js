function envolver () {
    document.querySelector(".cards .card-title").textContent = "Billie Eilish";
document.querySelector(".cards .card-description").textContent = "Mi artista favorita";

document.querySelector("#card-title2").textContent = "Shawn Mendes";
document.querySelector("#card-description2").textContent = "Artista favorito de mi amiga";

document.querySelector("#card-title3").textContent = "Seven Kayne";
document.querySelector("#card-description3").textContent = "Artista favorito de mi amigo";

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
