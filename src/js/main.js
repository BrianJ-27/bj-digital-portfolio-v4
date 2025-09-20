// import projectCardClickHandler from './projectCards.js';
// import setupNavToggle from './toggleNav.js';

// // Define the absolute path from the root of the site.
// const iconMapURL = '/bj-icon-map.svg';

// document.addEventListener('DOMContentLoaded', function () {
//   // Your other event listeners
//   projectCardClickHandler();
//   setupNavToggle();

//   // This code finds all icons and sets the correct, predictable path.
//   const iconUses = document.querySelectorAll('svg use');

//   iconUses.forEach(use => {
//     const iconId = use.getAttribute('href');
//     if (iconId) {
//       use.setAttribute('href', `${iconMapURL}${iconId}`);
//     }
//   });
// });

import projectCardClickHandler from './projectCards.js';
import setupNavToggle from './toggleNav.js';

const iconMapURL = '/bj-icon-map.svg';

document.addEventListener('DOMContentLoaded', function () {
  // Your other event listeners
  projectCardClickHandler();
  setupNavToggle();

  // --- SVG Icon Debugger Script ---
  console.log('--- SVG Icon Debugger Running ---');
  const iconUses = document.querySelectorAll('svg use');

  if (iconUses.length === 0) {
    console.log('Status: FAILED. No <use> elements were found on the page.');
    return; // Stop if there's nothing to do
  }

  console.log(`Status: Found ${iconUses.length} <use> elements to process.`);

  iconUses.forEach((use, index) => {
    // IMPORTANT: Check for both 'xlink:href' and 'href' to be safe
    const iconId = use.getAttribute('xlink:href') || use.getAttribute('href');

    if (iconId && iconId.startsWith('#')) {
      const newHref = `${iconMapURL}${iconId}`;

      // Set both attributes for maximum compatibility
      use.setAttribute('href', newHref);
      use.setAttribute('xlink:href', newHref);
      console.log(`Icon #${index + 1}: SUCCESS. Path updated to ${newHref}`);

      // ===================================================
      // NEW: Check the rendered dimensions after a short delay
      // ===================================================
      setTimeout(() => {
        const rect = use.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          console.log(`  -> ✅ Verification: Icon #${index + 1} is visible with dimensions ${Math.round(rect.width)}px x ${Math.round(rect.height)}px.`);
        } else {
          console.log(`  -> ❌ Verification: Icon #${index + 1} FAILED to render. Dimensions are 0x0.`);
        }
      }, 100); // 100ms delay to allow for rendering
      // ===================================================

    } else {
      console.log(`Icon #${index + 1}: SKIPPED. Could not find a valid href starting with #.`);
    }
  });
  console.log('--- SVG Icon Debugger Finished ---');
});