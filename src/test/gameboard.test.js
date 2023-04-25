import Gameboard from "../gameboard";

describe('Gameboard functions', () => {
    let gameboard;

    beforeEach(() => {
      gameboard = Gameboard();  
    });

    it('Create a 10x10 board', () => {
        let length = 0;

        for (let i = 0; i < gameboard.board.length; i++) {
            for (let j = 0; j < gameboard.board.length; j++) {
                length++
            }
        }

        expect(length).toBe(100);
    });

    it('Place a ship correctly', () => {
        let x = 2;
        let y = 6;
        let shipLength = 4;

        let placed = 0;

        const board = gameboard.placeShip(x, y, shipLength, 1);

        for (let i = 0; i < shipLength; i++) {
            if (board[y][x]) {
                placed++;
            }
            x++;
        }

        expect(placed).toBe(shipLength);
    });

    it('Attack ship', () => {
        const ship = gameboard.receiveAttack(3, 2);

        if (ship === -1) {
            expect(ship).toBe(-1);
        } else {
            expect(ship.getHitNumber()).toBe(1);
        }

    });

    it('All ships are sunk', () => {
        gameboard.placeShip(2, 6, 1, 1);
        gameboard.placeShip(5, 2, 1, 1);
        gameboard.receiveAttack(2, 6);
        gameboard.receiveAttack(5, 2);

        expect(gameboard.areSunk()).toBe(true);
    });

    it('Some ships are not sunk', () => {
        gameboard.placeShip(7, 1, 2, 1);

        expect(gameboard.areSunk()).toBe(false);
    });

    it('Ship cannot overlap', () => {
        gameboard.placeShip(2, 4, 5, 1);
        let board = gameboard.placeShip(3, 0, 5, 0);

        expect(board).toBe(false);
    });
});