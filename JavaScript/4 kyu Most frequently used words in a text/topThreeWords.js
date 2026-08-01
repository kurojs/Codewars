/*
Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

Assumptions:
- A word is a string of letters (a to z) delimited by space or punctuation.
- Case-insensitive for counting, but words are returned in lowercase.
- A word can contain apostrophes (e.g. "can't", "don't") but punctuation other than apostrophes does not count as part of a word.
- The words can be separated by any amount of whitespace.
- If the text contains less than 3 unique words, then the top-2 or top-1 words should be returned.
- If a word is a single apostrophe or has apostrophes only as leading/trailing characters, it is NOT a word.

Examples:

topThree("a a a  b  c c  d d d d  e e e e e")          // returns ["e", "d", "a"]
topThree("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e") // returns ["e", "ddd", "aa"]
topThree("  //wont won't won't ")                        // returns ["won't", "wont"]
*/

// Solution

function topThreeWords(text) {
  const matches = text.toLowerCase().match(/[a-z']+/g) || [];
  const freq = {};

  for (const word of matches) {
    if (/^'+$/.test(word)) continue;
    freq[word] = (freq[word] || 0) + 1;
  }

  return Object.keys(freq)
    .sort((a, b) => freq[b] - freq[a])
    .slice(0, 3);
}
