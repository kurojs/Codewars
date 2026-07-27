/*
Given an array nums containing n distinct numbers in the range [0, n], 
return the only number in the range that is missing from the array.

Example:
findMissingNumber([3,0,1]); // expected result: 2
findMissingNumber([0,1]); // expected result: 2
findMissingNumber([9,6,4,2,3,5,7,0,1]); // expected result: 8

Notes:
- n == nums.length
- 0 <= n <= 10^5
- All the numbers of nums are unique.
*/

// Solution

function findMissingNumber(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}