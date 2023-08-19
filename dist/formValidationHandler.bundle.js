/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/formValidationHandler.js":
/*!**************************************!*\
  !*** ./src/formValidationHandler.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_hand_back_left_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/hand-back-left.svg */ \"./src/assets/hand-back-left.svg\");\n\n\nfunction areValueMissing(inputsContainer) {\n  let valuesMissing = false;\n  inputsContainer.forEach((input) => {\n    if (input.value.length <= 0) {\n      input.setCustomValidity('This field is required!');\n      valuesMissing = true;\n    }\n  });\n  return valuesMissing;\n}\n\nfunction checkValueMissingOnInput(inputsContainer) {\n  inputsContainer.forEach((input) => {\n    input.addEventListener('input', () => {\n      areValueMissing(inputsContainer);\n    });\n  });\n}\n\nfunction checkValueMissingOnSubmit(inputsContainer, submitBtn) {\n  submitBtn.addEventListener('click', () => {\n    areValueMissing(inputsContainer);\n  });\n}\n\nfunction checkValidEmailInput(emailInput) {\n  emailInput.addEventListener('input', () => {\n    let isValid = false;\n    if (emailInput.validity.typeMismatch) {\n      emailInput.setCustomValidity(\n        'Incorrect email format! Please make sure your email has a \"@\" and a \".\" in it (eg: \"john12@gmail.com\").',\n      );\n    } else {\n      emailInput.setCustomValidity('');\n      isValid = true;\n    }\n\n    return isValid;\n  });\n}\n\nfunction checkValidCountryInput(countryInput) {\n  countryInput.addEventListener('input', () => {\n    const isValid = countryInput.checkValidity();\n\n    if (!isValid) {\n      return countryInput.setCustomValidity(\n        'Invalid country selection! Choose a valid country from the options (eg: \"United States\").',\n      );\n    }\n\n    return isValid;\n  });\n}\n\nfunction checkValidZIPCode(ZIPInput) {\n  ZIPInput.addEventListener('input', () => {\n    let isValid = false;\n\n    if (ZIPInput.validity.patternMismatch) {\n      ZIPInput.setCustomValidity(\n        'Invalid ZIP code! Choose a valid ZIP code from the country\\'s ZIP code format (eg: France: 75010)',\n      );\n    } else {\n      ZIPInput.setCustomValidity('');\n      isValid = true;\n    }\n\n    return isValid;\n  });\n}\n\nfunction isValidPwdFormat(pwdInput) {\n  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/;\n  return pattern.test(pwdInput.value);\n}\n\nfunction checkValidPwd(pwdInput) {\n  pwdInput.addEventListener('input', () => {\n    let isValid = false;\n\n    if (!isValidPwdFormat(pwdInput)) {\n      pwdInput.setCustomValidity(\n        'Invalid password format! Make sure your password is atleast 8 characters long, has atleast one uppercase letter, one lowercase letter and one number (eg: h!!oWr2983?@$).',\n      );\n    } else {\n      pwdInput.setCustomValidity('');\n      isValid = true;\n    }\n\n    return isValid;\n  });\n}\n\nfunction checkPwdsMatch(pwdInput, confirmPwdInput) {\n  confirmPwdInput.addEventListener('input', () => {\n    let areMatching = false;\n\n    if (pwdInput.value !== confirmPwdInput.value) {\n      confirmPwdInput.setCustomValidity('Passwords don\\'t match!');\n    } else {\n      confirmPwdInput.setCustomValidity('');\n      areMatching = true;\n    }\n\n    return areMatching;\n  });\n}\n\nfunction addFormValidation() {\n  const formContainer = document.querySelector('.form-container');\n  const inputsContainer = formContainer.querySelectorAll('.input-container > input');\n  const emailInput = formContainer.querySelector('#mail');\n  const countryInput = formContainer.querySelector('#country');\n  const ZIPInput = formContainer.querySelector('#ZIP');\n  const pwdInput = formContainer.querySelector('#pwd');\n  const confirmPwdInput = formContainer.querySelector('#confirm-pwd');\n  const submitBtn = formContainer.querySelector('button[type=\"submit\"]');\n\n  checkValidEmailInput(emailInput);\n  checkValidCountryInput(countryInput);\n  checkValidZIPCode(ZIPInput);\n  checkValidPwd(pwdInput);\n  checkPwdsMatch(pwdInput, confirmPwdInput);\n  checkValueMissingOnSubmit(inputsContainer, submitBtn);\n  checkValueMissingOnInput(inputsContainer);\n}\n\nfunction willFormValidate(inputsContainer) {\n  let willValidate = true;\n  inputsContainer.forEach((input) => {\n    if (!input.validity.valid) {\n      willValidate = false;\n    }\n  });\n\n  return willValidate;\n}\n\nfunction handleForm() {\n  addFormValidation();\n  const formContainer = document.querySelector('.form-container');\n  const inputsContainer = formContainer.querySelectorAll('.input-container > input');\n  const submitBtn = formContainer.querySelector('button[type=\"submit\"]');\n\n  submitBtn.addEventListener('click', () => {\n    if (willFormValidate(inputsContainer)) {\n      formContainer.innerHTML = '';\n      formContainer.classList.add('high-five-display');\n\n      const highFiveContainer = document.createElement('div');\n      highFiveContainer.classList.add('high-five-container');\n      formContainer.appendChild(highFiveContainer);\n\n      const myHighFiveIcon = new Image();\n      myHighFiveIcon.src = _assets_hand_back_left_svg__WEBPACK_IMPORTED_MODULE_0__;\n\n      const h1 = document.createElement('h1');\n      h1.textContent = 'High Five!';\n\n      highFiveContainer.append(myHighFiveIcon, h1);\n    }\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleForm);\n\n\n//# sourceURL=webpack://my_package/./src/formValidationHandler.js?");

/***/ }),

/***/ "./src/assets/hand-back-left.svg":
/*!***************************************!*\
  !*** ./src/assets/hand-back-left.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f09bc153890cc68319ef.svg\";\n\n//# sourceURL=webpack://my_package/./src/assets/hand-back-left.svg?");

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
/************************************************************************/
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/formValidationHandler.js");
/******/ 	
/******/ })()
;