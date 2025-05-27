/*
Complete the function that returns the color of the given square on a normal, 8x8 chess board:

chessboard
Examples

'a', 8  ==>  "white"
'b', 2  ==>  "black"
'f', 5  ==>  "white"
*/

// My solution

function mineColor(file, rank) {
  const fileNum = file.charCodeAt(0) - "a".charCodeAt(0);

  const sum = fileNum + rank;

  return sum % 2 === 0 ? "white" : "black";
}
