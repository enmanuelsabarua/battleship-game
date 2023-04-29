import DOMinteraction from "./DOM";
import Gameboard from "./gameboard";
import Player from "./player";

DOMinteraction.createGameboards();

const gameboardPlayer1 = Gameboard();
const player1 = Player();

const gameboardPlayer2 = Gameboard();
const player2 = Player();

DOMinteraction.placeShipsOnTheScreen(gameboardPlayer1);

// Generate random computer board
for (let i = 5; i > 0; i--) {
    let validPlace = false;
    while(!validPlace) {
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        let axis = Math.floor(Math.random() * 2);
    
        validPlace = gameboardPlayer2.placeShip(x, y, i, axis);
    }
}

DOMinteraction.renderAttack(gameboardPlayer2, player2, gameboardPlayer1, player1);