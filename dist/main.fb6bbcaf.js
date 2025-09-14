// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/images/web-discover-project-pic.jpg":[function(require,module,exports) {
module.exports = "/web-discover-project-pic.ddbd3e38.jpg";
},{}],"assets/images/email-tvs-transactional-ODP-Reminder-project-pics.jpg":[function(require,module,exports) {
module.exports = "/email-tvs-transactional-ODP-Reminder-project-pics.45eedf12.jpg";
},{}],"assets/images/web-macys-quick-reg-form-project-pic.jpg":[function(require,module,exports) {
module.exports = "/web-macys-quick-reg-form-project-pic.1829cdec.jpg";
},{}],"assets/images/email-gerber-promo-green-ln-4998-project-pics.jpg":[function(require,module,exports) {
module.exports = "/email-gerber-promo-green-ln-4998-project-pics.cf54f7a4.jpg";
},{}],"assets/images/web-DSS-framework-project-pic.jpg":[function(require,module,exports) {
module.exports = "/web-DSS-framework-project-pic.7c53bb05.jpg";
},{}],"assets/images/email-ATT-Movies-Newsletter-Barbie-project-pics.jpg":[function(require,module,exports) {
module.exports = "/email-ATT-Movies-Newsletter-Barbie-project-pics.ed5d6b21.jpg";
},{}],"assets/images/web-xumoTV-custom-checkbox-form-project-pic.jpg":[function(require,module,exports) {
module.exports = "/web-xumoTV-custom-checkbox-form-project-pic.bcaad7b1.jpg";
},{}],"assets/images/email-gerber-promo-growth-chart-project-pics.jpg":[function(require,module,exports) {
module.exports = "/email-gerber-promo-growth-chart-project-pics.7dd8fdd1.jpg";
},{}],"assets/images/web-rakuten-kobo-preference-ctr-project-pic.jpg":[function(require,module,exports) {
module.exports = "/web-rakuten-kobo-preference-ctr-project-pic.451bcee1.jpg";
},{}],"assets/images/email-tvs-newsletter-project-pics.jpg":[function(require,module,exports) {
module.exports = "/email-tvs-newsletter-project-pics.f080744f.jpg";
},{}],"assets/images/web-awards-xfinity-project-pic.jpg":[function(require,module,exports) {
module.exports = "/web-awards-xfinity-project-pic.74b512b1.jpg";
},{}],"assets/images/email-macys-gift-finder-project-pics.jpg":[function(require,module,exports) {
module.exports = "/email-macys-gift-finder-project-pics.f9efa54c.jpg";
},{}],"js/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _webDiscoverProjectPic = _interopRequireDefault(require("../assets/images/web-discover-project-pic.jpg"));
var _emailTvsTransactionalODPReminderProjectPics = _interopRequireDefault(require("../assets/images/email-tvs-transactional-ODP-Reminder-project-pics.jpg"));
var _webMacysQuickRegFormProjectPic = _interopRequireDefault(require("../assets/images/web-macys-quick-reg-form-project-pic.jpg"));
var _emailGerberPromoGreenLn4998ProjectPics = _interopRequireDefault(require("../assets/images/email-gerber-promo-green-ln-4998-project-pics.jpg"));
var _webDSSFrameworkProjectPic = _interopRequireDefault(require("../assets/images/web-DSS-framework-project-pic.jpg"));
var _emailATTMoviesNewsletterBarbieProjectPics = _interopRequireDefault(require("../assets/images/email-ATT-Movies-Newsletter-Barbie-project-pics.jpg"));
var _webXumoTVCustomCheckboxFormProjectPic = _interopRequireDefault(require("../assets/images/web-xumoTV-custom-checkbox-form-project-pic.jpg"));
var _emailGerberPromoGrowthChartProjectPics = _interopRequireDefault(require("../assets/images/email-gerber-promo-growth-chart-project-pics.jpg"));
var _webRakutenKoboPreferenceCtrProjectPic = _interopRequireDefault(require("../assets/images/web-rakuten-kobo-preference-ctr-project-pic.jpg"));
var _emailTvsNewsletterProjectPics = _interopRequireDefault(require("../assets/images/email-tvs-newsletter-project-pics.jpg"));
var _webAwardsXfinityProjectPic = _interopRequireDefault(require("../assets/images/web-awards-xfinity-project-pic.jpg"));
var _emailMacysGiftFinderProjectPics = _interopRequireDefault(require("../assets/images/email-macys-gift-finder-project-pics.jpg"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var cardsData = [{
  id: 1,
  image: _webDiscoverProjectPic.default,
  title: 'Discover Web Form',
  techTools: 'HTML, CSS, JavaScript',
  liveLink: "https://discover-web-form.netlify.app/",
  copy: 'Discover balance transfer form with branded checkbox/radio styling and seamless user experience, featuring custom JavaScript validation.',
  gitLink: "https://github.com/BrianJ-27/discover-web-form",
  type: 'web'
}, {
  id: 2,
  image: _emailTvsTransactionalODPReminderProjectPics.default,
  title: 'TVS ADP Reminder',
  techTools: 'HTML, CSS, litmus',
  liveLink: "https://litmus.com/checklist/emails/public/AKfYAuNQTtv9505r",
  copy: 'TVS ADP transactional email coded with complex table layouts, live text, and full dark mode compatibility for robust cross-client rendering.',
  gitLink: "https://github.com/BrianJ-27/tvs-adp-reminder-campaign/tree/main",
  type: 'email'
}, {
  id: 3,
  image: _webMacysQuickRegFormProjectPic.default,
  title: 'Macys Quick Reg Form',
  techTools: 'HTML, CSS, JavaScript',
  liveLink: "https://test-quick-reg-form-header-footer.netlify.app/",
  copy: 'Macy’s Quick Reg Form built with complex custom validation, semantic HTML, and accessible markup for efficient, user-friendly registration.',
  gitLink: "#",
  type: 'web'
}, {
  id: 4,
  image: _emailGerberPromoGreenLn4998ProjectPics.default,
  title: 'Gerber Promo Email',
  techTools: 'HTML, CSS, litmus',
  liveLink: "https://litmus.com/pub/KhKujKVALMUafHTg",
  copy: 'Gerber promotional email built with complex, mobile-responsive tables and live text for optimal rendering, accessibility, and compatibility.',
  gitLink: "https://github.com/BrianJ-27/gerber-ln-cp-en-4498",
  type: 'email'
}, {
  id: 5,
  image: _webDSSFrameworkProjectPic.default,
  title: 'Interactive SVG Module',
  techTools: 'HTML, CSS, JavaScript',
  liveLink: "https://dss-svg-framework.netlify.app/",
  copy: 'widget with animated SVG regions, dynamic title/body transitions, and custom JS event/keyframe logic for a visually engaging user experience.',
  gitLink: "https://github.com/BrianJ-27/dss-svg-framework",
  type: 'web'
}, {
  id: 6,
  image: _emailATTMoviesNewsletterBarbieProjectPics.default,
  title: 'ATT Movies Newsletter',
  techTools: 'HTML, CSS, litmus',
  liveLink: "https://litmus.com/pub/yay9asaqNhSn4QZ9",
  copy: 'Promotional Barbie-themed email with embedded movie trailers, responsive design, and external fallback links for enhanced user engagement.',
  gitLink: "https://github.com/BrianJ-27/att-movie-newsletter-barbie",
  type: 'email'
}, {
  id: 7,
  image: _webXumoTVCustomCheckboxFormProjectPic.default,
  title: 'Xumo TV Custom Checkbox Form',
  techTools: 'HTML, CSS, JavaScript',
  liveLink: "https://xumo-web-survey-form.netlify.app",
  copy: 'Responsive web form with accessible, custom checkboxes featuring animated overlays for enhanced user interaction and category selection.',
  gitLink: "https://github.com/BrianJ-27/xumo-web-survey-evergreen/tree/main",
  type: 'web'
}, {
  id: 8,
  image: _emailGerberPromoGrowthChartProjectPics.default,
  title: 'Gerber Promo Email',
  techTools: 'HTML, CSS, litmus',
  liveLink: "https://litmus.com/pub/KhKujKVALMUafHTg",
  copy: 'Gerber email featuring customizable live-text growth chart pillars with VML for Outlook, mobile responsiveness, and cross-browser compatibility.',
  gitLink: "https://github.com/BrianJ-27/gerber-growth-chart-campaign",
  type: 'email'
}, {
  id: 9,
  image: _webRakutenKoboPreferenceCtrProjectPic.default,
  title: 'Rakuten Kobo Preference Center',
  techTools: 'HTML, CSS, JavaScript',
  liveLink: "https://kob-preference-center-form.netlify.app/",
  copy: 'Complex preference center with parent/child checkboxes, animated expand/collapse, semantic tags, and advanced logic for multi-state selection.',
  gitLink: "https://github.com/BrianJ-27/kobo-preference-center-v1",
  type: 'web'
}, {
  id: 10,
  image: _emailTvsNewsletterProjectPics.default,
  title: 'TVS Newsletter',
  techTools: 'HTML, CSS, litmus',
  liveLink: "https://litmus.com/pub/7BXk0ceOiaY7RMCx",
  copy: 'Accessible, dark mode newsletter with engaging live text, responsive tables, and kinetic header navigation that expands/collapses on mobile. ',
  gitLink: "https://github.com/BrianJ-27/tvs-newsletter",
  type: 'email'
}, {
  id: 11,
  image: _webAwardsXfinityProjectPic.default,
  title: 'Xfinity Awards Landing Page',
  techTools: 'HTML, CSS, jQuery',
  liveLink: "https://awards-page-xfinity-mobile.netlify.app/",
  copy: 'Xfinity Rewards page featuring award highlights, custom jQuery slider, and parallax scroll effect for an engaging, interactive user experience.',
  gitLink: "https://github.com/BrianJ-27/Oracle-Awards-page-Xfinity-Mobile",
  type: 'web'
}, {
  id: 12,
  image: _emailMacysGiftFinderProjectPics.default,
  title: 'Macy\'s Gift Finder Modules',
  techTools: 'HTML, CSS, litmus',
  liveLink: "https://litmus.com/pub/l1qogre8tLbhGGW2",
  copy: 'Created responsive gift finder cards with side-by-side background images and text overlays, dark mode support, and VML for consistent email client rendering.',
  gitLink: "https://github.com/BrianJ-27/macys-gift-finder-modules",
  type: 'email'
}];
var _default = exports.default = cardsData;
},{"../assets/images/web-discover-project-pic.jpg":"assets/images/web-discover-project-pic.jpg","../assets/images/email-tvs-transactional-ODP-Reminder-project-pics.jpg":"assets/images/email-tvs-transactional-ODP-Reminder-project-pics.jpg","../assets/images/web-macys-quick-reg-form-project-pic.jpg":"assets/images/web-macys-quick-reg-form-project-pic.jpg","../assets/images/email-gerber-promo-green-ln-4998-project-pics.jpg":"assets/images/email-gerber-promo-green-ln-4998-project-pics.jpg","../assets/images/web-DSS-framework-project-pic.jpg":"assets/images/web-DSS-framework-project-pic.jpg","../assets/images/email-ATT-Movies-Newsletter-Barbie-project-pics.jpg":"assets/images/email-ATT-Movies-Newsletter-Barbie-project-pics.jpg","../assets/images/web-xumoTV-custom-checkbox-form-project-pic.jpg":"assets/images/web-xumoTV-custom-checkbox-form-project-pic.jpg","../assets/images/email-gerber-promo-growth-chart-project-pics.jpg":"assets/images/email-gerber-promo-growth-chart-project-pics.jpg","../assets/images/web-rakuten-kobo-preference-ctr-project-pic.jpg":"assets/images/web-rakuten-kobo-preference-ctr-project-pic.jpg","../assets/images/email-tvs-newsletter-project-pics.jpg":"assets/images/email-tvs-newsletter-project-pics.jpg","../assets/images/web-awards-xfinity-project-pic.jpg":"assets/images/web-awards-xfinity-project-pic.jpg","../assets/images/email-macys-gift-finder-project-pics.jpg":"assets/images/email-macys-gift-finder-project-pics.jpg"}],"js/filter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _data = _interopRequireDefault(require("../../src/js/data.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function filterCards() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
  if (type === 'all') {
    return _data.default; // Return all cards if 'all' is selected
  }
  return _data.default.filter(function (card) {
    return card.type === type;
  }); // Filter by Card type
}
var _default = exports.default = filterCards;
},{"../../src/js/data.js":"js/data.js"}],"js/projectCards.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _data = _interopRequireDefault(require("../../src/js/data.js"));
var _filter = _interopRequireDefault(require("./filter.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var projectTitle = document.querySelector('.title__secondary--projects');
var cardContainer = document.querySelector(".slider__cards");

// Set initial heading text dynamically
projectTitle.textContent = 'All Projects';

/**
 * Handles clicks on project card CTAs by updating the active button class and
 * filtering card displays based on the selected project type.
 * @param {Event} e - The event object from the click event.
 */
var projectCardClickHandler = function projectCardClickHandler(e) {
  document.querySelectorAll('.cta__project').forEach(function (button) {
    button.addEventListener('click', function (e) {
      var selectedType = e.currentTarget.getAttribute('data-type');

      // Update active button class
      document.querySelectorAll('.cta__project').forEach(function (btn) {
        return btn.classList.remove('cta__project--active');
      });
      e.currentTarget.classList.add('cta__project--active');

      // Filter and display cards
      var filteredCards = (0, _filter.default)(selectedType);
      displayCards(filteredCards);

      // Update Heading text based on selected type
      var headingText = "All Projects";
      if (selectedType === 'web') {
        headingText = 'Web Projects';
      } else if (selectedType === 'email') {
        headingText = 'Email Projects';
      }
      projectTitle.textContent = headingText;
    });
  });
};

/**
 * Returns a string of HTML for a single project card component.
 * @param {{ image: string, title: string, liveLink: string, copy: string, gitLink: string }} cardData
 * An object containing the data for the card, with keys image, title, liveLink, copy, and gitLink.
 * @returns {string} The HTML for the card component.
 */

function createCard(_ref) {
  var image = _ref.image,
    title = _ref.title,
    liveLink = _ref.liveLink,
    techTools = _ref.techTools,
    copy = _ref.copy,
    gitLink = _ref.gitLink;
  return "\n   <li class=\"card\">\n        <div class=\"card-content glass3d\">\n            <div class=\"card-image\">\n                <div class=\"card-image-container\">\n                    <img src=\"".concat(image, "\" alt=\"Profile Image\">\n                </div>\n                <div class=\"card-glow\"></div>\n            </div>\n            <div class=\"card-info\">\n                <h2 class=\"card-name\">").concat(title, "</h2>\n                <p class=\"card-title\">Tools: ").concat(techTools, "</p>\n                <p class=\"card-bio\">").concat(copy, "</p>\n                <div class=\"card-actions\">\n                  <a href=\"").concat(liveLink, "\" class=\"action-button primary\">\n                        <span>Live Link</span>\n\n                    </a>\n                  <a href=\"").concat(gitLink, "\" class=\"action-button secondary\">\n                        <span>View Code</span>\n                        <svg class=\"card__icon\" style=\"width: 1.25rem; height: 1.25rem\" viewBox=\"0 0 16 16\" aria-hidden=\"true\">\n              <use xlink:href=\"./assets/images/bj-icon-map.svg#github-white\"></use>\n            </svg>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </li>\n  ");
}

/**
 * Takes an array of card data and displays it as a list of project cards
 * inside the element with class "slider__cards".
 *
 * @param {object[]} filteredCards An array of card data, with each element
 *      containing the keys image, title, liveLink, copy, and gitLink.
 */
function displayCards(filteredCards) {
  var cardsHTML = '';
  filteredCards.forEach(function (card) {
    cardsHTML += createCard(card);
  });
  cardContainer.innerHTML = cardsHTML;
}

// Initial display of all cards when the page loads
displayCards(_data.default);
var _default = exports.default = projectCardClickHandler;
},{"../../src/js/data.js":"js/data.js","./filter.js":"js/filter.js"}],"js/toggleNav.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function setupNavToggle() {
  var menu = document.querySelector("header");
  var navBar = document.querySelector(".nav__bar");

  /*--Toggle mobile navigation once user clicks on nav menu--*/
  menu.addEventListener('click', function () {
    menu.classList.toggle("change");
    navBar.classList.toggle("show__nav");
  });
}
var _default = exports.default = setupNavToggle;
},{}],"js/main.js":[function(require,module,exports) {
"use strict";

var _projectCards = _interopRequireDefault(require("./projectCards.js"));
var _toggleNav = _interopRequireDefault(require("./toggleNav.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
document.addEventListener('DOMContentLoaded', function () {
  //**EVENT LISTENERS **/
  (0, _projectCards.default)();
  (0, _toggleNav.default)();
});
},{"./projectCards.js":"js/projectCards.js","./toggleNav.js":"js/toggleNav.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53017" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map