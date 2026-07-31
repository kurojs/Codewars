/*
Write a function that returns the sum of two numbers as strings. The input numbers are strings and the function must return a string.

The input numbers are always positive numbers. The numbers can be very large (larger than Number.MAX_SAFE_INTEGER), so regular Number arithmetic won't work.

Examples:

add("123", "321")    // returns "444"
add("11", "123")     // returns "134"
add("63829983432984289347293874", "90938498237058927341592311") // returns "154768481670043216688886185"
*/

// Solution

function add(a, b) {
  let result = "";
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    const digitA = i >= 0 ? parseInt(a[i]) : 0;
    const digitB = j >= 0 ? parseInt(b[j]) : 0;
    const sum = digitA + digitB + carry;

    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);

    i--;
    j--;
  }

  return result;
}
