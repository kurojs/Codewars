/*
Write a function that returns a string of alternating 1s and 0s, 
with the first character being a "1".

The function receives an integer n and returns a string of length n.

Example:
stringy(3); // expected result: "101"
stringy(5); // expected result: "10101"
stringy(12); // expected result: "101010101010"

Notes:
- The input n will always be a positive integer.
- The function should always start with a 1.
*/

// Solution

function stringy(size) {
  let result = "";
  for (let i = 1; i <= size; i++) {
    result += i % 2 === 1 ? "1" : "0";
  }
  return result;
}