/*
Write a function that takes an array of intervals and returns the sum of all the lengths of the intervals.
Overlapping intervals should only be counted once.

Intervals are represented as an array of [start, end] pairs.

Examples:

sumIntervals([[1, 5]])                         // returns 4
sumIntervals([[1, 5], [6, 10]])                // returns 8
sumIntervals([[1, 5], [1, 5]])                 // returns 4
sumIntervals([[1, 4], [7, 10], [3, 5]])        // returns 7
sumIntervals([[1, 5], [10, 20], [1, 6], [16, 19], [5, 11]]) // returns 19
*/

// Solution

function sumIntervals(intervals) {
  const sorted = intervals.sort((a, b) => a[0] - b[0]);
  let total = 0;
  let [prevStart, prevEnd] = sorted[0];

  for (let i = 1; i < sorted.length; i++) {
    const [start, end] = sorted[i];

    if (start > prevEnd) {
      total += prevEnd - prevStart;
      [prevStart, prevEnd] = [start, end];
    } else {
      prevEnd = Math.max(prevEnd, end);
    }
  }

  total += prevEnd - prevStart;
  return total;
}
