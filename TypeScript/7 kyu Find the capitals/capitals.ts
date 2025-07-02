/*
Instructions

Write a function that takes a single non-empty string of only lowercase and uppercase
ascii letters (word) as its argument, and returns an ordered list containing the indices
of all capital (uppercase) letters in the string.
Example (Input --> Output)

"CodEWaRs" --> [0,3,4,6]
*/

// Solution

export function capitals(word: string): number[] {
  const result: number[] = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      result.push(i);
    }
  }
  return result;
}

/*
// Extra solution using filter and map
export function capitals(word: string): number[] {
  return [...word].map((char, index) => (char === char.toUpperCase() ? index : -1)).filter(index => index !== -1);
*/
