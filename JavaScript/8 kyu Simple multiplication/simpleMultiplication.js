/*
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

Examples:

simpleMultiplication(2)  // returns 16 (2 * 8)
simpleMultiplication(1)  // returns 9  (1 * 9)
simpleMultiplication(5)  // returns 45 (5 * 9)
simpleMultiplication(10) // returns 80 (10 * 8)
*/

// Solution

function simpleMultiplication(n) {
  return n % 2 === 0 ? n * 8 : n * 9;
}
