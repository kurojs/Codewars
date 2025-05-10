// The main idea is to count all the occurring characters in a string.
// If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// My solution

function count(string) {
  let countChar = {};

  for (let ch of string) {
    if (countChar[ch]) {
      countChar[ch] += 1;
    } else {
      countChar[ch] = 1;
    }
  }

  return countChar;
}
