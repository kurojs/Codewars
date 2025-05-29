/*
The magic sum of 3s is calculated on an array by summing up odd numbers which include the digit 3.

Complete the function which accepts an array of integers and returns its magic sum of 3s.

Example: [3, 12, 5, 8, 30, 13] results in 16 (3 + 13)

If there is no such number in the array, 0 should be returned.
*/

// My solution

function magicSum(numbers) {
  let total = 0;

  if (numbers.length === 0) return 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0 && numbers[i].toString().includes("3")) {
      total += numbers[i];
    }
  }
  return total;
}
