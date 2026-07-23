/*
Write a function that takes an integer as input and returns the number of bits in its binary representation.

Examples:

countBits(0)  // returns 0
countBits(4)  // returns 1
countBits(7)  // returns 3
countBits(9)  // returns 2
countBits(10) // returns 2

Note: the solution is expected to be a one-liner.
*/

// Solution

const countBits = (n) => n.toString(2).split("0").join("").length;
