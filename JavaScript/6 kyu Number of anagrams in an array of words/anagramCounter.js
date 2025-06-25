/*
  An anagram is a word, a phrase, or a sentence formed from another by rearranging its letters.
  An example of this is "angel", which is an anagram of "glean".

  Write a function that receives an array of words, and returns the total number of 
  distinct pairs of anagramic words inside it.

  Some examples:

    There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
    There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]
*/

// Solution:

function anagramCounter(words) {
  const map = {};

  for (const word of words) {
    const key = word.split("").sort().join("");
    map[key] = (map[key] || 0) + 1;
  }

  let total = 0;

  for (const count of Object.values(map)) {
    if (count > 1) {
      total += (count * (count - 1)) / 2;
    }
  }

  return total;
}
