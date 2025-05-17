/* You are given two strings. In a single move, you can choose any of them, and delete the first (i.e. leftmost)
 * character.

For Example:

    By applying a move to the string "where", the result is the string "here".
    By applying a move to the string "a", the result is an empty string "".

Implement a function that calculates the minimum number of moves that should be performed to make the given strings equal.
Notes

    Both strings consist of lowercase latin letters.
    If the string is already empty, you cannot perform any more delete operations.
*/

// My solution

function shiftLeft(s, t) {
  let count = 0;
  for (let i = s.length - 1, j = t.length - 1; i >= 0 && j >= 0; i--, j--) {
    if (s[i] === t[j]) {
      count++;
    } else {
      break;
    }
  }

  return s.length - count + (t.length - count);
}
