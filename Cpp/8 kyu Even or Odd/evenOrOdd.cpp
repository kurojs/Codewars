/*
Create a function that takes an integer as an argument and returns
"Even" for even numbers or "Odd" for odd numbers.

Examples:
evenOrOdd(2) -> "Even"
evenOrOdd(7) -> "Odd"
evenOrOdd(-42) -> "Even"
*/

// Solution

std::string even_or_odd(int number) {
  return number % 2 == 0 ? "Even" : "Odd";
}
