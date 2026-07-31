/*
Consider a sequence u where u is defined as follows:

The number u(0) = 1 is the first one in u.
For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
There are no other numbers in u.

Given a number n, the function dblLinear returns the member u(n) of the ordered sequence (with no duplicates).

Small reminder of the properties of the sequence: u is ordered and each value occurs only once.

Example:

u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

dblLinear(10)  // returns 22
dblLinear(20)  // returns 57
dblLinear(30)  // returns 91
dblLinear(50)  // returns 175
*/

// Solution

function dblLinear(n) {
  const u = [1];
  let i = 0;
  let j = 0;

  while (u.length <= n) {
    const y = 2 * u[i] + 1;
    const z = 3 * u[j] + 1;

    if (y < z) {
      u.push(y);
      i++;
    } else if (y > z) {
      u.push(z);
      j++;
    } else {
      u.push(y);
      i++;
      j++;
    }
  }

  return u[n];
}
