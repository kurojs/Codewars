/*
Given an array of integers, find the contiguous subarray (containing at least one number)
which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

Example:

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) // returns 6 ([4, -1, 2, 1])
maxSubArray([1])                               // returns 1
maxSubArray([5, 4, -1, 7, 8])                  // returns 23
*/

// Solution

function maxSubArray(arr) {
  let maxSum = arr[0];
  let currentSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
