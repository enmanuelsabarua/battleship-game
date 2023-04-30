const DOMinteraction = (() => {
    const createGameboards = () => {
        const gameboards = document.querySelectorAll('.gameboard');
        
        gameboards.forEach(gameboard => {
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    const squareDiv = document.createElement('div');
                    squareDiv.classList.add('box');
                    squareDiv.dataset.row = i;
                    squareDiv.dataset.column = j;
                    gameboard.appendChild(squareDiv);
                }
            }
        });
    }

    const renderGameboard = (gameBoard, playerBoard) => {
        const squares = document.querySelectorAll(`.gameboard${playerBoard} .box`);

        let z = 0;
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (gameBoard.board[j][i] !== 0 && gameBoard.board[j][i] !== -1) {
                    squares[z].classList.add('selected');
                }
                z++;
            }
        }
    }

    const renderAttack = (gameBoard, computer, playerGameboard, player1) => {
        const squares2 = document.querySelectorAll(`.gameboard2 .box`);
        const winner = document.querySelector('.winner');

        squares2.forEach(square => {
            square.addEventListener('click', e => {

                if (gameBoard.areSunk()) {
                    return;
                } else if(playerGameboard.areSunk()) {
                    return;
                }

                const board = gameBoard.board[+e.target.dataset.column][+e.target.dataset.row];
                if (board !== 0 && board !== -1) {
                    square.classList.remove('selected');
                    square.classList.add('attacked');
                } else {
                    square.classList.add('missed');
                }

                player1.attack(gameBoard, +e.target.dataset.row, +e.target.dataset.column);

                if (gameBoard.areSunk()) {
                    winner.innerHTML = '<p>Player 1 Win!</p>';
                    return;
                }

                // Computer move
                setTimeout(() => {
                    let x = Math.floor(Math.random() * 10);
                    let y = Math.floor(Math.random() * 10);
                    let validMove = computer.attack(playerGameboard, x, y);
                    while (!validMove) {
                        x = Math.floor(Math.random() * 10);
                        y = Math.floor(Math.random() * 10);
                        validMove = computer.attack(playerGameboard, x, y);
                    }        
                    
                    const square1 = document.querySelectorAll('.gameboard1 .box')
                    square1.forEach(square => {
                        const player1Board = playerGameboard.board[y][x];
                        if (square.dataset.row == x && square.dataset.column == y) {
                            if (player1Board !== 0 && player1Board !== -1) {
                                square.classList.remove('selected');
                                square.classList.add('attacked');
                            } else {
                                square.classList.add('missed');
                            }
                        }
                    });
                }, 500);

                if(playerGameboard.areSunk()) {
                    winner.innerHTML = '<p>Player 2 Win!</p>';
                    return;
                }

            });            
        });
    }

    const placeShipsOnTheScreen = gameBoard => {
        let length = 5;
        
        const form = document.querySelector('.form');
        const x = document.querySelector('#x');
        const y = document.querySelector('#y');
        const placeBtn = document.querySelector('#place');
        
        const ships = document.querySelectorAll('.boat-type');
        
        const initialScreen = document.querySelector('.background');
        
        let i = 0;
        form.addEventListener('submit', e => {
            e.preventDefault();
            
            const axis = document.querySelector('input[name="axis"]:checked');
            let validPlace = gameBoard.placeShip(+x.value, +y.value, length, +axis.value);

            if (!validPlace) {
                placeBtn.classList.add('wrong-place');

                setTimeout(() => {
                    placeBtn.classList.remove('wrong-place');
                }, 2000);

                return;
            }

            
            ships[i].classList.remove('active');
            ships[i + 1].classList.add('active');
            if (i < 3) i++;
            length--;

            // If all ships are placed do this
            if (length < 1) {
                initialScreen.remove();
                renderGameboard(gameBoard, 1);
                return true;
            }
        });
    }

    return {
        createGameboards,
        renderGameboard,
        renderAttack,
        placeShipsOnTheScreen,
    }
})();

export default DOMinteraction;