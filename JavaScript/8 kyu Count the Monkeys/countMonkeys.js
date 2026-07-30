/*
You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, so he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

Examples:

countMonkeys(5)  // returns [1, 2, 3, 4, 5]
countMonkeys(1)  // returns [1]
countMonkeys(10) // returns [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/

// Solution

function countMonkeys(n) {
  return Array.from({ length: n }, (_, i) => i + 1);
}
