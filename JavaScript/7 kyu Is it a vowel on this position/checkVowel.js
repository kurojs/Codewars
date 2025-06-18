/*
Check if it is a vowel(a, e, i, o, u,) on the n position in a string (the first argument). Don't forget about uppercase.

A few cases:

{
checkVowel('cat', 1)  ->   true // 'a' is a vowel
checkVowel('cat', 0)  ->   false // 'c' is not a vowel
checkVowel('cat', 4)  ->   false // this position doesn't exist
}

P.S. If n < 0, return false 
*/

// Solution

function checkVowel(string, position) {
  let vowels = "aeiouAEIOU";
  let str = string.split("");

  for (let i = 0; i < str.length; i++) {
    if (i === position) {
      return vowels.includes(str[i]);
    }
  }

  return false;
}

// Extra

function checkVowel(string, position) {
  const vowels = "aeiouAEIOU";
  return (
    position >= 0 &&
    position < string.length &&
    vowels.includes(string[position])
  );
}
