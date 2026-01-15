/*
Assignment:

Write a function named sum which performs addition in the way shown below:

sum(4)(5)(9)(); // => 18
sum(5)();       // => 5
sum();          // => 0

NOTE: Pay attention that the last brackets are left empty to indicate the end of operations.
*/

// Solution

function sum(n) {
  if (n === undefined) return 0;

  let total = n;

  function add(next) {
    if (next === undefined) return total;
    total += next;
    return add;
  }

  return add;
}
