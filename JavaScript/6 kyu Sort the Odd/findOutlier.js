/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers.
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single
integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples:

[2, 4, 0, 100, 4, 11, 2602, 3] // returns 11 (the only odd number)
[160, 3, 1966, 20, 26, 13, 2]  // returns 160 (the only even number)
*/

// Solution

function findOutlier(integers) {
  const evens = integers.filter((n) => n % 2 === 0);
  const odds = integers.filter((n) => n % 2 !== 0);

  return evens.length === 1 ? evens[0] : odds[0];
}
