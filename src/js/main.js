import projectCardClickHandler from './projectCards.js';
import setupNavToggle from './toggleNav.js';
// Import the SVG file directly. Parcel will provide the correct hashed path.
const iconMap = new URL('../assets/images/bj-icon-map.svg', import.meta.url);

document.addEventListener('DOMContentLoaded', function () {

//**EVENT LISTENERS **/
projectCardClickHandler();
setupNavToggle();

// Find all SVG use tags that are children of .banner__icons
  const svgIcons = document.querySelectorAll('.banner__icons use');

  // Loop through each icon and set the correct path
  svgIcons.forEach(icon => {
    // Get the fragment identifier from the existing href (e.g., "#github" or "#linkedin")
    const iconFragment = icon.getAttribute('xlink:href');

    // Combine the imported path from Parcel with the fragment
    icon.setAttribute('xlink:href', `${iconMap}${iconFragment}`);
  });
});
