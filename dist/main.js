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

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\r\n\r\nfunction Gameboard(x, y) {\r\n    let board = [];\r\n    const ships = [];\r\n    let id = 0;\r\n\r\n    for (let i = 0; i < 10; i++) {\r\n        board[i] = [];\r\n    }\r\n\r\n    for (let i = 0; i < 10; i++) {\r\n        for (let j = 0; j < 10; j++) {\r\n            board[i][j] = 0;\r\n        }\r\n    }\r\n\r\n    const placeShip = (x, y, shipLength, place) => {\r\n        if (place === 1) {\r\n            let positionX = x;\r\n            for (let i = 0; i < shipLength; i++) {\r\n                if (x + shipLength > 10) return false;\r\n                if (board[y][positionX] != 0) {\r\n                    return false\r\n                }\r\n\r\n                board[y][positionX] = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id, shipLength, 0, false);\r\n                positionX++;\r\n            }\r\n            \r\n            ships.push((0,_ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id, shipLength, 0, false));\r\n            \r\n            id++;\r\n            return board;\r\n        }\r\n        \r\n        let positionY = y;\r\n        for (let i = 0; i < shipLength; i++) {\r\n            if (y + shipLength > 10) return false;\r\n            if (board[positionY][x] != 0) {\r\n                return false\r\n            }\r\n\r\n            board[positionY][x] = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id, shipLength, 0, false);\r\n            positionY++;\r\n        }\r\n\r\n        ships.push((0,_ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id, shipLength, 0, false));\r\n\r\n        id++;\r\n        return board;\r\n    }\r\n\r\n    const receiveAttack = (x, y) => {\r\n        if (board[y][x]) {\r\n            board[y][x].hit();\r\n            \r\n            let shipId = board[y][x].getId();\r\n\r\n            ships[shipId].hit();\r\n\r\n            return board[y][x];\r\n        }\r\n\r\n        board[y][x] = -1;\r\n        return board[y][x];\r\n    }\r\n\r\n    const areSunk = () => {\r\n        for (let i = 0; i < ships.length; i++) {\r\n            if (!ships[i].isSunk()) return false;\r\n        }\r\n\r\n        return true;\r\n    }\r\n\r\n    return {\r\n        board,\r\n        placeShip,\r\n        receiveAttack,\r\n        areSunk\r\n    }\r\n}\n\n//# sourceURL=webpack://battleship-game/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\r\n\r\nlet gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\ngameboard.placeShip(2, 4, 5, 1);\r\nlet board = gameboard.placeShip(3, 0, 5, 0);\r\nlet ship = gameboard.receiveAttack(2, 4);\r\n\r\nconsole.log(board);\n\n//# sourceURL=webpack://battleship-game/./src/index.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nfunction Ship(id, length, hitNumber, sunk) {\r\n    const shipId = id;\r\n    let hitAmount = hitNumber;\r\n    let sunkState = sunk;\r\n    \r\n    const getId = () => shipId;\r\n    const getLength = () => length;\r\n    const getHitNumber = () => hitAmount;\r\n    const getSunkState = () => sunkState;\r\n    const setSunkState = state => sunkState = state;\r\n\r\n    const hit = () => hitAmount++;\r\n\r\n    const isSunk = () => {\r\n        if (hitAmount >= getLength()) {\r\n            setSunkState(true);\r\n            return true;\r\n        }\r\n\r\n        return false;\r\n    }\r\n\r\n    return {\r\n        getId,\r\n        getLength,\r\n        getHitNumber,\r\n        getSunkState,\r\n        hit,\r\n        isSunk,\r\n    }\r\n}\n\n//# sourceURL=webpack://battleship-game/./src/ship.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;