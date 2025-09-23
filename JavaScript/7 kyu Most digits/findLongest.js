/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

// Solution

function findLongest(array) {
  return array.reduce((a, b) =>
    a.toString().length >= b.toString().length ? a : b,
  );
}
