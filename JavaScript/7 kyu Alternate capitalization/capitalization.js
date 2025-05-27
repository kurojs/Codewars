/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try: 
*/

// My solution

function capitalize(s) {
  const even = s.split("");
  const odd = s.split("");

  for (let i = 0; i < even.length; i++) {
    if (i % 2 === 0) {
      even[i] = even[i].toUpperCase();
    }
  }

  for (let j = 0; j < odd.length; j++) {
    if (j % 2 === 1) {
      odd[j] = odd[j].toUpperCase();
    }
  }

  return [even.join(""), odd.join("")];
}
