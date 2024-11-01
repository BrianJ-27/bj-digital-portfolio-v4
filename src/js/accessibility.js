

const handleAllyNav = () => {

  const navToggle = document.getElementById('nav-toggle');
const navCloseBtn = document.getElementById('nav-closeBtn');
const navContent = document.getElementById('nav-content');

    /**EVENT LISTENERS */
  // Toggle navigation  in the expanded state and manages focus when the user clicks the toggle button
  navToggle.addEventListener('click', function () {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !expanded);

    if (!expanded) {
      // Remove the inert attribute
      navContent.removeAttribute('inert');
      // Move focus to the close button
      navCloseBtn.focus();
    } else {
      // Add the inert attribute
      navContent.setAttribute('inert', '');
      // Move focus back to the toggle button
      navToggle.focus();
    }
  });

  navCloseBtn.addEventListener('click', function () {
    navToggle.setAttribute('aria-expanded', 'false');
    // Add the inert attribute
    navContent.setAttribute('inert', '');
    navToggle.focus();
  });

   // Close navigation when focus moves outside of it
   document.addEventListener('focusin', function (event) {
    const isOutsideNav = !navContent.contains(event.target) && event.target !== navToggle;
    if (isOutsideNav) {
      navToggle.setAttribute('aria-expanded', 'false');
      navContent.setAttribute('inert', '');
    }
  });

  // Close navigation on Escape key press
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
      navToggle.setAttribute('aria-expanded', 'false');
      toggleNavigation(false);
    }
  });

}

export default handleAllyNav;