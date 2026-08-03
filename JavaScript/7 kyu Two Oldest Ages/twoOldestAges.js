/*
The two oldest ages function needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

Examples:

twoOldestAges([1, 2, 10, 8])    // returns [8, 10]
twoOldestAges([1, 5, 87, 45, 8, 8]) // returns [45, 87]
twoOldestAges([10, 10, 5])       // returns [10, 10]
*/

// Solution

function twoOldestAges(ages) {
  return ages.sort((a, b) => a - b).slice(-2);
}
