/*
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.
Example:

h = 0
m = 1
s = 1

result = 61000

Input constraints:

    0 <= h <= 23
    0 <= m <= 59
    0 <= s <= 59
*/

// Solution

export function past(h: number, m: number, s: number): number {
  const hoursInMilliseconds = h * 3600000;
  const minutesInMilliseconds = m * 60000;
  const secondsInMilliseconds = s * 1000;

  const totalMilliseconds =
    hoursInMilliseconds + minutesInMilliseconds + secondsInMilliseconds;

  return totalMilliseconds;
}
