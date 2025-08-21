/*
Objective

Given a number n we will define it's sXORe to be 0 XOR 1 XOR 2 ... XOR n where XOR is the bitwise XOR operator.

Write a function that takes n and returns it's sXORe.
Examples
n 	sXORe n
0 	0
1 	1
50 	51
1000000 	1000000
*/

// Solution

function sxore(n) {
  if (n % 4 === 0) {
    return n;
  }
  return n % 4 === 1 ? 1 : n % 4 === 2 ? n + 1 : 0;
}
