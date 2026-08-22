/*
Given a non-negative integer n, write a function summation that returns
the summation of all its numbers up to n (inclusive).

Example:
summation(1) // 1
summation(8) // 36 (1+2+3+4+5+6+7+8)
*/

// Solution

int summation(int n) {
  return n * (n + 1) / 2;
}
