/*
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

The array will always contain letters in one case (uppercase or lowercase), and will contain at least 2 letters.

Examples:

findMissingLetter(["a", "b", "c", "d", "f"]) // returns "e"
findMissingLetter(["O", "Q", "R", "S"])       // returns "P"
*/

// Solution

function findMissingLetter(letters) {
  for (let i = 0; i < letters.length - 1; i++) {
    const curr = letters[i].charCodeAt(0);
    const next = letters[i + 1].charCodeAt(0);

    if (next - curr > 1) {
      return String.fromCharCode(curr + 1);
    }
  }
}
