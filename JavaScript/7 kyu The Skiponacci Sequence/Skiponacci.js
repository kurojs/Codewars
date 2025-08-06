/*
Your task is to generate the Fibonacci sequence to n places, 
with each alternating value as "skip". For example:

"1 skip 2 skip 5 skip 13 skip 34"

Return the result as a string

You can presume that n is always a positive integer between (and including)
1 and 64.

*/

// Solution

function skiponacci(n) {
  const fib = [1, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  const result = fib
    .map((num, index) => (index % 2 === 1 ? "skip" : num))
    .slice(0, n)
    .join(" ");
  return result;
}
