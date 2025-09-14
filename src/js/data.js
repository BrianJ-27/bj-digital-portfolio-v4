const discoverPic = new URL('./../assets/images/web-discover-project-pic.jpg', import.meta.url);
const tvsAdpPic = new URL('../assets/images/email-tvs-transactional-ODP-Reminder-project-pics.jpg', import.meta.url);
const macysRegPic = new URL('../assets/images/web-macys-quick-reg-form-project-pic.jpg', import.meta.url);
const gerberLn4998Pic = new URL('../assets/images/email-gerber-promo-green-ln-4998-project-pics.jpg', import.meta.url);
const dssFrameworkPic = new URL('../assets/images/web-DSS-framework-project-pic.jpg', import.meta.url);
const attBarbiePic = new URL('../assets/images/email-ATT-Movies-Newsletter-Barbie-project-pics.jpg', import.meta.url);
const xumoSurveyPic = new URL('../assets/images/web-xumoTV-custom-checkbox-form-project-pic.jpg', import.meta.url);
const gerberGrowthPic = new URL('../assets/images/email-gerber-promo-growth-chart-project-pics.jpg', import.meta.url);
const kobPreferencePic = new URL('../assets/images/web-rakuten-kobo-preference-ctr-project-pic.jpg', import.meta.url);
const tvsNewsletterPic = new URL('../assets/images/email-tvs-newsletter-project-pics.jpg', import.meta.url);
const xfinityAwardsPic = new URL('../assets/images/web-awards-xfinity-project-pic.jpg', import.meta.url);
const macysGiftFinderPic = new URL('../assets/images/email-macys-gift-finder-project-pics.jpg', import.meta.url);

const cardsData = [
  {
    id: 1,
    image: discoverPic,
    altText: 'Discover Web Form',
    title: 'Discover Web Form',
    techTools: 'HTML, CSS, JavaScript',
    liveLink: "https://discover-web-form.netlify.app/",
    copy: 'Discover balance transfer form with branded checkbox/radio styling and seamless user experience, featuring custom JavaScript validation.',
    gitLink: "https://github.com/BrianJ-27/discover-web-form",
    type: 'web',
  },
  {
    id: 2,
    image: tvsAdpPic,
    altText: 'TVS ADP Reminder Transactional Email',
    title: 'TVS ADP Reminder',
    techTools: 'HTML, CSS, litmus',
    liveLink: "https://litmus.com/checklist/emails/public/AKfYAuNQTtv9505r",
    copy: 'TVS ADP transactional email coded with complex table layouts, live text, and full dark mode compatibility for robust cross-client rendering.',
    gitLink: "https://github.com/BrianJ-27/tvs-adp-reminder-campaign/tree/main",
    type: 'email',
  },
  {
    id: 3,
    image: macysRegPic,
    altText: 'Macys Quick Reg Form',
    title: 'Macys Quick Reg Form',
    techTools: 'HTML, CSS, JavaScript',
    liveLink: "https://test-quick-reg-form-header-footer.netlify.app/",
    copy: 'Macy’s Quick Reg Form built with complex custom validation, semantic HTML, and accessible markup for efficient, user-friendly registration.',
    gitLink: "#",
    type: 'web',
  },
  {
    id: 4,
    image: gerberLn4998Pic,
    altText: 'Gerber Green Promo Email',
    title: 'Gerber Promo Email',
    techTools: 'HTML, CSS, litmus',
    liveLink: "https://litmus.com/pub/KhKujKVALMUafHTg",
    copy: 'Gerber promotional email built with complex, mobile-responsive tables and live text for optimal rendering, accessibility, and compatibility.',
    gitLink: "https://github.com/BrianJ-27/gerber-ln-cp-en-4498",
    type: 'email',
  },
  {
    id: 5,
    image: dssFrameworkPic,
    altText: 'DSS SVG Framework Module',
    title: 'Interactive SVG Module',
    techTools: 'HTML, CSS, JavaScript',
    liveLink: "https://dss-svg-framework.netlify.app/",
    copy: 'widget with animated SVG regions, dynamic title/body transitions, and custom JS event/keyframe logic for a visually engaging user experience.',
    gitLink: "https://github.com/BrianJ-27/dss-svg-framework",
    type: 'web',
  },
  {
    id: 6,
    image: attBarbiePic,
    altText: 'ATT themed Barbie Movies Newsletter',
    title: 'ATT Movies Newsletter',
    techTools: 'HTML, CSS, litmus',
    liveLink: "https://litmus.com/pub/yay9asaqNhSn4QZ9",
    copy: 'Promotional Barbie-themed email with embedded movie trailers, responsive design, and external fallback links for enhanced user engagement.',
    gitLink: "https://github.com/BrianJ-27/att-movie-newsletter-barbie",
    type: 'email',
  },
  {
    id: 7,
    image: xumoSurveyPic,
    altText: 'Xumo TV Custom Checkbox Form',
    title: 'XumoTV Checkbox Form',
    techTools: 'HTML, CSS, JavaScript',
    liveLink: "https://xumo-web-survey-form.netlify.app",
    copy: 'Responsive web form with accessible, custom checkboxes featuring animated overlays for enhanced user interaction and category selection.',
    gitLink: "https://github.com/BrianJ-27/xumo-web-survey-evergreen/tree/main",
    type: 'web',
  },
  {
    id: 8,
    image: gerberGrowthPic,
    altText: 'Gerber Growth Chart Promo Email',
    title: 'Gerber Promo Email',
    techTools: 'HTML, CSS, litmus',
    liveLink: "https://litmus.com/pub/KhKujKVALMUafHTg",
    copy: 'Gerber email featuring customizable live-text growth chart pillars with VML for Outlook, mobile responsiveness, and cross-browser compatibility.',
    gitLink: "https://github.com/BrianJ-27/gerber-growth-chart-campaign",
    type: 'email',
  },
  {
    id: 9,
    image: kobPreferencePic,
    altText: 'Rakuten Kobo Preference Center',
    title: 'RK Preference Center',
    techTools: 'HTML, CSS, JavaScript',
    liveLink: "https://kob-preference-center-form.netlify.app/",
    copy: 'Complex preference center with parent/child checkboxes, animated expand/collapse, semantic tags, and advanced logic for multi-state selection.',
    gitLink: "https://github.com/BrianJ-27/kobo-preference-center-v1",
    type: 'web',
  },
  {
    id: 10,
    image: tvsNewsletterPic,
    altText: 'TVS Newsletter Email',
    title: 'TVS Newsletter',
    techTools: 'HTML, CSS, litmus',
    liveLink: "https://litmus.com/pub/7BXk0ceOiaY7RMCx",
    copy: 'Accessible, dark mode newsletter with engaging live text, responsive tables, and kinetic header navigation that expands/collapses on mobile. ',
    gitLink: "https://github.com/BrianJ-27/tvs-newsletter",
    type: 'email',
  },
  {
    id: 11,
    image: xfinityAwardsPic,
    altText: 'Xfinity Landing Page',
    title: 'Xfinity Awards Landing Page',
    techTools: 'HTML, CSS, jQuery',
    liveLink: "https://awards-page-xfinity-mobile.netlify.app/",
    copy: 'Xfinity Rewards page featuring award highlights, custom jQuery slider, and parallax scroll effect for an engaging, interactive user experience.',
    gitLink: "https://github.com/BrianJ-27/Oracle-Awards-page-Xfinity-Mobile",
    type: 'web',
  },
  {
    id: 12,
    image: macysGiftFinderPic,
    altText: "Macy's Gift Finder Modules",
    title: "Macy's Gift Finder",
    techTools: 'HTML, CSS, litmus',
    liveLink: "https://litmus.com/pub/l1qogre8tLbhGGW2",
    copy: 'Created responsive gift finder cards with side-by-side background images and text overlays, dark mode support, and VML for consistent email client rendering.',
    gitLink: "https://github.com/BrianJ-27/macys-gift-finder-modules",
    type: 'email',
  },
];

export default cardsData;