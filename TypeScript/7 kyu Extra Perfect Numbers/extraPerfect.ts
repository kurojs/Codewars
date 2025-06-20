/*
Definition

An extra perfect number is a positive integer whose first and last bits
in binary representation are set (i.e., both are 1).
Task

Given a positive integer N, return all the extra perfect numbers in the
range from 1 to N, inclusive.
*/

// Solution

export function extraPerfect(n: number) {
  const result: number[] = [];

  for (let i = 1; i <= n; i += 2) {
    result.push(i);
  }

  return result;
}
