/*
Write a function that takes a string and returns the first character that does not repeat anywhere in the string (case-insensitive). If every character repeats, return an empty string.

Examples:

firstNonRepeating("stress")  // returns "t"
firstNonRepeating("moonmen") // returns "e"
firstNonRepeating("abba")    // returns ""
firstNonRepeating("")        // returns ""
*/

// Solution

function firstNonRepeating(str) {
  const lower = str.toLowerCase();
  const freq = {};

  for (const char of lower) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let i = 0; i < str.length; i++) {
    if (freq[lower[i]] === 1) return str[i];
  }

  return "";
}
