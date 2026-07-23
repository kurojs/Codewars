/*
Write a function that will check if the string str contains all of the letters in the string perm,
in any order, but no more than once. Don't worry about duplicate letters in perm.

Return true if the string str contains all of the letters in perm, false otherwise.

Example:

scramble('rkqodlw', 'world')   // returns true
scramble('cedewaraaossoqqyt', 'codewars') // returns true
scramble('katas', 'steak')    // returns false
scramble('scriptjavx', 'javascript') // returns false
scramble('scriptingjava', 'javascript') // returns true
*/

// Solution

function scramble(str, perm) {
  const freq = {};

  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (const char of perm) {
    if (!freq[char] || freq[char] === 0) return false;
    freq[char]--;
  }

  return true;
}
