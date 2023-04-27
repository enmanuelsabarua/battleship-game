export default function Player() {
    const playedCoordinates = new Set();

    const attack = (enemyBoard, x, y) => {
        if (playedCoordinates.has(JSON.stringify([x, y]))) {
            return false;
        }

        playedCoordinates.add(JSON.stringify([x, y]));
        enemyBoard.receiveAttack(x, y);

        return enemyBoard.board;
    }

    return {
        attack,
    }
}