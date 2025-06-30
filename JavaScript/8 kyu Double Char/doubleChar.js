/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
Examples (Input -> Output):

* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

Good Luck!
*/

// Solution

function doubleChar(str) {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    result.push(str[i], str[i]);
  }

  return result.join("");
}

// Extra solution using map
/*
function doubleChar(str) {
  return str
    .split("")
    .map(char => char + char)
    .join("");
}
*/
