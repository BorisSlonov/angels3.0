/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/accordion/accordion.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/accordion/accordion.js ***!
  \***************************************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  var checkAccordion = document.querySelector(".accordion");
  if (checkAccordion) {
    var _btns = document.querySelectorAll(".accordion__h4");
    _btns.forEach(function (btn) {
      console.log("click");
      btn.addEventListener("click", function () {
        if (!this.classList.contains("acc-active")) {
          _btns.forEach(function (btn) {
            btn.classList.remove("acc-active");
          });
          this.classList.add("acc-active");
        } else {
          this.classList.remove("acc-active");
        }
      });
    });
  }
  var tableAccordion = document.querySelector(".accordion_table");
  var btns = document.querySelectorAll(".accordion__h4");
  function toggleAccordion() {
    if (innerWidth <= 999) {
      btns.forEach(function (btn) {
        console.log("click");
        btn.addEventListener("click", function () {
          if (!this.classList.contains("acc-active")) {
            btns.forEach(function (btn) {
              btn.classList.remove("acc-active");
            });
            this.classList.add("acc-active");
          } else {
            this.classList.remove("acc-active");
          }
        });
      });
    } else {
      // Если экран становится шире 999 пикселей, убираем обработчики
      btns.forEach(function (btn) {
        btn.removeEventListener("click", toggleAccordion);
        btn.classList.remove("acc-active");
      });
    }
  }

  // Исполнить при загрузке страницы
  toggleAccordion();

  // Добавить обработчик события изменения размера экрана
  window.addEventListener("resize", toggleAccordion);
});

/***/ }),

/***/ "./src/blocks/modules/forYou/forYou.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/forYou/forYou.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");

swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_0__.Breakpoints]);
if (document.querySelector('.swiperForYou')) {
  var breakpoint = window.matchMedia('(max-width: 767px)');
  var swiperForYou = null;
  var breakpointChecker = function breakpointChecker() {
    if (breakpoint.matches) {
      if (swiperForYou === null) {
        swiperForYou = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiperForYou', {
          autoHeight: true,
          slidesPerView: 1,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          breakpoints: {
            768: {
              slidesPerView: 2
            }
          }
        });
      }
    } else {
      if (swiperForYou !== null) {
        swiperForYou.destroy();
        swiperForYou = null;
      }
    }
  };
  breakpointChecker();
  breakpoint.addEventListener('change', breakpointChecker);
}

/***/ }),

/***/ "./src/blocks/modules/tabs/tabs.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/tabs/tabs.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");

swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_0__.Breakpoints, swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay]);
var tabs = function tabs(headerSelector, tabSelector, contentSelector, activeClass) {
  var header = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);
  function hideTabContent() {
    content.forEach(function (item) {
      item.style.display = "none";
    });
    tab.forEach(function (item) {
      item.classList.remove(activeClass);
    });
  }
  function showTabContent() {
    var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    content[i].style.display = "block";
    tab[i].classList.add(activeClass);
  }
  hideTabContent();
  showTabContent();
  var rentTab = document.querySelector(".pricesTabs__title_rent");
  var titleService = document.querySelector(".pricesTabs__titleService");
  var titleServiceBtn = document.querySelector(".pricesTabs__title_service");
  var pricesTabstitleWrapper = document.querySelector(".pricesTabs__titleWrapper");

  // Функция для проверки и добавления класса

  function checkAndAddClass() {
    if (rentTab.classList.contains("pricesTabs__title_active")) {
      titleService.classList.add("pricesTabs__titleService_hidden");
    } else {
      titleService.classList.remove("pricesTabs__titleService_hidden");
    }
    if (titleServiceBtn.classList.contains("pricesTabs__title_active")) {
      pricesTabstitleWrapper.classList.add("pricesTabs__titleService_hidden");
      titleService.classList.add("pricesTabs__titleService_hidden");
    } else {
      pricesTabstitleWrapper.classList.remove("pricesTabs__titleService_hidden");
    }

    // Объявите флаг для отслеживания инициализации свайпера
    var isSwiperInitialized = false;

    // Проверьте, инициализирован ли свайпер
    if (!isSwiperInitialized) {
      var swiperTariffs2 = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".swiperTariffs_2", {
        slidesPerView: 1,
        spaceBetween: 20,
        autoHeight: true,
        observer: true,
        observerUpdate: true,
        breakpoints: {
          640: {
            slidesPerView: 2
          }
        },
        // If we need pagination
        pagination: {
          el: ".swiper-pagination"
        }
      });
      isSwiperInitialized = true;
    }
  }
  header.addEventListener("click", function (e) {
    var target = e.target;
    if (target && (target.classList.contains(tabSelector.replace(/\./, "")) || target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
      tab.forEach(function (item, i) {
        if (target == item || target.parentNode == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
    if (rentTab) {
      checkAndAddClass();
    }
  });
  var pricesTabsBackBtn = document.querySelector(".pricesTabs__backBtn");
  if (pricesTabsBackBtn) {
    pricesTabsBackBtn.addEventListener("click", function (e) {
      hideTabContent();
      showTabContent(1);
      document.querySelector(".pricesTabs__titleWrapper").classList.remove("pricesTabs__titleService_hidden");
      document.querySelector(".pricesTabs__titleService").classList.remove("pricesTabs__titleService_hidden");
    });
  }
  if (window.location.href.endsWith("#sobstvennost")) {
    // Вызовите функцию showTabContent(1)
    hideTabContent();
    showTabContent(1);
    checkAndAddClass();
    console.log("go");
    console.log(window.location.href);
  }
  if (window.location.href.endsWith("#tariffs")) {
    // Вызовите функцию showTabContent(1)
    hideTabContent();
    showTabContent(2);
    checkAndAddClass();
    console.log("go");
    console.log(window.location.href);
  }

  // Получаем все кастомные селекты
  var selects = document.querySelectorAll(".custom-select_qa, .custom-select_help, .custom-select_prices");

  // Обработчик клика для выбора опции в каждом селекте
  selects.forEach(function (select) {
    var selectDropdown = select.querySelector(".select-dropdown");
    var selectOptions = select.querySelectorAll(".select-option");
    selectOptions.forEach(function (option) {
      option.addEventListener("click", function () {
        var selectedValue = option.getAttribute("data-value");
        var tabContent = document.querySelector("#".concat(selectedValue));
        function hideTabContent() {
          content.forEach(function (item) {
            item.style.display = "none";
          });
          tab.forEach(function (item) {
            item.classList.remove(activeClass);
          });
        }
        hideTabContent();
        tabContent.style.display = "block";
      });
    });
  });

  // Закрываем выпадающий список при клике вне его области
  document.addEventListener("click", function (event) {
    if (!event.target.matches(".select-selected")) {
      selects.forEach(function (select) {
        var selectDropdown = select.querySelector(".select-dropdown");
        selectDropdown.classList.remove("show");
      });
    }
  });
};
var qaTabs = document.querySelector(".qaTabs");
if (qaTabs) {
  tabs(".qaTabs__titles", ".qaTabs__title", ".qaTabs__item", "qaTabs__title_active");
}
var helpTabs = document.querySelector(".helpTabs");
if (helpTabs) {
  tabs(".helpTabs__titles", ".helpTabs__title", ".helpTabs__item", "helpTabs__title_active");
}
var pricesTabs = document.querySelector(".pricesTabs");
if (pricesTabs) {
  tabs(".pricesTabs__titles", ".pricesTabs__title", ".pricesTabs__item", "pricesTabs__title_active");
}
var supplierTabs = document.querySelector(".supplierTabs");
if (supplierTabs) {
  tabs(".supplierTabs__titles", ".supplierTabs__title", ".supplierTabs__item", "supplierTabs__title_active");
}
var searchTabs = document.querySelector(".searchTabs");
if (searchTabs && window.innerWidth <= 1023) {
  tabs(".searchTabs__titles", ".searchTabs__title", ".searchTabs__item", "searchTabs__title_active");
}

// Получаем элементы
var titles = document.querySelectorAll('.searchTabs__title');
var items = document.querySelectorAll('.searchTabs__item');
if (titles && window.innerWidth <= 1023) {
  titles.forEach(function (title, index) {
    if (items[index]) {
      title.parentNode.insertBefore(items[index], title.nextSibling);
    }
  });
}
if (titles && window.innerWidth > 1023) {
  titles.forEach(function (clickedTitle, index) {
    clickedTitle.addEventListener('click', function () {
      items.forEach(function (item, itemIndex) {
        item.style.display = itemIndex === index ? 'block' : 'none';
      });

      // Дополнение: отмена изменений при клике на searchTabs__title_fixedActive
      if (clickedTitle.classList.contains('searchTabs__title_fixedActive')) {
        titles.forEach(function (title) {
          title.classList.remove('searchTabs__title_fixed');
          title.classList.remove('searchTabs__title_fixedActive');
          document.querySelector('.searchTabs').style.width = "100%";
        });
        items.forEach(function (item) {
          item.style.display = 'block'; // Показываем все элементы
          item.style.removeProperty('--before-display'); // Восстанавливаем стиль ::before
        });

        titlesContainer.style.width = ''; // Сбрасываем ширину контейнера
        document.querySelector('.searchTabs').removeProperty('--before-display');
        // Может потребоваться дополнительная логика восстановления других изменений
      }

      titles.forEach(function (title) {
        title.classList.add('searchTabs__title_fixed');
        title.classList.remove('searchTabs__title_fixedActive');
        clickedTitle.classList.add('searchTabs__title_fixedActive');
      });
      clickedTitle.classList.remove('searchTabs__title_fixed');

      // Получаем элементы
      var titlesFixed = document.querySelectorAll('.searchTabs__title_fixed');
      if (titlesFixed.length > 0) {
        titlesFixed[0].classList.remove('last');
        titlesFixed[1].classList.add('last');

        // Получаем элементы
        var _titlesContainer = document.querySelector('.searchTabs');
        var hasFixedTitle = _titlesContainer.querySelector('.searchTabs__title_fixed');
        if (hasFixedTitle) {
          // Если есть элемент с классом searchTabs__title_fixed
          _titlesContainer.style.width = "calc(100% - 200px)";
          // Скрываем псевдоэлемент ::before у всех элементов .searchTabs__item
          items.forEach(function (item) {
            item.style.setProperty('--before-display', 'none');
          });
        }
      }
    });
  });
}

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_accordion_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/accordion/accordion */ "./src/blocks/modules/accordion/accordion.js");
/* harmony import */ var _modules_accordion_accordion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_accordion_accordion__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/tabs/tabs */ "./src/blocks/modules/tabs/tabs.js");
/* harmony import */ var _modules_forYou_forYou__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/forYou/forYou */ "./src/blocks/modules/forYou/forYou.js");




/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp_scss_starter"] = self["webpackChunkgulp_scss_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map