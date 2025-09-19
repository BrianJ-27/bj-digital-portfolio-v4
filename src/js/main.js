// main.js

import projectCardClickHandler from './projectCards.js';
import setupNavToggle from './toggleNav.js';


document.addEventListener('DOMContentLoaded', function () {

  //**EVENT LISTENERS **/
  projectCardClickHandler();
  setupNavToggle();

// Use new URL() to get the asset path correctly.
const iconMapURL = new URL('../assets/images/bj-icon-map.svg', import.meta.url);

// Select all the <use> elements for your icons.
const iconUses = document.querySelectorAll('a.banner__icons svg use');

// Loop through each <use> element.
iconUses.forEach(use => {
  // Get the original href (e.g., "#github").
  const iconId = use.getAttribute('xlink:href');

  // Set the new href using the .pathname property to get the string path.
  use.setAttribute('xlink:href', `${iconMapURL.pathname}${iconId}`);
});
});