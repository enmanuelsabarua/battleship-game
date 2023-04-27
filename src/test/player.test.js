import Gameboard from "../gameboard";
import Player from "../player";

describe('Play the game', () => {
    let player1;
    let gameboard1;
    
    let player2;
    let gameboard2;

    beforeEach(() => {
        player1 = Player();
        gameboard1 = Gameboard()
        gameboard1.placeShip(1, 2, 5, 0);

        player2 = Player();
        gameboard2 = Gameboard();
        gameboard2.placeShip(2, 4, 4, 1);
    });

    it('Player can attack the enemy board', () => {
        expect(player2.attack(gameboard1, 5, 1)).toBe(gameboard1.board);
    });

    it('Player cannot attack same coordinate twice', () => {
        player1.attack(gameboard2, 2, 4);
        expect(player1.attack(gameboard2, 2, 4)).toBe(false);
    });
    
})