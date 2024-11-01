function toggleNavigation(isOpen) {
  // Add/remove class to show/hide the menu
if (isOpen) {
 navContent.classList.add('open'); // Show the menu
} else {
 navContent.classList.remove('open'); // Hide the menu
}
}

export default toggleNavigation;