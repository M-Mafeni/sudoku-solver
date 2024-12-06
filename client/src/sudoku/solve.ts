type Grid = number[][];

function isSafe(grid: Grid, row: number, col: number, n: number): boolean {
  // Unique row
  for (let i = 0; i < grid[0].length; i++) {
    if (grid[row][i] === n) {
      return false;
    }
  }

  // Unique column
  for (let i = 0; i < grid.length; i++) {
    if (grid[i][col] === n) {
      return false;
    }
  }

  // Unique box
  const boxRow = Math.floor(row / 3);
  const boxCol = Math.floor(col / 3);
  const boxRowStart = boxRow * 3;
  const boxColStart = boxCol * 3;

  for (let r = boxRowStart; r < boxRowStart + 3; r++) {
    for (let c = boxColStart; c < boxColStart + 3; c++) {
      if (grid[r][c] === n) {
        return false;
      }
    }
  }

  return true;
}

function solveSudoku(grid: number[][]) {
  let row = -1;
  let col = -1;
  let isEmpty = true;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 0) {
        row = i;
        col = j;
        isEmpty = false;
        break;
      }
    }
    if (!isEmpty) {
      break;
    }
  }

  if (isEmpty) {
    return true;
  }

  for (let n = 1; n <= 9; n++) {
    if (isSafe(grid, row, col, n)) {
      grid[row][col] = n;
      if (solveSudoku(grid)) {
        return true;
      } else {
        grid[row][col] = 0;
      }
    }
  }
  return false;
}

export default function solve(grid: number[][]): number[][] {
  const gridCopy = grid.map((row) => row.map((v) => v));
  solveSudoku(gridCopy);
  return gridCopy;
}
