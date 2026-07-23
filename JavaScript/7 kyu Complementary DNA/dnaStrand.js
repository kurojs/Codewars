/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string), except for the complementary function. You must return the other complementary side. DNA case is never the same.

For example, if your function receives the string "ATTGC" it should return "TAACG".

Example:

dnaStrand("ATTGC") // returns "TAACG"
dnaStrand("GTAT")  // returns "CATA"
*/

// Solution

function dnaStrand(dna) {
  const complement = { A: "T", T: "A", C: "G", G: "C" };

  return dna
    .split("")
    .map((base) => complement[base])
    .join("");
}
