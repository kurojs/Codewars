/*
Task:

Your goal is to create a function dative() (Dative() in C#) which returns the valid form of a valid Hungarian word w in dative case i. e. append the correct suffix nek or nak to the word w based on vowel harmony rules.
Vowel Harmony Rules (simplified)

When the last vowel in the word is

    a front vowel (e, é, i, í, ö, ő, ü, ű) the suffix is -nek
    a back vowel (a, á, o, ó, u, ú) the suffix is -nak

Examples:

dative("ablak") == "ablaknak"
dative("szék") == "széknek"
dative("otthon") == "otthonnak"

Preconditions:

    To keep it simple: All words end with a consonant :)
    All strings are unicode strings.
    There are no grammatical exceptions in the tests.
*/

// Solution

function dative(word) {
  const frontVowels = "eéiíöőüű";
  const backVowels = "aáoóuú";

  for (let i = word.length - 1; i >= 0; i--) {
    const ch = word[i];
    if (frontVowels.includes(ch)) {
      return word + "nek";
    }
    if (backVowels.includes(ch)) {
      return word + "nak";
    }
  }

  return word;
}
