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

/***/ "./aggregator.js":
/*!***********************!*\
  !*** ./aggregator.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   agregarTarea: () => (/* reexport safe */ _module_taskList_js__WEBPACK_IMPORTED_MODULE_4__.agregarTarea),\n/* harmony export */   celsiusToFahrenheit: () => (/* reexport safe */ _module_unitConvert_js__WEBPACK_IMPORTED_MODULE_1__.celsiusToFahrenheit),\n/* harmony export */   closeImg: () => (/* reexport safe */ _module_imgViewer_js__WEBPACK_IMPORTED_MODULE_3__.closeImg),\n/* harmony export */   dividir: () => (/* reexport safe */ _module_calculos_js__WEBPACK_IMPORTED_MODULE_0__.dividir),\n/* harmony export */   fahrenheitToCelsius: () => (/* reexport safe */ _module_unitConvert_js__WEBPACK_IMPORTED_MODULE_1__.fahrenheitToCelsius),\n/* harmony export */   generatePassword: () => (/* reexport safe */ _module_passwordGen_js__WEBPACK_IMPORTED_MODULE_2__.generatePassword),\n/* harmony export */   multiplicar: () => (/* reexport safe */ _module_calculos_js__WEBPACK_IMPORTED_MODULE_0__.multiplicar),\n/* harmony export */   openFulImg: () => (/* reexport safe */ _module_imgViewer_js__WEBPACK_IMPORTED_MODULE_3__.openFulImg),\n/* harmony export */   restar: () => (/* reexport safe */ _module_calculos_js__WEBPACK_IMPORTED_MODULE_0__.restar),\n/* harmony export */   sumar: () => (/* reexport safe */ _module_calculos_js__WEBPACK_IMPORTED_MODULE_0__.sumar)\n/* harmony export */ });\n/* harmony import */ var _module_calculos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/calculos.js */ \"./module/calculos.js\");\n/* harmony import */ var _module_unitConvert_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/unitConvert.js */ \"./module/unitConvert.js\");\n/* harmony import */ var _module_passwordGen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/passwordGen.js */ \"./module/passwordGen.js\");\n/* harmony import */ var _module_imgViewer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/imgViewer.js */ \"./module/imgViewer.js\");\n/* harmony import */ var _module_taskList_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/taskList.js */ \"./module/taskList.js\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./aggregator.js?");

/***/ }),

/***/ "./js/taskListA.js":
/*!*************************!*\
  !*** ./js/taskListA.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _aggregator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../aggregator.js */ \"./aggregator.js\");\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n    // Tomamos los elementos\r\n    var inputTarea = document.getElementById(\"tarea\");\r\n    var btn = document.getElementById(\"agregar\");\r\n    var listado = document.getElementById(\"listado\");\r\n    var cantidad = document.getElementById(\"cantidad\");\r\n\r\n    // Variable que lleva la cantidad de tareas\r\n    var total = 0;\r\n\r\n    // Asigna la función al evento click del botón\r\n    btn.onclick = function () {\r\n        (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.agregarTarea)(inputTarea, listado, cantidad, total); // Llamamos a la función aquí\r\n    };\r\n});\r\n\n\n//# sourceURL=webpack:///./js/taskListA.js?");

/***/ }),

/***/ "./module/calculos.js":
/*!****************************!*\
  !*** ./module/calculos.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dividir: () => (/* binding */ dividir),\n/* harmony export */   multiplicar: () => (/* binding */ multiplicar),\n/* harmony export */   restar: () => (/* binding */ restar),\n/* harmony export */   sumar: () => (/* binding */ sumar)\n/* harmony export */ });\nfunction sumar(a, b) {\r\n  return a + b;\r\n}\r\n\r\nfunction restar(a, b) {\r\n  return a - b;\r\n}\r\n\r\nfunction multiplicar(a, b) {\r\n  return a * b;\r\n}\r\n\r\nfunction dividir(a, b) {\r\n  if (b === 0) {\r\n      throw new Error('No se puede dividir por cero.');\r\n  }\r\n  return a / b;\r\n}\r\n\n\n//# sourceURL=webpack:///./module/calculos.js?");

/***/ }),

/***/ "./module/imgViewer.js":
/*!*****************************!*\
  !*** ./module/imgViewer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeImg: () => (/* binding */ closeImg),\n/* harmony export */   openFulImg: () => (/* binding */ openFulImg)\n/* harmony export */ });\nfunction openFulImg(reference) {\r\n    fulImgBox.style.display = \"flex\";\r\n    fulImg.src = reference;\r\n}\r\n\r\nfunction closeImg() {\r\n    fulImgBox.style.display = \"none\";\r\n}\r\n\n\n//# sourceURL=webpack:///./module/imgViewer.js?");

/***/ }),

/***/ "./module/passwordGen.js":
/*!*******************************!*\
  !*** ./module/passwordGen.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generatePassword: () => (/* binding */ generatePassword)\n/* harmony export */ });\nfunction generatePassword(length, useLetters, useNumbers, useSymbols) {\r\n  const allCharacters = [];\r\n\r\n  if (useLetters) {\r\n    allCharacters.push(\"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\");\r\n  }\r\n  if (useNumbers) {\r\n    allCharacters.push(\"0123456789\");\r\n  }\r\n  if (useSymbols) {\r\n    allCharacters.push(\"^!$%&|[](){}:;.,*+-#@<>~\");\r\n  }\r\n\r\n  const characters = allCharacters.join(\"\");\r\n  let newPassword = \"\";\r\n\r\n  for (let i = 0; i < length; i++) {\r\n    const randomIndex = Math.floor(Math.random() * characters.length);\r\n    newPassword += characters.charAt(randomIndex);\r\n  }\r\n\r\n  return newPassword;\r\n}\r\n\r\n// Exportar la función para su uso en otros archivos\r\n\n\n//# sourceURL=webpack:///./module/passwordGen.js?");

/***/ }),

/***/ "./module/taskList.js":
/*!****************************!*\
  !*** ./module/taskList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   agregarTarea: () => (/* binding */ agregarTarea)\n/* harmony export */ });\n// Función para agregar una tarea\r\nfunction agregarTarea(inputTarea, listado, cantidad, total) {\r\n    // Controlamos si el campo está vacío\r\n    if (inputTarea.value == \"\") {\r\n        return;\r\n    }\r\n    // Tomamos el valor del campo\r\n    var elemento = inputTarea.value;\r\n    // Creamos un elemento li\r\n    var li = document.createElement(\"li\");\r\n    // Agregamos el texto al elemento li\r\n    li.textContent = elemento;\r\n    // Agregamos el li al listado\r\n    listado.appendChild(li);\r\n    // Incrementamos la cantidad de tareas\r\n    total++;\r\n    cantidad.innerHTML = total;\r\n\r\n    // Agregamos el botón eliminar a cada elemento del listado\r\n    var btnEliminar = document.createElement(\"span\");\r\n    btnEliminar.textContent = \"\\u00d7\";\r\n    li.appendChild(btnEliminar);\r\n\r\n    // Agregamos la funcionalidad para eliminar del listado el elemento\r\n    btnEliminar.onclick = function() {\r\n        li.remove();\r\n        total--;\r\n        cantidad.innerHTML = total;\r\n    }\r\n\r\n    // Limpiamos el campo\r\n    inputTarea.value = \"\";\r\n}\r\n\r\n// Exporta la función\r\n\r\n\n\n//# sourceURL=webpack:///./module/taskList.js?");

/***/ }),

/***/ "./module/unitConvert.js":
/*!*******************************!*\
  !*** ./module/unitConvert.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   celsiusToFahrenheit: () => (/* binding */ celsiusToFahrenheit),\n/* harmony export */   fahrenheitToCelsius: () => (/* binding */ fahrenheitToCelsius)\n/* harmony export */ });\n// Función para convertir de Celsius a Fahrenheit\r\nfunction celsiusToFahrenheit(celsius) {\r\n    return (celsius * 9/5) + 32;\r\n  }\r\n  \r\n  // Función para convertir de Fahrenheit a Celsius\r\n  function fahrenheitToCelsius(fahrenheit) {\r\n    return (fahrenheit - 32) * 5/9;\r\n  }\r\n  \r\n  // Exportar las funciones para su uso en otros archivos\r\n  \n\n//# sourceURL=webpack:///./module/unitConvert.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/taskListA.js");
/******/ 	
/******/ })()
;