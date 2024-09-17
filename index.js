//anotación propia (ignorar): document.querySelector selecciona el primer elemento que coincida con el ("")
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