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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction areValueMissing(inputsContainer) {\n  let valuesMissing = false;\n  inputsContainer.forEach((input) => {\n    if (input.value.length <= 0) {\n      input.setCustomValidity('This field is required!');\n      valuesMissing = true;\n    }\n  });\n  return valuesMissing;\n}\n\nfunction checkValueMissingOnInput(inputsContainer) {\n  inputsContainer.forEach((input) => {\n    input.addEventListener('input', () => {\n      console.log('inputting');\n      areValueMissing(inputsContainer);\n    });\n  });\n}\n\nfunction checkValueMissingOnSubmit(inputsContainer) {\n  areValueMissing(inputsContainer);\n}\n\nfunction checkValidEmailInput(emailInput) {\n  emailInput.addEventListener('input', () => {\n    let isValid = false;\n    if (emailInput.validity.typeMismatch) {\n      emailInput.setCustomValidity(\n        'Incorrect email format! Please make sure your email has a \"@\" and a \".\" in it (eg: \"john12@gmail.com\").',\n      );\n    } else {\n      emailInput.setCustomValidity('');\n      isValid = true;\n    }\n\n    return isValid;\n  });\n}\n\nfunction checkValidCountryInput(countryInput) {\n  countryInput.addEventListener('input', () => {\n    const isValid = countryInput.checkValidity();\n\n    if (!isValid) {\n      return countryInput.setCustomValidity(\n        'Invalid country selection! Choose a valid country from the options (eg: \"United States\").',\n      );\n    }\n\n    return isValid;\n  });\n}\n\nfunction checkValidZIPCode(ZIPInput) {\n  ZIPInput.addEventListener('input', () => {\n    let isValid = false;\n\n    if (ZIPInput.validity.patternMismatch) {\n      ZIPInput.setCustomValidity(\n        'Invalid ZIP code! Choose a valid ZIP code from the country\\'s ZIP code format (eg: France: 75010)',\n      );\n    } else {\n      ZIPInput.setCustomValidity('');\n      isValid = true;\n    }\n\n    return isValid;\n  });\n}\n\nfunction isValidPwdFormat(pwdInput) {\n  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/;\n  return pattern.test(pwdInput.value);\n}\n\nfunction checkValidPwd(pwdInput) {\n  pwdInput.addEventListener('input', () => {\n    let isValid = false;\n\n    if (!isValidPwdFormat(pwdInput)) {\n      pwdInput.setCustomValidity(\n        'Invalid password format! Make sure your password is atleast 8 characters long, has atleast one uppercase letter, one lowercase letter and one number (eg: h!!oWr2983?@$).',\n      );\n    } else {\n      pwdInput.setCustomValidity('');\n      isValid = true;\n    }\n\n    return isValid;\n  });\n}\n\nfunction checkPwdsMatch(pwdInput, confirmPwdInput) {\n  confirmPwdInput.addEventListener('input', () => {\n    let areMatching = false;\n\n    if (pwdInput.value !== confirmPwdInput.value) {\n      confirmPwdInput.setCustomValidity('Passwords don\\'t match!');\n    } else {\n      confirmPwdInput.setCustomValidity('');\n      areMatching = true;\n    }\n\n    return areMatching;\n  });\n}\n\nfunction handleForm() {\n  const formContainer = document.querySelector('.form-container');\n  const inputsContainer = formContainer.querySelectorAll('.input-container > input');\n  const emailInput = formContainer.querySelector('#mail');\n  const countryInput = formContainer.querySelector('#country');\n  const ZIPInput = formContainer.querySelector('#ZIP');\n  const pwdInput = formContainer.querySelector('#pwd');\n  const confirmPwdInput = formContainer.querySelector('#confirm-pwd');\n  const submitBtn = formContainer.querySelector('button[type=\"submit\"]');\n\n  checkValidEmailInput(emailInput);\n  checkValidCountryInput(countryInput);\n  checkValidZIPCode(ZIPInput);\n  checkValidPwd(pwdInput);\n  checkPwdsMatch(pwdInput, confirmPwdInput);\n  submitBtn.addEventListener('click', () => {\n    checkValueMissingOnSubmit(inputsContainer);\n  });\n  checkValueMissingOnInput(inputsContainer);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleForm);\n\n\n//# sourceURL=webpack://my_package/./src/formValidationHandler.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/formValidationHandler.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;