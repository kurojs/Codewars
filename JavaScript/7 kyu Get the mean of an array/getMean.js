/*
Create a function that takes an array of numbers and returns the mean (average) of those numbers.

If the array is empty, return 0.

Examples:

getMean([1, 2, 3])      // returns 2
getMean([1, 2, 3, 4])   // returns 2.5
getMean([4, 1, 2, 3])   // returns 2.5
getMean([])              // returns 0
*/

// Solution

function getMean(arr) {
  if (arr.length === 0) return 0;

  return arr.reduce((sum, n) => sum + n, 0) / arr.length;
}
