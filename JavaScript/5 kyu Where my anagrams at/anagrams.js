/*
Write a function that will find all the anagrams of a word from a list. You will be given two inputs: a word and an array with words. You should return an array of all the anagrams or an empty array if there are none.

Examples:

anagrams("abba", ["aabb", "abcd", "bbaa", "dada"])   // returns ["aabb", "bbaa"]
anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]) // returns ["carer", "racer"]
anagrams("laser", ["lazing", "lazy", "lacer"])        // returns []
*/

// Solution

function anagrams(word, words) {
  const sorted = (w) => w.split("").sort().join("");

  return words.filter((w) => sorted(w) === sorted(word));
}
