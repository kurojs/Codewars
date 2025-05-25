/*
This is a follow up to my kata the old switcheroo.

Write a function that takes in a string and replaces all the letters with their respective positions in the English alphabet; e.g. 'a' is 1, 'z' is 26. The function should be case-insensitive.

'abc'      --> '123'
'ABC'      --> '123'
'codewars' --> '315452311819'
'abc-#@5'  --> '123-#@5'
*/

// My solution

function encode(str) {
  const splitstr = str.split("");
  for (let i = 0; i < splitstr.length; i++) {
    if (splitstr[i].match(/[a-z]/i)) {
      splitstr[i] = (splitstr[i].toLowerCase().charCodeAt(0) - 96).toString();
    }
  }
  return splitstr.join("");
}
