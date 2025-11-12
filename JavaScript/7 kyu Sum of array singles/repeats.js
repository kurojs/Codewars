/*
In this Kata, you will be given an array of numbers in which two numbers occur once and 
the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, 
and their sum is 15. Every other number occurs twice.

More examples in the test cases.

Good luck!
*/

// Solution

function repeats(arr) {
  let sum = 0;
  let counts = {};

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (counts[num]) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }
  }

  for (let num in counts) {
    if (counts[num] === 1) {
      sum += Number(num);
    }
  }

  return sum;
}
