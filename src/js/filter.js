import cardsData from './data.js';

function filterCards(type = 'all') {
  if (type === 'all') {
    return cardsData; // Return all cards if 'all' is selected
  } return cardsData.filter(card => card.type === type); // Filter by Card type
}

export default filterCards;