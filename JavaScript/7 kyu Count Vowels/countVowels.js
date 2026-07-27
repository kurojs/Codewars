/*
Given a string s, return the number of vowels in the string.

Vowels are a, e, i, o, and u, and they can appear in both lower and upper cases.

Examples:
countVowels("hello"); // expected result: 2
countVowels("HELLO"); // expected result: 2
countVowels("Programming"); // expected result: 3
countVowels("xyz"); // expected result: 0

Notes:
- The input string will consist of only printable ASCII characters.
- The string may be empty.
*/

// Solution

function countVowels(s) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  
  for (const char of s) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  
  return count;
}