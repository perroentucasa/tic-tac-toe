class TicTacToe {
  player1;
  player2;
  current;
  emptyCells;
  winner;
  playTable = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  constructor() {
    this.player1 = "x";
    this.player2 = "o";
    this.current = this.player1;
    this.emptyCells = 9;
    this.winner = null;
  }

  getCurrentPlayerSymbol() {
    return this.current === null ? this.player1 : this.current;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.playTable[rowIndex][columnIndex] != null) return;

    this.playTable[rowIndex][columnIndex] = this.current;
    this.emptyCells--;

    this.current = this.current === this.player1 ? this.player2 : this.player1;
  }

  isFinished() {
    if (this.noMoreTurns() == true || this.getWinner() != null) {
      return true;
    }
    return false;
  }

  getWinner() {
    const diagonals = [new Set(), new Set()];

    for (let i = 0; i < this.playTable.length; i++) {
      const row = new Set(this.playTable[i]);
      if (row.size === 1) {
        return row.values().next().value;
      }
      let column = new Set();
      for (let j = 0; j < this.playTable.length; j++) {
        column.add(this.playTable[j][i]);
      }
      if (column.size === 1) {
        return column.values().next().value;
      }

      diagonals[0].add(this.playTable[i][i]);
      diagonals[1].add(this.playTable[this.playTable.length - 1 - i][i]);
    }

    for (let diagonal of diagonals) {
      if (diagonal.size === 1) {
        return diagonal.values().next().value;
      }
    }

    return null;
  }

  noMoreTurns() {
    return this.emptyCells === 0 ? true : false;
  }

  isDraw() {
    return this.noMoreTurns() == true && this.getWinner() == null
      ? true
      : false;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.playTable[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
