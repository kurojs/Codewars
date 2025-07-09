/**
 * Create a factory function genfib that returns a function fib
 * that always returns the next Fibonacci number on each invocation.
 * (It should return 0 when being called the first time).
 *
 * Example:
 *
 * const fib = genfib();
 * fib(); // returns 0
 * fib(); // returns 1
 * fib(); // returns 1
 * fib(); // returns 2
 */

// Solution

function genfib() {
  let a = 0;
  let b = 1;

  return function fib() {
    const current = a;
    const next = a + b;
    a = b;
    b = next;
    return current;
  };
}
