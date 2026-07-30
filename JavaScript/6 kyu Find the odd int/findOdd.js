/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples:

findOdd([7])                   // returns 7
findOdd([0])                   // returns 0
findOdd([1, 1, 2])            // returns 2
findOdd([0, 1, 0, 1, 0])      // returns 0
findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]) // returns 4
*/

// Solution

function findOdd(arr) {
  return arr.reduce((a, b) => a ^ b);
}
