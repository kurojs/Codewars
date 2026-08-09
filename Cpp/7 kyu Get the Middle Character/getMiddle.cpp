/*
You are going to be given a word. Your job is to return the middle character
of the word. If the word's length is odd, return the middle character.
If the word's length is even, return the middle 2 characters.

Examples:
getMiddle("test") should return "es"
getMiddle("testing") should return "t"
getMiddle("middle") should return "dd"
getMiddle("A") should return "A"
*/

// Solution

#include <string>

std::string getMiddle(const std::string& s) {
  if (s.length() % 2 == 0) {
    return s.substr(s.length() / 2 - 1, 2);
  } else {
    return s.substr(s.length() / 2, 1);
  }
}
