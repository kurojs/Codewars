/*
In this kata you have to create all permutations of an input string and remove duplicates if present.
This means you have to shuffle all letters from the input in all possible orders.

Examples:

permutations("a")   // returns ["a"]
permutations("ab")  // returns ["ab", "ba"]
permutations("abc") // returns ["abc", "acb", "bac", "bca", "cab", "cba"]
permutations("aabb") // returns ["aabb", "abab", "abba", "baab", "baba", "bbaa"]
*/

// Solution

function permutations(str) {
  if (str.length === 1) return [str];

  const result = new Set();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const remaining = str.slice(0, i) + str.slice(i + 1);

    for (const perm of permutations(remaining)) {
      result.add(char + perm);
    }
  }

  return [...result];
}
