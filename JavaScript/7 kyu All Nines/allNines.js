/* 
Task

Given any positive integer x ≤ 4000, find the smallest positive integer m such that mx consists of all 9's. Return -1 if no such m exists.
Examples:

11 -> 9, because 11 * 9 == 99.

12 -> -1, because 12 is even, so no multiple of it can contain only nines.

13 -> 76923, because 13 * 76923 == 999999, and no smaller positive integer, when multiplied by 13, generates an integer containing only nines.

NOTE: Although x ≤ 4000, m can be very very LARGE. Where necessary, the way of handling big integers appropriate to the language should be used.
*/

// My solution

function allNines(x) {
  const bigX = BigInt(x);

  if (bigX % 2n === 0n || bigX % 5n === 0n) return -1n;

  let nines = 9n;
  let m = 1n;

  while (nines % bigX !== 0n) {
    nines = nines * 10n + 9n;
    m++;
  }

  return nines / bigX;
}
