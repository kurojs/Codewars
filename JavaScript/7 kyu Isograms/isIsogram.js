/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive.

Implement a function that determines whether a string that contains 
only letters is an isogram. Assume the empty string is an isogram. 
Ignore letter case.

Example:
isIsogram("Dermatoglyphics"); // expected result: true
isIsogram("isogram"); // expected result: false
isIsogram("moOse"); // expected result: false (ignore letter case)
isIsogram("isIsogram"); // expected result: false

Notes:
- The input string will contain only letters (upper and lower case).
- The empty string is considered an isogram.
*/

// Solution

function isIsogram(str) {
  const lower = str.toLowerCase();
  return new Set(lower).size === lower.length;
}