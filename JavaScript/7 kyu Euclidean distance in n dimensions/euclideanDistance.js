/*
Implement a function to calculate the distance between two points in n-dimensional space.
The two points will be passed to your function as arrays of the same length.

Round your answers to two decimal places.
*/

// Solution

function euclideanDistance(point1, point2) {
  let sum = 0;
  for (let i = 0; i < point1.length; i++) {
    sum += Math.pow(point2[i] - point1[i], 2);
  }
  return Math.round(Math.sqrt(sum) * 100) / 100;
}
