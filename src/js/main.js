import projectCardClickHandler from './projectCards.js';
import setupNavToggle from './toggleNav.js';

// Define the absolute path from the root of the site.
const iconMapURL = '/bj-icon-map.svg';

document.addEventListener('DOMContentLoaded', function () {
  // Your other event listeners
  projectCardClickHandler();
  setupNavToggle();

  // This code finds all icons and sets the correct, predictable path.
  const iconUses = document.querySelectorAll('svg use');

  iconUses.forEach(use => {
    const iconId = use.getAttribute('href');
    if (iconId) {
      use.setAttribute('href', `${iconMapURL}${iconId}`);
    }
  });
});