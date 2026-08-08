/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this kata (but not y).

The input string will only consist of lower case letters and/or spaces.

Example:
"abracadabra" -> 5
*/

// Solution

#include <string>

int getCount(const std::string& inputStr) {
  int count = 0;
  for (char c : inputStr) {
    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
      count++;
    }
  }
  return count;
}
