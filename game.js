let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let Symbols = ['o', 'x'];
let n = 100;
let contador1 = 0;
let contador2 = 0;
const pontos = 1;
let gameOver = false;
let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

var input = document.querySelector("#name1");

var texto = input.value;

console.log(texto);


function handleMove(position) {

    if (gameOver) {
        return;
    }
    if (board[position] == '') {
        board[position] = Symbols[playerTime];

        gameOver = isWin();

        if (gameOver == false) {

            if (playerTime == 0) {
                playerTime = 1
            } else {
                playerTime = 0;
            }
        }
    }
    return gameOver
}

function isWin() {
  

    for (i = 0; i < winStates.length; i++) {
        let seq = winStates[i];
        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (board[pos1] == board[pos2] && board[pos1] == board[pos3] &&
            board[pos1] != '') {
            return true;
        }

    }
    return false;
}