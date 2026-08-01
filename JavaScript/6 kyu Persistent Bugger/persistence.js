/*
Write a function that takes a positive integer and returns the multiplicative persistence, which is the number of times you must multiply the digits until you reach a single digit.

Examples:

persistence(39)  // returns 3  (3 * 9 = 27, 2 * 7 = 14, 1 * 4 = 4)
persistence(999) // returns 4  (9 * 9 * 9 = 729, 7 * 2 * 9 = 126, 1 * 2 * 6 = 12, 1 * 2 = 2)
persistence(4)   // returns 0
*/

// Solution

function persistence(num) {
  let count = 0;

  while (num >= 10) {
    num = num
      .toString()
      .split("")
      .reduce((product, digit) => product * parseInt(digit), 1);
    count++;
  }

  return count;
}
