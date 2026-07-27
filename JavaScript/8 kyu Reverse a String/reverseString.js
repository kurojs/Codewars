/*
Write a function that reverses a string. The input string is given as an array of characters s.

Example:
reverseString(["h","e","l","l","o"]); // expected result: ["o","l","l","e","h"]
reverseString(["H","a","n","n","a","h"]); // expected result: ["h","a","n","n","a","H"]

Notes:
- You must do this in-place without O(n) extra space.
- 1 <= s.length <= 10^5
- s[i] is a printable ascii character.
*/

// Solution

function reverseString(s) {
  let left = 0;
  let right = s.length - 1;
  
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  
  return s;
}