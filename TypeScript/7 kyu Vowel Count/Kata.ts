/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

// Solution

export class Kata {
  static getCount(str: string): number {
    const vowels = ["a", "e", "i", "o", "u"];
    const strLowerCase = str.toLowerCase();
    let result = 0;

    for (let i = 0; i < strLowerCase.length; i++) {
      if (vowels.includes(strLowerCase[i])) {
        result++;
      }
    }

    return result;
  }
}
