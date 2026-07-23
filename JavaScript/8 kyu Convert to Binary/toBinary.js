/*
Create a function that takes a number and returns a binary string of that number's binary representation.

The input will always be a non-negative integer.

Examples:

toBinary(1)  // returns "1"
toBinary(2)  // returns "10"
toBinary(7)  // returns "111"
toBinary(10) // returns "1010"
toBinary(0)  // returns "0"
*/

// Solution

function toBinary(n) {
  return n.toString(2);
}
