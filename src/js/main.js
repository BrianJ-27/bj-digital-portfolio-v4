document.addEventListener('DOMContentLoaded', function () {
  /**GLOBAL GETTER VARIABLES */
  const navToggle = document.getElementById('nav-toggle');
  const navCloseBtn = document.getElementById('nav-closeBtn');
  const navContent = document.getElementById('nav-content');
  const projectTitle = document.querySelector('.title__secondary--projects');
  const cardContainer = document.querySelector(".slider__cards");

  //**SETTERS */
   // Set initial heading text dynamically
   projectTitle.textContent = 'All Projects';

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
      toggleNavigation(false);
    }
  });

    // Event listeners for when user clicks on a button
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

   const cardsData = [
      {
        id: 1,
        image: "../assets/images/6th-project_800px.png",
        title: 'Marvel Word Guesser',
        liveLink: "https://marvel-word-guesser.netlify.app/",
        copy: 'Created a Marvel word guesser using class-based OOP in JS.',
        gitLink: "https://github.com/BrianJ-27/web-game-show-app",
        type: 'web',
      },
      {
        id: 2,
        image: "../assets/images/email-promo-fashion-pulse2.jpg",
        title: 'Fashion Pulse Promo',
        liveLink: "https://litmus.com/checklist/emails/public/gs5U5nUohJRXQ9c2",
        copy: 'Fashion Adhoc promo email built with flexbox, ghost tables, divs.',
        gitLink: "https://github.com/BrianJ-27/fashionPulse/tree/main",
        type: 'email',
      },
      {
        id: 3,
        image: "../assets/images/7th-project_800px.png",
        title: 'App Dashboard',
        liveLink: "https://bj-dashboard.netlify.app/",
        copy: 'Developed a web dashboard using JS modules and OOP.',
        gitLink: "https://github.com/BrianJ-27/app-dashboard",
        type: 'web',
      },
      {
        id: 4,
        image: "../assets/images/email-newsletter-fashion-pulse.jpg",
        title: 'FP Newsletter',
        liveLink: "https://litmus.com/checklist/emails/public/nlLBk19sQJLYZLoX",
        copy: 'Fashion newsletter email built with flexbox, ghost tables, divs.',
        gitLink: "https://github.com/BrianJ-27/fashionPulse/tree/main",
        type: 'email',
      },
      {
        id: 5,
        image: "../assets/images/8th-project_800px.png",
        title: 'Employee Directory',
        liveLink: "https://bj-employee-directory.netlify.app/",
        copy: 'Constructed an employee directory with fetch API, OOP, and JS modules.',
        gitLink: "https://github.com/BrianJ-27/Employee-Directory-Project8",
        type: 'web',
      },
      {
        id: 6,
        image: "https://fakeimg.pl/280x150?text=Coming+Soon",
        title: 'Transactional Email',
        liveLink: "/",
        copy: 'Building responsive, clear transactional emails for confirmations.',
        gitLink: "",
        type: 'email',
      },
    ];

    /** HELPER FUNCTIONS */
    function createCard({ image, title, liveLink, copy, gitLink }) {
      return `
        <li>
          <div class="card">
            <div class="card__img--container">
              <img class="card__img" src="${image}" height="auto" alt="card image">
            </div>
            <div class="card__body">
              <h3>${title}</h3>
              <a href="${liveLink}" class="card__live-link">Live View</a>
              <p class="card__content">${copy}</p>
              <a href="${gitLink}" class="card__button">
                <svg style="width: 1.25rem; height: 1.25rem" viewBox="0 0 16 16" aria-hidden="true">
                  <use xlink:href="./assets/images/bj-icon-map.svg#github-white"></use>
                </svg> View Code</a>
              </div>
          </div>
        </li>
      `;
    }

    function filterCards(type = 'all') {
      if (type === 'all') {
        return cardsData; // Return all cards if 'all' is selected
      } return cardsData.filter(card => card.type === type); // Filter by Card type
    }

    function displayCards(filteredCards) {
      let cardsHTML = '';
      filteredCards.forEach((card) => {
        cardsHTML += createCard(card);
      });
      cardContainer.innerHTML = cardsHTML;
    }

    // Initial display of all cards when the page loads
    displayCards(cardsData);
});
