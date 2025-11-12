/*
Format any integer provided into a string with "," (commas) in the correct places.

Example:

For n = 100000 the function should return '100,000';
For n = 5678545 the function should return '5,678,545';
for n = -420902 the function should return '-420,902'.
*/

// Solution

function numberFormat(number) {
  let sign = number < 0 ? "-" : "";
  let str = Math.abs(number).toString();
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (i > 0 && (str.length - i) % 3 === 0) {
      result += ",";
    }
    result += str[i];
  }

  return sign + result;
}
