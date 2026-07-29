/*
Given an array of integers, find the smallest integer.

Examples:

findSmallestInt([34, 15, 88, 2])       // returns 2
findSmallestInt([34, -345, -1, 100])    // returns -345
*/

// Solution

function findSmallestInt(arr) {
  return Math.min(...arr);
}
