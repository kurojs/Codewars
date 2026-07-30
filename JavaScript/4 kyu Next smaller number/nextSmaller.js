/*
Write a function that takes a positive integer and returns the next smaller positive integer
that can be formed by rearranging its digits. If the digits can't be rearranged to form a
smaller number, return -1.

Examples:

nextSmaller(21)       // returns 12
nextSmaller(531)      // returns 513
nextSmaller(2071)     // returns 2017
nextSmaller(9)        // returns -1
nextSmaller(111)      // returns -1
nextSmaller(123456789) // returns -1
nextSmaller(315)       // returns 153
*/

// Solution

function nextSmaller(n) {
  const digits = n.toString().split("");

  let i = digits.length - 2;
  while (i >= 0 && digits[i] <= digits[i + 1]) {
    i--;
  }

  if (i === -1) return -1;

  let j = digits.length - 1;
  while (digits[j] >= digits[i]) {
    j--;
  }

  [digits[i], digits[j]] = [digits[j], digits[i]];

  const left = digits.slice(0, i + 1);
  const right = digits.slice(i + 1).sort((a, b) => b - a);

  const result = parseInt(left.concat(right).join(""));

  return result.toString().length === n.toString().length ? result : -1;
}
