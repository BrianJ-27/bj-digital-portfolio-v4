// main.js

import projectCardClickHandler from './projectCards.js';
import setupNavToggle from './toggleNav.js';

// Import the SVG file. Parcel will provide the correct hashed URL.
const iconMap = new URL('../assets/images/bj-icon-map.svg', import.meta.url);

document.addEventListener('DOMContentLoaded', function () {

  //**EVENT LISTENERS **/
  projectCardClickHandler();
  setupNavToggle();

  // Find all SVG use tags that are children of .banner__icons
  const svgIcons = document.querySelectorAll('.banner__icons use');

  // Loop through each icon and set the correct path
  svgIcons.forEach(icon => {
    // Get the fragment identifier (e.g., "#github")
    const iconFragment = icon.getAttribute('xlink:href');

    // Get the pathname from the URL object to ensure a relative path is used
    // This will strip the domain (https://bj-digital-portfolio-v4.netlify.app)
    // and leave only the path (/bj-icon-map.9efbf3db.svg)
    const iconPath = iconMap.pathname;

    // Combine the relative path with the fragment
    icon.setAttribute('xlink:href', `${iconPath}${iconFragment}`);
  });
});