/*
Write an algorithm that takes an array and moves all of the zeros 
to the end, preserving the order of the other elements.

Example:
moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]); // expected result: [false, 1, 1, 2, 1, 3, "a", 0, 0]

Notes:
- The input array can contain any type of element.
- Zeros must preserve their relative order and be moved to the end.
- Only 0 and 0.0 should be considered as zero, not false, null, etc.
*/

// Solution

function moveZeros(arr) {
  const result = arr.filter((el) => el !== 0);
  const zeros = arr.filter((el) => el === 0);
  return result.concat(zeros);
}