/*
Description:

Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
Examples

"Hi!" --> "H!!"
"!Hi! Hi!" --> "!H!! H!!"
"aeiou" --> "!!!!!"
"ABCDE" --> "!BCD!"
*/ 

// Solution

function replace(string $s): string {
  return str_replace(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'], '!', $s);
}


