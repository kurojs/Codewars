// Given a varying number of integer arguments, return the digits that are not present in any of them.

// Example:

// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"

// Note: the digits in the resulting string should be sorted.

// My solution
function unusedDigits(...numbers) {
    const allDigits = '0123456789';
    const found = new Set();
  
    for (let num of numbers) {
      for (let digit of num.toString()) {
        found.add(digit);
      }
    }
  
    let result = '';
    for (let digit of allDigits) {
      if (!found.has(digit)) {
        result += digit;
      }
    }
  
    return result;
  }
    