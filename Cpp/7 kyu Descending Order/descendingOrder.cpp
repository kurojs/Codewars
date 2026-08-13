/*
Your task is to make a function that can take any non-negative integer as an argument
and return it with its digits in descending order. Essentially, rearrange the digits
to create the highest possible number.

Examples:
descendingOrder(42145) -> 54421
descendingOrder(145263) -> 654321
descendingOrder(123456789) -> 987654321
*/

// Solution

#include <string>
#include <algorithm>

long long descendingOrder(long long n) {
  std::string digits = std::to_string(n);
  std::sort(digits.rbegin(), digits.rend());
  return std::stoll(digits);
}
