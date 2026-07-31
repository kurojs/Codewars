/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

splitStrings("abc")    // returns ["ab", "c_"]
splitStrings("abcdef") // returns ["ab", "cd", "ef"]
splitStrings("")       // returns []
*/

// Solution

function splitStrings(str) {
  const result = [];

  for (let i = 0; i < str.length; i += 2) {
    result.push(str[i] + (str[i + 1] || "_"));
  }

  return result;
}
