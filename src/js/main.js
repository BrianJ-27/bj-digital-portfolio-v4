// main.js

import projectCardClickHandler from './projectCards.js';
import setupNavToggle from './toggleNav.js';

// We are now using a simple, hardcoded path to the SVG file
// because it's in the 'public' folder and will be copied as-is.
const iconMapURL = '/bj-icon-map.svg';

document.addEventListener('DOMContentLoaded', function () {

  //**EVENT LISTENERS **/
  projectCardClickHandler();
  setupNavToggle();

  // The rest of this code remains the same
  const iconUses = document.querySelectorAll('a.banner__icons svg use');

  iconUses.forEach(use => {
    const iconId = use.getAttribute('xlink:href');
    use.setAttribute('xlink:href', `${iconMapURL}${iconId}`);
  });
});