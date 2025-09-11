function setupNavToggle() {
  const menu = document.querySelector("header");
  const navBar = document.querySelector(".nav__bar");

  /*--Toggle mobile navigation once user clicks on nav menu--*/
  menu.addEventListener('click', () => {
    menu.classList.toggle("change");
    navBar.classList.toggle("show__nav");
  });
}

export default setupNavToggle;