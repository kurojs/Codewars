/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and returns a new string with all vowels (a, e, i, o, u) removed.

Note: for this kata, y is not considered a vowel.

Examples:

disemvowel("This website is for losers LOL!") // returns "Ths wbst s fr lsrs LL!"
disemvowel("No offense but,\nYour writing is among the worst I've ever read") // returns "N ffns bt,\nYr wrtng s mng th wrst 'v r rd"
*/

// Solution

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}
