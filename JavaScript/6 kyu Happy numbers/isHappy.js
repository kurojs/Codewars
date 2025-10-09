/*
A happy number is a number defined by the following process: starting with any positive integer, replace the number by
the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay),
or it loops endlessly in a cycle which does not include 1.

Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers
(or sad numbers) (Wikipedia).

Write a function that takes n as parameter and return true if and only if n is an happy number, false otherwise.
*/

// Solution

function isHappy(n) {
  const seen = new Set();

  while (n !== 1) {
    const digits = String(n).split("").map(Number);
    n = digits.reduce((sum, digit) => sum + digit ** 2, 0);

    if (seen.has(n)) {
      return false;
    }

    seen.add(n);
  }

  return true;
}
