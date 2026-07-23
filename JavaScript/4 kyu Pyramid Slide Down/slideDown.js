/*
By starting at the top of the triangle below and moving to adjacent numbers on the row below,
the maximum total from top to bottom is 23.

       3
      7 4
     2 4 6
    8 5 9 3

That is, 3 + 7 + 4 + 9 = 23.

Find the maximum total from top to bottom of the triangle.

Example:

[[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]] // returns 23

You can only move to adjacent numbers on the row below. This means you can only move to
the number directly below or diagonally below-left or below-right of your current position.
*/

// Solution

function slideDown(triangle) {
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      triangle[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }

  return triangle[0][0];
}
