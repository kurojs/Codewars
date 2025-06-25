/*
You get a text and have to shift the vowels by n positions to the right. 
(Negative value for n should shift to the left.)

Position means the vowel's position if taken as one item in a list of all vowels within the string.

A shift by 1 would mean, that every vowel shifts to the place of the next vowel.

Shifting over the edges of the text should continue at the other edge.

Vowels are "aeiou" / "AEIOU".

If text is null or empty, then simply return back the original text.
Example:

text = "This is a test!"
n = 1
output = "Thes is i tast!"

text = "This is a test!"
n = 3
output = "This as e tist!"

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
*/

// Solution

export function vowelShift(text: string | null, n: number): string | null {
  if (!text || text.length === 0) {
    return text;
  }

  const vowels = "aeiouAEIOU";
  const chars = text.split("");
  const vowelPositions: number[] = [];
  const vowelChars: string[] = [];

  chars.forEach((char, i) => {
    if (vowels.includes(char)) {
      vowelPositions.push(i);
      vowelChars.push(char);
    }
  });

  const len = vowelChars.length;
  if (len === 0) {
    return text;
  }

  const shift = ((n % len) + len) % len;

  const shifted = vowelChars.slice(-shift).concat(vowelChars.slice(0, -shift));

  vowelPositions.forEach((pos, i) => {
    chars[pos] = shifted[i];
  });

  return chars.join("");
}
