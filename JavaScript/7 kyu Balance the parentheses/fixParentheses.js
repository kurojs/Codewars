/*
Your job is to fix the parentheses so that all opening and closing parentheses (brackets)
have matching counterparts. You will do this by appending parenthesis to the beginning or 
end of the string. The result should be of minimum length. Don't add unnecessary parenthesis.

The input will be a string of varying length, only containing '(' and/or ')'.

For example:

Input: ")("
Output: "()()"

Input: "))))(()("
Output: "(((())))(()())"

Enjoy!
*/

// Solution

const fixParentheses = (str) => {
  let openNeeded = 0,
    balance = 0;
  for (let ch of str) {
    if (ch === "(") {
      balance++;
    } else {
      if (balance === 0) openNeeded++;
      else balance--;
    }
  }
  return "(".repeat(openNeeded) + str + ")".repeat(balance);
};
