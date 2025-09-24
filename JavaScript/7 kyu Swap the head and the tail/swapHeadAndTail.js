/*
You need to swap the head and the tail of the specified array:

the head (the first half) of array moves to the end, the tail (the second half) moves to the start. The middle element (if it exists) leaves on the same position.

Return new array.

For example:

   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
    \----/   \----/         
     head     tail 

   [ -1, 2 ]  => [ 2, -1 ] 
   [ 1, 2, -3, 4, 5, 6, -7, 8 ]   =>  [ 5, 6, -7, 8, 1, 2, -3, 4 ]  
*/

// Solution

function swapHeadAndTail(arr) {
  if (arr.length <= 1) return arr;
  let half = Math.floor(arr.length / 2);
  let head = arr.slice(0, half);
  let tail = arr.slice(-half);
  let middle = arr.length % 2 === 0 ? [] : [arr[half]];
  return tail.concat(middle, head);
}
