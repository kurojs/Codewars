/*
Define a method named countCharOccurrences or count_char_occurrences that accepts a string
and a char as inputs and returns the number of times the char occurs in the string as an int.
*/

// Solution

interface Count {
	static int countCharOccurrences(String s, char c) {
  int count = 0;
  for (int i = 0; i < s.length(); i++) {
    if (s.charAt(i) == c) {
      count++;
    }
  }
  return count;
  }
}
