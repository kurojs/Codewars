/*
Define a function mul(a, b) that takes two non-negative integers a and b and returns their product.

You should only use the + and/or - operators. Using * is cheating!

You can do this iteratively or recursively.
*/

// My solution

function mul(a, b) {
  let result = 0;

  for (let i = 0; i < b; i++) {
    result += a;
  }
  return result;
}
