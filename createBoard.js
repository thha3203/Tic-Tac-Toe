const createBoard = () => {
  var board = document.createElement('div');
  board.className = 'board';
  for (let i = 0; i < 9; i++) {
    let newSquare = document.createElement('div');
    newSquare.className = 'square';
    newSquare.id = 'square' + i;
    board.appendChild(newSquare);
  }
  return board;
}

export default createBoard;