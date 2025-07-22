/*
Given an array of integers as strings and numbers, 
return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

// Solution

function sumMix(x) {
  for (let i = 0; i < x.length; i++) {
    x[i] = Number(x[i]);
  }

  return x.reduce((acc, curr) => acc + curr, 0);
}
