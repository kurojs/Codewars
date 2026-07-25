/*
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task: Given a year, return the century it is in.

Examples:

1705  // returns 18
1900  // returns 19
1601  // returns 17
2000  // returns 20
*/

// Solution

function century(year) {
  return Math.ceil(year / 100);
}
