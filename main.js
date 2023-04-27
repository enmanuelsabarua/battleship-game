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

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\r\n\r\nconst DOMinteraction = (() => {\r\n    const createGameboards = () => {\r\n        const gameboards = document.querySelectorAll('.gameboard');\r\n        \r\n        gameboards.forEach(gameboard => {\r\n            for (let i = 0; i < 10; i++) {\r\n                for (let j = 0; j < 10; j++) {\r\n                    const squareDiv = document.createElement('div');\r\n                    squareDiv.classList.add('box');\r\n                    squareDiv.dataset.row = i;\r\n                    squareDiv.dataset.column = j;\r\n                    gameboard.appendChild(squareDiv);\r\n                }\r\n            }\r\n        });\r\n    }\r\n\r\n    const renderGameboard = (gameBoard, playerBoard) => {\r\n        const squares = document.querySelectorAll(`.gameboard${playerBoard} .box`);\r\n\r\n        let z = 0;\r\n        for (let i = 0; i < 10; i++) {\r\n            for (let j = 0; j < 10; j++) {\r\n                if (gameBoard.board[j][i] !== 0 && gameBoard.board[j][i] !== -1) {\r\n                    squares[z].classList.add('selected');\r\n                }\r\n                z++;\r\n            }\r\n        }\r\n    }\r\n\r\n    const renderAttack = (gameBoard, computer, playerGameboard, player1) => {\r\n        const squares2 = document.querySelectorAll(`.gameboard2 .box`);\r\n        const winner = document.querySelector('.winner');\r\n\r\n        squares2.forEach(square => {\r\n            square.addEventListener('click', e => {\r\n\r\n                if (gameBoard.areSunk()) {\r\n                    return;\r\n                } else if(playerGameboard.areSunk()) {\r\n                    return;\r\n                }\r\n\r\n                const board = gameBoard.board[e.target.dataset.column][e.target.dataset.row];\r\n                if (board !== 0 && board !== -1) {\r\n                    square.classList.remove('selected');\r\n                    square.classList.add('attacked');\r\n                } else {\r\n                    square.classList.add('missed');\r\n                }\r\n\r\n                player1.attack(gameBoard, e.target.dataset.row, e.target.dataset.column);\r\n\r\n                if (gameBoard.areSunk()) {\r\n                    winner.innerHTML = '<p>Player 1 Win!</p>';\r\n                    return;\r\n                }\r\n\r\n                // Computer move\r\n                setTimeout(() => {\r\n                    let x = Math.floor(Math.random() * 10);\r\n                    let y = Math.floor(Math.random() * 10);\r\n                    let validMove = computer.attack(playerGameboard, x, y);\r\n                    while (!validMove) {\r\n                        x = Math.floor(Math.random() * 10);\r\n                        y = Math.floor(Math.random() * 10);\r\n                        validMove = computer.attack(playerGameboard, x, y);\r\n                    }        \r\n                    \r\n                    const square1 = document.querySelectorAll('.gameboard1 .box')\r\n                    square1.forEach(square => {\r\n                        const player1Board = playerGameboard.board[y][x];\r\n                        if (square.dataset.row == x && square.dataset.column == y) {\r\n                            if (player1Board !== 0 && player1Board !== -1) {\r\n                                square.classList.remove('selected');\r\n                                square.classList.add('attacked');\r\n                            } else {\r\n                                square.classList.add('missed');\r\n                            }\r\n                        }\r\n                    });\r\n                }, 1000);\r\n\r\n                if(playerGameboard.areSunk()) {\r\n                    winner.innerHTML = '<p>Player 2 Win!</p>';\r\n                    return;\r\n                }\r\n\r\n            });            \r\n        });\r\n    }\r\n\r\n    return {\r\n        createGameboards,\r\n        renderGameboard,\r\n        renderAttack,\r\n    }\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMinteraction);\n\n//# sourceURL=webpack://battleship-game/./src/DOM.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\r\n\r\nfunction Gameboard() {\r\n    let board = [];\r\n    const ships = [];\r\n    let id = 0;\r\n\r\n    for (let i = 0; i < 10; i++) {\r\n        board[i] = [];\r\n    }\r\n\r\n    for (let i = 0; i < 10; i++) {\r\n        for (let j = 0; j < 10; j++) {\r\n            board[i][j] = 0;\r\n        }\r\n    }\r\n\r\n    const placeShip = (x, y, shipLength, place) => {\r\n        if (place === 1) {\r\n            let positionX = x;\r\n            for (let i = 0; i < shipLength; i++) {\r\n                if (x + shipLength > 10) return false;\r\n                if (board[y][positionX] != 0) {\r\n                    return false\r\n                }\r\n\r\n                board[y][positionX] = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id, shipLength, 0, false);\r\n                positionX++;\r\n            }\r\n            \r\n            ships.push((0,_ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id, shipLength, 0, false));\r\n            \r\n            id++;\r\n            return board;\r\n        }\r\n        \r\n        let positionY = y;\r\n        for (let i = 0; i < shipLength; i++) {\r\n            if (y + shipLength > 10) return false;\r\n            if (board[positionY][x] != 0) {\r\n                return false\r\n            }\r\n\r\n            board[positionY][x] = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id, shipLength, 0, false);\r\n            positionY++;\r\n        }\r\n\r\n        ships.push((0,_ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id, shipLength, 0, false));\r\n\r\n        id++;\r\n        return board;\r\n    }\r\n\r\n    const receiveAttack = (x, y) => {\r\n        if (board[y][x]) {\r\n            board[y][x].hit();\r\n            \r\n            let shipId = board[y][x].getId();\r\n\r\n            ships[shipId].hit();\r\n\r\n            return board[y][x];\r\n        }\r\n\r\n        board[y][x] = -1;\r\n        return board[y][x];\r\n    }\r\n\r\n    const areSunk = () => {\r\n        for (let i = 0; i < ships.length; i++) {\r\n            if (!ships[i].isSunk()) return false;\r\n        }\r\n\r\n        return true;\r\n    }\r\n\r\n    const getShips = () => ships;\r\n\r\n    return {\r\n        board,\r\n        placeShip,\r\n        receiveAttack,\r\n        areSunk,\r\n        getShips\r\n    }\r\n}\n\n//# sourceURL=webpack://battleship-game/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\r\n\r\n\r\n\r\n_DOM__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createGameboards();\r\n\r\nconst gameboardPlayer1 = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\nconst player1 = (0,_player__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\nconst gameboardPlayer2 = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\nconst player2 = (0,_player__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\ngameboardPlayer1.placeShip(2, 3, 5, 1);\r\ngameboardPlayer1.placeShip(4, 5, 4, 0);\r\ngameboardPlayer1.placeShip(6, 7, 3, 1);\r\ngameboardPlayer1.placeShip(6, 0, 2, 0);\r\ngameboardPlayer1.placeShip(1, 1, 1, 0);\r\n\r\n_DOM__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderGameboard(gameboardPlayer1, 1);\r\n\r\ngameboardPlayer2.placeShip(2, 3, 5, 0);\r\ngameboardPlayer2.placeShip(4, 5, 4, 1);\r\ngameboardPlayer2.placeShip(6, 7, 3, 0);\r\ngameboardPlayer2.placeShip(6, 0, 2, 1);\r\ngameboardPlayer2.placeShip(1, 1, 1, 1);\r\n\r\n_DOM__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderAttack(gameboardPlayer2, player2, gameboardPlayer1, player1);\n\n//# sourceURL=webpack://battleship-game/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\nfunction Player() {\r\n    const playedCoordinates = new Set();\r\n\r\n    const attack = (enemyBoard, x, y) => {\r\n        if (playedCoordinates.has(JSON.stringify([x, y]))) {\r\n            return false;\r\n        }\r\n\r\n        playedCoordinates.add(JSON.stringify([x, y]));\r\n        enemyBoard.receiveAttack(x, y);\r\n\r\n        return enemyBoard.board;\r\n    }\r\n\r\n    return {\r\n        attack,\r\n    }\r\n}\n\n//# sourceURL=webpack://battleship-game/./src/player.js?");

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