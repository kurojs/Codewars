// In this Kata, you will be given two strings a and b and your task will be to return
// the characters that are not common in the two strings.

// For example:

// solve("xyab","xzca") = "ybzc"
// --The first string has 'yb' which is not in the second string.
// --The second string has 'zc' which is not in the first string.

// Notice also that you return the characters from the first string concatenated with those from the second string.

// More examples in the tests cases.

// Good luck!

function solve(a, b) {
  const splitA = a.split("");
  const splitB = b.split("");
  let result = [];

  for (let i = 0; i < splitA.length; i++) {
    if (!splitB.includes(splitA[i])) {
      result.push(splitA[i]);
    }
  }

  for (let j = 0; j < splitB.length; j++) {
    if (!splitA.includes(splitB[j])) {
      result.push(splitB[j]);
    }
  }

  return result.join("");
}
