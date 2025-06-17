/*
In this Kata, you will be given a string and two indexes (a and b).
Your task is to reverse the portion of that string between those two indices inclusive.

str = "codewars", a = 1, b = 5 --> "cawedors"
str = "cODEWArs", a = 1, b = 5 --> "cAWEDOrs"

Input will be lowercase and uppercase letters only.

The first index a will always be smaller than the string length;
the second index b can be greater than the string length. More examples in the test cases. Good luck!
*/

// Solution

function solve(st, a, b) {
  let firstPart = st.slice(0, a);
  let secondPart = st.slice(b + 1);
  let middlePArt = st
    .slice(a, b + 1)
    .split("")
    .reverse()
    .join("");
  return firstPart + middlePArt + secondPart;
}
