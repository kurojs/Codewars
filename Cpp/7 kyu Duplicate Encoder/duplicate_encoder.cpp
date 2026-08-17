/*
The goal of this exercise is to convert a string to a new string where each character
in the new string is "(" if that character appears only once in the original string,
or ")" if that character appears more than once in the original string.
Ignore capitalization when determining if a character is a duplicate.

Examples:
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
*/

// Solution

#include <string>
#include <cctype>

std::string duplicate_encoder(const std::string& word) {
  int counts[256] = {};
  for (unsigned char c : word) {
    counts[std::tolower(c)]++;
  }
  std::string result;
  for (unsigned char c : word) {
    result += counts[std::tolower(c)] > 1 ? ')' : '(';
  }
  return result;
}
