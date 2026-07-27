/*
John and Mary want to travel between towns. They have a list of towns 
with distances between them. They want to find the longest distance 
they can travel that is less than or equal to the maximum distance.

Given a list of towns and distances, find the sum of distances 
of the longest route that is less than or equal to maxDist.

Example:
chooseBestSum(163, 3, [50, 55, 56, 57, 58]); // expected result: 163
chooseBestSum(163, 3, [50]); // expected result: null (not enough towns)
chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87]); // expected result: 228

Notes:
- The number of towns is between 2 and 50.
- The number of towns to visit is between 1 and the number of towns.
- The maximum distance is a positive integer.
- If no valid route exists, return null.
*/

// Solution

function chooseBestSum(maxDist, numTowns, distances) {
  let bestSum = null;
  
  function combine(start, remaining, currentSum) {
    if (remaining === 0) {
      if (currentSum <= maxDist) {
        if (bestSum === null || currentSum > bestSum) {
          bestSum = currentSum;
        }
      }
      return;
    }
    
    for (let i = start; i < distances.length; i++) {
      if (currentSum + distances[i] <= maxDist) {
        combine(i + 1, remaining - 1, currentSum + distances[i]);
      }
    }
  }
  
  combine(0, numTowns, 0);
  return bestSum;
}