/*
Sudoku Background:
Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.

Write a function validSolution that takes a 9x9 matrix (array of arrays) of numbers and returns true if the Sudoku solution is valid, false otherwise.

A valid solution must:
- Have all numbers in each row, column and block from 1 to 9 (no duplicates, all present).
- Not be empty.

Example of a valid solution:

[[5, 3, 4, 6, 7, 8, 9, 1, 2],
 [6, 7, 2, 1, 9, 5, 3, 4, 8],
 [1, 9, 8, 3, 4, 2, 5, 6, 7],
 [8, 5, 9, 7, 6, 1, 4, 2, 3],
 [4, 2, 6, 8, 5, 3, 7, 9, 1],
 [7, 1, 3, 9, 2, 4, 8, 5, 6],
 [9, 6, 1, 5, 3, 7, 2, 8, 4],
 [2, 8, 7, 4, 1, 9, 6, 3, 5],
 [3, 4, 5, 2, 8, 6, 1, 7, 9]]

validSolution(board) // returns true
*/

// Solution

function validSolution(board) {
  const isComplete = (group) => {
    const set = new Set(group);
    return set.size === 9 && set.has(1) && set.has(9) && !group.includes(0);
  };

  for (let i = 0; i < 9; i++) {
    if (!isComplete(board[i])) return false;
  }

  for (let col = 0; col < 9; col++) {
    const column = board.map((row) => row[col]);
    if (!isComplete(column)) return false;
  }

  for (let blockRow = 0; blockRow < 9; blockRow += 3) {
    for (let blockCol = 0; blockCol < 9; blockCol += 3) {
      const block = [];

      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          block.push(board[blockRow + i][blockCol + j]);
        }
      }

      if (!isComplete(block)) return false;
    }
  }

  return true;
}
