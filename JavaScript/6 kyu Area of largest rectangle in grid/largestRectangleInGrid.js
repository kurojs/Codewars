/*
You are given a 2D array matrix of 0s and 1s and your task is to find the area of the largest
rectangle which can be placed on top of a group of adjacent 1s.
Example input

matrix = 
[
  [1,0,1,1,1],
  [0,1,1,0,1],
  [0,1,1,0,1],
  [0,1,1,0,1],
 ]

Output

6

*/

// Solution

function largestRectangleInGrid(matrix) {
  if (!matrix.length) return 0;

  const heights = Array(matrix[0].length).fill(0);
  let maxArea = 0;

  for (const row of matrix) {
    for (let i = 0; i < row.length; i++) {
      heights[i] = row[i] === 0 ? 0 : heights[i] + 1;
    }
    maxArea = Math.max(maxArea, largestRectangleInHistogram(heights));
  }

  return maxArea;
}

function largestRectangleInHistogram(heights) {
  const stack = [];
  let maxArea = 0;
  heights.push(0);

  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
      const height = heights[stack.pop()];
      const width = stack.length ? i - stack[stack.length - 1] - 1 : i;
      maxArea = Math.max(maxArea, height * width);
    }
    stack.push(i);
  }

  heights.pop();
  return maxArea;
}
