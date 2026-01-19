/*
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.
Examples

"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/

// Solution

function cleanString(s) {
  const result = [];

  for (const char of s) {
    if (char !== "#") {
      result.push(char);
    } else if (result.length > 0) {
      result.pop();
    }
  }
  return result.join("");
}
