/*
Your task is to construct a building which will be a pile of n cubes.
The cube at the bottom will have a volume of n^3, the cube above it will 
have a volume of (n-1)^3, and so on until the top which will have a volume of 1^3.

You are given the total volume m of the building. Can you find the number of 
cubes n such that the volume of the building equals m?

Example:
findNb(1071225); // expected result: 45 (because 1^3 + 2^3 + ... + 45^3 = 1071225)
findNb(91716553919377); // expected result: -1 (no such n exists)

Notes:
- The input m is always a positive integer.
- If there is no such n, return -1.
*/

// Solution

function findNb(m) {
  let n = 0;
  let total = 0;
  
  while (total < m) {
    n++;
    total += Math.pow(n, 3);
  }
  
  return total === m ? n : -1;
}