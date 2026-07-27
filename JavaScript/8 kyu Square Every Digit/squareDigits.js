/*
Square every digit of a number and concatenate them.

The function receives an integer and should return an integer.

Example:
squareDigits(9119); // expected result: 811181 (because 9^2=81, 1^2=1, 1^2=1, 9^2=81)
squareDigits(765); // expected result: 493625

Notes:
- The input will always be a valid integer.
- The output will always be a valid integer.
- If the result is 0, the output should be 0 (not "0").
*/

// Solution

function squareDigits(num) {
  return parseInt(
    String(num)
      .split("")
      .map((digit) => Math.pow(parseInt(digit), 2))
      .join("")
  );
}