/*
You are given two positive integers a and b (a < b <= 20000). 
Complete the function which returns a list of all those numbers in the interval [a, b)
whose digits are made up of prime numbers (2, 3, 5, 7) but which are not primes themselves.

Be careful about your timing!

Good luck :)
*/

// My solution

function notPrimes(a, b) {
  const primeDigits = new Set([2, 3, 5, 7]);

  function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i * i <= n; i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  }

  const result = [];

  for (let i = a; i < b; i++) {
    const digits = String(i).split("").map(Number);
    if (digits.every((digit) => primeDigits.has(digit)) && !isPrime(i)) {
      result.push(i);
    }
  }

  return result;
}
