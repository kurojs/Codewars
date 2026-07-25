/*
Write a function that takes a positive integer and returns the next bigger positive integer
that can be formed by rearranging its digits. If the digits can't be rearranged to form a
bigger number, return -1 (or nil in some languages).

Examples:

12      // returns 21
513     // returns 531
2017    // returns 2071
9       // returns -1
111     // returns -1
123456789 // returns 123457689
*/

// Solution

function nextBigger(n) {
  const digits = n.toString().split("");

  let i = digits.length - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i--;
  }

  if (i === -1) return -1;

  let j = digits.length - 1;
  while (digits[j] <= digits[i]) {
    j--;
  }

  [digits[i], digits[j]] = [digits[j], digits[i]];

  const left = digits.slice(0, i + 1);
  const right = digits.slice(i + 1).reverse();

  return parseInt(left.concat(right).join(""));
}
