/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels
from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and returns a new
string with all vowels removed.

For example, the string "This website is for losers LOL!" would become
"Ths wbst s fr lsrs LL!".

Note: for this kata, "y" is not considered a vowel.
*/

// Solution

#include <string>

std::string disemvowel(const std::string& str) {
  std::string result;
  for (char c : str) {
    bool isVowel = (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' ||
                    c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U');
    if (!isVowel) {
      result += c;
    }
  }
  return result;
}
