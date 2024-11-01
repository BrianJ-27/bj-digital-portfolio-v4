import cardsData from './data.js';
import filterCards from './filter.js';

const projectTitle = document.querySelector('.title__secondary--projects');
const cardContainer = document.querySelector(".slider__cards");

  // Set initial heading text dynamically
  projectTitle.textContent = 'All Projects';

/**
 * Handles clicks on project card CTAs by updating the active button class and
 * filtering card displays based on the selected project type.
 * @param {Event} e - The event object from the click event.
 */
const projectCardClickHandler = (e) => {
  document.querySelectorAll('.cta__project').forEach(button => {
    button.addEventListener('click', (e) => {
      const selectedType = e.currentTarget.getAttribute('data-type');

      // Update active button class
      document.querySelectorAll('.cta__project').forEach(btn => btn.classList.remove('cta__project--active'));
      e.currentTarget.classList.add('cta__project--active');

      // Filter and display cards
      const filteredCards = filterCards(selectedType);
      displayCards(filteredCards);

      // Update Heading text based on selected type
      let headingText = "All Projects";
      if (selectedType === 'web') {
        headingText = 'Web Projects';
      } else if (selectedType === 'email') {
        headingText = 'Email Projects';
      }
      projectTitle.textContent = headingText;
    });
  });

}

/**
 * Returns a string of HTML for a single project card component.
 * @param {{ image: string, title: string, liveLink: string, copy: string, gitLink: string }} cardData
 * An object containing the data for the card, with keys image, title, liveLink, copy, and gitLink.
 * @returns {string} The HTML for the card component.
 */
function createCard({ image, title, liveLink, copy, gitLink }) {
  return `
    <li>
      <div class="card dm_bg_dark_purple">
        <div class="card__img--container">
          <img class="card__img" src="${image}" height="auto" alt="card image">
        </div>
        <div class="card__body">
          <h3>${title}</h3>
          <a href="${liveLink}" class="card__live-link">Live View</a>
          <p class="card__content">${copy}</p>
          <a href="${gitLink}" class="card__button">
            <svg class="card__icon" style="width: 1.25rem; height: 1.25rem" viewBox="0 0 16 16" aria-hidden="true">
              <use xlink:href="./assets/images/bj-icon-map.svg#github-white"></use>
            </svg> View Code</a>
          </div>
      </div>
    </li>
  `;
}


/**
 * Takes an array of card data and displays it as a list of project cards
 * inside the element with class "slider__cards".
 *
 * @param {object[]} filteredCards An array of card data, with each element
 *      containing the keys image, title, liveLink, copy, and gitLink.
 */
function displayCards(filteredCards) {
  let cardsHTML = '';
  filteredCards.forEach((card) => {
    cardsHTML += createCard(card);
  });
  cardContainer.innerHTML = cardsHTML;
}


 // Initial display of all cards when the page loads
 displayCards(cardsData);

export default  projectCardClickHandler ;