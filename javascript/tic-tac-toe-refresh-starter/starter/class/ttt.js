const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand('d', 'Move cursor down', this.moveThenRefresh(this.cursor.down.bind(this.cursor)));
    Screen.addCommand('e', 'Move cursor up', this.moveThenRefresh(this.cursor.up.bind(this.cursor)));
    Screen.addCommand('s', 'Move cursor left', this.moveThenRefresh(this.cursor.left.bind(this.cursor)));
    Screen.addCommand('f', 'Move cursor right', this.moveThenRefresh(this.cursor.right.bind(this.cursor)));
    Screen.addCommand('a', 'Make a move', this.moveThenRefresh(this.makeMove));



    Screen.setBackgroundColor(this.cursor.row, this.cursor.col, this.cursor.cursorColor);
    Screen.setMessage(`Player ${this.playerTurn}'s turn`);
    Screen.render();
  }

  moveThenRefresh = (func) => {
    return () => {
      Screen.setBackgroundColor(this.cursor.row, this.cursor.col, this.cursor.gridColor);
      func();
      Screen.setBackgroundColor(this.cursor.row, this.cursor.col, this.cursor.cursorColor);
      Screen.setMessage(`Player ${this.playerTurn}'s turn`);
    }
  }

  // updateTTTGrid = (r, c, player) => {
  //   this.grid[r][c] = player;
  // }

  updateScreenGrid = (r, c, player) => {
    Screen.setGrid(r, c, this.playerTurn);
  }

  swichPlayer = () => {
    if (this.playerTurn === 'O') {
      this.playerTurn = 'X';
    } else {
      this.playerTurn = 'O';
    }
  }

  processMove = () => {
    const res = TTT.checkWin(Screen.grid);
    if (res != false) {
      TTT.endGame(res);
    }
  }

  makeMove = () => {
    const r = this.cursor.row;
    const c = this.cursor.col;

    if (Screen.grid[r][c] === ' ') {
      //this.updateTTTGrid(r, c, this.playerTurn);
      this.updateScreenGrid(r, c, this.playerTurn);
      this.processMove();
      this.swichPlayer();
    }
  }

  static checkRow(arr) {
    let winner = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i+1] != arr[i]) {
        winner = false;
        break;
      }
    }
    return winner;
  }

  static checkRowsWin(grid) {
    for (let i = 0; i < grid.length; i++) {
      const winner = TTT.checkRow(grid[i]);
      if (winner != false) {
        return winner;
      }
    }
    return false;
  }

  static checkCol(grid, col) {
    const R = grid.length;
    let win = grid[0][col];
    for(let r = 0; r < R - 1; r++) {
      if (grid[r+1][col] != grid[r][col]) {
        win = false;
        break;
      }
    }
    return win;
  }
  
  static checkColsWin(grid) {
    for (let c = 0; c < grid[0].length; c++) {
      let win = TTT.checkCol(grid, c);
      if (win != false) {
        return win;
      }
    }
    return false;
  }

  static checkBackDia(grid) {
    const R = grid.length;
    const C = grid.length;

    let winner = grid[0][0];
    for (let r = 0; r < R - 1; r++) {
      if (grid[r+1][r+1] != grid[r][r]) {
        winner = false;
        break;
      }
    }
    return winner;
  }

  static checkDia(grid) {
    const R = grid.length;
    const C = grid.length;

    let winner = grid[0][C-1];
    for (let r = 0; r < R - 1; r++) {
      if (grid[r+1][C - 1 - (r+1)] != grid[r][C - 1 - r]) {
        winner = false;
        break;
      }
    }
    return winner;
  }

  static checkDiasWin(grid) {
    const diaWin = TTT.checkDia(grid);
    if (diaWin != false) {
      return diaWin;
    }
    
    const backDiaWin = TTT.checkBackDia(grid);
    if (backDiaWin != false) {
      return backDiaWin;
    }

    return false;
  }

  static checkSpace(grid) {
    const R = grid.length;
    const C = grid[0].length;

    for (let r = 0; r < R; r++) {
      for (let c = 0; c < C; c++) {
        if (grid[r][c] === ' ') {
          return true
        }
      }
    }
    return false;
  }

  static checkWin(grid) {
    const rowWin = TTT.checkRowsWin(grid);
    if (rowWin != false) {
      return rowWin;
    }

    const colWin = TTT.checkColsWin(grid);
    if (colWin != false) {
      return colWin;
    }

    const diaWin = TTT.checkDiasWin(grid);
    if (diaWin != false) {
      return diaWin;
    }

    const hasSpace = TTT.checkSpace(grid);
    if (hasSpace == false) {
      return 'T';
    }

    return false;
    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended

  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

module.exports = TTT;
