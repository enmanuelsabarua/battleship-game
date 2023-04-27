import Ship from "./ship.js"

export default function Gameboard() {
    let board = [];
    const ships = [];
    let id = 0;

    for (let i = 0; i < 10; i++) {
        board[i] = [];
    }

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            board[i][j] = 0;
        }
    }

    const placeShip = (x, y, shipLength, place) => {
        if (place === 1) {
            let positionX = x;
            for (let i = 0; i < shipLength; i++) {
                if (x + shipLength > 10) return false;
                if (board[y][positionX] != 0) {
                    return false
                }

                board[y][positionX] = Ship(id, shipLength, 0, false);
                positionX++;
            }
            
            ships.push(Ship(id, shipLength, 0, false));
            
            id++;
            return board;
        }
        
        let positionY = y;
        for (let i = 0; i < shipLength; i++) {
            if (y + shipLength > 10) return false;
            if (board[positionY][x] != 0) {
                return false
            }

            board[positionY][x] = Ship(id, shipLength, 0, false);
            positionY++;
        }

        ships.push(Ship(id, shipLength, 0, false));

        id++;
        return board;
    }

    const receiveAttack = (x, y) => {
        if (board[y][x]) {
            board[y][x].hit();
            
            let shipId = board[y][x].getId();

            ships[shipId].hit();

            return board[y][x];
        }

        board[y][x] = -1;
        return board[y][x];
    }

    const areSunk = () => {
        for (let i = 0; i < ships.length; i++) {
            if (!ships[i].isSunk()) return false;
        }

        return true;
    }

    const getShips = () => ships;

    return {
        board,
        placeShip,
        receiveAttack,
        areSunk,
        getShips
    }
}