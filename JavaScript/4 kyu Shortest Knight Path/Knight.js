/*
Given two different positions on a chess board, find the least number of moves it would take a knight to get from one to the other. 
The positions will be passed as two arguments in algebraic notation. For example, knight("a3", "b5") should return 1.

The knight is not allowed to move off the board. The board is 8x8.

For information on knight moves, see https://en.wikipedia.org/wiki/Knight_%28chess%29

For information on algebraic notation, see https://en.wikipedia.org/wiki/Algebraic_notation_%28chess%29

(Warning: many of the tests were generated randomly. If any do not work, the test cases will return the input, output, and expected output; please post them.)
*/

// My solution

function knight(start, finish) {
  const toCoords = (pos) => [
    pos.charCodeAt(0) - "a".charCodeAt(0),
    parseInt(pos[1]) - 1,
  ];

  const [sx, sy] = toCoords(start);
  const [fx, fy] = toCoords(finish);

  if (sx === fx && sy === fy) return 0;

  const moves = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];

  const visited = Array.from({ length: 8 }, () => Array(8).fill(false));
  const queue = [[sx, sy, 0]];
  visited[sx][sy] = true;

  while (queue.length) {
    const [x, y, steps] = queue.shift();

    for (const [dx, dy] of moves) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx === fx && ny === fy) return steps + 1;

      if (nx >= 0 && ny >= 0 && nx < 8 && ny < 8 && !visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.push([nx, ny, steps + 1]);
      }
    }
  }

  return -1;
}
