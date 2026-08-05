/*
In this little assignment you are given a string of space separated numbers,
and have to return the highest and lowest number.

Examples:
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes:
- All numbers are valid Int32, no need to validate them.
- There will always be at least one number in the input string.
- Output string must be two numbers separated by a single space, and highest number is first.
*/

// Solution

#include <string>
#include <sstream>
#include <climits>

std::string highAndLow(const std::string& numbers) {
  std::istringstream iss(numbers);
  int num;
  int min = INT_MAX;
  int max = INT_MIN;

  while (iss >> num) {
    if (num < min) min = num;
    if (num > max) max = num;
  }

  return std::to_string(max) + " " + std::to_string(min);
}
