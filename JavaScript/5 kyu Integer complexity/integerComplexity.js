/*
Integer complexity is the smallest number of 1s you need to make a certain positive number, 
using only addition and multiplication. Because we typically use infix notation for math expressions, 
grouping with parenthesis is also allowed.

Your goal is for a given positive integer to compute its integer complexity.

Your program will be tested against inputs up to 200 000. 
Even relatively fast solutions may time out occasionally. 
If your solution times out and it's close to finishing, try again.

Examples:

1 -> 1    1
2 -> 2    1 + 1
3 -> 3    1 + 1 + 1
6 -> 5    (1 + 1 + 1) * (1 + 1)
8 -> 6    (1 + 1) * (1 + 1) * (1 + 1)
*/

// Solution

const MEMO = {};
const integerComplexity = (IC = (N) => {
  if (N in MEMO) return MEMO[N];

  let result = N;
  for (let i = 2; i * i <= N; i++) {
    result = Math.min(result, IC(N % i) + IC(i) + IC((N / i) ^ 0));
  }

  return (MEMO[N] = result);
});
