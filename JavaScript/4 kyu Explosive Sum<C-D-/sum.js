// Function to calculate the number of ways to make the sum of a number
// From Wikipedia: https://en.wikipedia.org/wiki/Partition_(number_theory)
// In number theory and combinatorics, a partition of a positive integer n, also called an integer partition,
// is a way of writing n as a sum of positive integers. Two sums that differ only in the order of their summands
// are considered the same partition. If order matters, the sum becomes a composition.
// For example, 4 can be partitioned in five distinct ways:
// 4, 3 + 1, 2 + 2, 2 + 1 + 1, 1 + 1 + 1 + 1

// Examples:
// sum(1) // 1
// sum(2) // 2  -> 1+1 , 2
// sum(3) // 3 -> 1+1+1, 1+2, 3
// sum(4) // 5 -> 1+1+1+1, 1+1+2, 1+3, 2+2, 4
// sum(5) // 7 -> 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3
// sum(10) // 42

// Explosive cases:
// sum(50) // 204226
// sum(80) // 15796476
// sum(100) // 190569292

// Solution

function sum(num) {
  const dp = Array(num + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= num; i++) {
    for (let j = i; j <= num; j++) {
      dp[j] += dp[j - i];
    }
  }

  return dp[num];
}
