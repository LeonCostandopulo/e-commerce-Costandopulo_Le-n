
// Datos para las tarjetas
const cardData = [
    { title: 'Card Title 1', description: 'Description for Card 1' },
    { title: 'Card Title 2', description: 'Description for Card 2' },
    { title: 'Card Title 3', description: 'Description for Card 3' }
];

// Selecciona el contenedor donde se agregarán las tarjetas
const container = document.querySelector('.container');

// Crea tarjetas dinámicamente
for (let i = 0; i < cardData.length; i++) {
    const card = cardData[i];
    
    const cardElement = document.createElement('div');
    cardElement.className = 'cards';
    
    const imageElement = document.createElement('div');
    imageElement.className = 'imagen';
    
    const titleElement = document.createElement('div');
    titleElement.className = 'card-title';
    titleElement.textContent = card.title;
    
    const descriptionElement = document.createElement('div');
    descriptionElement.className = 'card-description';
    descriptionElement.textContent = card.description;

    cardElement.appendChild(imageElement);
    cardElement.appendChild(titleElement);
    cardElement.appendChild(descriptionElement);
    
    container.appendChild(cardElement);
}


