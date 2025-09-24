/*
Task

The function is given a string with lower-case characters.
Split the string into as many non-empty substrings as possible, such that each character
appears in only one substring. Return the list of lengths of the resulting substrings.
Examples

"abbccc" ➞ [1, 2, 3]
# "a", "bb", "ccc"

"abbacdceef" ➞ [4, 3, 2, 1]
# "abba", "cdc", "ee", "f"

"abacded" ➞ [3, 1, 3]
# "aba", "c", "ded"

"abcdea" ➞ [6]
# "abcdea" because first letter is equal to the last letter.
*/

// Solution

function splitString(string) {
  let result = [];
  let i = 0;

  while (i < string.length) {
    let start = i;
    let end = string.lastIndexOf(string[i]);

    for (let j = start; j < end; j++) {
      end = Math.max(end, string.lastIndexOf(string[j]));
    }

    result.push(end - start + 1);
    i = end + 1;
  }

  return result;
}
