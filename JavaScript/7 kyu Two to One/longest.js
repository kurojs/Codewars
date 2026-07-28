/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string,
the longest possible, containing distinct letters — each taken only once — from s1 and s2.

Examples:

longest("xyaabbbccccdefww", "xxxxyyyyabklmopq") // returns "abcdefklmopqwxy"
longest("aretheyhere", "yestheyarehere")          // returns "aehrsty"
*/

// Solution

function longest(s1, s2) {
  const combined = s1 + s2;
  const unique = [...new Set(combined)];

  return unique.sort().join("");
}
