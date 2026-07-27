/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

Example:
isValid("()"); // expected result: true
isValid("()[]{}"); // expected result: true
isValid("(]"); // expected result: false
isValid("([)]"); // expected result: false
isValid("{[]}"); // expected result: true

Notes:
- 1 <= s.length <= 10^4
- s consists of parentheses only '()[]{}'.
*/

// Solution

function isValid(s) {
  const stack = [];
  const map = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
  
  for (const char of s) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else {
      if (stack.pop() !== map[char]) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}