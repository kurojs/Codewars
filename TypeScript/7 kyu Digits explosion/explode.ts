/*
Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
Examples

"312" should return "333122"

"102269" should return "12222666666999999999"
*/

// Solution

export function explode(s: string): string {
  for (let i = 0; i < s.length; i++) {
    const digit = parseInt(s[i], 10);
    s = s.slice(0, i) + s[i].repeat(digit) + s.slice(i + 1);
    i += digit - 1;
  }

  return s;
}
