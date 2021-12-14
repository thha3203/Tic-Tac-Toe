import createBoard from './createBoard.js';
import createScoreTable from './createScoreTable.js';

// Win Combinations
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Selector
const app = document.querySelector('#app');

// Create Board
var newBoard = createBoard();
var scoreBoard = createScoreTable();

// Reset Button
var resetButton = document.createElement('button');
resetButton.className = 'reset';
resetButton.innerText = 'RESET';

// Winning Message
var winMessage = document.createElement('div');
winMessage.className = 'message';
winMessage.appendChild(resetButton);

// Append Board
app.appendChild(winMessage);
app.appendChild(scoreBoard);
app.appendChild(newBoard);

// Players State
var playerCircle = false;
var playCounter = 0;
var player = {
  X: 0,
  O: 0
};

// Event Handlers
const handleReset = (event) => {
  winMessage.classList.remove('winner');
  squares.forEach( square => {
    square.className = 'square';
    square.innerHTML = '';
  });
  if (winMessage.childNodes.length > 1) {
    winMessage.removeChild(winMessage.childNodes[0]);
  }
  playCounter = 0;
};

const handleClick = (event) => {
  var curSquare = document.querySelector('#' + event.target.id);
  var curPlayer = playerCircle ? 'O' : 'X';
  if (!curSquare.innerHTML) {
    addTic(curSquare, curPlayer);
    swapTurn();
    playCounter++;
  }
  if (checkWin(curPlayer)) {
    winMessage.prepend(document.createTextNode(`${curPlayer} Wins!`));
    player[curPlayer]++;
    renderScore();
    winMessage.classList.add('winner');
    if (curPlayer === 'O') {
      playerCircle = true;
    } else {
      playerCircle = false;
    }
  } else if (playCounter > 8){
    if (checkDraw()) {
      winMessage.prepend(document.createTextNode(`DRAWS!`));
      winMessage.classList.add('winner');
      playerCircle = false;
    }
  }
};

// Add Event Listeners
const squares = document.querySelectorAll('.square');
(document.querySelector('.reset')).addEventListener('click', handleReset);
squares.forEach( square => {
  square.addEventListener('click', handleClick);
});

// Helper Functions
const addTic = (curSquare, curTic) => {
  curSquare.classList.add(curTic);
  curSquare.innerHTML = curTic;
};

const swapTurn = () => {
  playerCircle = !playerCircle;
};

const checkWin = (curPlayer) => {
  return winCombos.some( combo => {
    return combo.every( index => {
      return squares[index].classList.contains(curPlayer);
    });
  });
};

const checkDraw = () => {
  return [...squares].every(square => {
    return square.classList.contains('X') || square.classList.contains('O');
  })
}

const renderScore = () => {
  (document.querySelector('.tableXScore')).innerHTML = player.X;
  (document.querySelector('.tableOScore')).innerHTML = player.O;
}