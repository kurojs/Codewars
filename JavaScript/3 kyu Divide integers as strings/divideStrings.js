/*
 Given positive integers a and b as strings, evaluate a / b 
 and return the quotient and the remainder as strings in the form [quotient, remainder].

    a and b can be very large (at the order of 10^150 to 10^200)
    As usual, your result should not have leading 0s
    require is disabled in JavaScript. Do it yourself ;-)
*/

// Solution

function removeLeadingZeros(s) {
  return s.replace(/^0+/, "") || "0";
}

function isGreaterOrEqual(a, b) {
  a = removeLeadingZeros(a);
  b = removeLeadingZeros(b);

  if (a.length !== b.length) return a.length > b.length;
  return a >= b;
}

function subtractStrings(a, b) {
  a = a.split("").reverse();
  b = b.padStart(a.length, "0").split("").reverse();

  let res = "";
  let carry = 0;

  for (let i = 0; i < a.length; i++) {
    let digitA = parseInt(a[i]);
    let digitB = parseInt(b[i]) + carry;

    if (digitA < digitB) {
      digitA += 10;
      carry = 1;
    } else {
      carry = 0;
    }

    res = digitA - digitB + res;
  }

  return removeLeadingZeros(res);
}

function multiplyStringByDigit(num, digit) {
  if (digit === 0) return "0";

  let carry = 0;
  let res = "";

  for (let i = num.length - 1; i >= 0; i--) {
    let prod = parseInt(num[i]) * digit + carry;
    res = (prod % 10) + res;
    carry = Math.floor(prod / 10);
  }

  if (carry > 0) res = carry + res;
  return res;
}

function divideStrings(a, b) {
  if (b === "0") throw new Error("Division by zero");
  if (a === "0") return ["0", "0"];

  let quotient = "";
  let remainder = "";

  for (let i = 0; i < a.length; i++) {
    remainder += a[i];
    remainder = removeLeadingZeros(remainder);

    let x = 0;
    let low = 0,
      high = 9;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      let product = multiplyStringByDigit(b, mid);
      if (isGreaterOrEqual(remainder, product)) {
        x = mid;
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    quotient += x;
    let toSubtract = multiplyStringByDigit(b, x);
    remainder = subtractStrings(remainder, toSubtract);
  }

  return [removeLeadingZeros(quotient), removeLeadingZeros(remainder)];
}
