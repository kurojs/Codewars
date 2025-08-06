/*
In this kata you must take an input string, reverse the order of the words,
and reverse the order of the letters within the words.

But, as a bonus, every test input will end with a punctuation mark (! ? .)
and the output should be returned with the mark at the end.

A few examples should help clarify:

esrever("hello world.") == "dlrow olleh."

esrever("Much l33t?") == "t33l hcuM?"

esrever("tacocat!") == "tacocat!"

Quick Note: A string will always be passed in (though it may be empty)
so no need for error-checking other types.
*/

// Solution

function esrever(str) {
  const punctuation = str.slice(-1);
  const noPunctuationStr = str.slice(0, -1);

  const words = noPunctuationStr.split(" ");
  const reversedWords = words.reverse();

  const reversedLetters = reversedWords.map((word) =>
    word.split("").reverse().join(""),
  );

  const result = reversedLetters.join(" ") + punctuation;

  return result;
}
