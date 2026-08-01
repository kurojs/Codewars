/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:

descendingOrder(42145)    // returns 54421
descendingOrder(145263)   // returns 654321
descendingOrder(123456789) // returns 987654321
*/

// Solution

function descendingOrder(n) {
  return parseInt(n.toString().split("").sort((a, b) => b - a).join(""));
}
