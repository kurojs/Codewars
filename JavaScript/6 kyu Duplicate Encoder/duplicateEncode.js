/*
Write a function that takes a string and returns an encoded version of it.

Each character's first occurrence should be replaced with "(" and 
each character's subsequent occurrences should be replaced with ")".

The encoding is case-insensitive.

Example:
duplicateEncode("din"); // expected result: "((("
duplicateEncode("recede"); // expected result: "()()()"
duplicateEncode("Success"); // expected result: ")())())"
duplicateEncode("(( @"); // expected result: "))(("

Notes:
- The input string will only contain characters from the ASCII table.
- The string can be empty.
*/

// Solution

function duplicateEncode(word) {
  const lower = word.toLowerCase();
  const freq = {};

  for (const char of lower) {
    freq[char] = (freq[char] || 0) + 1;
  }

  return lower
    .split("")
    .map((char) => (freq[char] > 1 ? ")" : "("))
    .join("");
}
