/*
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.

For this kata, you must convert a string to Jaden Smith style: the first letter of each word is capitalized.

Examples:

jadenCase("How can mirrors be real if our eyes aren't real") // returns "How Can Mirrors Be Real If Our Eyes Aren't Real"
jadenCase("")                                                // returns ""
*/

// Solution

function jadenCase(str) {
  if (str.length === 0) return "";

  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
