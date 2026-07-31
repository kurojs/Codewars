/*
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

Examples:

summation(2)  // returns 3   (1 + 2)
summation(8)  // returns 36  (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
summation(15) // returns 120 (1 + 2 + ... + 15)
*/

// Solution

function summation(num) {
  return (num * (num + 1)) / 2;
}
