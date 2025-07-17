/*
In this kata, your job is to return the two distinct highest values in a list. 
If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []
*/

// Solution

function twoHighest(arr) {
  let numericValues = arr.filter((item) => typeof item === "number");
  let uniqueValues = [...new Set(numericValues)];

  let sortedValues = uniqueValues.sort((a, b) => b - a);
  return sortedValues.slice(0, 2);
}
