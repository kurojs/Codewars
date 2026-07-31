/*
Create a function that returns an array of numbers counting by x from 1 up to n. The result should always be multiples of x.

Examples:

countBy(1, 10) // returns [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
countBy(2, 5)  // returns [2, 4, 6, 8, 10]
countBy(3, 7)  // returns [3, 6, 9, 12, 15, 18, 21]
*/

// Solution

function countBy(x, n) {
  return Array.from({ length: n }, (_, i) => (i + 1) * x);
}
