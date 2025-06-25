/*
  Write a function that returns the smallest distance between two factors of a number. 
  The input will always be a number greater than one.

  Example:

  13013 has factors: [ 1, 7, 11, 13, 77, 91, 143, 169, 1001, 1183, 1859, 13013]

  Hence the answer will be 2 (=13-11)
*/

// Solution

export function minDistance(n: number): number {
  const factors: number[] = [];

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      factors.push(i);
      if (i !== n / i) {
        factors.push(n / i);
      }
    }
  }

  factors.sort((a, b) => a - b);

  let minDiff = Infinity;
  for (let i = 1; i < factors.length; i++) {
    const diff = factors[i] - factors[i - 1];
    if (diff < minDiff) {
      minDiff = diff;
    }
  }

  return minDiff;
}
