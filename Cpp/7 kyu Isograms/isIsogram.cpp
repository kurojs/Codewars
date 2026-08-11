/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive.

Implement a function that determines whether a string that contains only letters
is an isogram. Assume the empty string is an isogram. Ignore letter case.

Examples:
isIsogram("Dermatoglyphics") -> true
isIsogram("aba") -> false
isIsogram("moOse") -> false (ignore letter case)
*/

// Solution

#include <string>
#include <unordered_set>
#include <cctype>

bool isIsogram(const std::string& str) {
  std::unordered_set<char> seen;
  for (char c : str) {
    char lower = std::tolower(c);
    if (seen.count(lower)) {
      return false;
    }
    seen.insert(lower);
  }
  return true;
}
