import DOMinteraction from "./DOM";
import Gameboard from "./gameboard";
import Player from "./player";

DOMinteraction.createGameboards();

const gameboardPlayer1 = Gameboard();
const player1 = Player();
const gameboardPlayer2 = Gameboard();
const player2 = Player();

gameboardPlayer1.placeShip(2, 3, 5, 1);
gameboardPlayer1.placeShip(4, 5, 4, 0);
gameboardPlayer1.placeShip(6, 7, 3, 1);
gameboardPlayer1.placeShip(6, 0, 2, 0);
gameboardPlayer1.placeShip(1, 1, 1, 0);

DOMinteraction.renderGameboard(gameboardPlayer1, 1);

gameboardPlayer2.placeShip(2, 3, 5, 0);
gameboardPlayer2.placeShip(4, 5, 4, 1);
gameboardPlayer2.placeShip(6, 7, 3, 0);
gameboardPlayer2.placeShip(6, 0, 2, 1);
gameboardPlayer2.placeShip(1, 1, 1, 1);

DOMinteraction.renderAttack(gameboardPlayer2, player2, gameboardPlayer1, player1);