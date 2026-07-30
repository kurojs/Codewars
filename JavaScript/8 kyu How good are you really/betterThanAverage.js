/*
There was a test in your class and you passed it. Congratulations!

But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your classmates' points. Now calculate the average and compare your point.

If your point is higher than the average, return true, else false.

Examples:

betterThanAverage([2, 3], 5)       // returns true
betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75) // returns true
betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9) // returns false
*/

// Solution

function betterThanAverage(classPoints, yourPoints) {
  const avg = classPoints.reduce((sum, p) => sum + p, 0) / classPoints.length;

  return yourPoints > avg;
}
