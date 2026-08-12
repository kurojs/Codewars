/*
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
You have function with one side of the DNA (string, except for Haskell);
you need to get the other complementary side. DNA strand is never empty.

Example: (input --> output)
"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

// Solution

#include <string>
#include <unordered_map>

std::string DNAStrand(const std::string& dna) {
  std::unordered_map<char, char> complement = {
      {'A', 'T'}, {'T', 'A'}, {'C', 'G'}, {'G', 'C'}};
  std::string result;
  for (char base : dna) {
    result += complement[base];
  }
  return result;
}
