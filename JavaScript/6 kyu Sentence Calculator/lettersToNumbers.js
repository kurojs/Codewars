/*
Sentence Calculator

Calculate the total score (sum of the individual character scores) of a sentence given the following score rules for each allowed group of characters:

    Lower case [a-z]: 'a'=1, 'b'=2, 'c'=3, ..., 'z'=26
    Upper case [A-Z]: 'A'=2, 'B'=4, 'C'=6, ..., 'Z'=52
    Digits [0-9] their numeric value: '0'=0, '1'=1, '2'=2, ..., '9'=9
    Other characters: 0 value

Note: input will always be a string
*/

// My solution

function lettersToNumbers(s) {
  let total = 0;
  const splitstr = s.split("");
  for (let i = 0; i < splitstr.length; i++) {
    const char = splitstr[i].toString();
    let value = char.charCodeAt(0);

    if (char >= "a" && char <= "z") {
      value = char.charCodeAt(0) - 96;
      total += value;
    } else if (char >= "A" && char <= "Z") {
      value = (char.charCodeAt(0) - 64) * 2;
      total += value;
    } else if (char >= "0" && char <= "9") {
      value = Number(char);
      total += value;
    }
  }
  return total;
}
