/*
Write a program that will calculate the number of trailing zeros in a factorial of a given number.

Your task is to compute the number of trailing zeros in n!.

Examples:

zeros(6)   // returns 1 (6! = 720, one trailing zero)
zeros(12)  // returns 2 (12! = 479001600, two trailing zeros)
zeros(30)  // returns 7 (30! = 265252859812191058636308480000000, seven trailing zeros)
*/

// Solution

function zeros(n) {
  let count = 0;

  while (n >= 5) {
    n = Math.floor(n / 5);
    count += n;
  }

  return count;
}
