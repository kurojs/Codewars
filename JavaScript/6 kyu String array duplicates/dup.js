/*
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

    dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

    dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck!
*/

// My solution

function dup(s) {
  const result = [];

  for (let i = 0; i < s.length; i++) {
    let str = s[i];

    let newStr = str[0];
    for (let j = 1; j < str.length; j++) {
      if (str[j] !== str[j - 1]) {
        newStr += str[j];
      }
    }

    result.push(newStr);
  }
  return result;
}
