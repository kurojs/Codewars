/*
The function accum takes a string that includes only letters from a..z, uppercase or lowercase, and returns a new string where each character is repeated based on its position: first character once, second character twice, etc., with the first occurrence of each character being uppercase and the rest lowercase. Groups are separated by hyphens.

Examples:

accum("abcd")    // returns "A-Bb-Ccc-Dddd"
accum("RqaEzty") // returns "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt")    // returns "C-Ww-Aaa-Tttt"
*/

// Solution

function accum(str) {
  return str
    .split("")
    .map((char, i) => char.toUpperCase() + char.toLowerCase().repeat(i))
    .join("-");
}
