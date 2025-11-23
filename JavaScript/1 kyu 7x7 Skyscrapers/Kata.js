/*
In a grid of 7 by 7 squares you want to place a skyscraper in each square with only some clues:

    The height of the skyscrapers is between 1 and 7
    No two skyscrapers in a row or column may have the same number of floors
    A clue is the number of skyscrapers that you can see in a row or column from the outside
    Higher skyscrapers block the view of lower skyscrapers located behind them

Can you write a program that can solve this puzzle in time?

This kata is based on 4 By 4 Skyscrapers and 6 By 6 Skyscrapers by FrankK.
By now, examples should be superfluous; you should really solve Frank's kata first,
and then probably optimise some more. A naive solution that solved a 4×4 puzzle within 12 seconds might
need time somewhere beyond the Heat Death of the Universe for this size. It's quite bad.
Task

Create

function solvePuzzle(clues)

Clues are passed in as an Array(28) of integers.
The return value is an Array(7) of Array(7) of integers.

All puzzles have one possible solution.
All this is the same as with the earlier kata.

Caveat: The tests for this kata have been tailored to run in ~10 seconds with the JavaScript reference solution. 
You'll need to do better than that! Please note the performance tag.

Conceptis Puzzles have heaps of these puzzles, from 4×4 up to 7×7 and unsolvable within
CodeWars time constraints. Old puzzles from there were used for the tests. 
They also have lots of other logic, numbers and mathematical puzzles, and their puzzle user 
interface is generally nice, very nice.

*/

// Solution

function solvePuzzle(clues) {
  const SIZE = 7;
  const ALL_VALUES = [1, 2, 3, 4, 5, 6, 7];

  const top = clues.slice(0, SIZE);
  const right = clues.slice(SIZE, SIZE * 2);
  const bottom = clues.slice(SIZE * 2, SIZE * 3).reverse();
  const left = clues.slice(SIZE * 3, SIZE * 4).reverse();

  const permCache = new Map();

  const countVisible = (arr) => {
    let count = 0,
      max = 0;
    for (let i = 0; i < SIZE; i++) {
      if (arr[i] > max) {
        count++;
        max = arr[i];
      }
    }
    return count;
  };

  const getValidPermutations = (leftClue, rightClue) => {
    const key = `${leftClue}-${rightClue}`;
    if (permCache.has(key)) return permCache.get(key);

    const result = [];
    const permute = (arr, used) => {
      if (arr.length === SIZE) {
        if (
          (!leftClue || countVisible(arr) === leftClue) &&
          (!rightClue || countVisible(arr.slice().reverse()) === rightClue)
        ) {
          result.push([...arr]);
        }
        return;
      }

      for (let i = 0; i < SIZE; i++) {
        if (!used[i]) {
          arr.push(ALL_VALUES[i]);
          used[i] = true;
          permute(arr, used);
          arr.pop();
          used[i] = false;
        }
      }
    };

    permute([], Array(SIZE).fill(false));
    permCache.set(key, result);
    return result;
  };

  const rowPerms = Array(SIZE)
    .fill(0)
    .map((_, i) => getValidPermutations(left[i], right[i]));
  const colPerms = Array(SIZE)
    .fill(0)
    .map((_, i) => getValidPermutations(top[i], bottom[i]));

  const grid = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));

  const rowValid = rowPerms.map((perms) => Array(perms.length).fill(true));
  const colValid = colPerms.map((perms) => Array(perms.length).fill(true));

  const filterPerms = () => {
    let changed = true;
    let iterations = 0;

    while (changed && iterations++ < 50) {
      changed = false;

      for (let row = 0; row < SIZE; row++) {
        for (let pi = 0; pi < rowPerms[row].length; pi++) {
          if (!rowValid[row][pi]) continue;

          const perm = rowPerms[row][pi];
          let valid = true;

          for (let col = 0; col < SIZE; col++) {
            if (grid[row][col] !== 0 && grid[row][col] !== perm[col]) {
              valid = false;
              break;
            }
          }

          if (valid) {
            for (let col = 0; col < SIZE; col++) {
              let found = false;
              for (let cpi = 0; cpi < colPerms[col].length; cpi++) {
                if (
                  colValid[col][cpi] &&
                  colPerms[col][cpi][row] === perm[col]
                ) {
                  found = true;
                  break;
                }
              }
              if (!found) {
                valid = false;
                break;
              }
            }
          }

          if (!valid && rowValid[row][pi]) {
            rowValid[row][pi] = false;
            changed = true;
          }
        }
      }

      for (let col = 0; col < SIZE; col++) {
        for (let pi = 0; pi < colPerms[col].length; pi++) {
          if (!colValid[col][pi]) continue;

          const perm = colPerms[col][pi];
          let valid = true;

          for (let row = 0; row < SIZE; row++) {
            if (grid[row][col] !== 0 && grid[row][col] !== perm[row]) {
              valid = false;
              break;
            }
          }

          if (valid) {
            for (let row = 0; row < SIZE; row++) {
              let found = false;
              for (let rpi = 0; rpi < rowPerms[row].length; rpi++) {
                if (
                  rowValid[row][rpi] &&
                  rowPerms[row][rpi][col] === perm[row]
                ) {
                  found = true;
                  break;
                }
              }
              if (!found) {
                valid = false;
                break;
              }
            }
          }

          if (!valid && colValid[col][pi]) {
            colValid[col][pi] = false;
            changed = true;
          }
        }
      }

      for (let row = 0; row < SIZE; row++) {
        for (let col = 0; col < SIZE; col++) {
          if (grid[row][col] !== 0) continue;

          const possVals = new Set();
          for (let pi = 0; pi < rowPerms[row].length; pi++) {
            if (rowValid[row][pi]) {
              possVals.add(rowPerms[row][pi][col]);
            }
          }

          if (possVals.size === 1) {
            grid[row][col] = [...possVals][0];
            changed = true;
          } else if (possVals.size === 0) {
            return false;
          }
        }
      }
    }

    return true;
  };

  const solve = () => {
    if (!filterPerms()) return false;

    let minSize = SIZE + 1,
      bestRow = -1,
      bestCol = -1;
    for (let row = 0; row < SIZE; row++) {
      for (let col = 0; col < SIZE; col++) {
        if (grid[row][col] === 0) {
          const possVals = new Set();
          for (let pi = 0; pi < rowPerms[row].length; pi++) {
            if (rowValid[row][pi]) {
              possVals.add(rowPerms[row][pi][col]);
            }
          }
          if (possVals.size < minSize) {
            minSize = possVals.size;
            bestRow = row;
            bestCol = col;
          }
        }
      }
    }

    if (bestRow === -1) return true;
    if (minSize === 0) return false;

    const possVals = new Set();
    for (let pi = 0; pi < rowPerms[bestRow].length; pi++) {
      if (rowValid[bestRow][pi]) {
        possVals.add(rowPerms[bestRow][pi][bestCol]);
      }
    }

    for (let val of possVals) {
      const savedGrid = grid.map((r) => [...r]);
      const savedRowValid = rowValid.map((v) => [...v]);
      const savedColValid = colValid.map((v) => [...v]);

      grid[bestRow][bestCol] = val;

      if (solve()) return true;

      for (let i = 0; i < SIZE; i++) {
        grid[i] = savedGrid[i];
        rowValid[i] = savedRowValid[i];
        colValid[i] = savedColValid[i];
      }
    }

    return false;
  };

  solve();
  return grid;
}
