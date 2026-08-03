/*
Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next.

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1, 1, 3, 5, 9, 17, 31, ...]

You need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

If n === 0, return an empty array. If n < 3, return the first n elements of the signature.

Examples:

tribonacci([1, 1, 1], 10) // returns [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]
tribonacci([0, 0, 1], 10) // returns [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]
*/

// Solution

function tribonacci(signature, n) {
  if (n === 0) return [];

  const result = signature.slice(0, n);

  while (result.length < n) {
    const sum = result.slice(-3).reduce((a, b) => a + b, 0);
    result.push(sum);
  }

  return result;
}
