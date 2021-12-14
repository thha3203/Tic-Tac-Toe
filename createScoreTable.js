const createScoreTable = () => {
  var tableContainer = document.createElement('div');
  tableContainer.className = 'tableContainer';

  var tableX = document.createElement('div');
  tableX.className = 'tableX';
  tableX.innerHTML = 'Player X';
  var tableXScore = document.createElement('div');
  tableXScore.className = 'tableXScore';
  tableXScore.innerHTML = '0';
  tableX.appendChild(tableXScore);


  var tableO = document.createElement('div');
  tableO.className = 'tableO';
  tableO.innerHTML = 'Player O';
  var tableOScore = document.createElement('div');
  tableOScore.className = 'tableOScore';
  tableOScore.innerHTML = '0';
  tableO.appendChild(tableOScore);


  tableContainer.appendChild(tableX);
  tableContainer.appendChild(tableO);
  return tableContainer;
}

export default createScoreTable;