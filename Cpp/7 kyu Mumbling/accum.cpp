/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

// Solution

#include <string>
#include <cctype>

std::string accum(const std::string& s) {
  std::string result;
  for (size_t i = 0; i < s.length(); ++i) {
    if (i > 0) result += "-";
    result += std::toupper(s[i]);
    for (size_t j = 0; j < i; ++j) {
      result += std::tolower(s[i]);
    }
  }
  return result;
}
