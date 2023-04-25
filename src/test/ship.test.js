import Ship from "../ship.js";

describe('Ship functions', () => {
    let ship1;
    let ship2;

    beforeEach(() => {
        ship1 = Ship(4, 0, false);
        ship2 = Ship(2, 0, false);
    });

    it('Accepts a hit', () => {
        ship1.hit();
        console.log(ship1.getHitNumber());
        expect(ship1.getHitNumber()).toBe(1);
    });

    it('Accepts multiple hits', () => {
        ship2.hit();
        ship2.hit();
        expect(ship2.getHitNumber()).toBe(2);
    });

    it('Shows that the boat is not sunk', () => {
        ship2.hit();
        expect(ship2.isSunk(ship2.getLength(), ship2.getHitNumber())).toBe(false);
    });

    it('Shows that the boat is  sunk', () => {
        ship1.hit();
        ship1.hit();
        ship1.hit();
        ship1.hit();
        expect(ship1.isSunk(ship1.getLength(), ship1.getHitNumber())).toBe(true);
    });
})