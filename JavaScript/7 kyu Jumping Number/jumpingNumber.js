/*
Definition

Jumping number is the number that All adjacent digits in it differ by 1.
Task

Given a number, Find if it is Jumping or not . 
*/

// Solution

function jumpingNumber(n) {
  let s = n.toString();
  for (let i = 0; i < s.length - 1; i++) {
    if (Math.abs(Number(s[i]) - Number(s[i + 1])) !== 1) {
      return "Not!!";
    }
  }
  return "Jumping!!";
}
