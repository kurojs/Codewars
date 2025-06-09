/*
Wilson primes satisfy the following condition. Let PPP represent a prime number.

Then,
(P−1)!+1P∗P\displaystyle\frac{(P-1)! + 1}{P * P}P∗P(P−1)!+1​

should give a whole number, where P!P!P! is the factorial of PPP.

Your task is to create a function that returns true if the given number is a Wilson prime and false otherwise.
*/

// My solution

bool amIWilson(unsigned n) {
  return n == 5 || n == 13 || n == 563;
}
